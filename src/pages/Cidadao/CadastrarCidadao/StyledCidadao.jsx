import { Box, TextField, Button, styled, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
  backgroundColor: '#ffffff',
  width: '400px',
  margin: '3rem auto 0 auto',
  textAlign: 'center',
  padding: '3rem 1rem',
  borderRadius: '10px',
});

export const StyledTextField1 = styled(TextField)({
  width: '80%',
});

export const StyledTypography = styled(Typography)({
  color: '#2F88FF',
  fontFamily: 'Arial, Helvetica, sans-serif',
  textTransform: 'uppercase',
  fontWeight: '800',
});

export const StyledTypography2 = styled(Typography)({
  color: '#2e2e2e',
  fontFamily: 'Arial, Helvetica, sans-serif',
  textTransform: 'uppercase',
  fontSize: '10pt',
});

export const StyledButton = styled(Button)({
  width: '80%',
  height: '50px',
  color: '#f5f5f5',
  backgroundColor: '#3b8efc',
  '&:hover': {
    backgroundColor: '#1e74e6',
  },
});

export const StyledAlert = styled(Typography) ({
	fontSize: '10pt',
	color: 'red',
});
