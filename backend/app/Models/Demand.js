"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Demand extends Model {
  product() {
    return this.belongsTo("App/Models/product");
  }
}

module.exports = Demand;
