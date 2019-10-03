"use strict";
const Category = use("App/Models/Category");

class CategoryController {
  async index({ request, response }) {
    const category = await Category.all();
    return category;
  }
  async store({ request, response, auth }) {
    try {
      const data = request.all();
      if (auth.user.user_status <= 2) {
        await Category.create(data);
        return response
          .status(200)
          .send({ message: "Categoria criada com sucesso!" });
      }
      return response.status(404).send({
        message: "Você não tem autorização para realizar essa tarefa!"
      });
    } catch (error) {
      return response.status(500).send({ error: `Erro:${error.message}` });
    }
  }
  async update({ request, response, auth, params }) {
    try {
      const data = request.all();
      const category = await Category.findBy("id", params.id);
      if (!category) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado" });
      }
      if (auth.user.user_status <= 2) {
        category.merge(data);
        category.save();
        return response.status(200).send({ message: "Categoria editada!" });
      }
      return response.status(404).send({
        message: "Você não tem autorização para realizar essa tarefa!"
      });
    } catch (error) {
      return response.status(500).send({ error: `Erro:${error.message}` });
    }
  }
  async destroy({ response, auth, params }) {
    const category = await Category.findBy("id", params.id);
    if (!category) {
      return response
        .status(401)
        .send({ message: "Nenhum registro localizado" });
    }
    if (auth.user.user_status <= 2) {
      await category.delete();
      return response.status(200).send({ message: "Categoria excluida!" });
    }
    return response
      .status(404)
      .send({ message: "Você não tem autorização para realizar essa tarefa!" });
  }
}

module.exports = CategoryController;
