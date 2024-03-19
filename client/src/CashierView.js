import React, { useEffect, useState } from 'react' 
import './CashierView.css';
import TimeDisplay from './TimeDisplay';

function CashierView() {
    
    const [backendData, setBackendData] = useState(null);
    const [selectedMeal, setSelectedMeal] = useState(null);

    const fetchData = () => {
        fetch("/api")
        .then(response => response.json())
        .then(data => { setBackendData(data); })
        .catch(error => console.error("ERROR FETCHING DATA: ", error));
    }

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 5000);
        return () => clearInterval(interval);
    }, [])

    const handleMealSelect = (meal) => {

        setSelectedMeal(meal);
    };

    const handleSubmit = () => {

        if (!selectedMeal) {
            console.log("No meal selected");
            return;
        }

        const postData = {
            meal: selectedMeal,
        };

        fetch("/submitMeal", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(postData),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Server response:", data.message);

        })
        .catch((error) => {
            console.error('Error:', error);
        });

        // LOGIC FOR SENDING ORDER TO SERVER HERE
        console.log("Order submitted!");
      };

    return (
        <div className="cashierContainer">
            <div className="cashiew-view-info">
                <div className='public-view-title-2'> 
                    <h2 id="cv-title">SUBMIT CUSTOMER'S ORDER</h2>
                    <p id="cv-timedisp"> <TimeDisplay /></p>
                </div>
                <h2 id="cv-info">{backendData === null ? (<p>Loading...</p>) : backendData.error ? (
                    // Checks if th backendData object contains an error property
                    <p>Card: {backendData.error} </p> ) : (
                    // Display the card data if available
                    <p>Card: {backendData.cardData}</p> )} 
                </h2>
                <h2 id="cv-info">{backendData === null ? (<p>Loading...</p>) : backendData.error ? (
                    <p>Student: </p> ) : backendData.cardData === 201 ? (
                    <p>Student: Dan</p>) : backendData.cardData === 203 ? (
                    <p>Student: Nick</p> ) : (
                    <p>{backendData.cardData}</p> )} 
                </h2>
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