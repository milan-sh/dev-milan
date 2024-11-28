import React, { useState } from 'react'
import ToggleContext from './ToggleContext'

const ToggleContextProvider=({children})=> {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <ToggleContext.Provider value={{isNavOpen, setIsNavOpen}}>
      {children}
    </ToggleContext.Provider>
  )
}

export default ToggleContextProvider;

