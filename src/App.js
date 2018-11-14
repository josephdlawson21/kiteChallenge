import React, { Component } from "react";
import "./App.css";


// Import components
import Header from "./components/header";
import Filter from "./components/filter";
import Dropdown from "./components/dropdown";
import ProjectCard from "./components/projectCard";
import testData from "./testData";

class App extends Component {
  state = {
    projects: [],
    filter: ""
  };

  componentDidMount() {
    // Simulate a api call on to get projects data and put it into state
    this.setState({
      projects: testData
    });
  }

  handleFilter = () => {
    return this.state.projects.filter(project =>
      project.title.includes(this.state.filter)
    );
  };

  handleChange = e => {
    //Update Filter term
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    // iterate through the filtered projects and render a project card for each
    let project = this.handleFilter().map((data, i) => (
      <ProjectCard key={i} project={data} />
    ));

    return (
      <div className="App">
        <Header />
        <Dropdown />
        <Filter handleChange={this.handleChange} value={this.state.filter} />
        <div className="projectCardDiv">{project}</div>
      </div>
    );
  }
}

export default App;
