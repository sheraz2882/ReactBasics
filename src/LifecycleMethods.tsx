import React from 'react';

export const LifecycleMethods = () => {

    return (
        <div>
            <h2>Lifecycle Methods</h2>
            <p>Lifecycle methods are special methods in React components that allow you to hook into different stages of a component's lifecycle. 
                These methods are called at specific points during a component's existence, such as when it is created, updated, or destroyed. 
                They provide a way to perform side effects, manage state, and interact with the DOM.</p>

            <p>Some commonly used lifecycle methods in class components include:</p>
            <button onClick={() => {}}>ComponentDidMount</button>
            <button>ComponentDidUpdate</button>
            <button>ComponentWillUnmount</button>
        </div>
    );

}