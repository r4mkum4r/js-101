/*global */
var app = app || {};

(function ($) {
  'use strict';

  // Todo Item View
  // --------------

  app.TodoView = Backbone.View.extend({
    //... is a list tag.
    tagName: 'li',

    className: 'todo',

    // Cache the template function for a single item.
    template: _.template($('#item-template').html()),

    // The DOM events specific to an item.
    events: {
      'dblclick label': 'edit',
      'click .destroy': 'clear'
    },

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the todo item.
    render: function () {
      if (this.model.changed.id !== undefined) {
        return;
      }

      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    // Toggle the `"completed"` state of the model.
    toggleCompleted: function () {
      this.model.toggle();
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function () {
      var textLength = this.$input.val().length;
      this.$input.focus();
      this.$input[0].setSelectionRange(textLength, textLength);
    },

    // Remove the item, destroy the model from *localStorage* and delete its view.
    clear: function () {
      this.model.destroy();
    }
  });
})(jQuery);