import { useContext, useReducer } from 'react'
import { CollectionContext } from '../context/collection'

const initialState = {
  name: 'Viruz',
  collections: []
}

function reducer (state, action) {
  switch (action.type) {
    case 'add_folder':
      state.collections.push(action.value)
      return { ...state }
    case 'add_page':
      state.collections.push(action.value)
      return { ...state }
    default:
      return state
  }
}

function useCollection () {
  const { setCollections, setCurrentView, currentView } = useContext(CollectionContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  const addFolder = (name) => {
    dispatch({
      type: 'add_folder',
      value: {
        name,
        type: 'folder',
        color: 'primary'
      }
    })
    console.log('addFolder', state)
    setCurrentView(state.collections)
    setCollections(state)
  }

  const addPage = (name) => {
    dispatch({
      type: 'add_page',
      value: {
        name,
        type: 'page',
        color: 'primary'
      }
    })
    console.log('addPage', state)
    setCurrentView(state.collections)
    setCollections(state)
  }

  return {
    addFolder,
    addPage,
    currentView,
    setCurrentView
  }
}

export default useCollection
