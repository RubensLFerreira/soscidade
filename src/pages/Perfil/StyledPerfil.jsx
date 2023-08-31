import {
	Box,
	styled,
	Typography,
	TextField,
	Button,
	Select,
} from '@mui/material';

export const StyledTypography1 = styled(Typography)({
	color: '#322153',
	fontSize: '25pt',
	fontWeight: 'bold',
	textAlign: 'center',
});

export const StyledContainer = styled('div')({
	width: '80%',
	margin: '1rem auto 2rem auto',
	padding: '1rem 2rem',
	borderRadius: '10px',
	textAlign: 'justify',
});

export const StyledBox = styled(Box)({
	backgroundColor: 'white',
	maxWidth: '900px',
	width: '70vw',
	minHeight: '40vh',
	margin: '3rem auto 5rem auto',
	padding: '1rem 2rem',
	borderRadius: '10px',
	textAlign: 'justify',
});

export const StyledBox2 = styled(Box)({
	margin: '2rem 0',
	display: 'flex',
	flexWrap: 'wrap',
	'& > :not(style)': {
		m: 1,
		width: 228,
		height: 228,
		margin: 10,
	},
	justifyContent: 'space-around',
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

export const StyledTextField1 = styled(TextField)({
	width: '100%',
});

export const StyledTextField2 = styled(Select)({
	width: '100%',
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
