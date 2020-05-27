import React from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import "./Table.css";

function Table({employees}) {
    return (
        <table>
            <TableHeader />
            <tbody>
                {employees.map((person) => (
                    <TableData image={person.image}
                        name={person.name}
                        github={person.github}
                        position={person.position}
                        key={person.id}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default Table;