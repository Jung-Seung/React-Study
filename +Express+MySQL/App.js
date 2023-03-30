import './App.css';
import axios from 'axios';

function App() {
  const getAllBoard=async()=>{ //비동기방식(async - await)
    //arrow function - 화살표 함수 - ES6
    alert('모두 조회')
    //axios
    const result=await axios.get('/board')
    //ES6 - Promise 객체
    //ES8 - async ~ await
    //http://localhost:4000/board
    console.log(result)
  }
  const getBoardByNo=async()=>{
    alert('조건 조회')
    const no=16
    const result=await axios.get(`/board/${no}`)
    console.log(result)
  }
  const writeBoard=async()=>{
    alert('글쓰기')
    const boardObj
    ={title:'새로운 글',contents:'새로운 내용',author:'김ㅇㅇ',reg_date:'2023-03-09',attach:'N',hits:0}
    const result=await axios.post(`/board`,boardObj)
    console.log(result)
  }
  const updateBoard=async()=>{
    alert('수정')
    const no = 23
    const boardObj
    ={title:'수정된 제목',contents:'수정된 내용'}
    const result=await axios.put(`/board/${no}`,boardObj)
    console.log(result)
  }
  const deleteBoard=async()=>{
    alert('삭제')
    const no = 23
    const result=await axios.delete(`/board/${no}`)
    console.log(result)
  }

  return (
    <div className="App">
      <button onClick={getAllBoard}>모두조회</button>
      <button onClick={getBoardByNo}>조건조회</button>
      <button onClick={writeBoard}>글쓰기</button>
      <button onClick={updateBoard}>수정</button>
      <button onClick={deleteBoard}>삭제</button>
    </div>
  );
}

export default App;
