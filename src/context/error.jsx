import { createContext, useState } from 'react'

export const ErrorContext = createContext()

export function ErrorProvider ({ children }) {
  const [showError, setShowError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handleError = (text) => {
    setMessageError(text)
    setShowError(!showError)
    setTimeout(() => setShowError(false), 5000)
  }

  return (
    <ErrorContext.Provider value={{
      showError,
      setShowError,
      messageError,
      setMessageError,
      handleError
    }}
    >
      {children}
    </ErrorContext.Provider>
  )
}
