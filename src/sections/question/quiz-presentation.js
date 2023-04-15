
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  
} from '@mui/material';

import {  HelpCircle, Plus } from 'react-feather';
import {  useEffect, useState } from 'react';
import { blue } from '@mui/material/colors';
import StartQuiz from './start-quiz';
import QuestionPresentation from './question';
import EndOfQuiz from './end-of-quiz';

export const QuizPresentation = ({quiz,questions}) => {

  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [remainingTime,setRemainingTime] = useState(quiz.duration)
  const [quizStatus,setQuizStatus] = useState("notstarted");
  const [currentQuestionNumber,setCurrentQuestionNumber] = useState(0);
  const handleNext = () =>{
    if(currentQuestionNumber != questions.length - 1){
      setCurrentQuestionNumber(currentQuestionNumber+1);
    }else{
      setQuizStatus("ended")
    }
    
  }

  useEffect(()=>{
    if(remainingTime == 0){
      setQuizStatus("ended")
    }
    if(quizStatus == "started" && remainingTime ){
      setTimeout(()=> {
        setRemainingTime(remainingTime - 1)
      },1000)
    }
    
  },[remainingTime,quizStatus])

  
  const handleStartQuiz = () =>{
    setQuizStatus("started")
  }
  const getStatusLabel = () =>{
    let label = "Unknown Status"
    switch(quizStatus){
      case "notstarted":
        label="Not Started"
        break;
      case "started":
        label="In Session"
        break;
      case "ended":
        label="Quiz Ended"
        break;
      
        
    }
    return label
  }

  const getComponent = () =>{
    let component = "Unknown Status"
    switch(quizStatus){
      case "notstarted":
        component=<StartQuiz startQuiz={handleStartQuiz}/>
        break;
      case "started":
        component=<QuestionPresentation 
        question={questions[currentQuestionNumber]}
        updateAnsweredQuestions={setAnsweredQuestions}
        handleNext={handleNext}
        />
        break;
      case "ended":
        component=<EndOfQuiz 
        answeredQuestions={answeredQuestions} 
        questions={questions}
        quiz={quiz}/>
        break;
      
        
    }
    return component
  }
  return (
    <>
    <Card>
      <CardHeader 
      avatar={<Avatar sx={{background: blue[500]}}><HelpCircle/></Avatar>}
      action={`Remaining Time: ${remainingTime}`}  
      title={getStatusLabel()}
      />
      {getComponent()}
    </Card>
    </>
  );
};


