import React, { PropTypes } from 'react'
import {Link,activeStyle} from 'react-router';
class NavBar extends React.Component {
  render () {
    return(
      <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Meng</Link>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <Link to="/" activeStyle={{backgroundColor:'#FF4081',color:'#fff'}} onlyActiveOnIndex={true}>Home</Link>
            </li>
            <li>
              <Link to="/work"  activeStyle={{backgroundColor:'#FF4081',color:'#fff'}}>Work</Link>
            </li>
            <li>
              <Link to="/about" activeStyle={{backgroundColor:'#FF4081',color:'#fff'}}>AboutMe</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
