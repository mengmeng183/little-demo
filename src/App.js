import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
class App extends React.Component {
  render () {
    return(
      <div className='container'>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
export default App;
