import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import { BsArrowRightSquare } from 'react-icons/bs';
import { FiHelpCircle } from 'react-icons/fi';

import { LogoReportar } from '../../components/Logos/LogoReportar';
import { Mapa } from '../../components/Logos/Mapa';

import {
  StyledBox,
  StyledGrid,
  StyledTypography1,
  StyledButton1,
  StyledButton2,
} from './styledReportar';

import NavBar from '../../components/Navbar';

export default function Reportar() {
  return (
    <>
      <NavBar />
      <StyledBox>
        <Grid container spacing={4}>
          <StyledGrid item xs={12}>
            <LogoReportar />
          </StyledGrid>

          <Grid item xs={6}>
            <StyledTypography1 variant="h2">
              Tranforme sua cidade para um futuro mais sustentável.
            </StyledTypography1>
            <Typography variant="h5">
              Auxilie na gestão de infraestrutura urbana, reportando problemas.
            </Typography>

            <Link to={`/login`}>
              <StyledButton1
                style={{ margin: '2rem 2rem 0 0' }}
                variant="contained"
                startIcon={<BsArrowRightSquare />}
              >
                Reportar
              </StyledButton1>
            </Link>

            <Link to={`/denunciar`}>
              <StyledButton2
                style={{ margin: '2rem 0 0 0' }}
                variant="contained"
                startIcon={<FiHelpCircle />}
              >
                Reportar anonimamente
              </StyledButton2>
            </Link>
          </Grid>

          <Grid item xs={6}>
            <Mapa />
          </Grid>
        </Grid>
      </StyledBox>
    </>
  );
}
