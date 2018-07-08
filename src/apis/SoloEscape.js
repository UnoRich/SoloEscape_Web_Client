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

export function saveProfile(args) {
  console.log("save", ...args);
  return axios.post('http://localhost:4000/profile-save', {
    args,
  })
  .then( response => { return response })
}

export function signIn(args) {
  console.log("save", ...args);
  return axios.get('http://localhost:4000/auth/google', {
    ...args,
  })
  .then( response => { return response })
}