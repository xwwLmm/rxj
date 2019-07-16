import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Alert, Switch } from '../src/components'

class App extends Component {
  render() {
    const message = '测试 Alert12'
    const type = 'success'
    return (
      <div>
        <Alert type={type} message={message} />
        <Switch open='true' />
      </div>
    )
  }
}

// const Happ = hot(App)
ReactDOM.render(<App />, document.getElementById('app'))
