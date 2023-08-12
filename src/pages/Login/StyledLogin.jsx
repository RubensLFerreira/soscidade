import { Box, TextField, Button, styled, Typography } from '@mui/material';

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
	backgroundColor: '#ffffff',
	width: '400px',
	margin: 'auto auto',
	textAlign: 'center',
	padding: '2rem 1rem',
	borderRadius: '10px',
});

export const StyledTextField1 = styled(TextField)({
	width: '80%',
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

export const StyledButton2 = styled(Button)({
	width: '80%',
	height: '50px',
	border: '1px solid #3b8efc',
	'&:hover': {
		border: ' 1px solid #f83e3e',
		color: '#f83e3e',
	},
});

export const StyledAlert = styled(Typography)({
	fontSize: '10pt',
	color: 'red',
});
