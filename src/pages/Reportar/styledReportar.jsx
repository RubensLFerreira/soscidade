import { Grid, Button, Box, Typography, styled } from '@mui/material';

export const Container = styled('div')({
	backgroundColor: '#f5f5f5',
	maxWidth: '100vw',
	minHeight: '100vh',
	padding: '1rem',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});

export const StyledBox = styled(Box)({
  maxWidth: '1300px',
  width: '80vw',
  margin: 'auto auto',
});

export const StyledGrid = styled(Grid)({
  paddingBottom: '3rem',
  display: 'inline-block',
});

export const StyledTypography1 = styled(Typography)({
  color: '#322153',
  fontSize: '40pt',
  fontWeight: 'bold',
  marginBottom: '1rem',
});

export const StyledButton1 = styled(Button)({
  backgroundColor: '#2c84f8',
  width: '200px',
  height: '65px',
  margin: '2rem',
});

export const StyledButton2 = styled(Button)({
  backgroundColor: '#263238',
  width: '200px',
  height: '65px',
  margin: '2rem',
  '&:hover': {
    background: '#192024',
  },
});
