"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ImagesSchema extends Schema {
  up() {
    this.create("images", table => {
      table.increments();
      table
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.text("path");
      table.timestamps();
    });
  }

  down() {
    this.drop("images");
  }
}

module.exports = ImagesSchema;
