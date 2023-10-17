import React from "react";
import Counter from "./task/Counter";
import ItemList from "./task/ItemList";
import Score from "./task/Score";
import TestComponent from "./task/TestComponent";
import TestComponentUseMemo from "./task/TestComponentUseMemo";

function Center() {
    return (
        <>
            <Counter />
            <ItemList />
            <Score />
            <TestComponent />
            <TestComponentUseMemo />
        </>
    )
}

export default Center;