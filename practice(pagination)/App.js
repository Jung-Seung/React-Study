
import { Component } from 'react';
import './App.css';
import BoardList from './components/BoardList.js';
import Pagination from './components/Pagination.js';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      boardList:[
        {no:10,title:'title-10',contents:'contents-10',writer:'writer-10',writeDate:'2023-03-10',hits:10},
        {no:9,title:'title-9',contents:'contents-9',writer:'writer-9',writeDate:'2023-03-09',hits:9},
        {no:8,title:'title-8',contents:'contents-8',writer:'writer-8',writeDate:'2023-03-08',hits:8},
        {no:7,title:'title-7',contents:'contents-7',writer:'writer-7',writeDate:'2023-03-07',hits:7},
        {no:6,title:'title-6',contents:'contents-6',writer:'writer-6',writeDate:'2023-03-06',hits:6},
        {no:5,title:'title-5',contents:'contents-5',writer:'writer-5',writeDate:'2023-03-05',hits:5},
        {no:4,title:'title-4',contents:'contents-4',writer:'writer-4',writeDate:'2023-03-04',hits:4},
        {no:3,title:'title-3',contents:'contents-3',writer:'writer-3',writeDate:'2023-03-03',hits:3},
        {no:2,title:'title-2',contents:'contents-2',writer:'writer-2',writeDate:'2023-03-02',hits:2},
        {no:1,title:'title-1',contents:'contents-1',writer:'writer-1',writeDate:'2023-03-01',hits:1}
      ],
      boardPerPage:3,
      currentPage:1,
    }
  }
  setCurrentPage=(page)=>{
    this.setState({
      currentPage:page
    })
  }
  setCurrentList=(boardList)=>{
    const {currentPage,boardPerPage}=this.state;
    const startIndex=(currentPage-1)*boardPerPage;
    const endIndex=startIndex+boardPerPage;
    const slicedList=boardList.slice(startIndex,endIndex);
    //slice로 배열 일부분 반환
    //0번째부터 3번째 미만
    //slice(0,3)-0,1,2 - 1page click
    //slice(3,6)-3,4,5 - 2page click
    //slice(6,9)-6,7,8 - 3page click
    //slice(9,12)-9,X  - 4page click
    return slicedList;
  }

  render(){
    const {boardList,boardPerPage,currentPage}=this.state;
    //비구조화할당, 구조분해할당, destructuring assignment
    return(
      <div id='App'>
        <BoardList boardList={this.setCurrentList(boardList)}/>
        <Pagination total={boardList.length}
        boardPerPage={boardPerPage}
        currentPage={currentPage}
        setCurrentPage={this.setCurrentPage}/>
      </div>
    )
  }
}

export default App;
