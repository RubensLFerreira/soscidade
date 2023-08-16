import {
	StyledBox,
	StyledTypography1,
	StyledTextField1,
	StyledButton,
	StyledImgContainer,
} from './StyledAtendimento';

import { Grid } from '@mui/material';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Atendimento() {
	return (
		<>
			<Navbar />

			<StyledImgContainer></StyledImgContainer>
			<StyledBox>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<StyledTypography1>Entre em contato conosco</StyledTypography1>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Motivo do contato"
							variant="standard"
							type="text"
							name="nome"
							placeholder="Digite aqui"
						/>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Nome"
							variant="standard"
							type="text"
							name="nome"
							placeholder="Digite seu nome"
						/>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Telefone"
							variant="standard"
							type="tel"
							name="telefone"
							placeholder="Digite seu telefone"
						/>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="Email"
							variant="standard"
							type="email"
							name="email"
							placeholder="Digite seu email"
						/>
					</Grid>

					<Grid item xs={12}>
						<StyledTextField1
							label="CPF"
							variant="standard"
							type="text"
							name="cpf"
							placeholder="Digite seu cpf"
						/>
					</Grid>

					<Grid item xs={12}>
						<StyledButton variant="contained" input type="submit">
							Enviar
						</StyledButton>
					</Grid>
				</Grid>
			</StyledBox>

			<Footer />
		</>
	);
}