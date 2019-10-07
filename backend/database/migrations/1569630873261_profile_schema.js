"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfileSchema extends Schema {
  up() {
    this.create("profiles", table => {
      table.increments();
      table.integer("user_id").unsigned();
      table
        .foreign("user_id")
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("firstname");
      table.string("lastname");
      table.string("image");
      table.integer("age");
      table.string("company");
      table.text("description");
      table.string("cnpj");
      table.string("cpf");
      table.timestamps();
    });
  }

  down() {
    this.drop("profiles");
  }
}

module.exports = ProfileSchema;
