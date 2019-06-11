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

function displayItems() {
    const query = 'SELECT * FROM products';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
    });
    promptPurchase();
}


