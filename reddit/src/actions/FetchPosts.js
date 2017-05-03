import axios from 'axios';

const ROOT_URL = "https://www.reddit.com/" 

export const FETCH_POSTS = "fetch_posts";
export const FETCH_CATEGORIES = "fetch_categories";
export const thumbnailDefault = "http://isikonline.com/association/images/default_new_image.jpg";


export function prepareURL(category, pagination) {
  const paginationPath = pagination ? `?count=25&${pagination}` : '';
  const url = `${ROOT_URL}${category}.json${paginationPath}`;
  return url;
}

function fetchPosts(category, pagination) {
  let url = prepareURL(category, pagination);
  let request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function fetchCategories(pagination) {
  const paginationPath = pagination ? `?count=25&${pagination}` : '';
  const url = `${ROOT_URL}subreddits.json${paginationPath}`;
console.log(url);
  let request = axios.get(url);

  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}

export default fetchPosts;