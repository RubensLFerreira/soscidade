import { Box, TextField, Button, styled } from '@mui/material';

export const StyledBox  = styled(Box) ({
  backgroundColor: '#ffffff',
  width: '400px',
  margin: '3rem auto 0 auto',
  textAlign: 'center',
  padding: '3rem 1rem',
  borderRadius: '10px'
});

export const StyledTextField1 = styled(TextField)({
  width: "80%",
});

export const StyledButton = styled(Button) ({
  width: '80%',
  height: '50px',
  color: '#f5f5f5',
  backgroundColor: '#3b8efc',
  '&:hover': {
    backgroundColor: '#1e74e6'
  }
});