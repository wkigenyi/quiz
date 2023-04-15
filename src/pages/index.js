import { useState } from 'react';
import Head from 'next/head';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import QuizEditModal from '../sections/quiz/quiz-edit-modal';
import { Add } from '@mui/icons-material';
import { QuizzesTable } from '@/sections/quiz/quizzes-table';
import { useSelector } from 'react-redux';
import { selectAllQuizzes } from '@/slices/quizzes';
import { DashboardLayout } from '@/layouts/dashboard';


const IndexPage = () => {
  const quizzes = useSelector(selectAllQuizzes);
  

  
  
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const closeModal = () =>{
    setAddModalOpen(false);
  }
  const openModal = () =>{
    setAddModalOpen(true);
  }

  

  

  return (
    <DashboardLayout>
      <Head>
        <title>
          Quizzes List | Goreeva Task 1
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Quizzes
                </Typography>
                
              </Stack>
              <div>
                <Button
                  onClick={openModal}
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <Add />
                    </SvgIcon>
                  )}
                  variant="contained"
                >
                  Add New Quiz
                </Button>
              </div>
            </Stack>
            
            <QuizzesTable items={quizzes} />
          </Stack>
        </Container>
      </Box>
      <QuizEditModal 
      open={isAddModalOpen} 
      onClose={closeModal}/>
    </DashboardLayout>
  );
};

export default IndexPage;
