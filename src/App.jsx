import './App.css';
import Textfield from './components/Textfield'; // Corrected the case here
import Cardimg from './components/Card';
import { useState } from 'react';


function App() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: '',
    temperature: "",
    temp_min: "",
    temp_max: "",
    humidity: "",
    feels_like: "",
    description: ''
  });

  const updateWeatherInfo = (newWeatherInfo) => {
    setWeatherInfo(newWeatherInfo);
  };

  return (
    <>

      <div className="row">
        <div className="container">
          <Textfield updateWeatherInfo={updateWeatherInfo} />
        </div>
        <Cardimg info={weatherInfo} />
      </div>
    </>
  );
}

export default App;
