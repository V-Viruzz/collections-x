import { getAuth } from 'firebase/auth'
const API_URL = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

async function uploadCollection (data) {
  const auth = getAuth()
  const user = auth.currentUser

  data.auth = user
  data.uid = user.uid

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch(`${API_URL}/saveCollections`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

export default uploadCollection
