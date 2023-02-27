import React, {useState} from "react";


function App() {
  const arr  = ['Price Impact', 'Roi impact', 'Location', 'Amenities', 'Infrastructure'];

  const [rodeo, setRodeo] = useState(null);
  const [cowboy, setCowboy] = useState(null);
  const [magician, setMagician] = useState(null);

  const shuffle = (arr) => {
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    } 

    return arr;
  }


  const handleRodeo = () => {
    if (rodeo === null) {
      const newRodeo = shuffle(arr);
      setRodeo(newRodeo);
      console.log(newRodeo); 
    } else {
      console.log("already shuffled", rodeo);
    }

  }


  const handleCowboy = () => {
    if (cowboy === null) {
      const newCowboy = shuffle(arr);
      setCowboy(newCowboy);
      console.log(newCowboy); 
    } else {
      console.log("already shuffled", cowboy);
    }
  }

  const handleMagician = () => {
    if (magician === null) {
      const newMagician = shuffle(arr);
      setMagician(newMagician);
      console.log(newMagician); 
    } else {
      console.log("already shuffled", magician);
    }
  }


  return (
    <>
    <div>
    <input type="radio" id="rodeo" name="rodeo" value="rodeo" onClick={handleRodeo} />
      <label htmlFor="rodeo">Rodeo Hat</label>

      <input type="radio" id="cowboy" name="cowboy" value="cowboy" onClick={handleCowboy} />
      <label htmlFor="cowboy">Cowboy Hat</label>

      <input type="radio" id="magician" name="magician" value="magician" onClick={handleMagician} />
      <label htmlFor="magician">Magician Hat</label> 
    </div>

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
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

export default App;
