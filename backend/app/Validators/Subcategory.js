"use strict";

class Category {
  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
  get rules() {
    return {
      name: `required|unique:subcategories`,
      description: "required|min:10",
      category_id: "required"
    };
  }
  get messages() {
    return {
      "name.required": "Insira o nome da subcategoria",
      "name.unique": "Essa subcategoria já existe",
      "description.required": "Campo descrição precisa ser preenchido",
      "description.min": "Descrição precisa conter no minimo 10 caracteres",
      "category_id.required": "Você precisa escolher uma categoria"
    };
  }
}

module.exports = Category;
