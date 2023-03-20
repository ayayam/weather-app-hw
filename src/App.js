import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import InputField from './components/shared/InputField'

function App() {
  const cities = [
    {
      key: 1,
      englishName: "Ann Arbor",
      primaryPostalCode: 48103,
      country: {
        id: "US",
        englishName: "United States of America"
      },
      administrativeArea: {
        id: "MI",
        englishName: "Michigan",
        englishType: "State"
      }
    },
    {
      key: 2,
      englishName: "Marietta",
      primaryPostalCode: 30067,
      country: {
        id: "US",
        englishName: "United States of America"
      },
      administrativeArea: {
        id: "GA",
        englishName: "Georgia",
        englishType: "State"
      }
    }
  ];

  const [cityName, setCityName] = useState("");

  const handleCityNameChange = (e) => {
    setCityName(e.target.value);
  }

  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  // }

  return (
    <div className="App">
      <h1>Weather</h1>
      <InputField 
        cityName={cityName}
        handleCityNameChange={handleCityNameChange}
      />
      <hr />
      <DisplayCityStats cities={cities}/>
      
    </div>
  );
}

// App.js should provide the array to the custom component as a props
function DisplayCityStats(props) {
  const handleCityNameLog = (city) =>{
    console.log(city);
  }

  return (
    props.cities.map(stat => (
      <ul>
        <li>{stat.englishName}</li>
        <li>{stat.administrativeArea.id}</li> 
        <li>{stat.country.id}</li>
        <button onClick={handleCityNameLog}>Display Weather</button>
      </ul>
    ))
  );
}

export default App;
