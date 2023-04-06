import '../css/Header.css';

function Header(){
    return(
        <div id='header'>
            <ul>
                <li>
                    <a href='/'>
                        홈
                    </a>
                </li>
                <li>
                    <a href='/profile'>
                        프로필
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Header;