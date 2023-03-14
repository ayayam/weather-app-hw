import logo from './logo.svg';
import './App.css';

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
        englishName: "nited States of America"
      },
      administrativeArea: {
        id: "GA",
        englishName: "Georgia",
        englishType: "State"
      }
    }
  ]

  const handleInputChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <h1></h1>
      <label htmlFor='cityName'>City: </label>
      <input 
        id='cityName' 
        name='cityName'
        type='text'
        onChange={handleInputChange}
      />
      <hr />
      <CityStat cities={cities}/>
    </div>
  );
}

// App.js should provide the array to the custom component as a props
function CityStat(props) {
  return (
    props.cities.map(stat => (
      <ul>
        <li>{stat.englishName}, {stat.administrativeArea.id}, {stat.country.id}</li>
      </ul>
    ))
  )
}

export default App;
