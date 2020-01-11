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
        return response.status(401).send({
          message: "Não existe perfil cadastrado para esse usuário!",
          err: "info"
        });
      }
      return profile;
    } else {
      return response.status(403).send({
        message: "Acesso não autorizado para esse usuário!",
        err: "warning"
      });
    }
  }
  async index({ response, auth }) {
    const profile = await Profile.findBy("user_id", auth.user.id);
    if (!profile) {
      return response.status(401).send({
        message: "Não existe perfil cadastrado para esse usuário!",
        err: "info"
      });
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
          if (img.error().type === "extname") {
            return response.status(404).send({
              message: "Somente os formatos (png, jpg, jpeg) são aceitos.",
              err: "info"
            });
          } else if (img.error().type === "size") {
            return response.status(404).send({
              message: "O tamanho da imagem deve ser inferior a 5 MB",
              err: "warning"
            });
          }
          return response.status(404).send({
            message: "Ocorreu algum erro ao enviar a imagem do produto",
            err: "danger"
          });
        }

        await Profile.create({
          image: img.fileName,
          user_id: auth.user.id,
          status: true,
          ...data
        });
        return response.status(200).send({
          message: "Perfil cadastrado!",
          img: img.fileName,
          err: "success"
        });
      }
      return response.status(404).send({
        message: "Esse usuário já possui perfil cadastrado!",
        err: "info"
      });
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao criar esse perfil.`,
        err: "danger",
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
            .send({ message: "Nenhum perfil cadastrado!", err: "info" });
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
          return response
            .status(200)
            .send({ message: "Perfil editado!", err: "success" });
        }
        // DELETAR
        const fs = Helpers.promisify(require("fs"));
        const image = Helpers.tmpPath(`uploads/${profile.image}`);
        await fs.unlink(image);

        await img.move(Helpers.tmpPath("uploads"), {
          name: `${new Date().getTime()}-${img.clientName}`
        });
        if (img.error()[0]) {
          if (img.error().type === "extname") {
            return response.status(404).send({
              message: "Somente os formatos (png, jpg, jpeg) são aceitos.",
              err: "info"
            });
          } else if (img.error().type === "size") {
            return response.status(404).send({
              message: "O tamanho da imagem deve ser inferior a 5 MB",
              err: "warning"
            });
          }
          return response.status(404).send({
            message: "Ocorreu algum erro ao enviar a imagem do profile",
            err: "danger"
          });
        }
        await profile.merge({
          image: img.fileName,
          ...data
        });
        await profile.save();
        return response
          .status(200)
          .send({ message: "Perfil editado!", err: "success" });
      } catch (error) {
        return response.status(500).send({
          message: `Ocorreu algum erro ao editar esse perfil.`,
          err: "danger",
          error: `Erro:${error.message}`
        });
      }
    } else {
      return response.status(403).send({
        message: `Usuário não autorizado.`,
        err: "danger"
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
          .send({ message: "Nenhum registro localizado", err: "danger" });
      }
      const fs = Helpers.promisify(require("fs"));
      const img = Helpers.tmpPath(`uploads/${profile.image}`);
      await fs.unlink(img);

      await profile.delete();
      return response
        .status(200)
        .send({ message: "Perfil excluido!", err: "success" });
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao deletar esse perfil.`,
        error: `Erro:${error.message}`,
        err: "danger"
      });
    }
  }
}

module.exports = ProfileController;
