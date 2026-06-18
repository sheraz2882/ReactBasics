import React, { useState, useEffect } from 'react';

interface LifecycleMethodsData{
    code: string;
    name: string;
    description: string;
    usage: string;
}

const lifecycleMethods: LifecycleMethodsData[] = [
    {
        code: '1',
        name: 'ComponentDidMount',
        description: 'Called immediately after a component is mounted (inserted into the tree).',
        usage: 'Used for initializing data, setting up subscriptions, or making API calls.'
    },
    {
        code: '2',
        name: 'ComponentDidUpdate',
        description: 'Called immediately after updating occurs. This method is not called for the initial render.',
        usage: 'Used for updating the DOM in response to prop or state changes.'
    },
    {
        code: '3',
        name: 'ComponentWillUnmount',
        description: 'Called immediately before a component is unmounted and destroyed.',
        usage: 'Used for cleanup operations, such as canceling network requests or clearing timers.'
    },
    {
        code: '4',
        name: 'Other Lifecycle Methods',
        description: 'There are other lifecycle methods like shouldComponentUpdate, getDerivedStateFromProps, getSnapshotBeforeUpdate, componentDidCatch etc.',
        usage: 'Used for optimizing performance, managing state, and handling props changes.'
    }
];

function lifecycleMethodsInfoCard(method: LifecycleMethodsData){
    console.log(`Lifecycle Method: ${method.name}`);
    return (
        <div key={method.name} className="lifecycle-info-card">
            <h3>{method.name}</h3>
            <p><strong>Description:</strong> {method.description}</p>
            <p><strong>Usage:</strong> {method.usage}</p>
        </div>
    );
}


function lifeCycleDemoUsingHooks(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounted or Count Changed: ", count);

        return () => {
            console.log("Cleanup before next effect or unmounting: ", count);
        }
    }, [count])


    return (
        <div className="hooks-demo-container">
            <h3>useEffect Hook Demo</h3>
            <p>This demonstrates the useEffect hook, which serves a similar purpose to lifecycle methods in class components.</p>
            <p>Current Count: {count}</p>
            <button className="lifecycle-button" onClick={() => setCount(count + 1)}>Increment Count</button>
        </div>
    )

}

export const LifecycleMethods = () => {
    const [selectedMethod, setSelectedMethod] = useState<LifecycleMethodsData | null>(null);

    return (
        <div className="lifecycle-methods-container">
            <h2>Lifecycle Methods</h2>
            <p>Lifecycle methods are special methods in React components that allow you to hook into different stages of a component's lifecycle. 
                These methods are called at specific points during a component's existence, such as when it is created, updated, or destroyed. 
                They provide a way to perform side effects, manage state, and interact with the DOM.</p>

            <p>Some commonly used lifecycle methods in class components include:</p>
            
            <div className="lifecycle-buttons-container">
                {lifecycleMethods.map(method => (
                    <button 
                        key={method.code}
                        className="lifecycle-button"
                        onClick={() => setSelectedMethod(method)}
                    >
                        {method.name}
                    </button>
                ))}
            </div>

            {selectedMethod && lifecycleMethodsInfoCard(selectedMethod)}


            <div className="hooks-section">
                <h2>Functional Components + Hooks Equivalent</h2>
                <p>Functional components with hooks provide a more concise way to manage component logic and state without using lifecycle methods.</p>
                {lifeCycleDemoUsingHooks()}
            </div>    

        </div>
    );

}