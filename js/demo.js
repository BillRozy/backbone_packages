var Book = Backbone.Model.extend({

  defaults: {
    title: '',
    pages: 0
  },
  initialize: function(){
    console.log('This book has been initialized.');
  }
})

var BookShelf = Backbone.Collection.extend({
  model: Book
});


var book1 = new Book({title: 'Damask', pages: 47});
var book2 = new Book();

var bookShelf = new BookShelf();
bookShelf.add([book1, book2]);

console.log(JSON.stringify(book1));
console.log(JSON.stringify(book2));

var BookView = Backbone.View.extend({
  tagName: 'div',

  className: 'singlebook',

  template: _.template($('#item-template').html()),

  events: {
    'click div' : 'clicked'
  },

  initialize: function(options){
    this.options = options || {};
    this.collection.bind('change', _.bind(this.render, this));
  },

  render: function() {
    let self = this;
    this.$el.html('');
    this.collection.forEach(function(model){
      self.$el.html(self.$el.html() + self.template(model.attributes ));
    });
    return this;
  },

  clicked: function() {
    // executed when todo label is double clicked
    alert(this.$el + "clicked!");
  }
});

var bookView1 = new BookView({collection: bookShelf});

console.log(bookView1.el); // logs <li></li>

$('#todo').append(bookView1.render().$el);
