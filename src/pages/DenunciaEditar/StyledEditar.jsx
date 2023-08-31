import {
	Box,
	Grid,
	styled,
	Typography,
	TextField,
	Button,
	Autocomplete
} from '@mui/material';

export const StyledTypography1 = styled(Typography)({
	color: '#322153',
	fontSize: '25pt',
	fontWeight: 'bold',
});

export const StyledTypography2 = styled(Typography)({
	color: '#322153',
	margin: '2rem 0',
	fontSize: '15pt',
	fontWeight: 'bold',
});

export const StyledTextField1 = styled(TextField)({
	width: '100%',
	backgroundColor: '#EAF3FF',
	boxShadow: '0 0 0 0',
	outline: 0,
	border: '1px solid transparent',
});

export const StyledTextField2 = styled(TextField)({
	width: '100%',
	backgroundColor: '#EAF3FF',
	marginBottom: 'rem',
});

export const StyledTextField3 = styled(Autocomplete)({
	width: '100%',
	backgroundColor: '#EAF3FF',
	marginBottom: 'rem',
});

export const StyledBox = styled(Box)({
	backgroundColor: 'white',
	maxWidth: '900px',
	width: '70vw',
	margin: '2rem auto 5rem auto',
	padding: '1rem 2rem',
	borderRadius: '10px',
});

export const StyledGrid = styled(Grid)({
	margin: '.5rem 0',
	padding: '1rem',
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
	width: '200px',
	height: '50px',
	display: 'flex',
	marginInlineStart: 'auto',
	color: '#f5f5f5',
	backgroundColor: '#3b8efc',
	'&:hover': {
		backgroundColor: '#1e74e6',
	},
});

export const UploadContainer = styled('div')({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
});

export const UploadInput = styled('input')({
	display: 'none',
});

export const UploadButton = styled('label')({
	width: '100%',
	padding: '20px 20px',
	backgroundColor: '#EAF3FF',
	color: '#4b4b4b',
	cursor: 'pointer',
	borderRadius: '4px',
	border: '1px solid #88c2ff',
});

export const UploadPreviewContainer = styled('div')({
	display: 'flex',
	flexWrap: 'wrap',
	justifyContent: 'center',
});

export const UploadPreview = styled('img')({
	maxWidth: '200px',
	margin: '10px',
});

export const StyledAlert = styled(Typography)({
	fontSize: '10pt',
	color: 'red',
});
