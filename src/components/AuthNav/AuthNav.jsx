import { Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box>
      <Button component={NavLink} color="secondary" to="/login">
        LogIn
      </Button>
      <Button component={NavLink} color="secondary" to="/register">
        SignUp
      </Button>
    </Box>
  );
};
