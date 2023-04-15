import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link"



export default function EndOfQuiz({answeredQuestions,quiz,questions}){

  const correctAnswers = answeredQuestions.filter(a => a.correctAnswer == a.answer);
  const score = (correctAnswers.length/questions.length) * quiz.points;
  return (
    <Box
  sx={{
    backgroundColor: 'background.paper',
    flex: '1 1 auto',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }}
>
  <Box
    sx={{
      maxWidth: 550,
      px: 2,
      py: '50px',
      width: '100%'
    }}
  >
    <div>
      
      <Stack
        spacing={1}
        sx={{ mb: 2 }}
      >
        <Typography variant="h4">
          End Of Quiz
        </Typography>
        <Typography variant="h4">
          {`Your score is ${score} points out of ${quiz.points}`}
        </Typography>
        
      </Stack>

      
    
  
        
        
        
      
      
      
        
          
          
          <Link 
          href={"/"} 
          passHref>
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}         
            variant="contained"
            
          >
            Answer More Quizzes
          </Button>
          </Link>
          
          
          
        
      
    </div>
  </Box>
</Box>
  );
}