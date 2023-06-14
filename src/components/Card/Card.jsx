
function Card ({ children }) {
  return (
    <div className='w-screen'>
      <div className='conteiner-app sm:p-10 py-10 rounded-3xl dark:bg-stone-900 shadow-2xl w-80 sm:w-[26rem] mx-auto'>{children}</div>
    </div>
  )
}

export default Card
