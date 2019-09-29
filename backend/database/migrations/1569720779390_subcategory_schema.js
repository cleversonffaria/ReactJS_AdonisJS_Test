'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubcategorySchema extends Schema {
  up () {
    this.create('subcategories', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('subcategories')
  }
}

module.exports = SubcategorySchema
