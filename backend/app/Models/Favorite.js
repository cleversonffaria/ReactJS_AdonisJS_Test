"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Favorite extends Model {
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
    return "user_id";
  }
  static get user_id() {
    return "user_id";
  }
}

module.exports = Favorite;
