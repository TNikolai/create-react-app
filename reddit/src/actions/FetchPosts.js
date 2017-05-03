import axios from 'axios';

const ROOT_URL = "https://www.reddit.com/" 

export const FETCH_POSTS = "fetch_posts";
export const FETCH_CATEGORIES = "fetch_categories";
export const thumbnailDefault = "http://isikonline.com/association/images/default_new_image.jpg";

function fetchPosts(category) {
  const url = `${ROOT_URL}${category}.json`;
  let request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchCategories() {
  const url = `${ROOT_URL}subreddits.json`;
  let request = axios.get(url);

  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

export default fetchPosts;