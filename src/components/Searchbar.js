import React from "react";

function Searchbar() {
    return (
        <div className="container">
        <form className="search">
      <div className="form-group">
        <input
          value=""
          onChange=""
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search..."
        />
      </div>
    </form>
    </div>
    );
}

export default Searchbar;