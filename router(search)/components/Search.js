import { Component } from 'react';
import '../css/Search.css';

class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            query:''
        }
    }

    queryChange=(e)=>{
        console.log(e.target.value)
        const query = e.target.value
        const trimQuery = query.trim() //trim으로 양옆 공백 제거
        this.setState({
            query:trimQuery
        })
    }
    searchItem=()=>{
        const {query}=this.state
        if(query===''){
            alert('검색어를 입력해주세요')
            return
        }
        window.location.href=`/search?query=${query}&ie=utf-8`
    }
    // onKeyPress=(e)=>{
    //     const onClick=
    //     if(e.key=='Enter'){
    //         onClick()
    //     }
    // }

    render(){
        return(
            <div id='search'>
                <input type='text' onChange={this.queryChange}/>
                <button onClick={this.searchItem}>검색</button>
            </div>
        )
    }
}

export default Search;