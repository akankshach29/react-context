import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import NewApp from './NewApp';
import { UserProvider } from './components/UserContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Context</h1>
        <UserProvider value="Akanksha">
          <ComponentA />
        </UserProvider>  
        <NewApp />          
      </header>
    </div>
  );
}

export default App;
