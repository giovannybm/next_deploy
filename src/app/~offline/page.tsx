import { Grid } from "@mui/material";
import CloudOffIcon from '@mui/icons-material/CloudOff';
export default function Offline() {
  return <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
  <Grid item xs={3}>
    <CloudOffIcon fontSize="large" />
  </Grid>
</Grid>;
}
