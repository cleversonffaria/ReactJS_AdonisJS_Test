"use strict";
const Demand_Products = use("App/Models/DemandProduct");

class DemandProductController {
  async store({ request, response, auth }) {
    try {
      const { ...data } = request.all();
      await Demand_Products.create({
        ...data
      });
      return response.status(200).send({
        message: `Pedido realizado`
      });
    } catch (error) {
      return response.status(401).send({
        message: `Ocorreu algum erro ao realizar o pedido!`,
        error: `Erro:${error.message}`
      });
    }
  }

  async show({ params, auth, response }) {
    try {
      const demand_products = await Demand_Products.query()
        .where("demand_id", params.id)
        .with("product")
        .with("demand")
        .fetch();
      return demand_products;
    } catch (error) {
      return response.status(401).send({
        message: `Ocorreu algum erro ao visualizar os pedidos.`,
        error: `Erro:${error.message}`
      });
    }
  }
}

module.exports = DemandProductController;
