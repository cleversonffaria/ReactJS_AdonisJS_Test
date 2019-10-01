"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CompanySchema extends Schema {
  up() {
    this.create("companies", table => {
      table.increments();
      table.string("name");
      table.string("name_fantasy");
      table.text("description");
      table.integer("cnpj");
      table.string("email");
      table.string("whatzapp");
      table.string("facebook");
      table.integer('contact')
      table.integer('contact_2')
      table.string("street");
      table.integer("number");
      table.string("district");
      table.string("city");
      table.string("uf");
      table.integer("cep");
      table.timestamps();
    });
  }

  down() {
    this.drop("companies");
  }
}

module.exports = CompanySchema;
