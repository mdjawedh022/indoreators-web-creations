import {
    DELETE_NOTES_FAILED,
    DELETE_NOTES_REQUEST,
  DELETE_NOTES_SUCCESS,
  GET_NOTES_FAILED,
  GET_NOTES_REQUEST,
  GET_NOTES_SUCCESS,
  POST_NOTES_FAILED,
  POST_NOTES_REQUEST,
  POST_NOTES_SUCCESS,
} from "./actionTypes";

const initialState = {
  notes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_NOTES_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case POST_NOTES_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case POST_NOTES_FAILED:
      return { ...state, isLoading: false, isError: false };
    case GET_NOTES_REQUEST:
      return { ...state, isLoading: false, isError:true };
    case GET_NOTES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        notes: payload,
      };
    case GET_NOTES_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case DELETE_NOTES_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case DELETE_NOTES_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case DELETE_NOTES_FAILED:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
