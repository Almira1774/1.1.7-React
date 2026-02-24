import { useState } from 'react';
import Quote from './quote.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <Quote></Quote>
      </section>
    </>
  );
}

export default App;
