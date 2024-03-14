import React, { useEffect, useState } from 'react' 
import './CashierView.css';

function CashierView() {

    const handleSubmit = () => {

        // Handle the submit action here
        console.log("Order submitted!");
        // Potentially, you could add more logic here to actually do something
        // with the order, like sending it to a server
      };

    return (

        <div className="cashierContainer">
            <h1>CashierView (Submit customer's order)</h1>
            <div className="mealButtonsContainer">
                <button className="mealButton">Meal 1</button>
                <button className="mealButton">Meal 2</button>
                <button className="mealButton">Meal 3</button>
            </div>
            <button className="submitButton" onClick={handleSubmit} >SUBMIT</button>
        </div>
    );
}

export default CashierView;