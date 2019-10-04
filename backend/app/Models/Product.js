"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  subcategory() {
    return this.belongsTo("App/Models/subcategory");
  }
  favorite() {
    return this.hasMany("App/Models/favorite");
  }
}

module.exports = Product;
