
import { FETCH_POSTS, FETCH_CATEGORIES } from  '../actions/FetchPosts';

const INITIAL_STATE = { all: [], categories: [] };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
      case FETCH_CATEGORIES:
      return { ...state, categories: action.payload.data };
    default:
      return state;
  }
}