import { Dialog } from "@mui/material";
import DeleteQuestionFrom from "./question-delete-form";

export default function DeleteQuestionModal({open,onClose,question,removeDeletedQuestion}){
  return (
  <Dialog
  open={open} 
  onClose={onClose}
  maxWidth = "sm"
  fullWidth
  >
  
    <DeleteQuestionFrom
    onClose={onClose} 
    removeDeletedQuestion={removeDeletedQuestion}
    question={question}/>
  </Dialog>)
}