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
          .send({ message: "Categoria criada com sucesso!", err: "success" });
      }
      return response.status(403).send({
        message: "Acesso negado para realizar essa tarefa!",
        err: "danger"
      });
    } catch (error) {
      return response.status(500).send({
        message: "Ocorreu algum erro ao criar a categoria.",
        error: `Erro:${error.message}`,
        err: "danger"
      });
    }
  }
  async update({ request, response, auth, params }) {
    try {
      const data = request.all();
      const category = await Category.findBy("id", params.id);
      if (!category) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado", err: "warning" });
      }
      if (auth.user.user_status <= 2) {
        category.merge(data);
        category.save();
        return response
          .status(200)
          .send({ message: "Categoria editada!", err: "success" });
      }
      return response.status(403).send({
        message: "Acesso negado para realizar essa tarefa!",
        err: "danger"
      });
    } catch (error) {
      return response.status(500).send({
        message: "Ocorreu algum erro ao editar a categoria.",
        error: `Erro:${error.message}`,
        err: "danger"
      });
    }
  }
  async destroy({ response, auth, params }) {
    const category = await Category.findBy("id", params.id);
    if (!category) {
      return response
        .status(401)
        .send({ message: "Nenhum registro localizado", err: "warning" });
    }
    if (auth.user.user_status <= 2) {
      await category.delete();
      return response
        .status(200)
        .send({ message: "Categoria excluida!", err: "success" });
    }
    return response.status(403).send({
      message: "Acesso negado para realizar essa tarefa!",
      err: "danger"
    });
  }
}

module.exports = CategoryController;
