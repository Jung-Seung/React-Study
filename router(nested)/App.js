
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home.js';
import AAA from './components/AAA.js';
import BBB from './components/BBB.js';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/AAA/*' element={<AAA/>}/>
              <Route path='/BBB/*' element={<BBB/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
