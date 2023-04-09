import '../css/Board.css';

function Board(props){
    return(
        <div id='board'>
            <span>{props.no}</span>
            <span>{props.title}</span>
            <span>{props.writer}</span>
            <span>{props.writeDate}</span>
            <span>{props.hits}</span>
        </div>
    )
}

export default Board;