import { selectQuestionsByQuizId } from '@/slices/questions';
import { Button, CardActions } from '@mui/material';
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography
} from '@mui/material';
import Link from "next/link"
import { useSelector } from 'react-redux';



export const QuizDetail = ({data}) => {

  const questionsForThisQuiz = useSelector(selectQuestionsByQuizId(data.key)).length

  
  return (

  <Card>
    <CardContent>
      {data?<Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        
        <Typography
          gutterBottom
          variant="h5"
        >
          {data.name}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {data.description} 
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {data.points} Points
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {data.duration} Seconds
        </Typography>
      </Box>:<Skeleton/>}
    </CardContent>
    <CardActions>
      {questionsForThisQuiz >= 2 ?
      <Link 
      href={`/quizzes/${data.key}/attempt`} 
      passHref><Button>Take This Quiz</Button>
      </Link>:
      <Typography>Insufficient Questions</Typography>}
    </CardActions>
  </Card>
)};
