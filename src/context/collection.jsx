import { createContext, useState } from 'react'

export const CollectionContext = createContext()

export function CollectionProvider ({ children }) {
  const [currentView, setCurrentView] = useState([])
  const [reload, setReload] = useState(false)
  const [listId, setListId] = useState()

  return (
    <CollectionContext.Provider value={{
      currentView,
      setCurrentView,
      reload,
      setReload,
      listId,
      setListId
    }}
    >
      {children}
    </CollectionContext.Provider>
  )
}
