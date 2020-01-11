"use strict";
const Product = use("App/Models/Product");
const { validateAll } = use("Validator");
const Helpers = use("Helpers");
const Database = use("Database");

class ProductController {
  async products({ response }) {
    const products = await Product.query()
      .with("category")
      .with("subcategory")
      .fetch();

    return products;
  }
  async index({ response, params }) {
    switch (params.category) {
      case "cat":
        return await Database.from("products")
          .where(function() {
            this.where("category_id", params.search);
          })
          .orderBy("descont", "desc")
          .paginate(params.page, params.limit);

      case "subcat":
        return await Database.from("products")
          .where(function() {
            this.where("subcategory_id", params.search);
          })
          .orderBy("descont", "desc")
          .paginate(params.page, params.limit);

      case "descont":
        return await Database.from("products")
          .where(function() {
            this.where("descont", ">=", params.search);
          })
          .orderBy("descont", "desc")
          .paginate(params.page, params.limit);
      default:
        return await Database.from("products")
          .orderBy("created_at", "desc")
          .paginate(params.page, params.limit);
    }
  }
  async store({ request, response, auth, params }) {
    const { user_status } = await auth.getUser();
    try {
      if (user_status === 1 || user_status === 2) {
        const data = request.all();
        // UPLOAD
        const img = request.file("img", {
          types: ["image"],
          size: "5mb",
          extnames: ["png", "jpg", "jpeg"]
        });
        await img.move(Helpers.tmpPath("uploads"), {
          name: `${new Date().getTime()}-${img.clientName}`
        });
        if (img.error()[0]) {
          if (img.error().type === "extname") {
            return response.status(404).send({
              message: "Somente os formatos (png, jpg, jpeg) são aceitos.",
              err: "info"
            });
          } else if (img.error().type === "size") {
            return response.status(404).send({
              message: "O tamanho da imagem deve ser inferior a 5 MB",
              err: "warning"
            });
          }
          return response.status(404).send({
            message: "Ocorreu algum erro ao enviar a imagem do produto",
            err: "danger"
          });
        }
        await Product.create({
          image: img.fileName,
          ...data
        });

        return response
          .status(200)
          .send({ message: `Produto cadastrado com sucesso!`, err: "success" });
      }
      return response.status(403).send({
        message: `Acesso negado para cadastrar esse produtos!`,
        err: "danger"
      });
    } catch (error) {
      return response.status(401).send({
        message: `Erro ao criar produto.`,
        error: `Erro:${error.message}`,
        err: "danger"
      });
    }
  }
  async show({ params, response }) {
    try {
      const product = await Product.findBy("id", params.id);
      if (!product) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado" });
      }
      await product.loadMany(["favorite", "images"]);
      return product;
    } catch (error) {
      return response.status(401).send({
        message: `Erro na visualização do produto.`,
        error: `Erro:${error.message}`,
        err: "danger"
      });
    }
  }

  async update({ params, request, response, auth }) {
    try {
      const data = request.all();
      const product = await Product.findBy("id", params.id);
      if (!product) {
        return response
          .status(401)
          .send({ message: "Nenhum registro localizado", err: "info" });
      }
      if (auth.user.user_status <= 2) {
        // DELETAR
        const fs = Helpers.promisify(require("fs"));
        const image = Helpers.tmpPath(`uploads/${product.image}`);
        await fs.unlink(image);
        // UPLOAD
        const img = request.file("img", {
          types: ["image"],
          size: "5mb",
          extnames: ["png", "jpg", "jpeg"]
        });
        await img.move(Helpers.tmpPath("uploads"), {
          name: `${new Date().getTime()}-${img.clientName}`
        });
        if (img.error()[0]) {
          if (img.error().type === "extname") {
            return response.status(404).send({
              message: "Somente os formatos (png, jpg, jpeg) são aceitos.",
              err: "info"
            });
          } else if (img.error().type === "size") {
            return response.status(404).send({
              message: "O tamanho da imagem deve ser inferior a 5 MB",
              err: "warning"
            });
          }
          return response.status(404).send({
            message: "Ocorreu algum erro ao enviar a imagem do produto",
            err: "danger"
          });
        }
        await product.merge({
          image: img.fileName,
          ...data
        });
        await product.save();
        return response
          .status(200)
          .send({ message: "Produto editado com sucesso!", err: "success" });
      } else {
        return response.status(403).send({
          message: "Acesso negado para editar esse produtos!",
          err: "danger"
        });
      }
    } catch (error) {
      return response.status(500).send({
        message: `Erro ao editar produto.`,
        error: `Erro:${error.message}`,
        err: "danger"
      });
    }
  }

  async destroy({ params, response, auth }) {
    const product = await Product.findBy("id", params.id);
    if (!product) {
      return response
        .status(401)
        .send({ message: "Nenhum registro localizado", err: "info" });
    }
    if (auth.user.user_status <= 2) {
      const fs = Helpers.promisify(require("fs"));
      const img = Helpers.tmpPath(`uploads/${product.image}`);
      await fs.unlink(img);

      await product.delete();
      return response
        .status(200)
        .send({ message: "Produto deletado com sucesso!", err: "success" });
    }
    return response.status(403).send({
      message: "Acesso negado para para deletar esse produtos!",
      err: "danger"
    });
  }
}

module.exports = ProductController;
