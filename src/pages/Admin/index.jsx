import ListaDenuncias from '../../components/Admin/ListaDenuncias';
import ListaUsuarios from '../../components/Admin/ListaUsuarios';
import InputSearch from '../../components/Admin/InputSearch';
// import TabelaCidadaos from '../../components/Admin/TabelaCidadaos';
import TabelaProblemas from '../../components/Admin/TabelaProblemas';
import DenunciasPendentes from '../../components/Admin/DenunciasPendentes';

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
          <ListaDenuncias />
        </StyledGrid1>
        <StyledGrid2>
          {/* <TabelaCidadaos /> */}
					<TabelaProblemas />
        </StyledGrid2>
        <StyledGrid3>
          {/* <DenunciasPendentes /> */}
        </StyledGrid3>
      </StyledGrid>
    </StyledBox>
  );
}
