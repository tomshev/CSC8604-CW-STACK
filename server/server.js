
/*

    FILE: server.js
    
    CREATED BY: TOM SEVCOV (190379894)

    DESCRIPTION: The code in this file is a JavaScript program that creates a server using the Express library.
    
*/

const express = require('express')
const { startReadingCard, getLastReadData } = require('./RaspberryPI_Card_For_Server');

const app = express()

app.use(express.json());

// Calling the function to start reading the RFID card (from RaspberryPI_Card_For_Server.js)
startReadingCard();

// A structure for holding meal counts for classes
// 201 and 203 being grades 2A and 2C as an example here
const mealCounts = {
    "201": { Meal1: 0, Meal2: 0, Meal3: 0},
    "203": { Meal1: 0, Meal2: 0, Meal3: 0}
};

// For submitting meal data to server from client side page (CashierView.js)
app.post("/submitMeal", (req, res) => {

    const { meal } = req.body;
    console.log(meal);
    const sClass = getLastReadData();

    // Console output for debugging and testing
    console.log(`Meal selected: ${JSON.stringify(meal)}, Card: ${sClass}`);

    res.status(200).json({message: "Meal received"});

    // Updating meal counts depending on the class and meal selected
    if (mealCounts[sClass] && mealCounts[sClass][meal] !== undefined) {
        mealCounts[sClass][meal] += 1;
        console.log(`Updated meal count for ${sClass}:`, mealCounts[sClass]);
    } else {
        res.status(400).json({ error: "Invalid class or meal" });
    }
})

// For retrieving card data on client side (TEST FETCHING FROM SERVER page)
app.get("/api", (req,res) => {

    const lastReadData = getLastReadData();

    // Console output for debugging and testing
    console.log(JSON.stringify(lastReadData));

    if (lastReadData !== null) {
        res.json({ cardData: lastReadData });
    } else {
        res.json({ error: "HOLD CARD NEAR THE SCANNER"});
    }
})

// For retrieving meal data on client side
app.get("/mealData", (req,res) => {
    
    if (mealCounts !== null) {
        res.json({ mealData: mealCounts });
    } else {
        res.json({ error: "NO MEAL DATA"});
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})