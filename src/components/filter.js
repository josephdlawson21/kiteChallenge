import React from "react";

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <button> &#x2295; Create Project</button>
        <input
          type="text"
          placeholder="filter"
          value={this.props.value}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Filter;
