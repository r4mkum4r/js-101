
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
/*global */
var app = app || {};

(function () {
  'use strict';

  // Todo Model
  // ----------

  app.Todo = Backbone.Model.extend({
    // Default attributes for the todo
    defaults: {
      todo: '',
      completed: false
    },

    toggle: function () {
      this.save({
        completed: !this.get('completed')
      });
    }
  });
})();
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