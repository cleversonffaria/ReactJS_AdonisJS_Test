"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Demand extends Model {
  static get incrementing() {
    return false;
  }
  static get primaryKey() {
    return "demand_id";
  }
  static get demand_id() {
    return "demand_id";
  }
  user() {
    return this.belongsTo("App/Models/user");
  }
}

module.exports = Demand;
