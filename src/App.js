import React from 'react';
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import TableData from "./components/TableData";
import TableContainer from "./components/TableContainer";
import employees from "./utils/employees.json";


class App extends React.Component {
  state = {
    search: ""
  }

  componentDidMount() {
    document.title = "Employees"

    // if(!this.state.search){
    //   console.log("hi");
    // }

  }

  handleInputChange = event => {
    console.log(event.target.value);
    
    this.setState({ 
      search: event.target.value 
    })
  }


  render() {
    let filtered = employees.filter(
      person => {
        return person.name.toLowerCase().indexOf(this.state.search) !== -1;
      });

      console.log(filtered);

    return (
      <div className="app">
        <Header />
        {/* <Searchbar
        value={this.state.search}
        onChange={this.handleInputChange}
        /> */}
        <div className="container">
            <div className="form-group">
                <input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="Search by Name..."
                />
            </div>
        </div>
        <TableContainer>
          <div className="container">
            {filtered.map(person => {
              return <TableData person={person}/>
            })}
          </div>
        </TableContainer>
      </div>
    );
  }





}

export default App;
