"use strict";
const Favorite = use("App/Models/Favorite");
const Product = use("App/Models/Product");
const Database = use("Database");
class FavoriteController {
  async store({ response, auth, params }) {
    try {
      const product = await Product.findBy("id", params.id);
      if (!product) {
        return response.status(401).send({
          message:
            "Não é possivel adicionar como favorito, produto indisponivel!"
        });
      }
      const favorite = await Favorite.create({
        user_id: auth.user.id,
        product_id: parseInt(params.id)
      });
      return response
        .status(200)
        .send({ message: "Produto adicionado aos favoritos!" });
    } catch (error) {
      return response.status(401).send({
        message: "Erro ao adicionar aos favorito.",
        error: `Erro:${error.message}`
      });
    }
  }
  async index({ response, auth }) {
    try {
      const favorite = await Database.table("favorites").where(
        "user_id",
        auth.user.id
      );
      if (!favorite[0]) {
        return response.status(401).send({ message: "Não há favoritos" });
      }
      return favorite;
    } catch (error) {
      return response.status(401).send({
        message: `Ocorreu algum erro ao visualizar favoritos`,
        error: `Erro:${error.message}`
      });
    }
  }
  async destroy({ params, response, auth }) {
    const favorite = await Database.table("favorites")
      .where("product_id", params.id)
      .where("user_id", auth.user.id)
      .delete();
    if (favorite) {
      return response.status(200).send({ message: "Favorito excluido!" });
    } else {
      return response.status(404).send({
        message: "Esse Usuário não possui o produto como favorito"
      });
    }
  }
}

module.exports = FavoriteController;
