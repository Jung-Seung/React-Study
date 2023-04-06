import { Component } from 'react';
import '../css/BoardList.css';
import Board from './Board.js';

class BoardList extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render(){
        const result=this.props.boardList.map(
            (data)=>(<Board key={data.no}
            no={data.no} title={data.title} writer={data.writer}
            writeDate={data.writeDate} hits={data.hits}/>)
        )

        return(
            <div id='board-list'>
                <Board no={'번호'} title={'제목'} writer={'저자'}
                writeDate={'글쓴날짜'} hits={'조회수'}/>
                {result}
            </div>
        )
    }
}

export default BoardList;