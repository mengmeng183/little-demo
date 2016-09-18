import React from 'react'

class Blog extends React.Component {
  render () {
    console.log(this.props);
    return(
      <div>
        {
          this.props.params.title=='a' ? '这是a页面' :
          this.props.params.title=='b' ? '这是b页面' :
          this.props.params.title=='c' ? '这是c页面' :
          this.props.params.title=='d' ? '这是d页面' :
          this.props.params.title=='e' ? '这是e页面' :
          '此页面没有内容'

        }
      </div>
    )
  }
}

export default Blog;
