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
		'url(https://www.pit.ac.in/assets/images/ContactUs/contact-us-banner.jpg)',
	backgroundSize: 'cover',
	backgroundPosition: 'center center',
	boxShadow: '2px 2px 8px black',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '30pt',
	color: '#f5f5f5',
	fontWeight: 'bolder',
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
	textAlign: 'center',
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
