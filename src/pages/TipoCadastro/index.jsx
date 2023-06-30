import * as React from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  Card,
  CardContent,
  Button,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material/";

import {
  StyledTypography1,
  StyledTypography2,
  StyledBox,
  StyledGrid,
} from "./StyledTipoCadastro";

import ImagemCidadao from "../../../public/img/cidadao.png";
import ImagemPrefeitura from "../../../public/img/prefeitura.png";

import { BsBoxArrowInRight } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

export default function TipoCadastro() {
  return (
    <>
      <StyledBox>
        <StyledGrid>
          <StyledTypography1>Bem-vindo(a) ao SOS Cidade!</StyledTypography1>
        </StyledGrid>

        <StyledGrid>
          <StyledTypography2>
            Na SOS Cidade, estamos comprometidos em tornar a sua cidade um lugar
            melhor para se viver. Queremos oferecer uma plataforma onde você,
            como um cidadão engajado, possa relatar problemas de infraestrutura
            e colaborar para solucioná-los em conjunto com as autoridades
            municipais.
          </StyledTypography2>
        </StyledGrid>

        <StyledGrid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={ImagemCidadao}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Me cadastrar como cidadão
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cadastrando-se como cidadão você poderá relatar problemas de
                  infraestrutura da sua cidade, acompanhar o status do problema,
                  entre outras contribuições.
                </Typography>
              </CardContent>
              
              <CardActions style={{ justifyContent: "space-between" }}>
                <Link to={`/cidadao/cadastrar`}>
                  <Button size="small" endIcon={<BsBoxArrowInRight />}>
                    Cadastrar
                  </Button>
                </Link>

                <Link to={`/reportar`}>
                  <Button size="small" color="error" endIcon={<BsXCircle />}>
                    Cancelar
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={ImagemPrefeitura}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cadastrar prefeitura
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cadastrando-se oficialmente como prefeitura, a instituição
                  poderá verificar quais pontos da cidade precisam de reparos,
                  assim mantendo uma cidade mais harmonioza.F
                </Typography>
              </CardContent>

              <CardActions style={{ justifyContent: "space-between" }}>
                <Link to={`/prefeitura/cadastrar`}>
                  <Button size="small" endIcon={<BsBoxArrowInRight />}>
                    Cadastrar
                  </Button>
                </Link>

                <Link to={`/reportar`}>
                  <Button size="small" color="error" endIcon={<BsXCircle />}>
                    Cancelar
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </StyledGrid>
      </StyledBox>
    </>
  );
}
