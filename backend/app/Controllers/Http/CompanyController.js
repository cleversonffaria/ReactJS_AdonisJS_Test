"use strict";
const Company = use("App/Models/Company");
/**
 * Resourceful controller for interacting with companies
 */
class CompanyController {
  /**
   * Show a list of all companies.
   * GET companies
   */
  async index({ request, response }) {
    const company = await Company.first();
    if (!company) {
      return response
        .status(401)
        .send({ message: "Nenhum registro localizado" });
    }
    return company;
  }
  /**
   * Create/save a new company.
   * POST companies
   */
  async store({ request, response, auth }) {
    try {
      const data = request.all();
      const company = await Company.first();
      if (auth.user.user_status === 1 && !company) {
        await Company.create(data);
        return response
          .status(200)
          .send({ message: "Empresa cadastrada com sucesso!" });
      } else if (auth.user.user_status != 1) {
        return response.status(403).send({
          message: "Acesso negado para realizar esta tarefa!"
        });
      } else {
        company.merge(data);
        company.save();
        return response
          .status(200)
          .send({ message: "Empresa editada com sucesso!" });
      }
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao cadastrar a empresa.`,
        error: `Erro:${error.message}`
      });
    }
  }
  /**
   * Delete a company with id.
   * DELETE companies/:id
   */
  async destroy({ params, request, response, auth }) {
    const company = await Company.first();
    if (!company) {
      return response
        .status(401)
        .send({ message: "Nenhum registro localizado" });
    }
    if (auth.user.user_status === 1) {
      await company.delete();
      return response
        .status(200)
        .send({ message: "Empresa deletada com sucesso!" });
    }
    return response
      .status(403)
      .send({ message: "Acesso negado para realizar esta tarefa!" });
  }
}
module.exports = CompanyController;
