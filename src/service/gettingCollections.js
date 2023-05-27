import { getAuth } from 'firebase/auth'

async function gettingCollections () {
  const auth = getAuth()
  const user = auth.currentUser

  const options = {
    method: 'POST',

    body: user.uid
  }
  try {
    const res = await fetch('https://collection-hh70f7hpd-viruzzz0.vercel.app/gettingCollections', options)
    const data = await res.json()

    return data
  } catch (err) {
    console.log(err)
  }
}

export default gettingCollections
