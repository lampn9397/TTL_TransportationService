import ActionTypes from '../action';

const defaultState = {
  selectedDate: null,
  selectedSeat: null,
  selectedTicket: null,
  selectedEndPoint: null,
  selectedStartTime: null,
  selectedDropPoint: null,
  selectedStartPoint: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_START_POINT: {
      return {
        ...state,
        selectedStartPoint: action.point,
      };
    }
    case ActionTypes.SELECT_END_POINT: {
      return {
        ...state,
        selectedEndPoint: action.point,
      };
    }
    case ActionTypes.SELECT_DATE: {
      return {
        ...state,
        selectedDate: action.date,
      };
    }
    case ActionTypes.SELECT_SEAT: {
      return {
        ...state,
        selectedSeat: action.seat,
      };
    }
    case ActionTypes.SELECT_START_TIME: {
      return {
        ...state,
        selectedStartTime: action.time,
      };
    }
    case ActionTypes.SELECT_DROP_POINT: {
      return {
        ...state,
        selectedDropPoint: action.point,
      };
    }
    case ActionTypes.SELECT_TICKET: {
      return {
        ...state,
        selectedTicket: action.ticket,
      };
    }
    default:
      return state;
  }
};
