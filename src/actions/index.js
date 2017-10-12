import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'

const ROOT_URL = 'https://reduxblog.herokuapp.com/api'
const API_KEY = 'deronreed'

export function fetchPosts() {
  const url = `${ROOT_URL}/posts?key=${API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {
  const url = `${ROOT_URL}/posts?key=${API_KEY}`
  const request = axios.post(url, values)
    .then(() => callback())

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/posts/${id}?key=${API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_POST,
    payload: request
  }
}

export function deletePost(id, callback) {
  const url = `${ROOT_URL}/posts/${id}?key=${API_KEY}`
  const request = axios.delete(url)
    .then(() => callback())

  return {
    type: DELETE_POST,
    payload: id
  }
}