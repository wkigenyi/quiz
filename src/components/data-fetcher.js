import { useEffect } from "react";
import { useList } from "react-firebase-hooks/database";
import { questionsReference, quizReference } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addManyQuestions, removeQuestion, updateQuestion } from "../slices/questions";
import { addManyQuizzes, removeQuiz, updateQuiz } from "../slices/quizzes";
import { onChildChanged, onChildRemoved } from "firebase/database";


export default function DataFetcher(){
  const [quizzes] = useList(quizReference);
  const [questions] = useList(questionsReference);
  const dispatch = useDispatch()
  useEffect(()=>{
    if(questions.length){
      const data = questions.map(a =>({key:a.key,...a.val()}))
      dispatch(addManyQuestions(data))
    }
    
  },[questions,dispatch])
  useEffect(()=>{
    if(quizzes.length){
      const data = quizzes.map(a =>({key:a.key,...a.val()}))
      dispatch(addManyQuizzes(data))
    }
  },[quizzes,dispatch])

  useEffect(()=>{
    onChildChanged(quizReference,updatedQuiz => dispatch(updateQuiz(updatedQuiz.val())))
    onChildRemoved(quizReference,deletedChild => dispatch(removeQuiz(deletedChild.val())))
    onChildChanged(questionsReference, updatedQuestion => dispatch(updateQuestion(updatedQuestion.val())))
    onChildRemoved(questionsReference, deletedQuestion => {
      dispatch(removeQuestion(deletedQuestion.val()))
    })
  })
  return <></>
}