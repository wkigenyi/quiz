import { Box, Button, Chip, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { ArrowLeft, ArrowRight, Plus } from "react-feather";

export default function AnswerOptionsForm({question,onNext,changes,setChanges,onClose,onPrevious}){
  
  const answerOptionsToShow = changes.answerOptions && changes.answerOptions.length ? changes.answerOptions: question?question.answerOptions:[]
  const deleteOption = index =>{
    const deleteOption = answerOptionsToShow[index];
    
    setChanges({...changes,answerOptions: answerOptionsToShow.filter(a => a != deleteOption)})
  }

  
  
  
  const formik = useFormik({
    initialValues:{answerText:""},
    onSubmit: values =>{
      setChanges({...changes,answerOptions: [...answerOptionsToShow,values.answerText ]})
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
          Specify the answer options
        </Typography>
        
      </Stack>
      
      
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={3}>
            <TextField
              error={!!(formik.touched.answerText && formik.errors.answerText)}
              fullWidth
              helperText={formik.touched.answerText && formik.errors.answerText}
              label="Answer Text"
              name="answerText"
              required
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.answerText}
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
            endIcon={<Plus/>}
            disabled={!formik.values.answerText}
            type="submit"
            variant="contained"
          >
            Add The Answer as an option
          </Button>
          <Box marginTop={3}>
          {answerOptionsToShow.length ? answerOptionsToShow.map((answer,i) => 
          <Chip 
          key={i} 
          title="Click on the X to delete this option"
          label={answer}
          sx={{mr:1,mt:1}}
          onDelete={()=>{deleteOption(i)}}
          />) : <Typography>There are no answers for this question yet</Typography>}
          </Box>
          <Button
            fullWidth
            
            size="large"
            startIcon={<ArrowLeft/>}
            onClick={onPrevious}
            
            sx={{ mt: 3 }}
            color="primary"
            variant="outlined"
            
          >
            Previous | Specify Question Text
          </Button>
          <Button
            fullWidth
            disabled={answerOptionsToShow.length < 2}
            size="large"
            endIcon={<ArrowRight/>}
            onClick={onNext}
            sx={{ mt: 3 }}
            color="primary"
            variant="contained"
            
            
          >
            Next | Specify The Correct Answer
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