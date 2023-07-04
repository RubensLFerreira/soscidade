import { Grid, Paper } from '@mui/material/';

import {
  StyledBox,
  StyledGrid,
  StyledTypography1,
  StyledTypography2,
  StyledBox2,
  StyledTextField1,
  StyledTextField2,
  StyledButton,
} from './StyledDenunciar';

import {
  Iluminacao,
  Avenida,
  Lixo,
  Saneamento,
  Sinalizacao,
  Outros,
} from '../../components/Denunciar';

import Navbar from '../../components/Navbar';
import UploadImagem from '../../components/Denunciar/UploadImagem';

export default function Denunciar() {
  return (
    <>
      <Navbar />
      <StyledBox>
        <StyledTypography1>
          Reportar problema de infraestrutura
        </StyledTypography1>

        <StyledGrid>
          <StyledTypography2>Título do problema</StyledTypography2>
          <StyledTextField1></StyledTextField1>
          <UploadImagem />
        </StyledGrid>

        <StyledGrid>
          <StyledTypography2>Categoria do problema</StyledTypography2>
          <StyledBox2>
            <Paper elevation={0}>
              <Iluminacao />
            </Paper>
            <Paper elevation={0}>
              <Avenida />
            </Paper>
            <Paper elevation={0}>
              <Lixo />
            </Paper>
            <Paper elevation={0}>
              <Saneamento />
            </Paper>
            <Paper elevation={0}>
              <Sinalizacao />
            </Paper>
            <Paper elevation={0}>
              <Outros />
            </Paper>
          </StyledBox2>
        </StyledGrid>

        <StyledGrid>
          <StyledTypography2>Endereço</StyledTypography2>

          <form onSubmit={() => setAlert(true)}>
            <Grid container spacing={1}>
              <Grid xs={8} item>
                <StyledTextField1
                  label="Cidade"
                  required
                  placeholder="Ex: Cedro"
                  variant="outlined"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>

              <Grid xs={4} item>
                <StyledTextField1
                  label="UF"
                  required
                  placeholder="Ex: Ceará"
                  variant="outlined"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>

              <Grid xs={6} item>
                <StyledTextField1
                  label="Rua"
                  required
                  placeholder="Ex: Rua ABC"
                  variant="outlined"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>

              <Grid xs={6} item>
                <StyledTextField1
                  label="Bairro"
                  required
                  placeholder="Ex: Bairro 123"
                  variant="outlined"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
            </Grid>
          </form>
        </StyledGrid>

        <StyledGrid>
          <StyledTypography2>Dados (Opcional)</StyledTypography2>

          <form onSubmit={() => setAlert(true)}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <StyledTextField1
                  label="Cidade"
                  required
                  placeholder="Ex: Cedro"
                  variant="outlined"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>

              <Grid xs={8} item>
                <StyledTextField1
                  label="UF"
                  required
                  placeholder="Ex: Ceará"
                  variant="outlined"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>

              <Grid xs={4} item>
                <StyledTextField1
                  label="Rua"
                  required
                  placeholder="Ex: Rua ABC"
                  variant="outlined"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>

              <Grid xs={12} item>
                <StyledTextField2
                  label="Descrição"
                  required
                  variant="outlined"
                  multiline
                  rows={6}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
            </Grid>
          </form>

          <StyledButton>Reportar problema</StyledButton>
        </StyledGrid>
      </StyledBox>
    </>
  );
}
