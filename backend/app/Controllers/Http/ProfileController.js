"use strict";
const Profile = use("App/Models/Profile");
const Helpers = use("Helpers");

class ProfileController {
  /**
   * Show a list of all profilees.
   * GET profile
   */
  async profile({ response, auth, params }) {
    if (auth.user.user_status === 1 || auth.user.user_status === 2) {
      const profile = await Profile.findBy("user_id", params.id);
      if (!profile) {
        return response
          .status(401)
          .send({ message: "Não existe perfil cadastrado para esse usuário!" });
      }
      return profile;
    } else {
      return response
        .status(403)
        .send({ message: "Acesso não autorizado para esse usuário!" });
    }
  }
  async index({ response, auth }) {
    const profile = await Profile.findBy("user_id", auth.user.id);
    if (!profile) {
      return response
        .status(401)
        .send({ message: "Não existe perfil cadastrado para esse usuário!" });
    }
    return profile;
  }
  /**
   * Create/save a new profile.
   * POST profilees
   */
  async store({ request, response, auth }) {
    try {
      const data = request.all();
      const profile = await Profile.findBy("user_id", auth.user.id);

      if (!profile) {
        const img = request.file("img", {
          types: ["image"],
          size: "5mb",
          extnames: ["png", "jpg", "jpeg"]
        });
        await img.move(Helpers.tmpPath("uploads"), {
          name: `${new Date().getTime()}-${img.clientName}`
        });
        if (img.error()[0]) {
          if (img.error()[0].type === "extname") {
            return response.status(404).send({
              message: "Somente os formatos (png, jpg, jpeg) são aceitos."
            });
          } else if (img.error()[0].type === "size") {
            return response.status(404).send({
              message: "O tamanho da imagem deve ser inferior a 5 MB"
            });
          }
          return response.status(404).send({
            message: "Ocorreu algum erro ao enviar a imagem do produto"
          });
        }

        await Profile.create({
          image: img.fileName,
          user_id: auth.user.id,
          status: true,
          ...data
        });
        return response.status(200).send({ message: "Perfil cadastrado!" });
      }
      return response
        .status(200)
        .send({ message: "esse usuário já possui perfil cadastrado!" });
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao criar esse perfil.`,
        error: `Erro:${error.message}`
      });
    }
  }
  /**
   * Update profile details.
   * PUT or PATCH profilees/:id
   */
  async update({ auth, request, response, params }) {
    if (
      auth.user.user_status === 1 ||
      auth.user.user_status === 2 ||
      auth.user.id === params.id
    ) {
      try {
        const data = request.all();
        const profile = await Profile.findBy("user_id", params.id);
        if (!profile) {
          return response
            .status(200)
            .send({ message: "Nenhum perfil cadastrado!" });
        }
        // UPLOAD
        const img = request.file("img", {
          types: ["image"],
          size: "5mb",
          extnames: ["png", "jpg", "jpeg"]
        });
        if (!img) {
          await profile.merge({
            ...data
          });
          await profile.save();
          return response.status(200).send({ message: "Perfil editado!" });
        }
        // DELETAR
        const fs = Helpers.promisify(require("fs"));
        const image = Helpers.tmpPath(`uploads/${profile.image}`);
        await fs.unlink(image);

        await img.move(Helpers.tmpPath("uploads"), {
          name: `${new Date().getTime()}-${img.clientName}`
        });
        if (img.error()[0]) {
          if (img.error()[0].type === "extname") {
            return response.status(404).send({
              message: "Somente os formatos (png, jpg, jpeg) são aceitos."
            });
          } else if (img.error()[0].type === "size") {
            return response.status(404).send({
              message: "O tamanho da imagem deve ser inferior a 5 MB"
            });
          }
          return response.status(404).send({
            message: "Ocorreu algum erro ao enviar a imagem do produto"
          });
        }
        await profile.merge({
          image: img.fileName,
          ...data
        });
        await profile.save();
        return response.status(200).send({ message: "Perfil editado!" });
      } catch (error) {
        return response.status(500).send({
          message: `Ocorreu algum erro ao editar esse perfil.`,
          error: `Erro:${error.message}`
        });
      }
    } else {
      return response.status(403).send({
        message: `Usuário não autorizado.`
      });
    }
  }
  /**
   * Delete a profile with id.
   * DELETE profile/:id
   */
  async destroy({ auth, request, response }) {
    try {
      const profile = await Profile.findBy("user_id", auth.user.id);
      if (!profile) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado" });
      }
      const fs = Helpers.promisify(require("fs"));
      const img = Helpers.tmpPath(`uploads/${profile.image}`);
      await fs.unlink(img);

      await profile.delete();
      return response.status(200).send({ message: "Perfil excluido!" });
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao deletar esse perfil.`,
        error: `Erro:${error.message}`
      });
    }
  }
}

module.exports = ProfileController;
