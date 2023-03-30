
import './App.css';
import Header from './components/Header.js'
//현재위치에서 components 폴더 안에 Header.js파일에서
//Header 컴포넌트를 가져온다
import Slide from './components/Slide.js'
import Contents from './components/Contents.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <div id="wrap">
        <Header/>
        <Slide/>
        <Contents/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
