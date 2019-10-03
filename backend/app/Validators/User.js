"use strict";

class User {
  async fails(errorMessages) {
    return this.ctx.response.send(errorMessages);
  }
  get rules() {    
    return {
      username: `required|min:5|unique:users`,
      email: "required|email|unique:users",
      password: "required|min:6"
    };
  }
  get messages() {
    return {
      "username.required": "Esse campo é obrigatório",
      "username.unique": "Esse usuário já existe",
      "username.min": "O usuário deve ter mais que 5 caracteres",
      "email.required": "Email é obrigatório",
      "email.unique": "Esse email já existe",
      "email.email": "Esse email não é valido",
      "password.required": "Senha não informada",
      "password.min": "A senha deve ter mais que 6 caracteres"
    };
  }
}

module.exports = User;
