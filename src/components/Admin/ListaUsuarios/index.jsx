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
    <div style={{ margin: '2rem 0' }}>
      <Typography variant="h5" style={{ textAlign: 'left' }}>
        Lista de usuários
      </Typography>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Cidadãos" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Prefeituras" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Denúncias" />
        </ListItem>
      </List>
    </div>
  );
}
