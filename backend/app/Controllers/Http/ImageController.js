"use strict";
const Images = use("App/Models/Image");
const Product = use("App/Models/Product");
const Helpers = use("Helpers");

class ImageController {
  async index({ response, auth, params }) {
    const imgProduct = await Images.query()
      .where("product_id", params.id)
      .fetch();
    if (!imgProduct) {
      return response
        .status(404)
        .send({ message: "Nenhum registro localizado!" });
    }
    return imgProduct;
  }
  async create({ request, response, auth, params }) {
    try {
      if (auth.user.user_status === 1 || auth.user.user_status === 2) {
        const product = await Product.findOrFail(params.id);
        if (!product) {
          return response
            .status(403)
            .send({ message: "Nenhum registro localizado" });
        }
        const img = request.file("img", {
          types: ["image"],
          size: "5mb",
          extnames: ["png", "jpg", "jpeg"]
        });
        await img.moveAll(Helpers.tmpPath("images"), file => {
          return {
            name: `${new Date().getTime()}-${file.clientName}`
          };
        });
        if (img.errors()[0]) {
          if (img.errors()[0].type === "extname") {
            return response.status(404).send({
              message: "Somente os formatos (png, jpg, jpeg) são aceitos."
            });
          } else if (img.errors()[0].type === "size") {
            return response.status(404).send({
              message: "O tamanho da imagem deve ser inferior a 5 MB"
            });
          }
          return response
            .status(404)
            .send({ message: "Ocorreu algum erro ao enviar a imagem" });
        }
        await Promise.all(
          img.movedList().map(item =>
            product.images().create({
              path: item.fileName,
              cover: false
            })
          )
        );
        return response
          .status(200)
          .send({ message: "Imagens inseridas com sucesso" });
      }
      return response.status(403).send({
        message: `Você não tem autorização para realizar essa tarefa!`
      });
    } catch (error) {
      return response.status(401).send({ message: `Erro: ${error.message}` });
      // .send({ message: "Ocorreu algum erro ao fazer o upload" });
    }
  }
  async destroy({ response, auth, params }) {
    try {
      if (auth.user.user_status === 1 || auth.user.user_status === 2) {
        const imgProduct = await Images.findBy("path", params.image);
        if (!imgProduct) {
          return response
            .status(404)
            .send({ message: "Nenhum registro localizado!" });
        }
        const fs = Helpers.promisify(require("fs"));
        const img = Helpers.tmpPath(`images/${params.image}`);
        await fs.unlink(img);
        imgProduct.delete();
        return response.status(200).send({ message: "Imagem Deletada!" });
      }
      return response.status(403).send({
        message: "Você não tem autorização para realizar esta tarefa!"
      });
    } catch (error) {
      return response.status(401).send({ message: `Erro: ${error.message}` });
    }
  }
}

module.exports = ImageController;
