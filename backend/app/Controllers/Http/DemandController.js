"use strict";
const Demand = use("App/Models/Demand");
const Product = use("App/Models/Product");
const Database = use("Database");

class DemandController {
  async store({ request, response, auth, params }) {
    try {
      const product = await Product.findBy("id", params.id);
      if (!product) {
        return response.status(401).send({
          message: "Não foi possivel completar o pedido, produto indisponivel!"
        });
      }
      const { status_demand, ...data } = request.all();
      const demand = await Demand.create({
        user_id: auth.user.id,
        status_demand: true,
        product_id: params.id,
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
  async index({ response, auth }) {
    try {
      const demand = await Database.table("demands").where(
        "user_id",
        auth.user.id
      );
      if (!demand[0]) {
        return response
          .status(403)
          .send({ message: "Nenhum pedido para este usuário" });
      }
      return demand;
    } catch (error) {
      return response.status(401).send({
        message: `Ocorreu algum erro ao visualizar os pedidos.`,
        error: `Erro:${error.message}`
      });
    }
  }
  async update({ request, response, auth, params }) {
    try {
      const demand = await Demand.findBy("id", params.id);
      if (!demand) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado!" });
      }
      if (auth.user.user_status === 1) {
        const {
          status_demand,
          status_delivery,
          status_payment
        } = request.all();
        demand.status_delivery = status_delivery;
        demand.status_payment = status_payment;
        demand.status_demand = status_demand;
        demand.save();
        return response.status(200).send({ message: "Pedido editado!" });
      }
      return response.status(403).send({
        message: "Acesso negado para editar este pedido!"
      });
    } catch (error) {
      return response.status(401).send({
        message: `Ocorreu algum erro ao editar o pedido.`,
        error: `Erro:${error.message}`
      });
    }
  }
  async destroy({ response, auth, params }) {
    try {
      const demand = await Demand.findBy("id", params.id);
      if (!demand) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado!" });
      }
      if (auth.user.id === demand.user_id) {
        await demand.delete();
        return response.status(200).send({ message: "Pedido Deletado!" });
      } else {
        return response.status(403).send({
          message: "Acesso negado para deletar este pedido!"
        });
      }
    } catch (error) {
      return response.status(401).send({
        message: "Ocorreu algum erro ao deletar o pedido.",
        error: `Erro:${error.message}`
      });
    }
  }
}

module.exports = DemandController;
