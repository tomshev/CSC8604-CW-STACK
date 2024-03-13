import React, { useEffect, useState } from 'react' 

function CashierView() {

    const handleSubmit = () => {

        // Handle the submit action here
        console.log("Order submitted!");
        // Potentially, you could add more logic here to actually do something
        // with the order, like sending it to a server
      };

    return (

        <div>
            <h1>CashierView (Submit customer's order)</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button style={{ marginRight: '10px' }}>Meal 1</button>
                <button style={{ marginRight: '10px' }}>Meal 2</button>
                <button>Meal 3</button>
            </div>
            <button style={{ marginTop: '10px' }} onClick={handleSubmit} >SUBMIT</button>
        </div>
    );
}

export default CashierView;