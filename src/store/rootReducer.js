import { combineReducers } from "@reduxjs/toolkit";
import { quizzesReducer } from "../slices/quizzes";
import { questionsReducer } from "../slices/questions";

export const reducer = combineReducers({
  quizzes:quizzesReducer,
  questions:questionsReducer
})