import React from 'react';

function ReactBasics() {

    return (
        <div>
            <h1>Welcome to React Basics!</h1>
            <p>This is a simple React application to demonstrate the basics of React development.</p>
            <p>Use the navigation links above to explore different examples.</p>

           <div className='topics-section'>
             <h3 className='heading-3'>Main Topics</h3>
            <ul className='topics-list'>
                <li>Components</li>
                <li>JSX</li>
                <li>State and Props</li>
                <li>Event Handling</li>
                <li>Conditional Rendering</li>
                <li>Lists and Keys</li>
                <li>Lifecycle Methods</li>
                <li>State Management & Hooks</li>
                <li>Routing & Navigation</li>
                <li>Form Handling</li>
            </ul>
           </div>

        </div>
    );
}

export default ReactBasics;