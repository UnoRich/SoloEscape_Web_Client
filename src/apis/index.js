import axios from 'axios';

export function getGoogleSigninUI(args) {
  return axios.get('http://localhost:4000/index', {
    ...args,
  })
  .then( response => { console.log(response); } )
}