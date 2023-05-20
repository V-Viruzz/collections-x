import { useContext, useReducer, useEffect, useState } from 'react'
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
        path: 'collections',
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
  const [listId, setListId] = useState()

  const currentPath = window.location.href.split('/').pop()
  const pathFull = window.location.href.split('/')
  const index = pathFull.indexOf('collections')
  const entryPath = pathFull.splice(index).join('/')

  const addItem = (data) => {
    dispatch({
      type: 'add_folder',
      value: data
    })
  }

  useEffect(() => {
    const fileSystem = window.localStorage.getItem('fileSystem')
    const tmp = fileSystem ? JSON.parse(fileSystem).collections : []

    setCurrentView(tmp || null)

    setListId(() => {
      if (!tmp[0]) {
        console.log('tmp')
        return
      }

      return currentPath === 'collections'
        ? tmp[0].children
        : tmp.find(c => c.path === entryPath).children
    })

    const handleBackButton = () => {
      console.log("El usuario ha presionado el botón 'atrás'")
      setReload(!reload)
    }
    // console.log('currentView', currentView)
    // console.log('listId', listId)

    window.addEventListener('popstate', handleBackButton)
    return () => {
      window.removeEventListener('popstate', handleBackButton)
    }
  }, [reload])

  return {
    addItem,
    currentView,
    setCurrentView,
    entryPath,
    currentPath,
    listId,
    setListId,
    setReload,
    reload
  }
}

export default useCollection
