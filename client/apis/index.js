import request from 'superagent'

const url = "";
export function getX () {
  return request
    .get(url)
    .then(res => res.body)
}
