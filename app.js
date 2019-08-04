//////////////////////////////////////
// Made By: Julien-Alexandre Pinard //
// Project: Liscensing System       //
// Version: 0.0.1                   //
//////////////////////////////////////

// Importing Packages.

const chalk = require('chalk');
const MongoClient = require('mongodb').MongoClient;

// Startup Text.

console.log(chalk.yellow('Liscense System Created By: Julien-Alexandre Pinard'));

// Database Connection Link.

const uri = "Your MongoDB auth link";

// Connect to the database.

MongoClient.connect(uri, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    console.log(chalk.green("Database Connection Established Succesfully!"));
    const dbo = db.db("liscensesdb");
    for (var i = 0; i < 1; i++) {
        function randomString(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;
        }
        const liscense = randomString(15, 'abcdefghijqlmnoprstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');
        const myobj = { liscense: liscense };
        dbo.collection("liscenses").insertOne(myobj, function(err, res) {
            console.log(chalk.green.underline(`Liscense Succesfully Added: ${liscense}`));
        })
    }
    setTimeout(() => {
    db.close();
    }, 4000);
});
