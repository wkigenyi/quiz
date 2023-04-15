import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';



import { useRouter } from 'next/router';



import { useSelector } from 'react-redux';
import { selectQuizEntities } from '@/slices/quizzes';
import { selectQuestionsByQuizId } from '@/slices/questions';
import { DashboardLayout } from '@/layouts/dashboard';
import { QuizPresentation } from '@/sections/question/quiz-presentation';

const Page = () => {

  const {key} = useRouter().query
  
  const quiz = useSelector(selectQuizEntities)[key];
  const questions = useSelector(selectQuestionsByQuizId(key));
  
  
  return (
  <DashboardLayout>
    <Head>
      <title>
        Quiz Attempt | Goreeva Task 1
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Quiz Attempt
            </Typography>
          </div>
          <div>
            
              
              
                <QuizPresentation 
                questions={questions} 
                quiz={quiz}/>
              
            
          </div>
        </Stack>
      </Container>
    </Box>
  </DashboardLayout>
)};



export default Page;
