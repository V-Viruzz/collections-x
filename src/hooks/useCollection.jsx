import { useContext, useReducer } from 'react'
import { CollectionContext } from '../context/collection'
import md5 from 'md5'

const initialState = {
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

function reducer (state, action) {
  const newEntry = { ...action.value }
  const id = md5(newEntry.name + newEntry.type)

  switch (action.type) {
    case 'add_folder':

      newEntry.path =
      newEntry.parentPath === '/'
        ? `${newEntry.parentPath}${newEntry.name}`
        : `${newEntry.parentPath}/${newEntry.name}`

      if (newEntry.type === 'folder') {
        newEntry.children = []
      }
      newEntry.id = id
      state.collections.push(newEntry)
      const index = state.collections.findIndex(item => item.id === newEntry.parentID)
      console.log('parentID', newEntry.parentID)
      if (index !== -1) {
        state.collections[index].children.push(id)
      }
      window.localStorage.setItem('fileSystem', JSON.stringify(state))
      return { ...state }
    case 'add_page':
      state.collections.push(action.value)
      return { ...state }
    default:
      return state
  }
}
function useCollection () {
  const { setCurrentView, currentView } = useContext(CollectionContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  const addFolder = (data) => {
    dispatch({
      type: 'add_folder',
      value: data
    })

    // const list = JSON.parse(window.localStorage.getItem('fileSystem'))
    setCurrentView(state)
    // setCollections(state)
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
    // setCurrentView(state)
    // setCollections(state)
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
