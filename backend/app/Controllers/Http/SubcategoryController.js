"use strict";
const Category = use("App/Models/Category");
const Subcategory = use("App/Models/Subcategory");

class SubcategoryController {
  async index({ request, response }) {
    const subcategory = await Subcategory.all();
    return subcategory;
  }
  async store({ request, response, auth }) {
    try {
      const data = request.all();
      if (auth.user.user_status <= 2) {
        await Subcategory.create(data);
        return response
          .status(200)
          .send({ message: "Subcategoria criada com sucesso!" });
      }
      return response.status(403).send({
        message: "Não autorizado a realizar essa tarefa!"
      });
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao criar a subcategoria.`,
        error: `Erro:${error.message}`
      });
    }
  }
  async update({ request, response, auth, params }) {
    try {
      const data = request.all();
      const subcategory = await Subcategory.findBy("id", params.id);
      if (!subcategory) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado." });
      }
      if (auth.user.user_status <= 2) {
        subcategory.merge(data);
        subcategory.save();

        return response.status(200).send({ message: "Subcategoria editada!" });
      }
      return response.status(403).send({
        message: "Não autorizado a realizar essa tarefa!"
      });
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao editar a subcategoria.`,
        error: `Erro:${error.message}`
      });
    }
  }
  async destroy({ response, auth, params }) {
    const subcategory = await Subcategory.findBy("id", params.id);
    if (!subcategory) {
      return response
        .status(401)
        .send({ message: "Nenhum registro localizado." });
    }
    if (auth.user.user_status <= 2) {
      await subcategory.delete();
      return response.status(200).send({ message: "Subcategoria excluida!" });
    }
    return response
      .status(403)
      .send({ message: "Não autorizado a realizar essa tarefa!" });
  }
}

module.exports = SubcategoryController;
