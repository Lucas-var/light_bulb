import './App.css';
import {useState} from 'react';
import light from './img/light.jpg';

function App() {
  
  const[lightBulb1, setLightBulb1] = useState(false)
  const[lightBulb2, setLightBulb2] = useState(false)
  const[lightBulb3, setLightBulb3] = useState(false)

  const randomLight = () => {
    let randomNumber=  Math.floor(Math.random() * 3)
    
    if (randomNumber === 0) {
      setLightBulb1(true);
      setLightBulb2(false);
      setLightBulb3(false);
    } else if (randomNumber === 1){
      setLightBulb1(false);
      setLightBulb2(true);
      setLightBulb3(false);
    } else{
      setLightBulb1(false);
      setLightBulb2(false);
      setLightBulb3(true);
    }
  }

  return (
    <div className="App">

      <h2>A room has 3 light bulbs in it and a single switch. <br />
a .The switch will turn these light bulbs on in a random order. <br />
b . Only one light bulb can be on at any given time; when one 
light bulb is on, the others are off. <br />
c . The switch will be deemed as being in an ‘off’ state initially
</h2>
      
      <img src={light} alt="light-img" className={lightBulb1? 'on':'off'} />
      <img src={light} alt="light-img" className={lightBulb2? 'on':'off'}/>
      <img src={light} alt="light-img"className={lightBulb3? 'on':'off'} />

      <div>
        <button onClick={randomLight}>Toggle lights </button>
      </div>

    </div>
  );
}
export default App;
