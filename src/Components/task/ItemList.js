// WRONG CODE 

// import React, { useState } from 'react';

// function ItemList() {
//     const [items, setItems] = useState(['Αντικείμενο 1', 'Αντικείμενο 2']);
//     const newItems = [...items, 'Νέο Αντικείμενο'];

//     function addItem() {
//         setItems(newItems);
//     }

//     return (
//         <div>
//             <ul>
//                 {items.map(item => <li key={item}>{item}</li>)}
//             </ul>
//             <button onClick={addItem}>Προσθήκη Αντικειμένου</button>
//         </div>
//     );
// }

// CORRECT CODE

import React from 'react';

function ItemList() {
    const newItems = ['Αντικείμενο 1', 'Αντικείμενο 2'];

    function addItem() {
        const ulList = document.getElementById('ul-items')
        const li = document.createElement('li');

        li.innerHTML = 'Νέο Αντικείμενο';
        ulList.appendChild(li);
        newItems.push('Νέο Αντικείμενο');
    }

    return (
        <div>
            <ul id='ul-items'>
                {newItems.map(item => <li key={item}>{item}</li>)}
            </ul>
            <button onClick={addItem}>Προσθήκη Αντικειμένου</button>
        </div>
    );
}

export default ItemList;