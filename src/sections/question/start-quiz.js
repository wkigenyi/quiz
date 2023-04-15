import { Box, Button } from "@mui/material";
import { ArrowRight } from "react-feather";

export default function StartQuiz({startQuiz}){
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
      
      

      
      
      
        
          
          
          
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            endIcon={<ArrowRight/>}
            onClick={startQuiz}
            
            variant="contained"
          >
            Start The Quiz
          </Button>
          
          
        
      
    </div>
  </Box>
</Box>
  );
}