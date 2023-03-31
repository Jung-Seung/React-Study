import '../css/Movie.css';

function Movie(props){
    return(
        <div id='movie'>
            <div id='movie-img'>
                <img src={props.cover}/>
            </div>
            <div id='movie-desc'>
                <div>
                    제목:{props.title}
                </div>
                <div>
                    러닝타임:{props.running}
                </div>
                <div>
                    평점:{props.rating}
                </div>
                <div>
                    <button onClick={}>수정</button>
                    <button onClick={}>삭제</button>
                </div>
            </div>
        </div>
    )
}

export default Movie;