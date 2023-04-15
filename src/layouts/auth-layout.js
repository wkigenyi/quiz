import { Box, Grid, Link } from "@mui/material";
import NextLink from "next/link";

export default function AuthLayout({children}){
    return (
        <Box 
        component={"main"}
        sx={{
            display: 'flex',
            flex: '1 1 auto'
          }}
        >
            <Grid 
            container
            sx={{
                display: 'flex',
                flex: '1 1 auto'
            }}
            >
                <Grid 
                item 
                sx={{
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}>

                </Grid>
                <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              component={NextLink}
              href="/"
              passHref
              sx={{
                textDecoration:"none",
                display: 'inline-flex',
                height: 32,
                width: 150,
                
              }}
            >
              <Link 
              variant="h4" 
              underline="none">Quiz App</Link>
            </Box>
          </Box>
              {children}
            </Grid>

        </Box>
    );
}