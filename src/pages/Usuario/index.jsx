import { useState } from 'react';
import jwtDecode from 'jwt-decode';

import InputSearch from '../../components/Admin/InputSearch';
import TabelaDashBoardUsuario from '../../components/TabelaDashboardUsuario';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import {
	StyledBox,
	StyledGrid,
	StyledGrid1,
	StyledGrid2,
	StyledTypography1,
	StyledTypography2,
	ListStyle,
} from './StyledAdmin';

import { ListItem, ListItemText, Divider } from '@mui/material';

export default function Dashboardusuario() {
	const [buttonAtive1, setButtonAtive1] = useState('button1');

	const buttonClick1 = (buttonId1) => {
		setButtonAtive1(buttonId1);
	};

	const token = localStorage.getItem('token');
	const decoded = jwtDecode(token);

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
					</StyledGrid1>
					<StyledGrid2>
						{buttonAtive1 === 'button1' && <TabelaDashBoardUsuario />}
					</StyledGrid2>
				</StyledGrid>
			</StyledBox>

			<Footer />
		</>
	);
}
