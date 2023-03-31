import '../css/InputComp.css';
import { Component } from 'react';

class InputComp extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            running:'',
            rating:''
        }
    }

    addMovieInfo=()=>{
        alert("추가!(InputComp)")
        const{title,running,rating}=this.state
        //비구조화할당,구조분해할당
        this.props.addMovieInfo(title,running,rating)
        //App가 주입시킨 함수
    }

    titleChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            title:e.target.value
        })
    }

    runningChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            running:e.target.value
        })
    }

    ratingChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            rating:e.target.value
        })
    }

    render(){
        return(
            <div id='input-comp'>
                <input type='text' placeholder='제목입력' onChange={this.titleChange}/>
                <input type='text' placeholder='러닝타임입력' onChange={this.runningChange}/>
                <input type='text' placeholder='평점입력' onChange={this.ratingChange}/>
                <button onClick={this.addMovieInfo}>추가</button>
            </div>
        )
    }
}

export default InputComp;