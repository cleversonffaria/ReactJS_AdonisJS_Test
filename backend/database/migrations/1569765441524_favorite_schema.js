"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FavoriteSchema extends Schema {
  up() {
    this.create("favorites", table => {
      table
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
  }

  down() {
    this.drop("favorites");
  }
}

module.exports = FavoriteSchema;
