
import './App.css';
import { useState } from 'react';
import Person from './components/Person.js';
import InputComp from './components/InputComp.js';

function App() {
  const [personList,setPersonList]=useState([
    {id:1,name:'이ㅇㅇ',age:20,height:176.7},
    {id:2,name:'김ㅇㅇ',age:21,height:164.3},
    {id:3,name:'최ㅇㅇ',age:22,height:180.6}
  ])

  const addPersonInfo=(name,age,height)=>{
    alert('추가(App)')
    alert('넘어온 이름:'+name)
    alert('넘어온 나이:'+age)
    alert('넘어온 키:'+height)
    const personObj = {id:4,name:name,age:age,height:height}
    const concatedList = personList.concat(personObj)
    setPersonList(concatedList)
  }
  const deletePersonInfo=(id)=>{
    alert("삭제(App)")
    alert("넘겨받은 ID:"+id)
    const filterdList = personList.filter(
      (data)=>(data.id !== id)
    )
    setPersonList(filterdList)
  }
  const updatePersonInfo=(id,age)=>{
    alert("수정(App)")
    alert("넘겨받은 ID:"+id)
    alert("넘겨받은 Age:"+age)
    const updatePersonObj = {age:age}
    const updatedList = personList.map(
      (data)=>(data.id === id)?
      ({...data,...updatePersonObj}):data
    )
    // ... - three dot operator
    //ES6,7,8,9 ... typescript
    setPersonList(updatedList)
  }

  const result = personList.map(
    (data)=>(<Person key={data.id} id={data.id}
    name={data.name} age={data.age} height={data.height}
    deletePersonInfo={deletePersonInfo}
    updatePersonInfo={updatePersonInfo}/>)
  )

  return (
    <div className="App">
      <InputComp addPersonInfo={addPersonInfo}/>
      {result}
    </div>
  );
}

export default App;
