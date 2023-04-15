import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

export const quizzesAdaptor = createEntityAdapter({
  selectId: entity => entity.key
})

export const {
  selectEntities:selectQuizEntities,
  selectAll:selectAllQuizzes,
  selectById,
  selectTotal:selectTotalQuizzes
} = quizzesAdaptor.getSelectors(state => state.quizzes)


const initialState = quizzesAdaptor.getInitialState();
const slice = createSlice({
  initialState,
  name:"quizzes",
  reducers:{
    addManyQuizzes: (state,quizzes) =>{
      quizzesAdaptor.addMany(state,quizzes.payload);
    },
    updateQuiz: (state,quiz) =>{
      quizzesAdaptor.upsertOne(state,quiz)
    },
    removeQuiz: (state,quiz) =>{
      quizzesAdaptor.removeOne(state,quiz.payload.key)
    }
  }
});

export const {addManyQuizzes,updateQuiz,removeQuiz} = slice.actions

export const quizzesReducer = slice.reducer