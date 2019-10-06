"use strict";

class Company {
  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
  get rules() {
    return {
      name: `required`,
      cnpj: "required"
    };
  }
  get messages() {
    return {
      "name.required": "Insira o nome da empresa",
      "cnpj.required": "Insira o CNPJ"
    };
  }
}

module.exports = Company;
