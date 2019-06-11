//add packages
const inquirer = require('inquirer');
const mysql = require('mysql');

// Formats SQL data
require('console.table');

let currentQuantity = "";
let selectedProduct = "";

// Define the MySQL connection parameters

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    // Your username
    user: "root",
    // Your password
    password: "MmSj.01!",
    database: "bamazon"
});

//function table

function displayItems() {
    const query = 'SELECT * FROM products';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    });
    promptPurchase();
}

//function questions-prompts-items and selection options

function promptOptions() {
    inquirer.prompt({
            name: "task",
            type: "list",
            message: "How can we help you?",
            choices: [
                "Shop for Products",
                "Leave Store"
            ]
        })
        .then(function(answer) {
            switch (answer.task) {
                case "Shop for Products":
                    displayItems();
                    break;
                case "Leave Store":
                    console.log("Thank you for shopping with us");
                    connection.end();
                    break;
            }
        })
}

function promptPurchase() {
    inquirer.prompt([{
            name: "item",
            type: "list",
            message: "What would you like to purchase?",
            choices: [
                "Woman's black flip flops",
                "Men's brown loafers",
                "Velvet rolledback accent chair",
                "Black futon sofa",
                "Mr. Coffee 12 cup coffee maker",
                "KitchenAid professional mixer",
                "Apple air pods with charging case",
                "LG 65inch 4K ultra HD smart LED TV",
                "Schwinn woman's mountain bike",
                "Schwinn men's mountain bike"
            ]
        }, {
            name: "quantity",
            message: "How many would you like to purchase?"
        }])
        .then(function(answer) {
            const query = "SELECT product_name, stock_quantity FROM products WHERE?";
            connection.query(query, { product_name: answer.item }, function(err, res) {
                if (err) throw err;
                if (res[0].stock_quantity > answer.quantity) {
                    console.log("Item is in stock!");
                    currentQuantity = (res[0].stock_quantity) - (answer.quantity);
                    selectedProduct = answer.item;
                    const query = connection.query("UPDATE products SET ? WHERE?", [{
                            stock_quantity: currentQuantity
                        },
                        {
                            product_name: selectedProduct
                        }
                    ])
                } else {
                    console.log("Sorry, there aren't enough items in stock");
                }
                promptOptions();
            });
        })
}

//call it
connection.connect(function(err) {
    if (err) throw err;
    displayItems();
});


