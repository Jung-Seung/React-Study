
import { Component } from 'react';
import './App.css';
import Menu1 from './components/Menu1.js';
import Menu2 from './components/Menu2.js';
const menuList={
  0:<Menu1/>,
  1:<Menu2/>
}

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      menu:0
    }
  }
  setMenu=(menu_no)=>{
    this.setState({
      menu:menu_no
    })
  }

  render(){
    const {menu}=this.state
    return(
      <div id='App'>
        <div id='tab'>
          <div id='tab-btn'>
            <ul>
              <li className={menu===0? 'active':''}
              onClick={()=>this.setMenu(0)}>Menu1</li>

              <li className={menu===1? 'active':''}
              onClick={()=>this.setMenu(1)}>Menu2</li>
            </ul>
          </div>
          <div id='tab-contents'>
            {menuList[menu]}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
