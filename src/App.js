import React from 'react';
import './App.css';
import { MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';
import { Box } from '@mui/system';
import { data } from './Database';
import List from './Components/List';

function App() {
  const [Location, setLocation] = React.useState('');
  const [Stations, setStations] = React.useState('');
  function handleChange(event) {
    setLocation(event.target.value);
  }
  const onSubmit = (event) => {
    setStations(data.filter((cs) => cs.Location === Location));
    console.log(Stations); //array of objects;
  }
  return (
    <div className="App">
      <h2 style={{ textAlign: 'center' }}>ElectricPe: Your EV partner</h2>
      
      <Box style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-40%,-50%)',
        width: 600,
        height: 600,
        backgroundColor: 'aqua',
        border: '5px solid black',
        textAlign: 'center',
      }}>
        <h3>Enter your Current Location and Book your Time slots</h3>
        <FormControl style={{ postion: 'absolute', width: '30%', top: 10 }}>
          <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Location}
            label="Location"
            onChange={handleChange}
          >
            <MenuItem value="Kamla Nagar" >Kamla Nagar</MenuItem>
            <MenuItem value="Sanjay Palace" >Sanjay Palace</MenuItem>
            <MenuItem value="Khandari" >Khandari</MenuItem>
          </Select>
          <Button variant="contained"  onClick={onSubmit}>Search</Button>
        </FormControl>
        {Stations ? <List rows={Stations} />:<></>}
      </Box>
    </div>
  );
}

export default App;
