"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class DemandProduct extends Model {
  static get createdAtColumn() {
    return null;
  }
  static get updatedAtColumn() {
    return null;
  }
  static get incrementing() {
    return false;
  }
  static get primaryKey() {
    return "demand_id";
  }
  static get demand_id() {
    return "demand_id";
  }
  product() {
    return this.belongsTo("App/Models/product");
  }
  demand() {
    return this.belongsTo("App/Models/demand");
  }
}

module.exports = DemandProduct;
