import { useContext } from 'react'
import { ErrorContext } from '../../context/error'

function NotificationError () {
  const { showError, messageError } = useContext(ErrorContext)

  return (
    <div className={`absolute  bottom-0 right-0 bg-red-600/80 w-48 h-11 rounded-xl flex justify-center items-center mb-3 mr-3 border-solid border-2 border-red-900 transition-opacity duration-500 opacity-0' ${showError ? 'opacity-1' : 'opacity-0'}`}>
      <p>
        {messageError}
      </p>
    </div>
  )
}

export default NotificationError
