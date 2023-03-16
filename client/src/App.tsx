import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.scss';

function App() {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    fetch('/api')
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{message}</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
