import React from "react";
import Table from "./Table";


function TableContainer({employees}) {
    return (
        <div className="container">
            <Table employees={employees}/>
        </div>
    );
}

export default TableContainer;