import { removeQuiz } from "@/slices/quizzes";
import { getSingleQuizRef } from "@/utils/firebase";
import {  Box, Button, Stack, Typography } from "@mui/material";
import {  set } from "firebase/database";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function DeleteQuizFrom({onClose,quiz}){

  const [isSubmitting,setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  function addQuizData(quiz){
    setIsSubmitting(true);
    
    const deleteQuiz = getSingleQuizRef(quiz.key);
    set(deleteQuiz,null).then(
      _ =>{ 
        setIsSubmitting(true); 
        dispatch(removeQuiz(quiz))
        onClose()
      },
      err =>{
        console.log(err);
        setIsSubmitting(false);

      })
  }

  const formik = useFormik({
    initialValues: {
      name:"",
      description:"",
      points:"",
      duration:"",
      
    },
    onSubmit: (values) =>{
      addQuizData(quiz)
    }
  })
  return <Box
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
          {`Delete quiz ${quiz.name} ?`}
        </Typography>
        
      </Stack>
      
      
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          
          
          {formik.errors.submit && (
            <Typography
              color="error"
              sx={{ mt: 3 }}
              variant="body2"
            >
              {formik.errors.submit}
            </Typography>
          )}
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            color="warning"
            disabled={isSubmitting}
            type="submit"
            variant="contained"
          >
            {isSubmitting? "Deleting .. , Please wait": "Delete This Quiz"}
          </Button>
          <Button
            fullWidth
            disabled={isSubmitting}
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
}