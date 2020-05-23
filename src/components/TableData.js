import React from "react";


function TableData(props) {
    return (
        <tr key={props.id}>
            <td><img src={props.image} height="50px" alt={props.name} title={props.name}></img></td>
            <td>{props.name}</td>
            <td>{props.github}</td>
            <td>{props.position}</td>
        </tr>
    );
}

export default TableData;