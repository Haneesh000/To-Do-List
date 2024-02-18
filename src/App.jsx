import React from "react";
import ToDoList from "./components/ToDoList";
import {ListProvider} from "./contexts/List";

function App() {
    return (
        <div>
            <ListProvider>
                <ToDoList />
            </ListProvider>
        </div>
    );
}

export default App;
