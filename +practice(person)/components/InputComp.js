import '../css/InputComp.css';
import { Component } from 'react';

class InputComp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:'',
            height:''
        }
    }

    addPersonInfo=()=>{
        alert('추가(InputComp)')
        const {name,age,height}=this.state
        //const name=this.state.name
        //conat age=this.state.age
        this.props.addPersonInfo(name,age,height)
        //App가 주입시킨 함수
    }

    nameChange=(e)=>{//이벤트객체가 매개변수 e로 넘어오고
        console.log(e.target.value)//이벤트 대상의 value값 출력
        this.setState({//input에서 읽은 value를 상태값에 저장
            name:e.target.value
        })
    }
    ageChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            age:e.target.value
        })
    }
    heightChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            height:e.target.value
        })
    }
    inputChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <div id='input-comp'>
                <input type='text' placeholder='이름 입력' name="name" onChange={this.nameChange}/>   
                <input type='text' placeholder='나이 입력' name="age" onChange={this.ageChange}/>   
                <input type='text' placeholder='키 입력' name="height" onChange={this.heightChange}/>  
                <button onClick={this.addPersonInfo}>추가</button>
            </div>
        )
    }
}

export default InputComp;