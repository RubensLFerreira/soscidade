import ListaProblemas from '../../components/Admin/ListaProblemas';
import ListaUsuarios from '../../components/Admin/ListaUsuarios';
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
} from './StyledAdmin';
import { Typography } from '@mui/material';

export default function Admin() {
	return (
		<StyledBox>
			<StyledGrid container>
				<StyledGrid1>
					<Typography
						style={{ textAlign: 'center', margin: '2rem 0' }}
						variant="h4"
					>
						Dashboard
					</Typography>
					<InputSearch />
					<ListaUsuarios />
					<ListaProblemas />
				</StyledGrid1>
				<StyledGrid2>
					{/* <TabelaCidadaos /> */}
					{/* <TabelaPrefeituras /> */}
					{/* <TabelaProblemas /> */}
				</StyledGrid2>
				<StyledGrid3>
					{/* <TabelaProblemasFinalizados /> */}
					{/* <TabelaProblemasPendentes /> */}
				</StyledGrid3>
			</StyledGrid>
		</StyledBox>
	);
}
