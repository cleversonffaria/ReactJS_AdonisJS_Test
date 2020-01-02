"use strict";
const User = use("App/Models/User");
const Database = use("Database");
const { validate } = use("Validator");
function toLower(word) {
  if (word) {
    return word.toLowerCase();
  }
}
class UserController {
  async showUser({ response, params }) {
    const users = await User.findBy(params);
    if (users) {
      return response.status(200).send(users);
    }
    return response
      .status(401)
      .send({ message: "Não foi possivel localizar usuários cadastrados!" });
  }
  async users({ response }) {
    const users = await User.all();
    if (users) {
      return response.status(200).send(users);
    }
    return response
      .status(401)
      .send({ message: "Não foi possivel localizar usuários cadastrados!" });
  }
  async index({ auth, response }) {
    const user = auth.getUser();
    if (user) {
      return response.status(200).send({
        username: auth.user.username,
        user_status: auth.user.user_status
      });
    }
    response
      .status(401)
      .send({ message: "Não foi possivel localizar um usuário logado!" });
  }
  async create({ request, response }) {
    try {
      const { username: name, email: mail, password } = request.only([
        "username",
        "email",
        "password"
      ]);

      const username = toLower(name);
      const email = toLower(mail);

      const rules = {
        username: `required|min:5|unique:users`,
        email: "required|email|unique:users",
        password: "required|min:6"
      };
      const messages = {
        "username.required": "Esse campo é obrigatório",
        "username.unique": "Esse usuário já existe",
        "username.min": "O usuário deve ter mais que 5 caracteres",
        "email.required": "Email é obrigatório",
        "email.unique": "Esse email já existe",
        "email.email": "Esse email não é valido",
        "password.required": "Senha não informada",
        "password.min": "A senha deve ter mais que 6 caracteres"
      };
      const validation = await validate(
        { username, email, password },
        rules,
        messages
      );

      if (validation.fails()) {
        return response.status(202).send(validation.messages());
      }

      const user = await User.create({
        password,
        email,
        username,
        user_status: 3
      });
      return user;
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao criar este usuário.`,
        error: `Erro:${error.message}`
      });
    }
  }
  async login({ request, response, auth }) {
    try {
      const { email, password } = request.all();
      const validaToken = auth.attempt(email, password);
      return validaToken;
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao logar.`,
        error: `Erro:${error.message}`
      });
    }
  }
  async deleteUser({ request, params, response, auth }) {
    const user = await User.findBy("id", params.id);
    if (!user) {
      return response
        .status(404)
        .send({ message: "Nenhum usuário localizado" });
    }
    if (
      (user.id == auth.user.id && user.user_status >= 2) ||
      (user.id != auth.user.id && auth.user.user_status === 1)
    ) {
      await user.delete();
      return response.status(200).send({ message: "Registro removido!" });
    }
    return response
      .status(404)
      .send({ message: "Não foi possivel remover o registro!" });
  }
  async updateUser({ request, params, response, auth }) {
    try {
      const {
        username: name,
        email: mail,
        password,
        user_status
      } = request.all();
      const user = await User.findBy("id", params.id);
      if (!user) {
        return response
          .status(404)
          .send({ message: "Não foi possivel editar o usuário" });
      }
      if (user.id != auth.user.id && auth.user.user_status === 1) {
        user.user_status = user_status;
      }
      const username = toLower(name);
      const email = toLower(mail);

      const rules = {
        username: `min:5|unique:users`,
        email: "email|unique:users",
        password: "min:6"
      };
      const messages = {
        "username.unique": "Esse usuário já existe",
        "username.min": "O usuário deve ter mais que 5 caracteres",
        "email.unique": "Esse email já existe",
        "email.email": "Esse email não é valido",
        "password.min": "A senha deve ter mais que 6 caracteres"
      };
      const validation = await validate(
        { username, email, password },
        rules,
        messages
      );

      if (validation.fails()) {
        return response.status(202).send(validation.messages());
      }
      if (params.id == auth.user.id || auth.user.user_status === 1) {
        user.password = password;
        user.email = email;
        user.username = username;
        user.save();
        return response
          .status(200)
          .send({ message: "Usuário atualizado com sucesso!" });
      }
      return response
        .status(404)
        .send({ message: "Acesso negado para editar este usuário" });
    } catch (error) {
      return response.status(500).send({
        message: `Ocorreu algum erro ao editar este usuário.`,
        error: `Erro:${error.message}`
      });
    }
  }
}

module.exports = UserController;
