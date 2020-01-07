"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DemandSchema extends Schema {
  up() {
    this.create("demands", table => {
      table.integer("demand_id");
      table
        .integer("user_id") // Id do usuário
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("method_payment");
      table.float("price");
      table.boolean("status_demand").notNullable(); // status do pedido      True = Realizado / False = Cancelado
      table.boolean("status_payment").notNullable(); // status do pagamento   true / false
      table.integer("status_delivery"); // status da entrega  Nao visualizado / Visualizado / Preparando / Em trânsito / Entregue
      table.timestamps();
    });
  }

  down() {
    this.drop("demands");
  }
}

module.exports = DemandSchema;
