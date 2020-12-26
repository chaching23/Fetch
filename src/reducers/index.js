import { combineReducers } from "redux";
import { stubTrue } from "lodash";
import { isNull } from "lodash";

const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

const post = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_PHOTO":
      return { ...state, photo: action.payload };
    case "UPDATE_AUDIO":
      return { ...state, audio: action.payload };
    case "UPDATE_VIDEO":
      return { ...state, video: action.payload };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: action.payload };
    case "UPDATE_CATEGORY":
      return { ...state, category: action.payload };
    case "CLEAR_POST":
      return {
        ...state,
        category: null,
        description: null,
        photo: null,
        video: null,
      };
    case "CLEAR_PIC":
      return { ...state, photo: null };
    case "CLEAR_VIDEO":
      return { ...state, video: null };

    case "UPDATE_LOCATION":
      return { ...state, location: action.payload };

    default:
      return [];
  }
};

const newFeed = (state = null, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, feed: action.payload };

    case "GET_NEXT_POSTS":
      return { ...state, feed: state.feed.concat(action.payload) };

    case "ADD_NEW_LIKE":
      return {
        ...state,
        feed: state.feed.map((post) => {
          if (post.id == action.payload.id) {
            return {
              ...post,
              postBlastScore: post.postBlastScore + 1,
              totalClicks: post.totalClicks + 1,
            };
          }

          return post;
        }),
      };

    case "ADD_NEW_UNLIKE":
      return {
        ...state,
        feed: state.feed.map((post) => {
          if (post.id == action.payload.id) {
            return {
              ...post,
              postBlastScore: post.postBlastScore - 1,
              totalClicks: post.totalClicks - 1,
            };
          }

          return post;
        }),
      };

    case "ADD_NEW_DISLIKE":
      return {
        ...state,
        feed: state.feed.map((post) => {
          if (post.id == action.payload.id) {
            return {
              ...post,
              postBlastScore: post.postBlastScore - 1,
              totalClicks: post.totalClicks + 1,
            };
          }

          return post;
        }),
      };

    case "ADD_NEW_UNDISLIKE":
      return {
        ...state,
        feed: state.feed.map((post) => {
          if (post.id == action.payload.id) {
            return {
              ...post,
              postBlastScore: post.postBlastScore + 1,
              totalClicks: post.totalClicks - 1,
            };
          }

          return post;
        }),
      };

    default:
      return state;
  }
};

const hotFeed = (state = null, action) => {
  switch (action.type) {
    case "GET_HOT":
      return { ...state, feed: action.payload };

    case "GET_NEXT_HOT":
      return { ...state, feed: state.feed.concat(action.payload) };

    case "ADD_HOT_LIKE":
      return {
        ...state,
        feed: state.feed.map((post) => {
          if (post.id == action.payload.id) {
            return {
              ...post,
              postBlastScore: post.postBlastScore + 1,
              totalClicks: post.totalClicks + 1,
            };
          }

          return post;
        }),
      };

    case "ADD_HOT_UNLIKE":
      return {
        ...state,
        feed: state.feed.map((post) => {
          if (post.id == action.payload.id) {
            return {
              ...post,
              postBlastScore: post.postBlastScore - 1,
              totalClicks: post.totalClicks - 1,
            };
          }

          return post;
        }),
      };

    case "ADD_HOT_DISLIKE":
      return {
        ...state,
        feed: state.feed.map((post) => {
          if (post.id == action.payload.id) {
            return {
              ...post,
              postBlastScore: post.postBlastScore - 1,
              totalClicks: post.totalClicks + 1,
            };
          }

          return post;
        }),
      };

    case "ADD_HOT_UNDISLIKE":
      return {
        ...state,
        feed: state.feed.map((post) => {
          if (post.id == action.payload.id) {
            return {
              ...post,
              postBlastScore: post.postBlastScore + 1,
              totalClicks: post.totalClicks - 1,
            };
          }

          return post;
        }),
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
  post,

  newFeed,
  hotFeed,
});

export default rootReducer;
