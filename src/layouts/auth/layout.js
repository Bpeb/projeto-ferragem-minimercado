import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { Logo } from 'src/components/logo';

// TODO: Change subtitle text

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        justifyItems:'center',
      }}
    >
      
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            width:'100%',
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center',
            justifyItems:'center',
           
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%',
            
            
            }}
          >
            <Box
              component={NextLink}
              href="/"
              sx={{
                display: 'inline-flex',
                height: 32,
                width: 32,
                
              }}
            >
              <Logo />
            </Box>
          </Box>
          {children}
        </Grid>
      
      
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node
};