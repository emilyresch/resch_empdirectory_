import React from 'react';
import Header from "./components/Header";
// import Searchbar from "./components/Searchbar";
import TableData from "./components/TableData";
import TableContainer from "./components/TableContainer";
import employees from "./utils/employees.json";


class App extends React.Component {
  state = {
    search: "",
    employees: employees,
    filteredEmployees: []
  }

  componentDidMount() {
    this.filterEmp()
    document.title = "Employees"
  }

  handleInputChange = event => {
    console.log(event.target.value);
    
    this.setState({ 
      search: event.target.value 
    })
    this.filterEmp();
  }
  filterEmp = () => {
    let filtered = this.state.employees.filter(
      person => {
        return person.name.toLowerCase().indexOf(this.state.search) !== -1;
      });
      this.setState({
        filteredEmployees: filtered
      });
      console.log(filtered);

  }
  
  
  render() {

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
        <TableContainer employees={this.state.filteredEmployees}>
          {/* <div className="container">
            {filtered.filter(person => {
              return <TableData person={person}/>
            })}
          </div> */}
        </TableContainer>
      </div>
    );
  }





}

export default App;
