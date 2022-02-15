
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Info from './components/Info';


function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  // console.log(users)
  useEffect(() => {
    const getUsers=()=>{
      
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(res => setUsers(res)).catch(error=>console.log(error))
     
    };
    getUsers()
    setLoading(false)
  }, [])
  
  return (
    <div className="App">
      <Router>
        <Routes>
     
          <Route path="/" element={<UserList users={users} loading={loading}/>}/>
          <Route path="/info/:name" element={<Info/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
