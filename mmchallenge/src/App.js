import './App.css';
import { getProfileData } from './components/services';
import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Tile from './components/Tile';
import DisplayTiles from './components/DisplayTiles';
import { Container } from 'react-bootstrap';


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] =useState(true);
    
  async function loadProfileData(){
    let response = await getProfileData();
    console.log(response.results);
    setLoading(false);
    setUsers(response.results);
  }



  useEffect(() => {
    loadProfileData();
  },[])

  function randomDescription(){
    var result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i=0; i < 15; i++){
      result += characters.charAt(Math.floor(Math.random()*15));
    }
    return result;
  }

  function mapUsers(users){
    return users.map((user) =>
    <Tile 
      key={user.login.uuid}
      username={user.login.username}
      image={user.picture.thumbnail}
      age={user.dob.age}
      generateDescription ={randomDescription()}

    />
    )
  }

  return (
    <div>
      {loading && <p>Loading</p>}
      <Container fluid>
        {!loading &&
        <DisplayTiles mapTiles={() => mapUsers(users)} />
        }
      </Container>
    </div>
  );
}

export default App;
