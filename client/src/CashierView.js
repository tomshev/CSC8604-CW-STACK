import React, { useEffect, useState } from 'react' 
import './CashierView.css';
import TimeDisplay from './TimeDisplay';

function CashierView() {

    const [selectedMeal, setSelectedMeal] = useState(null);

    const handleMealSelect = (meal) => {

        setSelectedMeal(meal);
    };

    const handleSubmit = () => {

        // LOGIC FOR SENDING ORDER TO SERVER HERE
        console.log("Order submitted!");
      };

    return (
        <div className="cashierContainer">
            <div className="cashiew-view-info">
            <h1>SUBMIT CUSTOMER'S ORDER</h1>
            <TimeDisplay />
            <h2>Card: </h2>
            <h2>Student: </h2>
            </div>
            <div className="mealButtonsContainer">
            {['Meal1', 'Meal2', 'Meal3'].map((meal, index) => (
                    <button
                        key={index}
                        className={`mealButton ${selectedMeal === meal ? 'selected2' : ''} ${meal}`}
                        onClick={() => handleMealSelect(meal)}
                    >
                        {meal}
                    </button>
                ))}
            </div>
            <div className='submitButtonMain'> 
                <button
                    className="submitButton"
                    onClick={handleSubmit}
                    disabled={!selectedMeal} // Disable if no meal is selected
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
}

export default CashierView;