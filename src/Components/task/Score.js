// WRONG CODE

// import React, { useState } from 'react';

// function Score() {
//     const [score, setScore] = useState(0);

//     return (
//         <div>
//             <p>Τρέχον σκορ: {score}</p>
//             <button onClick={() => setScore(score + 1)}>Αύξηση</button>
//         </div>
//     );
// }

// CORRECT CODE

import React, { useState } from 'react';

function Score() {
    const [score, setScore] = useState(0);

    return (
        <div>
            <p>Τρέχον σκορ REDUX: {score}</p>
            <button onClick={() => setScore(score + 1)}>Αύξηση</button>
        </div>
    );
}

export default Score;