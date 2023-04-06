import { Component } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Profile from "./components/Profile.js";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div id="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
