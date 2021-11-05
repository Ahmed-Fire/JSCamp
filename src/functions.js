function addedToCart(quantity, productName = "Elma") {
  console.log("Added to basket : " + productName, "Quantity : " + quantity);
}

//addedToCart()
addedToCart(10);
//addedToCart(15)

let sayHello = () => {
  console.log("Hello World!");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello World 2");
};

sayHello2();

function addedToCart2(productName, quantity, unitPrice) {}

addedToCart2("Elma", 5, 10);
addedToCart2("Armut", 2, 20);
addedToCart2("Limon", 3, 15);

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };

function addToCart3(product) {
  console.log("product : " + product1.productName);
  console.log("quantity : " + product1.quantity);
  console.log("unit price : " + product1.unitPrice);
}

addToCart3(product1);

let product2 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product3 = { productName: "Elma", unitPrice: 10, quantity: 5 };
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName);

let s1 = 10;
let s2 = 20;
s1 = s2;
s2 = 100;
console.log(s1);

function addToCart4(x) {
  console.log(products);
}

let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 10, quantity: 5 },
  { productName: "Karpuz", unitPrice: 10, quantity: 5 },
];

addToCart4(products);

function add(bisey, ...numbers) {
  //rest operator
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
  console.log(bisey);
}

add(20, 30);
//add(20,30,40)
//add(20,30,40,50)

//spread: ayrıştırır
//rest: toparlar

let numbers = [30, 10, 500, 600, 120];
console.log(...numbers);
console.log(Math.max(...numbers));

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    {name:"Ic Anadolu", populations:"20M"},
    {name:"Marmara", populations:"30m"},
    {name:"Karadeniz", populations:"10M"},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
];

//console.log(icAnadolu.name)
//console.log(icAnadolu.populations)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newproductName)
console.log(newUnitPrice)
console.log(newQuantity)