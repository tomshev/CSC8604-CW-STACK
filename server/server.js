
/*

    FILE: 
    DESCRIPTION:

*/

const express = require('express')
const { startReadingCard, getLastReadData } = require('./RaspberryPI_Card_For_Server');


const app = express()

app.use(express.json());

startReadingCard();

const mealCounts = {
    "201": { Meal1: 0, Meal2: 0, Meal3: 0},
    "203": { Meal1: 0, Meal2: 0, Meal3: 0}
};

// app.use(express.static("content"));

app.post("/submitMeal", (req, res) => {
    const { meal } = req.body;
    console.log(meal);
    const sClass = getLastReadData();
    console.log(`Meal selected: ${JSON.stringify(meal)}, Card: ${sClass}`);
    // LOGIC FOR PROCESSING

    res.status(200).json({message: "Meal received"});

    if (mealCounts[sClass] && mealCounts[sClass][meal] !== undefined) {
        mealCounts[sClass][meal] += 1;
        console.log(`Updated meal count for ${sClass}:`, mealCounts[sClass]);
    } else {
        res.status(400).json({ error: "Invalid class or meal" });
    }
})

app.get("/api", (req,res) => {
    // res.json({"users": ["userOne", "userTwo", "userThree", "userFour"] })
    const lastReadData = getLastReadData();
    console.log(JSON.stringify(lastReadData));
    if (lastReadData !== null) {
        res.json({ cardData: lastReadData });
    } else {
        res.json({ error: "HOLD CARD NEAR THE SCANNER"});
    }
})

app.get("/mealData", (req,res) => {
    
    if (mealCounts !== null) {
        res.json({ mealData: mealCounts });
    } else {
        res.json({ error: "NO MEAL DATA"});
    }
})



app.listen(5000, () => {console.log("Server started on port 5000")})