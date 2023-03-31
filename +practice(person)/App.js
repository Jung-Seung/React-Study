
import './App.css';
import { Component } from 'react';
import Person from './components/Person.js';
import lee from './images/lee.jpg';
import jeong from './images/jeong.jpg';
import song from './images/song.jpg';
import InputComp from './components/InputComp.js';

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            personList:[
                {id:1,profile:lee,name:'이ㅇㅇ',age:20,height:176.6},
                {id:2,profile:jeong,name:'정ㅇㅇ',age:21,height:164.2},
                {id:3,profile:song,name:'송ㅇㅇ',age:22,height:177.4},
            ]
        }
    }

    addPersonInfo=(name,age,height)=>{
        alert('추가(App)')
        alert('넘어온 이름:'+name)
        alert('넘어온 나이:'+age)
        alert('넘어온 키:'+height)
        const personObj ={name:name,age:age,height:height}
        const concatedList=this.state.personList.concat(personObj)
        this.setState({
            personList:concatedList
        })
    }
    deletePersonInfo=(id)=>{
        alert('삭제(App)')
        alert(id) //1,2,3
        const filteredList=this.state.personList.filter(
            (data)=>(data.id !== id) //넘어온 id값과 다른것만 반환한다
        )
        this.setState({
            personList:filteredList
        })
    }
    updatePersonInfo=(id,age)=>{
        alert('수정(App)')
        alert('수정할 대상 ID:'+id)
        alert('수정할 나이:'+age)
        const updatedList=this.state.personList.map(
            (data)=>(data.id === id)?
            ({...data,age:age}):data
        ) // ... - three dat operator - 삼점연산자(ES6)
        this.setState({
            personList:updatedList
        })
        //배열 원소의 id와 함수가 넘겨받은 id가 같다?
        //수정할 id를 찾았다
        //찾으면 뭐 바꿔서... 반환
        //못찾으면 그대로... 반환
    }

    render(){
    //map과 화살표함수를 이용해서
    //컴포넌트 반복생성을 아주 간결하고 강력하게
    const result = this.state.personList.map(
        (data)=>(<Person key={data.id} id={data.id}
        profile={data.profile}
        name={data.name} age={data.age}
        height={data.height}
        deletePersonInfo={this.deletePersonInfo}
        updatePersonInfo={this.updatePersonInfo}/>)
    )

       return(
        <div className='App'>
            <InputComp addPersonInfo={this.addPersonInfo}/>
            {result}
        </div>
       )
    }
}

export default App;
