import React from "react";

function AddSection(props) {
    const [task, setTask] = React.useState("");

    function handleChange(event) {
        setTask(event.target.value);
    }

    function handleClick(event) {
        const temp = [...props.list];
        temp.push(task);
        props.updateList(temp);
        setTask("");
    }

    return (
        <div className="addSection">
            <input type="text" placeholder="Add your task here" value={task} onChange={handleChange} />
            <button onClick={handleClick}>+</button>
        </div>
    )
}

export default AddSection;
