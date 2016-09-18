import React, { PropTypes } from 'react';
import {hashHistory} from 'react-router';
class Home extends React.Component {
  handleClick(){
    hashHistory.push('work');
  }
  render () {
    return(
      <div className="jumbotron">
        <h1>欢迎光临</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.handleClick.bind(this)}>Learn more</a></p>
      </div>
    )
  }
}

export default Home;
