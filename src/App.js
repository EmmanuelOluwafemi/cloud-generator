import { useState } from 'react';
import './App.css';
import Cloud from './Cloud';

function App() {

  const [range, setRange] = useState(50)

  return (
    <div className="App">
      <Cloud range={range} />

      <div className="selector">
        <input type="range" min={1} max={100} value={range} onChange={(e) => setRange(e.target.value)} />

        <p className="rangeInput">{range}</p>
      </div>
    </div>
  );
}

export default App;
