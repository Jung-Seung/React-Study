import '../css/BBB.css'
import SubB1 from './BBB/SubB1.js'
import SubB2 from './BBB/SubB2.js'
import {Routes,Route} from 'react-router-dom'

function BBB(){
    return (
        <div id='bbb'>
            <Routes>
              <Route path='SubB1' element={<SubB1/>}/>
              <Route path='SubB2' element={<SubB2/>}/>
            </Routes>
        </div>
    )
}
export default BBB;