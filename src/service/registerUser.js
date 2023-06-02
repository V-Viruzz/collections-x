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

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  try {
    const res = await fetch(`${API_URL}/register`, options)
    const data = await res.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

export default registerUser
