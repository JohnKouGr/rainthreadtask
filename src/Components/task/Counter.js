// WRONG CODE

// import React, { useState } from 'react';

// function Counter() {
//     const [count, setCount] = useState(0);

//     function increaseCount() {
//         count = count + 1;
//     }

//     return (
//         <div>
//             <p>Τρέχων σκορ: {count}</p>
//             <button onClick={increaseCount}>Αύξηση</button>
//         </div>
//     );
// }

// CORRECT CODE

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>Τρέχων σκορ: {count}</p>
            <button onClick={increaseCount}>Αύξηση</button>
        </div>
    );
}

export default Counter;