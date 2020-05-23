import React from "react";

function Searchbar(props) {
    return (
        <div className="container">
            <div className="form-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="Find an Employee..."
                />
            </div>
        </div>
    );
}

export default Searchbar;