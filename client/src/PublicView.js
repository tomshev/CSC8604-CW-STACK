import React from 'react';

function PublicView() {
    return (
        <div>
            <h1>PublicView (Split screen)</h1>
            <hr />
            <div style={{ backgroundColor: 'lightgreen', height: '400px' }}>
                <h2>TODAY'S MEALS AND NUTRITION INFO:</h2>
            </div>
            <hr />
            <div style={{ backgroundColor: 'lightblue', height: '400px' }}>
                <h2>LIVE FOOR ORDER STATISTICS:</h2>
            </div>
        </div>
    );
}

export default PublicView;