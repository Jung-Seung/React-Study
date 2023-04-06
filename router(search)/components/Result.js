import { Component } from 'react';
import '../css/Result.css';
import queryString from 'query-string';
import axios from 'axios';

class Result extends Component{
    constructor(props){
        super(props)
        this.state={
    
        }
    }

    componentDidMount(){
        console.log('componentDidMount')
        console.log(window.location) //location 객체 전체 - 너무 광범위함
        console.log(window.location.herf) //http://localhost:3000/search?query=hello&ie=utf-8
        console.log(window.location.search) //?query=hello&ie=utf-8
        const queryObj=queryString.parse(window.location.search)
        console.log(queryObj) //{ie:"utf-8",query:"hello"}
        console.log(queryObj.query) //"hello"
        this.getItems() //서버에 데이터 요청
    }
    getItems=async()=>{ //비동기적으로 동작
        //XMLHttpRequest -> $.get, $.post, $.ajax -> axios
        //javascript -> jquery -> react
        const result = await axios.get('https://yts.mx/api/v2/list_movies.json')
        //axios 메서드로 get방식 요청을 서버에 전송하여 응답을 받음
        console.log(result)
    }

    render(){
        return(
            <div id='result'>
                result
            </div>
        )
    }
}

export default Result;