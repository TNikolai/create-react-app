
import { FETCH_POSTS, SHOW_POST } from  '../actions/FetchPosts';

const INITIAL_STATE = { all: [], currentPost: null };

export default function (state = INITIAL_STATE, action) {
  switch(action.type) {
    case SHOW_POST:
    return {...state, post: action.payload.data};
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;
  }
}