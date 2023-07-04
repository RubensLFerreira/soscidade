import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function EscolherCadastro() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCidadaoClick = () => {
    navigate('/cidadao/cadastrar');
    handleClose();
  };

  const handlePrefeituraClick = () => {
    navigate('/prefeitura/cadastrar');
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Cadastra-se
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCidadaoClick}>Como cidadão</MenuItem>
        <MenuItem onClick={handlePrefeituraClick}>Como prefeitura</MenuItem>
      </Menu>
    </div>
  );
}
