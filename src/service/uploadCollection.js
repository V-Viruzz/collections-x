import { getAuth } from 'firebase/auth'

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

  fetch('http://localhost:3001/saveCollections', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

export default uploadCollection
