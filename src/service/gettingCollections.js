import { getAuth } from 'firebase/auth'
const API_URL = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

async function gettingCollections () {
  const auth = getAuth()
  const user = auth.currentUser

  const options = {
    method: 'POST',
    body: user.uid
  }
  try {
    const res = await fetch(`${API_URL}/gettingCollections`, options)
    const data = await res.json()

    return data
  } catch (err) {
    console.log(err)
  }
}

export default gettingCollections
