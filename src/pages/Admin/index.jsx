import InputSearch from '../../components/Admin/InputSearch';
import TabelaCidadaos from '../../components/Admin/TabelaCidadaos';
import TabelaPrefeituras from '../../components/Admin/TabelaPrefeituras';
import TabelaProblemas from '../../components/Admin/TabelaProblemas';
import TabelaProblemasFinalizados from '../../components/Admin/TabelaProblemasFinalizados';
import TabelaProblemasPendentes from '../../components/Admin/TabelaProblemasPendentes';

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

import { useState } from 'react';

import { ListItem, ListItemText, Divider, Typography } from '@mui/material';

export default function Admin() {
	const [buttonAtive1, setButtonAtive1] = useState('button1');
	const [buttonAtive2, setButtonAtive2] = useState('button4');

	const buttonClick1 = (buttonId1) => {
		setButtonAtive1(buttonId1);
	};

	const buttonClick2 = (buttonId2) => {
		setButtonAtive2(buttonId2);
	};

	return (
		<StyledBox>
			<StyledGrid container>
				<StyledGrid1>
					<StyledTypography1>Dashboard</StyledTypography1>
					<InputSearch />

					<div style={{ margin: '2rem 0' }}>
						<StyledTypography2>Lista de usuários</StyledTypography2>
						<ListStyle component="nav" aria-label="mailbox folders">
							<ListItem button>
								<ListItemText
									primary="Cidadãos"
									onClick={() => buttonClick1('button1')}
								/>
							</ListItem>
							<Divider />
							<ListItem button divider>
								<ListItemText
									primary="Prefeituras"
									onClick={() => buttonClick1('button2')}
								/>
							</ListItem>
							<Divider light />
							<ListItem button>
								<ListItemText
									primary="Denúncias"
									onClick={() => buttonClick1('button3')}
								/>
							</ListItem>
						</ListStyle>
					</div>

					<div style={{ margin: '1rem 0' }}>
						<StyledTypography2>Lista de Denúncias</StyledTypography2>
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
					</div>
				</StyledGrid1>
				<StyledGrid2>
					{buttonAtive1 === 'button1' && <TabelaCidadaos />}
					{buttonAtive1 === 'button2' && <TabelaPrefeituras />}
					{buttonAtive1 === 'button3' && <TabelaProblemas />}
				</StyledGrid2>
				<StyledGrid3>
					{buttonAtive2 === 'button4' && <TabelaProblemasFinalizados />}
					{buttonAtive2 === 'button5' && <TabelaProblemasPendentes />}
				</StyledGrid3>
			</StyledGrid>
		</StyledBox>
	);
}
