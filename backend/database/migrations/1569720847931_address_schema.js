"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddressSchema extends Schema {
  up() {
    this.create("addresses", table => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("street");
      table.integer("number");
      table.string("reference");
      table.string("district");
      table.string("city");
      table.string("uf");
      table.integer("cep");
      table.timestamps();
    });
  }

  down() {
    this.drop("addresses");
  }
}

module.exports = AddressSchema;
