"use strict";
const Favorite = use("App/Models/Favorite");
const Database = use("Database");
class FavoriteController {
  async store({ response, auth, params }) {
    try {
      const favorite = await Favorite.create({
        user_id: auth.user.id,
        product_id: parseInt(params.id)
      });
      return favorite;
    } catch (error) {
      return response.status(401).send({ message: "Erro ao marcar como favorito" });
    }
  }
  async index({ params, response, auth }) {
    try {
      const favorite = await Favorite.query()
        .where("user_id", auth.user.id)
        .fetch();
      return favorite;
    } catch (error) {
      return response.status(401).send({ message: `Erre:${error.message}` });
    }
  }
  async destroy({ params, response, auth }) {
    const favorite = await Database.table("favorites")
      .where("product_id", params.id)
      .where("user_id", auth.user.id)
      .delete();

    if (favorite) {
      return response.status(200).send({ message: "Favorito Excluido!" });
    } else {
      return response
        .status(200)
        .send({ message: "Este produto não existe como seu favorito!" });
    }
  }
}

module.exports = FavoriteController;
