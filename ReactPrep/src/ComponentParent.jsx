import React, { useState } from 'react'
import ComponentChild from './ComponentChild'

const ComponentParent = () => {
    const [pCount, setPCount] = useState(0);
    const updateParentCount = (value) => {
        setPCount(value);
    }

  return (
    <div>
        <p>Parent  - {pCount}</p>
      <ComponentChild updateParentCount={()=> setPCount((prev) => prev + 1)} />
      <ComponentChild updateParentCount={(value)=> updateParentCount(value)} />
      <ComponentChild updateParentCount={updateParentCount} />

    </div>
  )
}

export default ComponentParent
