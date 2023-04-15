import { createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";

export const questionsAdaptor = createEntityAdapter({
  selectId: entity => entity.key
})

export const selectQuestionsByQuizId = quizId => createSelector(selectAllQuestions, questions => questions.filter(a => a.quizId == quizId))

export const {
  selectAll: selectAllQuestions,
} = questionsAdaptor.getSelectors(state => state.questions)

const initialState = questionsAdaptor.getInitialState();
const slice = createSlice({
  initialState,
  name:"questions",
  reducers:{
    addQuestion: (state,question) =>{
      questionsAdaptor.addOne(state,question.payload)
    },
    removeQuestion: (state,question) =>{
      questionsAdaptor.removeOne(state,question.payload.key)
    },
    updateQuestion: (state,question) =>{
      questionsAdaptor.upsertOne(state,question.payload)
    },
    addManyQuestions: (state,questions) =>{
      
      questionsAdaptor.addMany(state,questions.payload);
    }

  }
});

export const  {addQuestion, removeQuestion, updateQuestion,addManyQuestions} = slice.actions

export const questionsReducer = slice.reducer