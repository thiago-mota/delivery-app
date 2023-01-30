const emailInputID = 'common_login__input-email';
const SenhaInputID = 'common_login__input-password';
const buttonLoginID = 'common_login__button-login';
const cliente = 'cliente@hotmail.com';
const adm = 'adm@hotmail.com';
const vendedor = 'vendedor@hotmail.com';
const buttonForRedirectID = 'common_login__button-register';
const testClient = {
  email: cliente,
  name: 'ClienteZika',
  role: 'customer',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2xpZW50ZSB6aWthIiwiZW1haWwiOiJjbGllbnRl',
};

const testADM = {
  email: adm,
  name: 'Dona Tereza',
  role: '"administrator"',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRG9uYSBUZXJlemEiLCJlbWFpbCI6ImFkbUBob3RtYWlsLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjc1MTA4NDIyLCJleHAiOjE2NzY4MzY0MjJ9.lMsudH4YnXVBo81taYf8RzrH9nUKh21VCeZvtXzPaZU',
};

const testSeller = {
  email: vendedor,
  name: 'Vendedor zika',
  role: 'seller',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmVuZGVkb3IgemlrYSIsImVtYWlsIjoidmVuZGVkb3JAaG90bWFpbC5jb20iLCJyb2xlIjoic2VsbGVyIiwiaWF0IjoxNjc1MTA5NDE2LCJleHAiOjE2NzY4Mzc0MTZ9.j42JBCP34COq4yh-aRfu1FotCnKRYob8M_kx8obP8hk',
};

export default mock = {
  testADM,
  testClient,
  testSeller,
  SenhaInputID,
  emailInputID,
  buttonLoginID,
  buttonForRedirectID,
};
