var Package = Backbone.Model.extend({

  defaults: {
    title: 'Пакет',
    price: '0',
    description: 'Пока нет описания',
    picture: 'src',
    author: 'Anonim',
    created_at: 'Date.now()'
  }

});
