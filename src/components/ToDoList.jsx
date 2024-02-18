import React from "react";
import "../css/ToDoList.css";
import {ListContext} from "../contexts/List";
import ListItem from "./ListItem";
import AddSection from "./AddSection";

function ToDoList() {
    const {list, updateList} = React.useContext(ListContext);

    React.useEffect(() => {
        updateList(["Walk the dog", "Make the bed", "Do the dishes"]);
    }, []);

    React.useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <div className="to-do-list-container">
            <h1>My To-Do List</h1>
            <ul className="list">
                {list.map((task, index) => {
                    return (
                        <ListItem key={index} number={index} task={task} list={list} updateList={updateList} />
                    )
                })}
            </ul>
            <AddSection list={list} updateList={updateList} />
        </div>
    )
}

export default ToDoList;
