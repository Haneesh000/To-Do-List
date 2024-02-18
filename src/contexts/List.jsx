import React from "react";

const ListContext = React.createContext();

function ListProvider(props) {
    const [list, setList] = React.useState([]);

    function updateList(newList) {
        setList(newList);
    }

    return (
        <ListContext.Provider value={{list, updateList}}>
            {props.children}
        </ListContext.Provider>
    )
}

export {ListContext, ListProvider};
