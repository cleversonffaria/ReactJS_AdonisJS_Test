"use strict";
const Product = use("App/Models/Product");
const { validateAll } = use("Validator");

class ProductController {
  /**
   * Show a list of all products.
   * GET products
   */
  async index() {
    const product = await Product.query().withCount('favorite as totalFavorite').withCount('images as totalImages').fetch();
    return product;
  }
  /**
   * Create/save a new product.
   * POST products
   */
  async store({ request, response, auth }) {
    const { user_status } = await auth.getUser();
    try {
      if (user_status === 1 || user_status === 2) {
        const data = request.all();
        const product = await Product.create(data);
        // return product;
        return response
          .status(200)
          .send({ message: `Produto cadastrado com sucesso!` });
      }
      return response.status(403).send({
        message: `Você não tem autorização para cadastrar produtos!`
      });
    } catch (error) {
      return response.status(401).send({ message: `Erro: ${error.message}` });
    }
  }
  /**
   * Display a single product.
   * GET products/:id
   */
  async show({ params, response }) {
    try {
      const product = await Product.findBy("id", params.id);
      if (!product) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado" });
      }
      await product.loadMany(["subcategory", "favorite"]);
      return product;
    } catch (error) {
      return response.status(401).send({ message: `Erro: ${error.message}` });
    }
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   */
  async update({ params, request, response, auth }) {
    try {
      const data = request.all();
      const product = await Product.findBy("id", params.id);
      if (!product) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado" });
      }
      if (auth.user.user_status <= 2) {
        product.merge(data);
        await product.save();
        return response
          .status(200)
          .send({ message: "Produto editado com sucesso!" });
      } else {
        return response
          .status(403)
          .send({ message: "Você não tem autorização para editar produtos!" });
      }
    } catch (error) {
      return response.status(500).send({ error: `Erro:${error.message}` });
    }
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   */
  async destroy({ params, response, auth }) {
    const product = await Product.findBy("id", params.id);
    if (!product) {
      return response
        .status(401)
        .send({ message: "Nenhum registro localizado" });
    }
    if (auth.user.user_status <= 2) {
      await product.delete();
      return response
        .status(200)
        .send({ message: "Produto deletado com sucesso!" });
    }
    return response
      .status(403)
      .send({ message: "Você não tem autorização para deletar produtos!" });
  }
}

module.exports = ProductController;
