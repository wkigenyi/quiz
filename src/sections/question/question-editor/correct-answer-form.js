
import { getSingleQuestionRef, questionsReference } from "@/utils/firebase";
import { Autocomplete, Box, Button, Chip, Stack, TextField, Typography } from "@mui/material";
import { push, set } from "firebase/database";
import { useFormik } from "formik";
import { useState } from "react";
import { ArrowLeft, Save } from "react-feather";

export default function CorrectAnswerForm({question,changes,setChanges,onClose,onPrevious,quizId}){
  
  const correctAnswer = changes.correctAnswer?changes.correctAnswer: question?question.correctAnswer:null
  const answerOptionsToShow = changes.answerOptions && changes.answerOptions.length ? changes.answerOptions: question?question.answerOptions:[]
  const [isSubmitting,setIsSubmitting] = useState(false)
  function addQuestionData(){
    setIsSubmitting(true);
    if(question){
      const {id,...originalQuestion} = question;
      
      const updatedData = {...originalQuestion, ...changes}
      
      const ref = getSingleQuestionRef(id);
      
      set(ref,{...updatedData}).then(
        _ =>{
          
          setIsSubmitting(false); 
          onClose()
        },
        err =>{

        }
      )

    }else{
      const newQuestion = push(questionsReference);
      set(newQuestion,{...changes,quizId}).then(
      data =>{ 
        setIsSubmitting(false); 
        onClose()
      },
      err =>{
        console.log(err);
        setIsSubmitting(false);
      })
    }
    
  }

  
  
  const formik = useFormik({
    initialValues:{answerText:""},
    onSubmit: values =>{
      setChanges({...changes,answerOptions:[...changes.answerOptions,values.answerText]})
      formik.resetForm({answerText:""})
    }

  })
   
  
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
          Select the correct answer
        </Typography>
        
      </Stack>
      
      
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={3}>
            <Autocomplete 
            options={answerOptionsToShow}
            onChange={(_,v) => setChanges({...changes,correctAnswer:v})}
            getOptionLabel={(v) => v.toString()}
            defaultValue={correctAnswer}
            renderInput={(params) =><TextField
              error={!!(formik.touched.answerText && formik.errors.answerText)}
              fullWidth
              helperText={formik.touched.answerText && formik.errors.answerText}
              label="Select the correct answer"
              required
              onBlur={formik.handleBlur}
              
              
              {...params}
            />}/>
            
            
            
            
          </Stack>
          
          
          
          <Button
            fullWidth
            
            size="large"
            startIcon={<ArrowLeft/>}
            onClick={onPrevious}
            sx={{ mt: 3 }}
            color="primary"
            variant="outlined"
            
          >
            Previous | Specify Answer Options
          </Button>
          <Button
            fullWidth
            
            size="large"
            disabled={
               !question && !changes.correctAnswer ||
              question && Object.keys(changes).length == 0 ||  
              isSubmitting}
            endIcon={<Save/>}
            onClick={addQuestionData}
            sx={{ mt: 3 }}
            color="success"
            variant="contained"
            
            
          >
            Submit the Question
          </Button>
          <Button
            fullWidth
            
            size="large"
            onClick={onClose}
            sx={{ mt: 3 }}
            color="error"
            
          >
            Cancel
          </Button>
          
        </form>
      
    </div>
  </Box>
</Box>
  );
}