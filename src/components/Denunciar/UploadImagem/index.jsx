import React, { useState } from 'react';
import {
	UploadContainer,
	UploadInput,
	UploadButton,
	UploadPreviewContainer,
	UploadPreview,
	StyledTypography2,
} from './StyledUpload';

const FileUpload = () => {
	

	const handleSendClick = () => {
		// Aqui você fará a solicitação HTTP (POST) para enviar as imagens para o backend
		// Certifique-se de substituir "https://seu-backend.com/upload" pelo URL do seu endpoint de upload no backend

		selectedFiles.forEach((file) => {
			axios
				.post('https://seu-backend.com/upload', { image: file })
				.then((response) => {
					console.log('Imagem enviada com sucesso!', response);
				})
				.catch((error) => {
					console.error('Erro ao enviar imagem:', error);
				});
		});
	};

	return (
		<>
			<StyledTypography2>Enviar fotos</StyledTypography2>
			<UploadContainer>
				<UploadInput
					type="file"
					onChange={handleFileChange}
					id="fileInput"
					multiple
				/>
				<UploadButton htmlFor="fileInput">Selecionar arquivos</UploadButton>
				<UploadPreviewContainer>
					{selectedFiles.map((file, index) => (
						<UploadPreview key={index} src={file} alt={`Preview ${index}`} />
					))}
				</UploadPreviewContainer>
			</UploadContainer>
		</>
	);
};

export default FileUpload;
