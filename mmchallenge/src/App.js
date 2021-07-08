import logo from './logo.svg';
import './App.css';
import { getProfileData } from './components/services';
import { useState } from 'react';
import { render } from 'react-dom';

async function loadProfileData(){
    let response = await getProfileData();
    console.log(response);
  }

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =useState(true);
    
  loadProfileData();

  return (
    <div>
      {loading && (<p>Loading</p>)}
      {<p>Hello World</p>}
    </div>
  );
}

export default App;
