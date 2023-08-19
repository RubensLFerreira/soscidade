import {
	StyledBox,
	StyledTypography1,
	StyledImgContainer,
} from './StyledInformacao';

import { Grid } from '@mui/material';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Informacao() {
	return (
		<>
			<Navbar />

			<StyledImgContainer>Quem somos</StyledImgContainer>
			<StyledBox>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<StyledTypography1>SOS Cidade</StyledTypography1>
					</Grid>

					<Grid item xs={12}>
						O SOSCidade surge como uma proposta de sistema que visa solucionar
						os problemas de infraestrutura urbana, que se referem às estruturas
						e serviços necessários para o funcionamento de uma cidade,
						considerando aspectos ambientais, sociais e econômicos. A
						importância do SOSCidade está em fornecer uma solução eficiente para
						as questões encontradas nos municípios, permitindo que os cidadãos
						reportem problemas em suas comunidades e que as autoridades
						governamentais possam responder de maneira ágil e eficaz.
					</Grid>

					<Grid item xs={12}>
						O sistema supracitado aborda desafios importantes da nossa realidade
						urbana, como avenidas e ruas esburacadas, falta de calçadas,
						iluminação pública precária, saneamento básico deficiente, ciclovias
						ausentes, coleta de lixo ineficiente, problemas de trânsito e pontes
						e viadutos em mal estado. A plataforma promoverá a participação
						ativa dos cidadãos na construção de cidades mais sustentáveis, com
						foco na melhoria da qualidade de vida.
					</Grid>

					<Grid item xs={12}>
						Com o uso do SOSCidade, será possível monitorar e avaliar áreas
						problemáticas por meio da geolocalização, permitindo a tomada de
						decisões mais assertivas e a execução de intervenções mais ágeis e
						precisas. Isso resulta na construção de cidades mais sustentáveis e
						seguras para todos. Além disso, a utilização de tecnologias como
						esse projeto permitirá uma maior participação e engajamento da
						sociedade no processo de planejamento e gestão urbana, contribuindo
						para uma maior transparência e efetividade das políticas públicas.
					</Grid>
				</Grid>
			</StyledBox>

			<Footer />
		</>
	);
}
