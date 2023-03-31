
import '../css/Header.css';
import { Component } from 'react';
import logo from '../images/logo.png';
import $ from 'jquery';

class Header extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){ //life cycle 함수의 일종
    //jquery로 치면 ready와 같다
    $("#gnb>li").on(
        {
            "mouseover":function(){
                $("#lnb").stop().slideDown()
            },
            "mouseout":function(){
                $("#lnb").stop().slideUp()
            }
        }
    )
  }
  render(){
    return(
        <div id='header'>
        <div id='logo'>
            <a href="#">
                <img src={logo} alt='로고'/>
            </a>
        </div>
        <nav id='nav'>
            <ul id='gnb'>
                <li>
                    <a href="#">탑</a>
                    <ul id='lnb'>
                        <li>
                            <a href="#">
                                블라우스
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                티
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                셔츠
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                니트
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">아우터</a>
                    <ul id='lnb'>
                        <li>
                            <a href="#">
                                블라우스
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                티
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                셔츠
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                니트
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">팬츠</a>
                    <ul id='lnb'>
                        <li>
                            <a href="#">
                                블라우스
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                티
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                셔츠
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                니트
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">악세서리</a>
                    <ul id='lnb'>
                        <li>
                            <a href="#">
                                블라우스
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                티
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                셔츠
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                니트
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
    )
  }
}

export default Header;
