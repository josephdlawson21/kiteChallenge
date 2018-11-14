import React from 'react'

class Header extends React.Component {

  state = {
    selectedTab: 'Projects'
  }
  handleClick = (e) => {
    this.setState({
      selectedTab: e.target.innerHTML
    });
  }


  render () {
    return(
      <div className="header">
        <div className="logo">
          Kitewheel
        </div>
        <div className='headerTabs'>
          <div className={this.state.selectedTab === 'Projects' ? 'selectedTab' : 'headerTab' } onClick={this.handleClick}>
            Projects
          </div>
          <div className={this.state.selectedTab === 'Admin' ? 'selectedTab' : 'headerTab' }  onClick={this.handleClick}>
            Admin
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
