import { Dialog } from "@mui/material";
import DeleteQuizFrom from "./quiz-delete-form";

export default function DeleteQuizModal({open,onClose,quiz,removeDeletedQuiz}){
  return (
  <Dialog
  open={open} 
  onClose={onClose}
  maxWidth = "sm"
  fullWidth
  >
  
    <DeleteQuizFrom 
    onClose={onClose} 
    removeDeletedQuiz={removeDeletedQuiz}
    quiz={quiz}/>
  </Dialog>)
}