import {Products, ProductsManagement} from "./products.js";

let p1 = new Products("11","Pollo", "Pollo Sofia", 20);
let p2 = new Products("12","Galletas", "Galleras Mabel", 50);
let p3 = new Products("13","Pollo", "Pollo Imba", 50);

let manager = new ProductsManagement();
manager.addProducts(p1);
manager.addProducts(p2);
//manager.removeProducts(p1);
manager.updateProducts(p1, p3);
//manager.removeProducts(p2);
console.log(manager.showProducts());