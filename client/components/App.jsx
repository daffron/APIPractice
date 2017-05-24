import React from 'react'
import { getMeaning} from './api'
import Definition from './Definition'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      error: null,
      input: '',
      output: [],
      arrayIdx: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.createRandom = this.createRandom.bind(this)
  }

  handleChange(e){
    this.setState({
      input: e.target.value
    })
  
  }
   createRandom(min, max) {
     this.setState({
        arrayIdx: Math.floor(Math.random() * (max - min + 1) + min)
        })
    }

  showMeaning() {
     getMeaning(this.state.input, (err, res) => {
      if (err) {
        this.setState({error: err})
        return
      }
      this.setState({
        output: res.list
      })
     })

     this.createRandom(0, 9)
  }

  render(){
    return(
      <div>
        <h1>Whats the real meaning of your name?</h1>
        <p>Warning: Some meanings may offend</p>
        <input type="text" name="input" onChange={this.handleChange}/>
        <button onClick={this.showMeaning.bind(this)}>Find Out</button>
        {this.state.output.length > 1 &&
        <Definition result={this.state.output[this.state.arrayIdx].definition}/>
        }
      </div>

    )
  }
}

export default App

