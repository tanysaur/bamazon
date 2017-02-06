var inquirer = require('inquirer');
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "rootpassword",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id " + connection.threadId + "\n");
});

connection.query("SELECT * FROM products", function(err, res) {
  console.log("ID# | Product Name | Dept Name | Price | Stock Qty");
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].dept_name + " | " + res[i].price + " | " + res[i].stock_qty);
  }
  console.log("-----------------------------------");

  menu();
});

// Show the store's inventory
var menu = function() {
   var products = ["Bananas", "Avocados", "Camera", "Laptop", "Rice Cooker", "Guitar", "Drumset", "Bicycle", "Longboard","Tent"]

  inquirer.prompt([{
    name: "chooseProduct",
    type: "rawlist",
    message: "Please enter the ID# (1 to 10) of the product you want to buy.",
    choices: products
  },{
   name: "chooseQty",
   type: "input",
   message: "Quantity:"
 },{
   name: "finalizeCart",
   type: "confirm",
   message: "Is this final?"

 }]).then(function(answer) {
    console.log(answer);
    console.log(answer.chooseProduct);
    console.log(answer.chooseQty);
    console.log(answer.finalizeCart);


    if(!answer.finalizeCart){
      menu();
    }else{

      // Check if Bamazon has the product in stock_qty
      if(answer.choose){
      // If yes, update SQL database to remaining Qty

      // Show customer cost of the product
      // Else "Insufficient quantity"
      }
    }

  });
};
