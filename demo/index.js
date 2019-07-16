import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Alert, Switch } from '../src/components'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { open: true }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    console.log('xxx')
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const message = '测试 Alert12'
    const type = 'success'
    return (
      <div>
        <Alert type={type} message={message} />
        <Switch open={this.state.open} toggle={this.toggle.bind(this)} />
      </div>
    )
  }
}

// const Happ = hot(App)
ReactDOM.render(<App />, document.getElementById('app'))
