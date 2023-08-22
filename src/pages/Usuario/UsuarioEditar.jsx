import { StyledBox, StyledTypography1 } from './StyledEditar';

import { Grid } from '@mui/material';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function UsuarioEditar() {
	return (
		<>
			<Navbar />

			<StyledBox>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<StyledTypography1>
							Aqui ficará a página de edição das denúncias!
						</StyledTypography1>
					</Grid>

					<Grid item xs={12}></Grid>
				</Grid>
			</StyledBox>

			<Footer />
		</>
	);
}
