const product = {
  name: "Laptop",
  description: "Macbook Pro mid 2012",
  price: 2000,
  accessories: ["mouse", "keyboard", "bluebooth earphones"]
};

let stringifiedLaptop = JSON.stringify();
localStorage.setItem("product", product);
console.log(product);
const productJson = JSON.stringify(product, undefined, 2);
localStorage.setItem("product", productJSON);
const productObj = JSON.parse(localStorage.getItem("product"));
console.log(productObj);
let statement = "";
productObj.accessories.forEach();
