import React from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";
import employees from "../utils/employees.json";
import "./Table.css";


function Table() {
    return (
        <table>
            <TableHeader />
                {employees.map((person) => (
                    <TableData image={person.image}
                        name={person.name}
                        github={person.github}
                        position={person.position}
                    />
                ))}
        </table>
    );
}

export default Table;