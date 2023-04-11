import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    getMovies()
  },[]) //componentDidMount와 동일한 기능
  const getMovies=async()=>{
    const result = await axios.get('/api/v2/list_movies.json')
    console.log(result)
  }
  return (
    <div className="App">
    </div>
  );
}

export default App;
