import React, { Component } from "react";
import "./App.css";

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
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    console.log(this.state.projects);
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
