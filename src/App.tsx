import React from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello,this is a cai-cli react template</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home></Home>
      </header>
    </div>
  )
}

export default App
