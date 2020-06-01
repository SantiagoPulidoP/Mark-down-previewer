import React from 'react';
import './App.css';
import Input from './components/TextInput'
import Output from './components/TextOutput'

class App extends React.Component {

  state = {
    text : ''
  }

  updateState = (markdown) =>{
    this.setState({
      text : markdown
    })

  
  }
  render(){
  return(
    <div className="App">
      <h2>Mark down previewer</h2>
      <div className = 'in'>
        <label>Enter text here</label>
         <Input update = {this.updateState} val = {this.state.text}/>
      </div>
      <div className='out'>
      <label>Output text</label>
       <Output txt = {this.state.text}/>
      </div>
      
    </div>
  )


  }
}

export default App;
