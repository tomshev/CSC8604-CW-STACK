const express = require('express')
const { startReadingCard, getLastReadData } = require('./RaspberryPI_Card_For_Server');


const app = express()

startReadingCard();

// app.use(express.static("content"));

app.post("/submitMeal", (req, res) => {
    const meal = req.body;
    console.log(JSON.stringify(meal));
    const sClass = getLastReadData();
    console.log(`Meal selected: ${meal}, Card: ${sClass}`);

    // LOGIC FOR PROCESSING
    res.status(200).json({message: "Meal received"});
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



app.listen(5000, () => {console.log("Server started on port 5000")})