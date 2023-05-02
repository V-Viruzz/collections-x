import { createContext, useState } from 'react'

export const CollectionContext = createContext()

export function CollectionProvider ({ children }) {
  const [currentView, setCurrentView] = useState([])
  const [collections, setCollections] = useState()

  return (
    <CollectionContext.Provider value={{
      currentView,
      setCurrentView,
      collections,
      setCollections

    }}
    >
      {children}
    </CollectionContext.Provider>
  )
}
