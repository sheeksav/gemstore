(function(){
    var app = angular.module('store', []);

    app.controller('StoreController', function(){
        this.product = gems;
    });

    var gems = {
        name: 'Dodecahedron',
        price: 2.95,
        description: 'In geometry, a dodecahedron (Greek δωδεκάεδρον, from δώδεκα, dōdeka "twelve" + ἕδρα hédra "base", "seat" or "face") is any polyhedron with twelve flat faces, but usually a regular dodecahedron is meant: a Platonic solid. It is composed of 12 regular pentagonal faces, with three meeting at each vertex, and is represented by the Schläfli symbol {5,3}. It has 20 vertices, 30 edges and 160 diagonals. Its dual polyhedron is the icosahedron, with Schläfli symbol {3,5}.',
        canPurchase: true,
        soldOut: false,
    }



})();


