// import styled from 'styled-components';
import { styled, Typography } from '@mui/material';

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

export const StyledTypography2 = styled(Typography)({
	marginTop: '2rem',
	color: '#322153',
	fontSize: '15pt',
	fontWeight: 'bold',
});
