import axios from 'axios';

export function getTag(args) {
  return axios.get('http://localhost:4000/tag', {
    ...args,
  })
  .then( response => { return response } )
}

export function getGoogleUser(args) {
  return axios.get('http://localhost:4000/googleuser', {
    ...args,
  })
  .then( response => { return response } )
}

export function getLocalUser(args) {
  return axios.get('http://localhost:4000/googleuser', {
    ...args,
  })
  .then( response => { return response } )
}

export function getProfileById(args) {
  return axios.get('http://localhost:4000/profile/' + args.id, {
    ...args,
  })
  .then( response => { return response } )
}