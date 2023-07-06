import * as React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

export default function ListaUsuarios() {
  return (
    <div style={{ margin: '1rem 0' }}>
      <Typography variant="h5" style={{ textAlign: 'left' }}>
        Lista de Denúncias
      </Typography>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Finalizadas" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Pendentes" />
        </ListItem>
      </List>
    </div>
  );
}
