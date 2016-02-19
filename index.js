'use strict';

class NotFoundError {
  constructor(message) {
    this.message = message;
  }

  toString() {
    return this.message;
  }
}

class Conflict {
  constructor(message) {
    this.message = message;
  }

  toString() {
    return this.message;
  }
}

class Store {
  constructor() {
    this.NotFoundError = NotFoundError;
    this.Conflict = Conflict;
  }
}

Store.NotFoundError = NotFoundError;
Store.Conflict = Conflict;
module.exports = Store;
