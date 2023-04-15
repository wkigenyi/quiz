import { Dialog } from "@mui/material";
import QuestionEditorStepper from ".";

export default function QuestionEditorModal({open,question,onClose,quizId}){
  return (
    <Dialog 
    maxWidth="sm"
    fullWidth
    open={open} 
    onClose={onClose}>
      <QuestionEditorStepper 
      quizId={quizId}
      question={question}
      onClose={onClose}
      />
    </Dialog>
  )
}