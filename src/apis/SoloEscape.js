import axios from 'axios';

export async function getTag(args) {
  return axios.get('http://localhost:4000/tag', {
    ...args,
  })
  .then( response => { return response } )
}

export async function getGoogleUser(args) {
  return axios.get('http://localhost:4000/googleuser', {
    ...args,
  })
  .then( response => { return response } )
}

export async function getLocalUser(args) {
  return axios.get('http://localhost:4000/googleuser', {
    ...args,
  })
  .then( response => { return response } )
}
