
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  IconButton,
  
} from '@mui/material';

import { Delete, Edit, HelpCircle, Plus } from 'react-feather';
import {  useState } from 'react';
import { blue } from '@mui/material/colors';
import QuestionEditorModal from './question-editor/question-editor-modal';
import DeleteQuestionModal from './question-delete-modal';
import { useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import { selectQuestionsByQuizId } from '@/slices/questions';

export const QuestionsTable = ({quizId}) => {
  

  const options = {
    download:false,
    filter:false,
    //pagination:false,
    print:false,
    //search:false,
    viewColumns:false,
    selectableRows:"none"
}

  const columns = [
    {name:"questionText",label:"Question"},
    {name:"actions",label:"Actions",options:{customBodyRenderLite: index => <><IconButton 
      color="error" 
      onClick={()=> handleDeleteQuestion(questions[index])} 
      title="Delete this question and its answers"><Delete /></IconButton>
      <IconButton
      title="Edit This Question" 
      color="primary"
      onClick={()=>handleEditQuestion(questions[index])}
      ><Edit /></IconButton></>}}
  ]

  const [selectedQuestion,setSelectedQuestion] = useState(null);
  const [isDeleteModalOpen,setDeleteModalOpen] = useState(false);
  const [isEditModalOpen,setEditModalOpen] = useState(false);

  const handleDeleteQuestion = question =>{
    setSelectedQuestion(question);
    setDeleteModalOpen(true);
  }

  const handleEditQuestion = question =>{
    setSelectedQuestion(question);
    setEditModalOpen(true);
  }

  const handleOpenEditModalForAddition = () =>{
    setSelectedQuestion(null)
    setEditModalOpen(true)
  }

  const handleCloseDeleteModal = () =>{
    setDeleteModalOpen(false);
  }

  const handleCloseEditModal = () =>{
    setEditModalOpen(false);
  }

  
  const questions = useSelector(selectQuestionsByQuizId(quizId))
  const removeDeletedQuestion = key =>{
    setQuestions(questions => questions.filter(a => a.id !== key))
  }

  
  


  return (
    <>
    <Card>
      <CardHeader 
      avatar={<Avatar sx={{background: blue[500]}}><HelpCircle/></Avatar>}
      action={<Button 
        color="success"
        startIcon={<Plus/>}
        onClick={handleOpenEditModalForAddition}
        >Add A Question</Button>}
      title="Questions for this quiz"
      />
      <MUIDataTable 
      columns={columns} 
      data={questions} 
      options={options}/>
      
    
    
      
    </Card>
    <QuestionEditorModal 
    quizId={quizId}
    open={isEditModalOpen} 
    onClose={handleCloseEditModal}
    question={selectedQuestion}/>
    <DeleteQuestionModal
    question={selectedQuestion}
    open={isDeleteModalOpen}
    onClose={handleCloseDeleteModal}
    removeDeletedQuestion={removeDeletedQuestion}
    />
    </>
  );
};


