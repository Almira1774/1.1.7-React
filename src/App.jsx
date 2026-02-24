import { useState } from 'react';
import Quote from './quote.jsx';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
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
