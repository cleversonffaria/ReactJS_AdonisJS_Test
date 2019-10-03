"use strict";
const Profile = use("App/Models/Profile");

class ProfileController {
  /**
   * Show a list of all profilees.
   * GET profile
   */
  async index({ request, response, auth }) {
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
        await Profile.create({ user_id: auth.user.id, ...data });
        return response.status(200).send({ messsage: "Perfil cadastrado!" });
      }
      return response
        .status(200)
        .send({ messsage: "Você ja possue um perfil cadastrado!" });
    } catch (error) {
      return response.status(500).send({ error: `Erro:${error.message}` });
    }
  }
  /**
   * Update profile details.
   * PUT or PATCH profilees/:id
   */
  async update({ auth, request, response }) {
    try {
      const data = request.all();
      const profile = await Profile.findBy("user_id", auth.user.id);
      if (!profile) {
        return response
          .status(200)
          .send({ messsage: "Nenhum perfil cadastrado!" });
      }
      await profile.merge(data);
      await profile.save();
      return response.status(200).send({ messsage: "Perfil editado!" });
    } catch (error) {
      return response.status(500).send({ error: `Erro:${error.message}` });
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
      await profile.delete();
      return response.status(200).send({ message: "Perfil excluido!" });
    } catch (error) {
      return response.status(500).send({ error: `Erro:${error.message}` });
    }
  }
}

module.exports = ProfileController;
