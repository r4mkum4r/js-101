/*global */
var app = app || {};

(function () {
  'use strict';

  // Todo Collection
  // ---------------
  var Todos = Backbone.Collection.extend({
    // Reference to model.
    model: app.Todo,

    completed: function () {
      return this.where({
        completed: true
      });
    },

    remaining: function () {
      return this.where({
        completed: false
      });
    },

    // Todos are sorted by their original insertion order.
    comparator: 'order'
  });

  // Create our global collection of **Todos**.
  app.todos = new Todos();
})();