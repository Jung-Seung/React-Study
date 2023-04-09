import '../css/BoardList.css';
import Board from './Board';

function BoardList(props){
    const result = props.boardList.map(
        (data)=>(<Board key={data.no}
        no={data.no} title={data.title} writer={data.writer}
        writeDate={data.writeDate} hits={data.hits}/>)
    )

    return(
        <div id='board-list'>
            {result}
        </div>
    )
}

export default BoardList;