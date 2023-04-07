
import { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  componentDidMount(){
    //this.getMovies() //서버에 데이터 요청
    //this.getMovieDetail()
    // this.getDogData()
    this.getWeatherData()
  }
  getMovies=async()=>{ //CORS 오류 발생 - Cross Origin Resource Sharing
    //비동기적으로 동작
    //XMLHttpRequest -> $.get, post, ajax -> axios
    //javascript -> jquery -> react
    const result = await axios.get('/api/v2/list_movies.json?page=5&order_by=like_count') //proxy서버 설정해서 해결...YTS Movie API 사용법...
    //axios 메서드로 get방식 요청을 서버에 전송하여 응답을 받음
    console.log(result)
  }
  getMovieDetail=async()=>{
    const result = await axios.get('/api/v2/movie_details.json?movie_id=15&with_images=true&with_cast=true')
    console.log(result)
  }
  getDogData=async()=>{
    const result = await axios.get('https://dog.ceo/api/breeds/image/random')
    console.log(result)
  }
  getWeatherData=async()=>{
    const result = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&APPID=ff9c1555c4cc752b0062102602dcc9ad')
    console.log(result)
  }

  render(){
    return(
      <div id='App'>

      </div>
    )
  }
}

export default App;
