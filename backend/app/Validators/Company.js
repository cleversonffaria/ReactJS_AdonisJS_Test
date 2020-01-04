"use strict";

class Company {
  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
  get rules() {
    return {
      name: `required`,
      name_fantasy: "required",
      email: "required",
      contact: "required",
      street: "required",
      district: "required",
      city: "required",
      uf: "required",
      cep: "required",
      cnpj: "required"
    };
  }
  get messages() {
    return {
      "name.required": "Insira o nome da empresa!",
      "name_fantasy.required": "Insira o nome fantasia!",
      "email.required": "Insira o e-mail!",
      "contact.required": "Insira o contato 1!",
      "street.required": "Insira a rua!",
      "district.required": "Insira o bairro!",
      "city.required": "Insira a cidade!",
      "uf.required": "Insira o estado!",
      "cep.required": "Insira cep!",
      "cnpj.required": "Insira o cnpj!"
    };
  }
}

module.exports = Company;
