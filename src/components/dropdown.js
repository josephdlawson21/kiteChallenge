import React from 'react'

class Dropdown extends React.Component {
  state = {
    isOpen: false
  }

  renderDropdownOptions = () => {
    return(
      <div className='dropdownOptions'>
        <input type="text" placeholder="filter"/>
        <div>option 1</div>
        <div>option 2</div>
        <div>option 3</div>
        <div>option 4</div>
        <div>option 5</div>
        <div>option 6</div>
        <div>option 7</div>
        <div>option 8</div>
        <div>option 9</div>
        <div>option 10</div>
        <div>option 11</div>
        <div>option 12</div>
      </div>
    )
  }

  handleClick = () => {
    console.log(this.state.isOpen);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render () {
    return(
      <div className="dropdownDiv">
        <div className="dropdownTitle">
          Kitewheel
        </div>
        <div className="dropdownFormat">
          <div className={this.state.isOpen ? "rotateSymbol" : "dropdownSymbol"} onClick={this.handleClick}>
            	&rsaquo;
          </div>
          {this.state.isOpen && this.renderDropdownOptions()}
        </div>

      </div>
    )
  }
}

export default Dropdown;
