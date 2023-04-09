
import '../css/Person.css';
import { useState } from 'react';

function Person(props){
    const [edit,setEdit]=useState(false)
    const [age,setAge]=useState(props.age)
    const deletePersonInfo=()=>{
        alert("삭제(Person)")
        const id = props.id
        props.deletePersonInfo(id)
    }
    const updatePersonInfo=()=>{
        alert("수정(Person)")
        const id = props.id
        props.updatePersonInfo(id,age)
        setEdit(!edit)
    }
    
    if(edit===false){
        return(
            <div id='person'>
                <div>
                    이름:{props.name}
                </div>
                <div>
                    나이:{props.age}
                </div>
                <div>
                    키:{props.height}
                </div>
                <div>
                    <button onClick={deletePersonInfo}>삭제</button>
                    <button onClick={updatePersonInfo}>수정</button>
                </div>
            </div>
        )
    }else if(edit===true){
        return(
            <div id='person'>
                <div>
                    이름:{props.name}
                </div>
                <div>
                    나이:<input type='text'
                    defaultValue={props.age}
                    onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div>
                    키:{props.height}
                </div>
                <div>
                    <button onClick={deletePersonInfo}>삭제</button>
                    <button onClick={updatePersonInfo}>수정</button>
                </div>
            </div>
        )
    }

    
}

export default Person;