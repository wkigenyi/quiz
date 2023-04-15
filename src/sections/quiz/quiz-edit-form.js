import { quizReference } from "@/utils/firebase";
import {  Box, Button, Stack, TextField, Typography } from "@mui/material";
import { push, set } from "firebase/database";
import { useFormik } from "formik";
import { useState } from "react";

export default function QuizEditFrom({onClose,quiz}){

  const [isSubmitting,setIsSubmitting] = useState(false);

  function addQuizData(data){
    setIsSubmitting(true);
    const newQuiz = push(quizReference);
    set(newQuiz,{...data}).then(
      data =>{ 
        setIsSubmitting(false); 
        onClose()
      },
      err =>{
        console.log(err);
        setIsSubmitting(false);

      })
  }

  function updateQuiz(values){
    setIsSubmitting(true);
    const quizReference = getSingleQuizRef(quiz.key);
    set(quizReference,{...values}).then(
      res =>{
        setIsSubmitting(false);
        onClose();
      },
      err =>{
        console.log(err)
        setIsSubmitting(false)
      }
    );
  }

  const formik = useFormik({
    initialValues: quiz? {...quiz}:{
      name: "",
      description:"",
      points:"",
      duration:"",
      
    },
    onSubmit: (values) =>{
      if(quiz){
        updateQuiz(values)
      }else{
        addQuizData(values)
      }
      
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
          {quiz ? "Edit Quiz": "Add Quiz"}
        </Typography>
        
      </Stack>
      
      
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={3}>
            <TextField
              error={!!(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Quiz Name"
              name="name"
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <TextField
              error={!!(formik.touched.description && formik.errors.description)}
              fullWidth
              helperText={formik.touched.description && formik.errors.description}
              label="Description"
              name="description"
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.description}
            />
            <TextField
              error={!!(formik.touched.duration && formik.errors.duration)}
              fullWidth
              helperText={formik.touched.duration && formik.errors.duration}
              label="Duration (In Seconds)"
              name="duration"
              required
              type="number"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.duration}
            />
            <TextField
              error={!!(formik.touched.duration && formik.errors.duration)}
              fullWidth
              required
              helperText={formik.touched.duration && formik.errors.duration}
              label="Grading System/Points"
              name="points"
              type="number"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.points}
            />
          </Stack>
          
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
            disabled={isSubmitting || !formik.dirty }
            type="submit"
            variant="contained"
          >
            {isSubmitting? "Updating Data .. , Please wait": quiz? "Update Quiz":"Add New Quiz"}
          </Button>
          <Button
            fullWidth
            disabled={isSubmitting }
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