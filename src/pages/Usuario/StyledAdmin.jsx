import { styled, Box, Grid, TextField, List, Typography } from '@mui/material';

export const StyledBox = styled(Box)({
	backgroundColor: '#ffffff',
	width: '80%',
	margin: '3rem auto 0 auto',
	textAlign: 'center',
	padding: '3rem 1rem',
	borderRadius: '10px',
});

export const StyledGrid = styled(Grid)({
	display: 'grid',
	gridTemplateColumns: '1fr 3fr',
	gridTemplateRows: 'repeat(2, 1fr)',
	gridColumnGap: '8px',
	gridRowGap: '1rem',
});

export const StyledGrid1 = styled(Grid)({
	gridArea: '1 / 1 / 3 / 2',
	// backgroundColor: '#fc9a9a',
	borderRadius: '10px 0 0 10px',
});

export const StyledGrid2 = styled(Grid)({
	gridArea: '1 / 2 / 2 / 3',
	// backgroundColor: '#9ad8fc',
	height: '100%',
	borderRadius: '0 10px 0 0',
});

export const StyledGrid3 = styled(Grid)({
	gridArea: '2 / 2 / 3 / 3',
	// backgroundColor: '#9ad8fc',
	borderRadius: '0 0 10px 0',
	height: '100%',
});

export const StyledTypography1 = styled(Typography)({
	textAlign: 'center',
	margin: '2rem 0',
	fontSize: '20pt',
});

export const StyledTypography2 = styled(Typography)({
	textAlign: 'left',
	fontSize: '15pt',
});

// Barra de pesquisa

export const InputSearch = styled('input')({
	width: '80%',
	height: '3rem',
	marginTop: '2rem',
	borderRadius: '10px',
	fontSize: '13pt',
	padding: '0 1rem',
	border: 'none',
	boxShadow: '0 0 0 0',
	outline: '0',
});

// Listas

export const ListStyle = styled(List)({
	width: '100%',
	maxWidth: 360,
	bgcolor: 'background.paper',
});
