import './App.css';
import { useEffect, useState } from 'react/cjs/react.development';
import User from './Components/User/User'
import Show from './Components/Show/Show'

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeams] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?page=3&results=10&seed=abc')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, [])


  const addUsers = (users) => {
    setTeams([...team, users]);
  }


  return (
    <div className="App">

      <div className="User-state">
        <h1>Welcome to User App</h1>
        {
          users.map(usr => <User user={usr} addUsers={addUsers}></User>)
        }
      </div>
      <div className="team-state">
        <h1> Team Members</h1>
        {
          team.map(user => <Show teams={user}> </Show>)
        }
      </div>
    </div>
  );
}

export default App;
