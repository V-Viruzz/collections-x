import { useContext, useReducer, useEffect, useState } from 'react'
import { CollectionContext } from '../context/collection'
import uploadCollection from '../service/uploadCollection'
import gettingCollections from '../service/gettingCollections'
import md5 from 'md5'

const initialState = {}

function reducer (state, action) {
  if (action.type === 'SET_DATA') {
    window.localStorage.setItem('fileSystem', JSON.stringify(action.value))
    return action.value
  }

  const newEntry = { ...action.value }

  const namePath = newEntry.name.replace(' ', '-')

  if (action.type === 'add_folder') {
    newEntry.path = `${newEntry.path}/${namePath}`
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
    uploadCollection(state)
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

  // Actualiza estados con la respuesta de la base de datos
  useEffect(() => {
    gettingCollections()
      .then((res) => {
        console.log('gettingCollections :', res)
        dispatch({ type: 'SET_DATA', value: res.user })
        const collections = res.user.collections

        setCurrentView(collections || null)
        setListId(() => {
          if (!collections[0]) return

          return currentPath === 'collections'
            ? collections[0].children
            : collections.find(c => c.path === entryPath).children
        })
      })
  }, [reload])

  useEffect(() => {
    const handleBackButton = () => {
      setReload(!reload)
    }

    window.addEventListener('popstate', handleBackButton)
    return () => {
      window.removeEventListener('popstate', handleBackButton)
    }
  }, [reload])

  return {
    state,
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
