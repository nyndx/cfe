import React, { createContext, useState } from "react"

const DimensionsContext = createContext([{}, () => {}])

const DimensionsProvider = ({ children }) => {
  const [dim, setDim] = useState({ height: "" })

  return (
    <DimensionsContext.Provider value={[dim, setDim]}>
      {children}
    </DimensionsContext.Provider>
  )
}

export { DimensionsContext, DimensionsProvider }
