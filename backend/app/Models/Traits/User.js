"use strict";
class User extends Model {
  static boot() {
    super.boot();

    this.addTrait("@provider:Timezone/Trait");
  }
}
