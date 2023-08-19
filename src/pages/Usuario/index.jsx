import { useState } from 'react';
import jwtDecode from 'jwt-decode';

import InputSearch from '../../components/Admin/InputSearch';
import TabelaProblemasPendentes from '../../components/Admin/TabelaProblemasPendentes';
import TabelaProblemasFinalizados from '../../components/Admin/TabelaProblemasFinalizados';
import TabelaDashBoardUsuario from '../../components/TabelaDashboardUsuario';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import {
	StyledBox,
	StyledGrid,
	StyledGrid1,
	StyledGrid2,
	StyledGrid3,
	StyledTypography1,
	StyledTypography2,
	ListStyle,
} from './StyledAdmin';

import { ListItem, ListItemText, Divider } from '@mui/material';

export default function Dashboardusuario() {
	const [buttonAtive1, setButtonAtive1] = useState('button1');
	const [buttonAtive2, setButtonAtive2] = useState('button4');

	const buttonClick1 = (buttonId1) => {
		setButtonAtive1(buttonId1);
	};

	const buttonClick2 = (buttonId2) => {
		setButtonAtive2(buttonId2);
	};

	const token = localStorage.getItem('token');
	const decoded = jwtDecode(token);
	// const nomeUsuario = decoded.nome;

	return (
		<>
			<Navbar />
			<StyledBox>
				<StyledGrid container>
					<StyledGrid1>
						<StyledTypography1>Dashboard</StyledTypography1>
						<InputSearch />

						<div style={{ margin: '2rem 0' }}>
							<StyledTypography2>Lista de denúncias</StyledTypography2>
							<ListStyle component="nav" aria-label="mailbox folders">
								<Divider light />
								<ListItem button>
									<ListItemText
										primary="Visualizar"
										onClick={() => buttonClick1('button1')}
									/>
								</ListItem>
							</ListStyle>
						</div>

						{/* <div style={{ margin: '1rem 0' }}>
							<StyledTypography2>Filtrar Denúncias por</StyledTypography2>
							<ListStyle component="nav" aria-label="mailbox folders">
								<ListItem button>
									<ListItemText
										primary="Finalizadas"
										onClick={() => buttonClick2('button4')}
									/>
								</ListItem>
								<Divider light />
								<ListItem button>
									<ListItemText
										primary="Pendentes"
										onClick={() => buttonClick2('button5')}
									/>
								</ListItem>
							</ListStyle>
						</div> */}
					</StyledGrid1>
					<StyledGrid2>
						{buttonAtive1 === 'button1' && <TabelaDashBoardUsuario />}
					</StyledGrid2>
					<StyledGrid3>
						{/* {buttonAtive2 === 'button4' && <TabelaProblemasFinalizados />} */}
						{/* {buttonAtive2 === 'button5' && 'Local reservado para a tabela'} */}
						{/* {buttonAtive2 === 'button5' && <TabelaProblemasPendentes />} */}
					</StyledGrid3>
				</StyledGrid>
			</StyledBox>

			<Footer />
		</>
	);
}
