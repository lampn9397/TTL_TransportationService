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
        ready: true,
        loading: false,
        loggedInUser: action.loggedInUser,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOGIN_ERROR: {
      return {
        ...state,
        ready: true,
        loading: false,
        loggedInUser: null,
        error: action.error,
      };
    }

    case ActionTypes.AUTH_REGISTER: {
      return {
        ...state,
        loading: true,
        loggedInUser: null,
        error: null,
      };
    }

    case ActionTypes.AUTH_REGISTER_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.loggedInUser,
        error: null,
      };
    }

    case ActionTypes.AUTH_REGISTER_ERROR: {
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        error: action.error,
      };
    }

    case ActionTypes.AUTH_REGISTER_VERIFY_CODE: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.AUTH_REGISTER_VERIFY_CODE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.loggedInUser,
      };
    }

    case ActionTypes.AUTH_REGISTER_VERIFY_CODE_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }

    case ActionTypes.AUTH_UPDATE_PROFILE: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.AUTH_UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.loggedInUser,
      };
    }

    case ActionTypes.AUTH_UPDATE_PROFILE_FAIL: {
      return {
        ...state,
        loading: false,
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
        loading: true,
      };
    }

    case ActionTypes.AUTH_UPDATE_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case ActionTypes.AUTH_UPDATE_PASSWORD_SUCCESS: {
      // console.log(action);
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
