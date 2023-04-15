
import { removeQuestion } from "@/slices/questions";
import { getSingleQuestionRef } from "@/utils/firebase";
import {  Box, Button, Stack, Typography } from "@mui/material";
import {  set } from "firebase/database";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function DeleteQuestionFrom({onClose,question}){

  const [isSubmitting,setIsSubmitting] = useState(false);
  const dispatch = useDispatch()

  function deleteQuestion(){
    setIsSubmitting(true);
    
    const deleteQuestion = getSingleQuestionRef(question.key);
    
    set(deleteQuestion,null).then(
      _ =>{ 

        setIsSubmitting(true); 
        onClose()
        dispatch(removeQuestion(question))

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
          {`Delete Question ${question.key} ?`}
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
            onClick={deleteQuestion}
            disabled={isSubmitting}
            variant="contained"
          >
            {isSubmitting? "Deleting .. , Please wait": "Delete This Question"}
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