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
      "name.required": "Esse campo é obrigatório",
      "name.unique": "Essa subcategoria já existe",
      "description.required": "Esse campo é obrigatório",
      "category_id.required": "Esse campo é obrigatório"
    };
  }
}

module.exports = Category;
