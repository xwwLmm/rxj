import React from 'react'
import './index.less'

interface SwitchProps {
  open: boolean
  toggle: Function
  disabled: boolean
}

export default function(props: SwitchProps) {
  return (
    <span
      onClick={() => props.disabled !== true && props.toggle()}
      className={`switch-container ${props.open ? 'switch-open' : ''} ${
        props.disabled ? 'switch-disabled' : ''
      }`}>
      <span className={'switch-bg'} />
      <span />
    </span>
  )
}
