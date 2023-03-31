
import './App.css';
import Header from './components/Header.js';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div id='wrap'>
        <Header/>
      </div>
    )
  }
}

export default App;
