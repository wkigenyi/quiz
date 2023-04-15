import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { ArrowRight } from "react-feather";

export default function QuestionTextForm({question,onNext,changes,setChanges,onClose}){
  
  const formik = useFormik({
    initialValues:{questionText:changes.questionText},
    onSubmit: values =>{
      if(values.questionText){
        setChanges({...changes,questionText:values.questionText})
      }
      
      onNext()
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
          {question ? "Edit Question Text": "Specify The Question Text"}
        </Typography>
        
      </Stack>
      
      
        <form
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={3}>
            <TextField
              error={!!(formik.touched.questionText && formik.errors.questionText)}
              fullWidth
              helperText={formik.touched.questionText && formik.errors.questionText}
              label="Question Text"
              name="questionText"
              required
              onBlur={formik.handleBlur}
              defaultValue={question?question.questionText:""}
              onChange={formik.handleChange}
              value={formik.values.questionText}
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
            endIcon={<ArrowRight/>}
            disabled={!formik.values.questionText && !question }
            type="submit"
            variant="contained"
          >
            Confirm Question Text
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