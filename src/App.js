import React, { Component } from 'react';
import './App.css';

import Header from './components/header'
import Filter from './components/filter'
import Dropdown from './components/dropdown'
import ProjectCard from './components/projectCard'
import testData from './testData'

class App extends Component {
  state = {
    projects: []
  }

  componentDidMount() {
    this.setState({
      projects: testData
    });
  }

  render() {
    console.log(this.state.projects);
    let project = this.state.projects.map((data, i) =>  <ProjectCard key={i} project={data} /> )
    return (
      <div className="App">
        <Header />
        <Dropdown />
        <Filter />
        <div className="projectCardDiv">
          {project}
        </div>
      </div>
    );
  }
}

export default App;
