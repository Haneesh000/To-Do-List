import React from "react";

function ListItem(props) {
    const [checked, setChecked] = React.useState(false);

    function handleChange(event) {
        setChecked(event.target.checked);
    }

    function deleteItem() {
        const temp = [...props.list];
        temp.splice(props.number, 1);
        props.updateList(temp);
    }

    return (
        <li>
            <input
                type="checkbox" name={"task"+(props.number+1)}
                id={"task"+(props.number+1)}
                onChange={handleChange}
            />
            <label
                htmlFor={"task"+(props.number+1)}
                style={{
                    textDecoration: checked ? "line-through" : "none",
                    userSelect: "none"
                }}
            >
                {props.task}
            </label>
            {
                checked ?
                    <button onClick={deleteItem} style={{position: "absolute", right: "30%", width: "3%"}}>&times;</button>
                    : ""
            }
        </li>
    )
}

export default ListItem;
