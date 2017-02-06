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

// Show the current store selection
connection.query("SELECT * FROM products", function(err, res) {
  console.log("ID# | Product Name | Dept Name | Price | Stock Qty");
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].dept_name + " | " + res[i].price + " | " + res[i].stock_qty);
  }
  console.log("-----------------------------------\n");

  // Run the prompt menu to shop

  // Show the store's inventory and make a purchase
  var products = ["Banana", "Avocado", "Camera", "Laptop", "Rice Cooker", "Guitar", "Drumset", "Bicycle", "Longboard","Tent"];

  inquirer.prompt([{
    name: "chooseProduct",
    type: "rawlist",
    message: "Please enter the ID# (1 to 10) of the product you want to buy.",
    choices: products
    },{
   name: "chooseQty",
   type: "input",
   message: "Quantity:"
    }
  ]).then(function(answer) {
    //console.log(answer);

    var productChosen;
    for(var i = 0; i < products.length; i++){
      if(products[i] == answer.chooseProduct){
        productChosen = i;
        //console.log(i);
      }
    }

    var totalQty = answer.chooseQty;
    var finalSalePrice = answer.chooseQty * res[productChosen].price; // Qty * price
    var updatedQty = res[productChosen].stock_qty - totalQty;
    // Check if Bamazon has the product in stock_qty
    if(answer.chooseQty <= res[productChosen].stock_qty){
      // If yes, update SQL database to remaining Qty
      connection.query("UPDATE products SET ? WHERE ?", [{stock_qty: updatedQty}, {product_name: answer.chooseProduct}], function (err,res){
        if(err){
          throw err;
        }else{
          console.log(res);
        }
      });

      // Show customer receipt (i.e. qty + cost of the product), then end connection
      console.log("Thank you for purchasing " + totalQty + " x " + answer.chooseProduct +
                ". \nYour total price is: $" + finalSalePrice + ". See you again!");
      connection.end();
    // Else "Insufficient quantity"
    }else{
        console.log("Insufficient quantity!");
        connection.end();
    }

  });
});
