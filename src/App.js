import logo from './logo.svg';
import './App.css';

import { useState } from "react";

function App() {
const [name, setName] = useState('Akif');
const [age, setAge] = useState(31);
const [friends, setFriends] = useState (["Ahmet", "Murat"]);
const [address, setAddress] = useState({ title: 'Kocaeli', zip:41654})

  return (
    <div className="App">
      <h1>Hello {name}! </h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Emre")} >Change Name</button>
      <button onClick={() => setAge(23)}>Change Age</button>

      <hr />
      <br /><br />
      <h2>Friends </h2>
    {
      friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))
    }
  <br />
    <button onClick={() => setFriends([...friends, "Ayşe"])}>add new friend</button>
    <hr />
      <br /><br />
    <h2>Address</h2>
    <div>
      {address.title} {address.zip}
    </div>
    <br />
    <button onClick={() => setAddress({title: 'Ankara', zip:66666})}>Change the address</button>
    </div>
  );
}

export default App;
