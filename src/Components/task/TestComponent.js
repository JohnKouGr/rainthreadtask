// WRONG CODE

// import React, { useState } from 'react';

// function ButtonComponent({ onClick }) {
//     console.log('ButtonComponent rerendered!');
//     return <button onClick={onClick}>Κάντε κλικ!</button>;
// }

// function TestComponent() {
//     const [count, setCount] = useState(0);

//     function handleClick() {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <p>Κλικς: {count}</p>
//             <ButtonComponent onClick={handleClick} />
//         </div>
//     );
// }

// CORRECT CODE

import React, { useCallback, useState } from 'react';

function ButtonComponent({ onClick }) { // here we useMemo could also be used to avoid creating a new instance of the component every re-render
    console.log('ButtonComponent rerendered!');
    return <button onClick={onClick}>Κάντε κλικ!</button>;
}

function TestComponent() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]); // using useCallback to cache function definition and skip re-rendering as long as dependencies don't change. Which in this case its count

    return (
        <div>
            <p>Κλικς useCallback: {count}</p>
            <ButtonComponent onClick={handleClick} />
        </div>
    );
};

export default TestComponent;