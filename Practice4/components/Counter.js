import { Component } from "react";
//컴포넌트 클래스 가져온다(리액트 모듈에서)
//Counter 클래스는 Component 클래스에게 상속받는다
class Counter extends Component{
    constructor(props){ //생성자
        super(props) //부모생성자(상위클래스생성자)
        this.state={ //상태값
            num:0
        }
    }
    increase=()=>{ //화살표함수
    //일반함수를쓰면 함수 바인딩을 해야되고
        this.setState({
            num:this.state.num+1
        })
        //setState -> render
        //setState로 상태값 변경해야 리액트가 render로 다시 불러줘서
        //화면 갱신되고, 바뀐 상태값으로 화면에 출력되고
    }
    decrease=()=>{
        this.setState({
            num:this.state.num-1
        })
    }
    render(){
        return(
            <div className='counter'>
                <h1>{this.state.num}</h1>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter;