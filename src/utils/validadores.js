const validarEmail = (email) => {
  return email?.toString().includes('@') && email?.toString().includes('.');
};

const validarLogin = (login) => {
  return login?.toString().length > 6;
};

const validarSenha = (senha) => {
  return senha?.toString().length > 6;
};

const validarNome = (nome) => {
  return nome?.toString().length > 2;
};

const validarTelefone = (telefone) => {
  return telefone?.toString().length >= 8;
};

const validarConfirmarSenha = (senha, confirmarSenha) => {
  return validarSenha(senha) && senha === confirmarSenha;
};

export {
  validarLogin,
  validarEmail,
  validarSenha,
  validarNome,
  validarTelefone,
  validarConfirmarSenha,
};
