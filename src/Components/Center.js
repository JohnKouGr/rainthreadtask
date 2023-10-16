import React from "react";
import Counter from "./task/Counter";
import ItemList from "./task/ItemList";
import Score from "./task/Score";

function Center() {
    return (
        <>
            <Counter />
            <ItemList />
            <Score />
        </>
    )
}

export default Center;