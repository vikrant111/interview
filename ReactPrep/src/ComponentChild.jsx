import React, { useState } from 'react'

const ComponentChild = ({ updateParentCount }) => {
    const [count, setCount] = useState(0);
    const updateCount = () =>{
        const updatedValue = count + 1;
        setCount(updatedValue);
        updateParentCount(updatedValue);
    }
  return (
    <div>
         <p>Child  - {count}</p>
      <button onClick={updateCount}>
          Inc
      </button>
    </div>
  )
}

export default ComponentChild
