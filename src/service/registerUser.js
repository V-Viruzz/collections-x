const API_URL = import.meta.env.VITE_API_URL || process.env.VITE_API_URL

async function registerUser (user) {
  const data = {
    user: 'nickname',
    collections: [{
      id: 'collections',
      type: '__folder__',
      name: 'collections',
      path: 'collections',
      parentPath: null,
      parentID: null,
      children: []
    }],
    auth: user.user,
    uid: user.user.uid
  }
  console.log(API_URL)

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  fetch(`${API_URL}/register`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

export default registerUser
