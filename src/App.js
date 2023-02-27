import { render } from "@testing-library/react";
import React, {useEffect, useState} from "react";


var arr  = ['Price Impact', 'Roi impact', 'Location', 'Amenities', 'Infrastructure'];

var shuffle = async (arr) => {
  let currentIndex = arr.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  } 

  return arr;
}


function App() {


  const [rodeo, setRodeo] = useState([]);
  const [cowboy, setCowboy] = useState([]);
  const [magician, setMagician] = useState([]);


  const handleRodeo = async () => {
    var newarr = await shuffle(arr)
    setRodeo(newarr)
    console.log(newarr);
  }

  useEffect(() => {
    handleRodeo();
    console.log(rodeo);
  })

  const handleClickRodeo = async () => {
    // if (rodeo.length < 1) {
    //   await handleRodeo()
    //   console.log(rodeo);
    // }
    console.log(rodeo);
    render (
      <div>
      <table>
        <thead> 
          <tr>
            <th>Attributes</th>
          </tr>
        </thead>
        <tbody>
          {rodeo.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ) )}
        </tbody>
      </table>
      </div>
    )
  }


// cowboy function logic
const handleCowboy = async () => {
  var newarr = await shuffle(arr)
  setCowboy(newarr)
  console.log(newarr);
}

useEffect(() => {
  handleCowboy();
  console.log(cowboy);
})

  const handleClickCowboy = () => {
    handleCowboy()
    // if (cowboy === null) {
    //   const newCowboy = shuffle(arr);
    //   setCowboy(newCowboy);
    //   console.log(newCowboy); 
    // } else {
    //   console.log("already shuffled", cowboy);
    // }

    render (
      <div>
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
          </tr>
        </thead>
        <tbody>
          {cowboy.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
  }

  //magician function logic

  const handleMagician = async () => {
    var newarr = await shuffle(arr)
    setMagician(newarr)
    console.log(newarr);
  }
  
  useEffect(() => {
    handleMagician();
    console.log(magician);
  })

  const handleClickMagician = () => {
    handleMagician()
    
    // if (magician === null) {
    //   const newMagician = shuffle(arr);
    //   setMagician(newMagician);
    //   console.log(newMagician); 
    // } else {
    //   console.log("already shuffled", magician);
    // }

    render (
      <div>
      <table>
        <thead>
          <tr>
            <th>Attributes</th>
          </tr>
        </thead>
        <tbody>
          {magician.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    )
  }


  return (
    <div>
    <div>
    <input type="radio" id="rodeo" name="hat" value="rodeo" onClick={handleClickRodeo} />
    <label htmlFor="magician">Rodeo Hat</label> 

    <input type="radio" id="cowboy" name="hat"  value="cowboy" onClick={handleClickCowboy} />
    <label htmlFor="magician">Cowboy Hat</label> 
    

    <input type="radio" id="magician" name="hat" value="magician" onClick={handleClickMagician} />
    <label htmlFor="magician">Magician Hat</label> 
    </div>
    <div>
      
    </div>
    </div>
  );
}

export default App;
