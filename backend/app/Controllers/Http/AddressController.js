"use strict";
const Address = use("App/Models/address");

class AddressController {
  /**
   * Show a list of all addresses.
   * GET addresses
   */
  async address({ request, response, auth, params }) {
    if (auth.user.user_status === 1 || auth.user.user_status === 2) {
      const address = await Address.findBy("user_id", params.id);
      if (!address) {
        return response.status(401).send({
          message: "Não existe endereço cadastrado para esse usuário!",
          err: "info"
        });
      }
      return address;
    } else {
      return response.status(403).send({
        message: "Acesso não autorizado para esse usuário!",
        err: "danger"
      });
    }
  }
  async index({ request, response, auth }) {
    const address = await Address.findBy("user_id", auth.user.id);
    if (!address) {
      return response.status(401).send({
        message: "Não existe endereço cadastrado para esse usuário!",
        err: "info"
      });
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
        return response
          .status(200)
          .send({ message: "Endereço cadastrado!", err: "success" });
      }
      return response.status(200).send({
        message: "Esse usuário já possui um endereço cadastrado!",
        err: "info"
      });
    } catch (error) {
      return response.status(500).send({
        message: "Ocorreu algum erro ao criar o endereço.",
        error: `Erro:${error.message}`,
        err: "danger"
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
          .send({ message: "Nenhum registro localizado", err: "warning" });
      }
      await address.merge(data);
      await address.save();
      return response
        .status(200)
        .send({ message: "Endereço editado!", err: "success" });
    } catch (error) {
      return response.status(500).send({
        message: "Ocorreu algum erro ao editar endereço.",
        error: `Erro:${error.message}`,
        err: "danger"
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
          .send({ message: "Nenhum registro localizado", err: "warning" });
      }
      await address.delete();
      return response
        .status(200)
        .send({ message: "Endereço excluido!", err: "success" });
    } catch (error) {
      return response.status(500).send({
        message: "Ocorreu algum erro ao deletar endereço.",
        error: `Erro:${error.message}`,
        err: "danger"
      });
    }
  }
}

module.exports = AddressController;
