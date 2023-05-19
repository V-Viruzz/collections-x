import { useContext, useReducer, useEffect } from 'react'
import { CollectionContext } from '../context/collection'
import md5 from 'md5'

const saveCollection = JSON.parse(window.localStorage.getItem('fileSystem'))

const initialState = !saveCollection
  ? {
      user: 'Viruz',
      collections: [{
        id: 'collections',
        type: '__folder__',
        name: 'collections',
        path: '/',
        parentPath: null,
        parentID: null,
        children: []
      }]
    }
  : saveCollection

function reducer (state, action) {
  const newEntry = { ...action.value }

  if (action.type === 'add_folder') {
    newEntry.path = `${newEntry.path}/${newEntry.name}`
    if (newEntry.type === 'folder') {
      newEntry.children = []
    }
    const id = md5(newEntry.path + newEntry.type)
    newEntry.id = id
    state.collections.push(newEntry)

    const index = state.collections.findIndex(item => item.id === newEntry.parentID)
    if (index !== -1) {
      state.collections[index].children.push(id)
    }
    window.localStorage.setItem('fileSystem', JSON.stringify(state))
    return { ...state }
  }
}

function useCollection () {
  const { setCurrentView, currentView, setReload, reload } = useContext(CollectionContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  const addItem = (data) => {
    dispatch({
      type: 'add_folder',
      value: data
    })
  }

  // useEffect(() => {
  //   const fileSystem = window.localStorage.getItem('fileSystem')
  //   const tmp = fileSystem ? JSON.parse(fileSystem).collections : []

  //   setState(tmp || null)
  //   setListId(() => {
  //     if (!tmp[0]) return
  //     return currentPath === 'collections'
  //       ? tmp[0].children
  //       : tmp.find(c => c.path === entryPath).children
  //   })

  //   const handleBackButton = () => {
  //     console.log("El usuario ha presionado el botón 'atrás'")
  //     setReload(!reload)
  //   }

  //   window.addEventListener('popstate', handleBackButton)
  //   return () => {
  //     window.removeEventListener('popstate', handleBackButton)
  //   }
  // }, [reload])

  return {
    addItem,
    currentView,
    setCurrentView,
    setReload,
    reload
  }
}

export default useCollection
