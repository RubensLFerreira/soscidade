import {
	Box,
	styled,
	Typography,
	TextField,
	Button,
	Autocomplete,
} from '@mui/material';

export const StyledImgContainer = styled('div')({
	width: '100%',
	height: '200px',
	overflow: 'hidden',
	backgroundImage:
		'url(https://www.paceconsulting.ae/sites/default/files/2020-10/Depositphotos_212262180_xl-2015_0.jpg)',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	boxShadow: '2px 2px 8px black'
});

export const StyledImg = styled('img')({
	backgroundColor: '#214291',
	backgroundRepeat: 'no-repeat',
	width: '100%',
	backgroundPosition: 'left 76px',
	filter: 'brightness(40%)',
});

export const StyledTypography1 = styled(Typography)({
	color: '#322153',
	fontSize: '25pt',
	fontWeight: 'bold',
	textAlign: 'center'
});


export const StyledTextField1 = styled(TextField)({
	width: '60%',
		boxShadow: '0 0 0 0',
	outline: 0,
	border: '1px solid transparent',
	
});

export const StyledTextField2 = styled(TextField)({
	width: '60%',
		backgroundColor: '#EAF3FF',
	marginBottom: 'rem',
});

export const StyledTextField3 = styled(Autocomplete)({
	width: '60%',
		backgroundColor: '#EAF3FF',
	marginBottom: 'rem',
});

export const StyledBox = styled(Box)({
	backgroundColor: 'white',
	maxWidth: '900px',
	width: '70vw',
	margin: '3rem auto 5rem auto',
	padding: '1rem 2rem',
	borderRadius: '10px',
	textAlign: 'center'
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
	margin: '2rem auto',
	color: '#f5f5f5',
	backgroundColor: '#3b8efc',
	'&:hover': {
		backgroundColor: '#1e74e6',
	},
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
