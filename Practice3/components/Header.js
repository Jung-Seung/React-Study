import '../css/Header.css';
import logo from '../images/logo.png'

function Header(){
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

export default Header;