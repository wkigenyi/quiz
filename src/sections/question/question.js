import { Box, Button, FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { Check } from "react-feather";

export default function QuestionPresentation({question,updateAnsweredQuestions,handleNext}){
  const [answer,setAnswer] = useState(null);
  const updateSelectedAnswer = ({answer,chosen}) =>{
    if(chosen){
    setAnswer(answer);
    }else{
    setAnswer(null)
    }
  }

  const handleAnswerConfirmation = () =>{
    if(answer){
      updateAnsweredQuestions(current => [...current, {...question, answer}]);
      handleNext();
    }
  }

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
          {question.questionText}
        </Typography>
        
      </Stack>

      {question.answerOptions.map((a,i) => 
      <Stack 
      spacing={3} 
      key={i}>

        <FormControlLabel
        label={a}
        labelPlacement="end"
        
        control={<Switch 
        defaultChecked={false} 

        checked={answer == a}
        onChange={(_,v) => updateSelectedAnswer({answer:a,chosen:v})}
        
    />}/>
      
    
  
        
        
        
      </Stack>
      )
      }
      
      
        
          
          
          
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            onClick={handleAnswerConfirmation}
            endIcon={<Check/>}           
            variant="contained"
            disabled={!answer}
          >
            Confirm Your Answer
          </Button>
          
          
        
      
    </div>
  </Box>
</Box>
  );
}