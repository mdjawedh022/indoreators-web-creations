import axios from "axios";

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
const postNotesRequest = () => ({ type: POST_NOTES_REQUEST });
const postNotesSuccess = () => ({ type: POST_NOTES_SUCCESS });
const postNotesFailed = () => ({ type: POST_NOTES_FAILED });

const getNotesRequest = () => ({ type: GET_NOTES_REQUEST });
const getNotesSuccess = (payload) => ({  type: GET_NOTES_SUCCESS, payload});
const getNotesFailed = () => ({ type: GET_NOTES_FAILED });

const deleteNotesRequest = () => ({ type: DELETE_NOTES_REQUEST });
const deleteNotesSuccess = () => ({ type: DELETE_NOTES_SUCCESS });
const deleteNotesFailed = () => ({ type: DELETE_NOTES_FAILED });
export const postNotes = (noteData) => async (dispatch) => {
  dispatch(postNotesRequest());

  try {
    await axios.post("http://localhost:3030/api/notes/post", noteData);
    dispatch(postNotesSuccess());
    dispatch(getNotes());
  } catch (error) {
    dispatch(postNotesFailed());
  }
};

export const getNotes = () => async (dispatch) => {
  dispatch(getNotesRequest());

  try {
    const response = await axios.get("http://localhost:3030/api/notes");
    // console.log("API Response:", response.data);

    dispatch(getNotesSuccess(response.data.notes));
  } catch (error) {
    dispatch(getNotesFailed());
  }
};



export const deleteNotes = (noteId) => async (dispatch) => {
  dispatch(deleteNotesRequest());

  try {
    await axios.delete(`http://localhost:3030/api/notes/delete/${noteId}`);
    dispatch(deleteNotesSuccess());
        dispatch(getNotes());
  } catch (error) {
    dispatch(deleteNotesFailed());
  }
};

