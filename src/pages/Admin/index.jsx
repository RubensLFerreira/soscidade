import { Grid } from '@mui/material';

export default function Admin() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} style={{backgroundColor: 'red'}}>red</Grid>
      <Grid item xs={12} style={{backgroundColor: 'green'}}>green</Grid>
      <Grid item xs={12} style={{backgroundColor: 'blue'}}>blue</Grid>
    </Grid>
  );
}
