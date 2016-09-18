import React from 'react';
import axios from 'axios';

class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/mengmeng183')
      .then((res) => {
        console.log(res.data);
        this.setState({data:res.data,wait:false})
      })
  }
  render () {
    return(
      <div>
        {this.state.wait ? '正在加载数据' : <img src={this.state.data.avatar_url}/>}
      </div>
    )
  }
}

export default About;
