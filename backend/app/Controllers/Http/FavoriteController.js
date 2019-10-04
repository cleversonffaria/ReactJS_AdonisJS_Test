"use strict";
const Favorite = use("App/Models/Favorite");

class FavoriteController {
  async store({ response, auth, params }) {
    try {
      const favorite = await Favorite.create({
        user_id: auth.user.id,
        product_id: parseInt(params.id)
      });
      return favorite;
    } catch (error) {
      return response.status(401).send({ message: `Erro:${error.message}` });
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
    const favorite = await Favorite.findBy("user_id", auth.user.id);

    await favorite.delete();
  }
}

module.exports = FavoriteController;
