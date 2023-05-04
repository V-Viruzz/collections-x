import { useEffect, useContext, useReducer } from 'react'
import { CollectionContext } from '../context/collection'

const initialState = {
  name: 'Viruz',
  collections: []
}

function useCollection () {
  const { setCollections, setCurrentView, currentView, collections } = useContext(CollectionContext)
  const [state, dispatch] = useReducer(reducer, initialState)

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

  const addFolder = (name) => {
    setCurrentView(prevState => ({
      ...prevState,
      collections: [
        ...prevState.collections,
        {
          name,
          type: 'folder',
          color: 'primary',
          collections: []
        }
      ]
    }))
    // console.log('addFolder', collections)
    // setCurrentView(collections)
    // setCollections(state)
  }

  const addPage = (name) => {
    setCurrentView(prevState => ({
      ...prevState,
      collections: [
        ...prevState.collections,
        {
          name,
          type: 'page',
          color: 'primary',
          collections: []
        }
      ]
    }))
  }

  return {
    addFolder,
    addPage,
    currentView,
    setCurrentView
  }
}

export default useCollection

// const addPage = (name) => {
//     dispatch({
//       type: 'add_page',
//       value: {
//         name,
//         type: 'page',
//         color: 'primary'
//       }
//     })
//     console.log('addPage', state)
//     setCurrentView(state)
//     setCollections(state)
//   }
