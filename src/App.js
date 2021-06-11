import { useRef } from 'react';

import './App.css';
import { sum } from './helpers/calculator';

function App() {
  const number1 = useRef(null);
  const number2 = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(number1, number2);
  };

  return (
    <div className="App">
      <form onSubmit={(event) => submitHandler(event)}>
        <div>
          <label htmlFor="number1">Número 1</label>
          <input
            type="number"
            name="number1"
            id="number1"
            placeholder="Insira o primeiro número"
            required
            ref={number1}
          />
        </div>

        <div>
          <label htmlFor="number2">Número 2</label>
          <input
            type="number"
            name="number2"
            id="number2"
            placeholder="Insira o segundo número"
            required
            ref={number2}
          />
        </div>

        <div>
          <button>Somar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
