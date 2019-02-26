import React, { Component } from 'react'
import './App.css'
import './components/Title'
import Title from './components/Title'
import Scoreboard from './components/Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Scoreboard />
        </main>
      </div>
    )
  }
}

export default App
