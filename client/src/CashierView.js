import React, { useEffect, useState } from 'react' 
import './CashierView.css';

function CashierView() {

    const [selectedMeal, setSelectedMeal] = useState(null);

    const handleMealSelect = (meal) => {
        setSelectedMeal(meal);
    };

    const handleSubmit = () => {

        console.log("Order submitted!");
        // LOGIC FOR SENDING ORDER TO SERVER HERE
      };

    return (

        <div className="cashierContainer">
            <h1>CashierView (Submit customer's order)</h1>
            <div className="mealButtonsContainer">
            {['Meal 1', 'Meal 2', 'Meal 3'].map((meal, index) => (
                    <button
                        key={index}
                        className={`mealButton ${selectedMeal === meal ? 'selected' : ''}`}
                        onClick={() => handleMealSelect(meal)}
                    >
                        {meal}
                    </button>
                ))}
            </div>
            <button
                className="submitButton"
                onClick={handleSubmit}
                disabled={!selectedMeal} // Disable if no meal is selected
            >
                SUBMIT
            </button>
        </div>
    );
}

export default CashierView;