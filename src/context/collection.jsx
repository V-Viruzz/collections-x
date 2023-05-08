import { createContext, useState } from 'react'

export const CollectionContext = createContext()

export function CollectionProvider ({ children }) {
  const [currentView, setCurrentView] = useState([])
  const [collections, setCollections] = useState({
    name: 'Viruz',
    collections: []
  })

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
