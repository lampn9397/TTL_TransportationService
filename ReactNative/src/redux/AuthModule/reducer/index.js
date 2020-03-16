import ActionTypes from '../action';

const defaultState = {
  ready: false,
  loading: false,
  loggedInUser: null,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN: {
      return {
        ...state,
        loading: true,
        loggedInUser: null,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.loggedInUser,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        error: action.error,
      };
    }

    case ActionTypes.AUTH_CHECK_ASYNC_STORAGE: {
      return {
        ...state,
      };
    }

    case ActionTypes.AUTH_CHECK_ASYNC_STORAGE_DONE: {
      return {
        ...state,
        ready: true,
      };
    }

    case ActionTypes.AUTH_LOGOUT_HANDLING: {
      return state;
    }

    case ActionTypes.AUTH_LOGOUT_DONE: {
      return {
        ...state,
        ready: true,
        loading: false,
        loggedInUser: null,
        error: null,
      };
    }

    case ActionTypes.AUTH_UPDATE_PASSWORD: {
      return {
        ...state,
      };
    }

    case ActionTypes.AUTH_UPDATE_PASSWORD_FAIL: {
      return {
        ...state,
      };
    }

    case ActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS: {
      // console.log(action);
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          password: action.password,
        },
      };
    }
    default:
      return state;
  }
};
