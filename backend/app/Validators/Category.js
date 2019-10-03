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
      "name.required": "Esse campo é obrigatório",
      "name.unique": "Essa categoria já existe",
      "description.required": "Esse campo é obrigatório",
      "description.min": "Descrição precisa conter no minimo 10 caracter"
    };
  }
}

module.exports = Category;
