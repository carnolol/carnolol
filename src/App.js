import React from 'react';
import './App.css';
import List from './components/List'

function App() {
  return (
    <div className='App'>
      <h1 className='people'>
        Home
        <List/>
      </h1>
    </div>
  );
}

export default App;
