"use strict";

let navbar = new Navbar();
navbar.toggleMenu();

let products = new AllProducts();
products.productsData();

let cart = new Cart();
cart.showQtyCart();
