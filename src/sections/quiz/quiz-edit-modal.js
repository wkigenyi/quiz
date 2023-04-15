import { Dialog } from "@mui/material";
import QuizEditFrom from "./quiz-edit-form";

export default function QuizEditModal({open,onClose,quiz}){
  return (
  <Dialog
  open={open} 
  onClose={onClose}
  maxWidth="sm"
  fullWidth
  >
  
    <QuizEditFrom 
    onClose={onClose} 
    quiz={quiz}/>
  </Dialog>)
}