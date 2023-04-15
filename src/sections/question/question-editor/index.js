import { Box } from "@mui/material";
import { useState } from "react"
import QuestionTextForm from "./question-text-form";
import AnswerOptionsForm from "./answer-options-form";
import CorrectAnswerForm from "./correct-answer-form";

export default function QuestionEditorStepper({question,onClose,quizId}){
  
  const [activeStep,setActiveStep] = useState(0);
  const [changes,setChanges] = useState({})
  
  const handleNext = () =>{
    setActiveStep(activeStep+1);
  }

  const handlePrevious = () =>{
    setActiveStep(activeStep-1)
  }

  const getContent = () =>{
    switch(activeStep){
      case 0:
        return <QuestionTextForm 
        onNext={handleNext} 
        question={question}
        changes={changes} 
        onClose={onClose}
        setChanges={setChanges}/>
        break;
      case 1:
        return <AnswerOptionsForm 
        onNext={handleNext} 
        question={question}
        onClose={onClose}
        onPrevious={handlePrevious}
        changes={changes}
        setChanges={setChanges}/>
        break;
      case 2:
        return <CorrectAnswerForm 
      
        quizId={quizId}
        onNext={onClose} 
        changes={changes}
        setChanges={setChanges}
        onClose={onClose}
        question={question}
        onPrevious={handlePrevious}/>
        break;
      default:
        return null;
    }
  }

  return (
  
    <Box sx={{width:"100%",p:2}}>
    <Box sx={{display:"flex", flexDirection:"row"}}>
    
    {getContent()}
    </Box>
    
    
  </Box>
  );
}