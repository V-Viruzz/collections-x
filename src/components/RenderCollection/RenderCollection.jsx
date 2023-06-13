import Folder from '../Folder/Folder'
import LinkCard from '../LinkCard/LinkCard'

function RenderCollection ({ attrs, entryPath, deleteItem, editItem, index, isDragging }) {
  const showCollection = () => {
    if (attrs.type === 'folder') {
      return (
        <Folder
          {...attrs}
          key={attrs.id}
          index={index}
          entryPath={entryPath}
          deleteItem={deleteItem}
          editItem={editItem}
          isDragging={isDragging}
        />
      )
    } else if (attrs.type === 'link') {
      return (
        <LinkCard
          {...attrs}
          key={attrs.id}
          index={index}
          deleteItem={deleteItem}
          editItem={editItem}
          isDragging={isDragging}
        />
      )
    }
  }
  return (
    <>
      {
      showCollection()
      }
    </>
  )
}

export default RenderCollection
