
import './App.css';
import {Component} from 'react';
import Movie from './components/Movie.js';
import cover1 from './images/cover1.jpg';
import cover2 from './images/cover2.jpg';
import cover3 from './images/cover3.jpg';
import InputComp from './components/InputComp.js';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
       movieList:[
          {id:1,cover:cover1,title:'반지의제왕',running:130,rating:9.4},
          {id:2,cover:cover2,title:'아바타',running:140,rating:9.3},
          {id:3,cover:cover3,title:'소울메이트',running:120,rating:8.1},
       ]
    }
  }

  addMovieInfo=(title,running,rating)=>{
    alert("추가(App)")
    alert("넘어온 제목:"+title)
    alert("넘어온 러닝타임:"+running)
    alert("넘어온 평점:"+rating)
    const movieObj={title:title,running:running,rating:rating}
    const concatedList = this.state.movieList.concat(movieObj)
    this.setState({
      movieList:concatedList
    })
  }

  render(){
    const result = this.state.movieList.map(
      (data)=>(<Movie key={data.id} cover={data.cover}
      title={data.title} running={data.running}
      rating={data.rating}/>)
    )
    return(
      <div className='App'>
        <InputComp addMovieInfo={this.addMovieInfo}/>
        {result}
      </div>
    )
  }
}

export default App;
