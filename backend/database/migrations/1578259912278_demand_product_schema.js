"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DemandProductSchema extends Schema {
  up() {
    this.create("demand_products", table => {
      table.integer("demand_id");
      table
        .integer("product_id") // Id do usuário
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("amount");
    });
  }

  down() {
    this.drop("demand_products");
  }
}

module.exports = DemandProductSchema;
