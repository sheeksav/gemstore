(function(){

    // Here we define the Angualar module
    var app = angular.module('store', []);

    // Here we write our controller
    app.controller('StoreController', function(){
        this.products = gems;
    });

    app.controller('PanelController', function(){

        // Initialize the value of tab
        this.tab = 1;

        // A function to update the current tab number when selected
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };

        // Returns true if the checked tab matches the selected tab
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });

    // Here we define our object
    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.00,
            description: 'In geometry, a dodecahedron (Greek δωδεκάεδρον, from δώδεκα, dōdeka "twelve" + ἕδρα hédra "base", "seat" or "face") is any polyhedron with twelve flat faces, but usually a regular dodecahedron is meant: a Platonic solid. It is composed of 12 regular pentagonal faces, with three meeting at each vertex, and is represented by the Schläfli symbol {5,3}. It has 20 vertices, 30 edges and 160 diagonals. Its dual polyhedron is the icosahedron, with Schläfli symbol {3,5}.',
            canPurchase: true,
            images: [
                {
                    full: 'images/dodecahedron-01-full.png',
                    thumb: 'images/dodecahedron-01-thumb.png'
                }
            ],
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'Cardigan Godard yr leggings literally. Typewriter next level blog brunch Williamsburg semiotics, locavore mumblecore banh mi YOLO Godard ennui narwhal shabby chic.',
            canPurchase: false,

        }
    ];


})();


