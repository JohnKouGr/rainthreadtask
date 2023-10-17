// WRONG CODE

// import React, { useState } from 'react';

// function ListComponent({ numbers }) {
//     const squaredNumbers = numbers.map(num => Math.sqrt(num));
//     console.log('Computed squared numbers!');

//     return (
//         <ul>
//             {squaredNumbers.map((num, index) => <li key={index}>{num}</li>)}
//         </ul>
//     );
// }

// function TestComponent() {
//     const [numbers, setNumbers] = useState([1, 4, 9, 16]);

//     return (
//         <div>
//             <ListComponent numbers={numbers} />
//             <button onClick={() => setNumbers([...numbers, 25])}>Προσθήκη 25</button>
//         </div>
//     );
// }

// CORRECT CODE

import React, { useMemo, useState } from 'react';

function ListComponent({ numbers }) {
    const squaredNumbers = numbers.map(num => Math.sqrt(num));
    console.log('Computed squared numbers!');

    return (
        <ul>
            {squaredNumbers.map((num, index) => <li key={index}>{num}</li>)}
        </ul>
    );
};

function TestComponentUseMemo() {
    const [numbers, setNumbers] = useState([1, 4, 9, 16]);

    const rememberListComponent = useMemo(function () {
        return <ListComponent numbers={numbers} />;
    }, [numbers]);

    return (
        <div>
            <p>Remember with useMemo</p>
            {rememberListComponent}
            <button onClick={() => setNumbers([...numbers, 25])}>Προσθήκη 25</button>
        </div>
    );
};

export default TestComponentUseMemo;