
var collection1 = new PackageList();
var listview = new PackageListView({collection: collection1});

$('document').ready(function(){
    $('#packagesapp').append(listview.render().el);
})

function populate(){

  var p1 = new Package({
    title: 'Первый ' + Math.random() * 10,
    price: 1000 * Math.random(),
    author: 'BillRozy',
    picture: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Zins-Vasicek.png'
  });

  listview.addOne(p1);
}
