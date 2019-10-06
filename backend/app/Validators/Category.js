"use strict";

class Category {
  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
  get rules() {
    return {
      name: `required|unique:categories`,
      description: "required|min:10"
    };
  }
  get messages() {
    return {
      "name.required": "Insira o nome da categoria",
      "name.unique": "Essa categoria já existe",
      "description.required": "Campo descrição precisa ser preenchido",
      "description.min": "Descrição precisa conter no minimo 10 caracteres"
    };
  }
}

module.exports = Category;
