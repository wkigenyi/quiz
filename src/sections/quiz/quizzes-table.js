import PropTypes from 'prop-types';

import {
  
  Card,
  IconButton,
  
} from '@mui/material';

import { Delete, Edit, Eye } from 'react-feather';
import { useState } from 'react';
import DeleteQuizModal from './quiz-delete-modal';
import QuizEditModal from './quiz-edit-modal';
import Link from 'next/link';
import MuiDataTable from "mui-datatables";

export const QuizzesTable = ({items}) => {
  

  const [selectedQuiz,setSelectedQuiz] = useState(null);
  const [isDeleteModalOpen,setDeleteModalOpen] = useState(false);
  const [isEditModalOpen,setEditModalOpen] = useState(false);

  const handleDeleteQuiz = quiz =>{
    setSelectedQuiz(quiz);
    setDeleteModalOpen(true);
  }

  const handleEditQuiz = quiz =>{
    setSelectedQuiz(quiz);
    setEditModalOpen(true);
  }

  const handleCloseDeleteModal = () =>{
    setDeleteModalOpen(false);
  }

  const handleCloseEditModal = () =>{
    setEditModalOpen(false);
  }

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
    {name:"name",label:"Quiz Name"},
    {name:"description",label:"Description"},
    {name:"points",label:"Points/Grading System"},
    {name:"duration",label:"Duration"},
    {name:"actions",label:"Actions",options:{
      customBodyRenderLite: index => <><IconButton 
      color="error" 
      onClick={()=> handleDeleteQuiz(items[index])} 
      title={`Delete Quiz with key ${items[index].key}`}><Delete /></IconButton>
      <IconButton 
      color="primary"
      onClick={()=>handleEditQuiz(items[index])}
      ><Edit /></IconButton>
      <Link 
      href={`/quizzes/${items[index].key}`} 
      passHref>
      <IconButton 
      color="success" 
      title='View Quiz Details'><Eye /></IconButton>
      </Link></>
    }}
  ]

  return (
    <Card>
      <MuiDataTable 
      data={items} 
      columns={columns}
      options={options}
      />
    <DeleteQuizModal 
    open={isDeleteModalOpen} 
    quiz={selectedQuiz}
    onClose = {handleCloseDeleteModal}
    />
    <QuizEditModal 
    quiz={selectedQuiz} 
    onClose={handleCloseEditModal}
    open={isEditModalOpen}
    />
    
    
    </Card>
  );
};


