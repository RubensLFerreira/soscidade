import { Box, Grid, styled, Typography, TextField, Button } from "@mui/material";

export const StyledTypography1 = styled(Typography)({
  color: "#322153",
  fontSize: "25pt",
  fontWeight: "bold",
});

export const StyledTypography2 = styled(Typography)({
  color: "#322153",
  fontSize: "15pt",
  fontWeight: "bold",
});

export const StyledTextField1 = styled(TextField)({
  width: "100%",
  backgroundColor: "#EAF3FF",
});

export const StyledTextField2 = styled(TextField)({
  width: "100%",
  backgroundColor: "#EAF3FF",
  marginBottom: '2rem'
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

export const StyledBox2 = styled(Box)({
  margin: "2rem 0",
  display: "flex",
  flexWrap: "wrap",
  "& > :not(style)": {
    m: 1,
    width: 228,
    height: 228,
    margin: 10,
  },
  justifyContent: "space-around",
});

export const StyledButton = styled(Button) ({
  width: '200px',
  height: '60px',
  display: 'flex',
  marginInlineStart: 'auto',
  color: '#f5f5f5',
  backgroundColor: '#3b8efc',
  '&:hover': {
    backgroundColor: '#1e74e6'
  }
});
