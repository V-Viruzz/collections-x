import { createContext, useState } from 'react'

export const CollectionContext = createContext()

export function CollectionProvider ({ children }) {
  const [currentView, setCurrentView] = useState([])

  return (
    <CollectionContext.Provider value={{
      currentView,
      setCurrentView

    }}
    >
      {children}
    </CollectionContext.Provider>
  )
}
