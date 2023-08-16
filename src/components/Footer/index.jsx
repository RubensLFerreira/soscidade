import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const footerStyles = {
  backgroundColor: '#263238',
  padding: '80px 20px',
  marginTop: 'auto',
  textAlign: 'center',
};

export default function Footer() {
  return (
    <footer style={footerStyles}>
      <Typography variant="body2" color="#f5f5f5">
        © {new Date().getFullYear()} | SOS Cidade
      </Typography>
      <Typography variant="body2" color="#f5f5f5">
        Criado para as disciplinas de PRINT II/LDS{' '}<br />
        <Link color="inherit" href="https://ifce.edu.br/cedro">
          IFCE Campus Cedro
        </Link>
      </Typography>
    </footer>
  );
};
