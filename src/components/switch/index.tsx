import React, { useState } from 'react'

interface SwitchProps {
  open: boolean
}

export default function(props: SwitchProps) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>
        You clicked {count} {props.open}times
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
