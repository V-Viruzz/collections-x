import { useCallback, useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import RenderCollection from '../RenderCollection/RenderCollection'
import uploadCollection from '../../service/uploadCollection'
import { CollectionContext } from '../../context/collection'

function ListCollections ({ entryPath }) {
  const { currentView, setCurrentView, listId, setReload } = useContext(CollectionContext)

  const onDragEnd = useCallback((result) => {
    const { source, destination } = result
    if (!destination) return
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return
    }

    setCurrentView(prev => {
      const newList = [...prev]
      const index = newList.findIndex(a => a.path === entryPath)

      const select = newList[index].children
      const [removed] = select.splice(source.index, 1)
      select.splice(destination.index, 0, removed)

      newList[index].children = select

      const fileSystem = JSON.parse(window.localStorage.getItem('fileSystem'))
      fileSystem.collections = newList
      window.localStorage.setItem('fileSystem', JSON.stringify(fileSystem))

      uploadCollection(fileSystem)

      setReload(prev => !prev)
      return newList
    })
  })

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='column-1'>
        {(droppableProvided) => (
          <ul
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className='flex flex-col gap-4 '
          >
            {
            listId
              ? listId
                .map((item, index) => {
                  const attrs = currentView.find(c => c.id === item)
                  return (
                    <Draggable
                      key={attrs.id}
                      index={index}
                      draggableId={attrs.id}
                    >
                      {draggableProvided => (
                        <li
                          ref={draggableProvided.innerRef}
                          {...draggableProvided.draggableProps}
                          {...draggableProvided.dragHandleProps}
                        >
                          <RenderCollection
                            key={attrs.id}
                            attrs={attrs}
                            index={index}
                            entryPath={entryPath}
                          />
                        </li>
                      )}

                    </Draggable>
                  )
                })
              : null
               }
            {droppableProvided.placeholder}
          </ul>)}
      </Droppable>
    </DragDropContext>
  )
}

export default ListCollections
