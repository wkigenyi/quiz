import { Button, CardActions } from '@mui/material';
import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Typography
} from '@mui/material';
import Link from "next/link"



export const QuizDetail = ({data}) => {

  
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
          {data.duration} Minutes
        </Typography>
      </Box>:<Skeleton/>}
    </CardContent>
    <CardActions>
      <Link 
      href={`/quizzes/${data.key}/attempt`} 
      passHref><Button>Take This Quiz</Button></Link></CardActions>
  </Card>
)};
