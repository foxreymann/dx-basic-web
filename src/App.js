import React, { Component } from 'react'
import './App.css'
import web3 from './web3';

class App extends Component {
  deposit = async () => {
    // Get the first account from Metamask
    const [ account ] = await web3.eth.getAccounts()
    this.setState({
      message: `Your account is ${account}`
    })
  }

  state = {
    amount: '',
    message: null
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Deposit WETH into the DutchX</h1>

          <label>Amount of WETH:</label>
          <input          
            value={ this.state.amount }
            onChange={ event => this.setState({ amount: event.target.value }) }
            placeholder="Enter the amount..."
            />
          <button onClick={ this.deposit }>Deposit</button>

          { this.state.message && (
            <div className="message">
              <span className="times" onClick={ () => this.setState({ message: null }) }>&times;</span>
              { this.state.message }
            </div>
          )}
        </header>
      </div>
    )
  }
}

export default App
