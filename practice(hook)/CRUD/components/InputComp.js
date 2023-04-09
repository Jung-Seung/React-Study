import '../css/InputComp.css';
import { useState } from 'react';

function InputComp(props){
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [height,setHeight]=useState('')

    const addPersonInfo=()=>{
        alert('추가(InputComp)')
        props.addPersonInfo(name,age,height)
        //App가 주입시킨 함수
    }

    return(
        <div id='input-comp'>
            <input type='text' onChange={(e)=>setName(e.target.value)}/>
            <input type='text' onChange={(e)=>setAge(e.target.value)}/>
            <input type='text' onChange={(e)=>setHeight(e.target.value)}/>
            <button onClick={addPersonInfo}>추가</button>
        </div>
    )
}

export default InputComp;