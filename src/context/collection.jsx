import { createContext, useState } from 'react'

export const CollectionContext = createContext()

export function CollectionProvider ({ children }) {
  const [currentView, setCurrentView] = useState([])
  const [reload, setReload] = useState(false)

  return (
    <CollectionContext.Provider value={{
      currentView,
      setCurrentView,
      reload,
      setReload
    }}
    >
      {children}
    </CollectionContext.Provider>
  )
}
