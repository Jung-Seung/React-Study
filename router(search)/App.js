
import { Component } from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home.js';
import Search from './components/Search.js';
import Result from './components/Result.js';

class App extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  
  render(){
    return(
      <div id='App'>
        <BrowserRouter>
          <Search/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Result/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
