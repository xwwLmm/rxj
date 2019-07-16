import React, { Component } from 'react'
import classNames from 'classnames'

import './index.less'

interface AlertProps {
  type?: 'success' | 'error' | 'warn' | 'info'
  message: React.ReactNode
  className?: string
}

export default class Alert extends Component<AlertProps> {
  render() {
    const { type = 'info' } = this.props
    const className = classNames('rxj-alert', `rxj-alert-${type}`)
    return <div className={className}>{this.props.message}</div>
  }
}
