import { useContext, useReducer, useEffect } from 'react'
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

  if (action.type === 'ADD_ITEM') {
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
  const {
    setCurrentView, currentView,
    setReload, reload,
    listId, setListId
  } = useContext(CollectionContext)

  const [state, dispatch] = useReducer(reducer, initialState)

  const currentPath = window.location.href.split('/').pop()
  const pathFull = window.location.href.split('/')
  const index = pathFull.indexOf('collections')
  const entryPath = pathFull.splice(index).join('/')

  const addItem = (data) => {
    dispatch({
      type: 'ADD_ITEM',
      value: data
    })
  }
  const setData = (data) => {
    dispatch({
      type: 'SET_DATA',
      value: data
    })
  }

  const updateCollectionStates = (state) => {
    setCurrentView(state || null)
    setListId(() => {
      if (!state[0]) return

      return currentPath === 'collections'
        ? state[0].children
        : state.find(c => c.path === entryPath).children
    })
  }

  // Actualiza estados con la respuesta de la base de datos

  useEffect(() => {
    gettingCollections()
      .then((res) => {
        console.log('gettingCollections :', res)
        const collections = res.user.collections

        setData(res.user)
        updateCollectionStates(collections)
      })
  }, [])

  useEffect(() => {
    const fileSystem = window.localStorage.getItem('fileSystem')
    const collections = fileSystem ? JSON.parse(fileSystem).collections : []

    updateCollectionStates(collections)
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
    setData,
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
