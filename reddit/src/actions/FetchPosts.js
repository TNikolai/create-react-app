import axios from 'axios';

const ROOT_URL = "https://www.reddit.com/" 
export const FETCH_POSTS = "fetch_posts";
export const SHOW_POST = "show_posts";
export const thumbnailDefault = "http://isikonline.com/association/images/default_new_image.jpg";

function fetchPosts() {
  const url = `${ROOT_URL}.json`;
  let request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}


export function showPost(postPath) {
  const url = `${ROOT_URL}${postPath}.json`;
  let request = axios.get(url);

  return {
    type: SHOW_POST,
    payload: request
  }
}

export default fetchPosts;