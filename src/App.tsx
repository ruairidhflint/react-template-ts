import * as React from 'react';
import { getLocation } from './services/location';
import { getAirData } from './services/airData';

function App() {
  const [location, setLocation] = React.useState('');
  const [airData, setAirData] = React.useState({});
  console.log(location);
  console.log(airData);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;

      const fetchLocation = async () => {
        try {
          const fetchedLocation = await getLocation(coords.latitude, coords.longitude);
          setLocation(fetchedLocation);
        } catch (e) {
          console.log('Error fetching location');
        }
      };

      const fetchAirData = async () => {
        try {
          const fetchedAirData = await getAirData(coords.latitude, coords.longitude);
          setAirData(fetchedAirData);
        } catch (e) {
          console.log('Error fetching air data');
        }
      }
  
      fetchLocation();
      fetchAirData();
    });
  }, []);

  return (
    <div id="template-text">
      {/* <h1>React Starter Template - TypeScript</h1>
      <p>
        For JavaScript please use{" "}
        <a href="https://github.com/ruairidhflint/react-template">this</a>{" "}
        template
      </p> */}
    </div>
  );
}

export default App;
