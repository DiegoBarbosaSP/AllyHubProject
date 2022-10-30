import { useState } from 'react';
import Form from './components/Form';


function App() {

  const [countriesSave, setCountrySave] = useState([])
  const newCountrySaved = (countrySave) => {
    console.log(countrySave)
    setCountrySave([...countriesSave, countrySave])
  }
  return (
    <div className="App">

      {/* Country*/}

      <Form countrySaved={countrySave => newCountrySaved(countrySave)} />

    </div>
  );
}

export default App;
