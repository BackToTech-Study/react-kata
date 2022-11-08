import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SwissTransport } from './components/SwissTransport/SwissTransport';
import Home from './components/Home/Home';
import Test from './components/test';
import Collection from './components/collection';

function App() {
  return (
    <BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Routes>
        <Route path="/" element={<Collection />}></Route>
        <Route path="/some" element={<Test />}></Route>
        <Route path="/SwissTransport" element={<SwissTransport />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
