import FolderCollection from '../FolderCollection/FolderCollection'
import LinkCollection from '../LinkCollection/LinkCollection'

function RenderCollection ({ attrs, entryPath }) {
  const showCollection = () => {
    if (attrs.type === 'folder') {
      return <FolderCollection key={attrs.id} {...attrs} entryPath={entryPath} />
    } else if (attrs.type === 'link') {
      return <LinkCollection key={attrs.id} {...attrs} />
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
