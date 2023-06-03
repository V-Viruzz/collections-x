import FolderCollection from '../Folder/Folder'
import LinkCard from '../LinkCard/LinkCard'

function RenderCollection ({ attrs, entryPath, deleteItem, index }) {
  const showCollection = () => {
    if (attrs.type === 'folder') {
      return <FolderCollection {...attrs} key={attrs.id} index={index} entryPath={entryPath} deleteItem={deleteItem} />
    } else if (attrs.type === 'link') {
      return <LinkCard {...attrs} key={attrs.id} index={index} deleteItem={deleteItem} />
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
