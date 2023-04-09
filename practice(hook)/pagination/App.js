import './App.css';
import BoardList from './components/BoardList';
import Pagination from './components/Pagination';
import { useState } from 'react';

function App() {
  const [boardList,setBoardList]=useState([
    {no:10,title:'title-10',contents:'contents-10',writer:'writer-10',writeDate:'2023-03-10',hits:10},
    {no:9, title:'title-9',contents:'contents-9',writer:'writer-9',writeDate:'2023-03-09',hits:9},
    {no:8, title:'title-8',contents:'contents-8',writer:'writer-8',writeDate:'2023-03-08',hits:8},
    {no:7, title:'title-7',contents:'contents-7',writer:'writer-7',writeDate:'2023-03-07',hits:7},
    {no:6, title:'title-6',contents:'contents-6',writer:'writer-6',writeDate:'2023-03-06',hits:6},
    {no:5, title:'title-5',contents:'contents-5',writer:'writer-5',writeDate:'2023-03-05',hits:5},
    {no:4, title:'title-4',contents:'contents-4',writer:'writer-4',writeDate:'2023-03-04',hits:4},
    {no:3, title:'title-3',contents:'contents-3',writer:'writer-3',writeDate:'2023-03-03',hits:3},
    {no:2, title:'title-2',contents:'contents-2',writer:'writer-2',writeDate:'2023-03-02',hits:2},
    {no:1, title:'title-1',contents:'contents-1',writer:'writer-1',writeDate:'2023-03-01',hits:1}
  ])
  const [postPerPage,setPostPerPage]=useState(3)
  const [currentPage,setCurrentPage]=useState(1)
  const setCurrentList=(boardList)=>{
    const startIndex = (currentPage-1)*postPerPage
    const endIndex = startIndex+postPerPage
    //0,3 -> 3,6 -> 6,9
    const slicedList = boardList.slice(startIndex,endIndex)
    return slicedList
  }

  return (
    <div className="App">
      <BoardList boardList={setCurrentList(boardList)}/>
      <Pagination total={boardList.length}
      postPerPage={postPerPage}
      setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
