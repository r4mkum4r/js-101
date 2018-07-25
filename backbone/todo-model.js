/*global */
var app = app || {};

(function () {
  'use strict';

  // Todo Model
  // ----------

  app.Todo = Backbone.Model.extend({
    // Default attributes for the todo
    defaults: {
      todoValue: '',
      completed: false
    },

    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    }
  });
})();