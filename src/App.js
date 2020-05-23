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
    // this.searchEmployee();
  }

  searchEmployee = (event) => {
    this.setState({ search: event.target.value })
  }


  render() {
    let filtered = employees.filter(
      person => {
        return person.name.indexOf(this.state.search) !== -1;
      });
    return (
      <div className="app">
        <Header />
        <Searchbar
        value={this.state.search}
        onChange={this.searchEmployee}
        />
        <TableContainer>
          <div className="container">
            {filtered.map(person => {
              return <TableData image={person.image}
                name={person.name}
                github={person.github}
                position={person.position} 
                key={person.id}/>
            })}
          </div>
        </TableContainer>
      </div>
    );
  }





}

export default App;
