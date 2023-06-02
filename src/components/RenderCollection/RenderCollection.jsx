import FolderCollection from '../Folder/Folder'
import LinkCard from '../LinkCard/LinkCard'

function RenderCollection ({ attrs, entryPath, index }) {
  const showCollection = () => {
    if (attrs.type === 'folder') {
      return <FolderCollection key={attrs.id} {...attrs} entryPath={entryPath} />
    } else if (attrs.type === 'link') {
      return <LinkCard key={attrs.id} {...attrs} />
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
