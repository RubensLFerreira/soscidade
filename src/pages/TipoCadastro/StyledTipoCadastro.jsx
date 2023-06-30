import { Grid, styled, Typography, Box } from "@mui/material/";

export const StyledTypography1 = styled(Typography)({
  color: "#322153",
  fontSize: "25pt",
  fontWeight: "bold",
  marginTop: "2rem",
  textAlign: 'center'
});

export const StyledTypography2 = styled(Typography)({
  color: "#322153",
  fontSize: "13pt",
  marginBottom: "2rem",
  textAlign: 'justify',
});

export const StyledBox = styled(Box)({
  backgroundColor: "white",
  maxWidth: "850px",
  width: "70vw",
  margin: "2rem auto 1rem auto",
  padding: "1rem 2rem",
  borderRadius: "10px",
});

export const StyledGrid = styled(Grid)({
  margin: "2rem 0",
  padding: "1rem",
});