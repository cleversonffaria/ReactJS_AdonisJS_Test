"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfileSchema extends Schema {
  up() {
    this.create("profiles", table => {
      table.increments();
      table.integer("users_id").unsigned();
      table
        .foreign("users_id")
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("fristname");
      table.string("lastname");
      table.text("image");
      table.integer("age");
      table.string("company");
      table.text("description");
      table.integer("cnpj");
      table.integer("cpf");
      table.timestamps();
    });
  }

  down() {
    this.drop("profiles");
  }
}

module.exports = ProfileSchema;
