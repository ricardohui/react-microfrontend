import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";
// products is what define in webpack.config.js
// ProductsIndex is what defined in the webpack.config.js of product project
console.log("container");

productsMount(document.querySelector("#dev-products"));
cartMount(document.querySelector("#dev-cart"));
