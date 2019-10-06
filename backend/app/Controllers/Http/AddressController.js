"use strict";
const Address = use("App/Models/address");

class AddressController {
  /**
   * Show a list of all addresses.
   * GET addresses
   */
  async index({ request, response, auth }) {
    const address = await Address.findBy("user_id", auth.user.id);
    if (!address) {
      return response
        .status(401)
        .send({ message: "Não existe endereço cadastrado para esse usuário!" });
    }
    return address;
  }
  /**
   * Create/save a new address.
   * POST addresses
   */
  async store({ request, response, auth }) {
    try {
      const data = request.all();
      const address = await Address.findBy("user_id", auth.user.id);
      if (!address) {
        await Address.create({ user_id: auth.user.id, ...data });
        return response.status(200).send({ messsage: "Endereço cadastrado!" });
      }
      return response
        .status(200)
        .send({ messsage: "Este usuário já possui um endereço cadastrado!" });
    } catch (error) {
      return response.status(500).send({
        message: "Ocorreu algum erro ao criar o endereço.",
        error: `Erro:${error.message}`
      });
    }
  }
  /**
   * Update address details.
   * PUT or PATCH addresses/:id
   */
  async update({ auth, request, response }) {
    try {
      const data = request.all();
      const address = await Address.findBy("user_id", auth.user.id);
      if (!address) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado" });
      }
      await address.merge(data);
      await address.save();
      return response.status(200).send({ messsage: "Endereço editado!" });
    } catch (error) {
      return response.status(500).send({
        message: "Ocorreu algum erro ao editar endereço.",
        error: `Erro:${error.message}`
      });
    }
  }
  /**
   * Delete a address with id.
   * DELETE addresses/:id
   */
  async destroy({ auth, request, response }) {
    try {
      const address = await Address.findBy("user_id", auth.user.id);
      if (!address) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado" });
      }
      await address.delete();
      return response.status(200).send({ message: "Endereço excluido!" });
    } catch (error) {
      return response
        .status(500)
        .send({
          message: "Ocorreu algum erro ao deletar endereço.",
          error: `Erro:${error.message}`
        });
    }
  }
}

module.exports = AddressController;
