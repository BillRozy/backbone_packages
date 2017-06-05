var PackageView = Backbone.View.extend({

  tagName: "div",

  className: 'package-view',

  template: _.template( $('#package-item-template').html() ),

    // The DOM events specific to an item.
    events: {
      'click .delete-button': 'deleteItem',
      'click .edit': 'edit'
    },

    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
      this.$el.html( this.template( this.model.attributes ) );
      return this;
    },

    deleteItem: function() {
      alert("clicked");
      this.model.destroy();
    },

    edit: function() {

    }
});


var PackageListView = Backbone.View.extend({

  tagName: "div",

  className: 'package-list-view',

  template: _.template( $('#package-list-template').html() ),


    // The TodoView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **TodoView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.collection, 'change', this.render);
    },

    render: function() {
      this.$el.html( this.template( this.collection.attributes ) );
      this.collection.forEach(function(model){
        this.$el.append(model.render().el);
      });

      return this;
    },

    addOne: function(mod){
      this.collection.add(mod);
      var view = new PackageView({ model: mod });
      this.$el.append( view.render().el );
    }
});
