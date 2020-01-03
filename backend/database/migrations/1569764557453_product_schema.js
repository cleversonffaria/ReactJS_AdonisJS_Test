"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();
      table
        .integer("subcategory_id")
        .unsigned()
        .notNullable();
      table
        .foreign("subcategory_id")
        .references("subcategories.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("category_id")
        .unsigned()
        .notNullable();
      table
        .foreign("category_id")
        .references("categories.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("name");
      table.string("image");
      table.text("description");
      table.string("brand");
      table.integer("price");
      table.integer("stock");
      table.integer("descont");
      table.integer("peso");
      table.float("height");
      table.float("width");
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductSchema;
