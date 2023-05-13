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

  const addFolder = (data) => {
    dispatch({
      type: 'add_folder',
      value: data
    })
    setCurrentView(state)
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
  }

  return {
    addFolder,
    addPage,
    currentView,
    setCurrentView,
    setReload,
    reload
  }
}

export default useCollection
