import { Component } from 'react';
import '../css/Person.css';

class Person extends Component{
    
    constructor(props){
        super(props)
        this.state={
            age:this.props.age,
            edit:false
        }
    }
    deletePersonInfo=()=>{
        alert('삭제(Person)')
        const id=this.props.id
        this.props.deletePersonInfo(id)
        //App한테 넘겨받은 함수
    }
    updatePersonInfo=()=>{
        alert('수정(Person)')
        //수정불가능모드일때 수정버튼 누르면 그냥 수정가능모드 화면으로 전환
        //수정가능모드일때 수정버튼 누르면 그때는 값을 위로 보낸다
        if(this.state.edit===true){
            const id=this.props.id
            const age=this.state.age
            this.props.updatePersonInfo(id,age)
        }
        this.setState({
            edit: !this.state.edit
        }) //false->true->false->...
    }
    ageChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            age:e.target.value
        })
    }

    render(){
        const {edit}=this.state
        //상태값 edit으로 조건부 렌더링(conditional rendering)
        if(edit===false){ //시작화면 - 수정불가능모드
            return(
                <div id='person'>
                    <div id='person-profile'>
                        <img src={this.props.profile} alt="profile"/>
                    </div>
                    <div id='person-desc'>
                        <div>이름:{this.props.name}</div>
                        <div>나이:{this.props.age}</div>
                        <div>키:{this.props.height}</div>
                        <div>
                            <button onClick={this.updatePersonInfo}>수정</button>
                            <button onClick={this.deletePersonInfo}>삭제</button>
                        </div> 
                    </div>    
                </div>
            )
        }else if(edit===true){ //수정가능모드
            return(
                <div id='person'>
                    <div id='person-profile'>
                        <img src={this.props.profile} alt="profile"/>
                    </div>
                    <div id='person-desc'>
                        <div>이름:{this.props.name}</div>
                        <div>
                            나이:<input type="text" defaultValue={this.props.age}
                            onChange={this.ageChange}/>
                        </div>
                        <div>키:{this.props.height}</div>
                        <div>
                            <button onClick={this.updatePersonInfo}>수정</button>
                            <button onClick={this.deletePersonInfo}>삭제</button>
                        </div> 
                    </div>
                </div>
            )
        }
    }
}

export default Person;