import Head from 'next/head';
import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid, Alert } from '@mui/material';


import { useRouter } from 'next/router';



import { useSelector } from 'react-redux';

import { DashboardLayout } from '@/layouts/dashboard';
import { QuizDetail } from '@/sections/quiz/quiz-detail/quiz-details';
import { QuestionsTable } from '@/sections/question/questions-table';
import { selectQuizEntities } from '@/slices/quizzes';
import { useAuth } from '@/hooks/use-auth';

const Page = () => {

  const {key} = useRouter().query
  
  const quiz = useSelector(selectQuizEntities)[key];

  const {user} = useAuth()

  
  
  
  
  return (
  <DashboardLayout>
    <Head>
      <title>
        Quiz Detail | Goreeva Task 1
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
              Quiz Details
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={4}
              >
                <QuizDetail data={quiz}/>
                
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={8}
              >
                {user && user.username == "admin"?<QuestionsTable quizId={key} />: <Alert severity='info'>Only admin can modify questions</Alert>}
                
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </DashboardLayout>
)};

export default Page;
