"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DemandSchema extends Schema {
  up() {
    this.create("demands", table => {
      table.increments();
      table
        .integer("user_id") // Id do usuário
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("product_id") // Id do produto
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.boolean("status_demand"); // status do pedido      true / false
      table.boolean("status_payment"); // status do pagamento   true / false
      table.string("status_delivery"); // status da entrega    Preparando,Em trânsito,Entregue
      table.timestamps();
    });
  }

  down() {
    this.drop("demands");
  }
}

module.exports = DemandSchema;
