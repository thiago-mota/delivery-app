import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './renderWithRouter';
import App from '../App';
import Register from '../pages/Register/Register';

// beforeEach(() => {
//   jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.resolve({
//     json: () => Promise.resolve(),
//   }));
// });
afterEach(() => {
  jest.resetAllMocks();
});

const emailInputID = 'common_login__input-email';
const SenhaInputID = 'common_login__input-password';
const buttonLoginID = 'common_login__button-login';
const buttonForRedirectID = 'common_login__button-register';
const emailRegisterID = 'common_register__input-email';
const nameRegisterID = 'common_register__input-name';
const passwordRegisterID = 'common_register__input-password';
const ButtonRegisterID = 'common_register__button-register';

describe('Testes na Pagina Inicial de Login', () => {
  it('the buttons and inputs is defined', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId(emailInputID);
    const senha = screen.getByTestId(SenhaInputID);
    const buttonLogin = screen.getByTestId(buttonLoginID);
    const buttonRegister = screen.getByTestId(buttonForRedirectID);

    expect(email).toBeDefined();
    expect(senha).toBeDefined();
    expect(buttonLogin).toBeDefined();
    expect(buttonRegister).toBeDefined();
  });
  test('render login and login ', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId(emailInputID);
    const senha = screen.getByTestId(SenhaInputID);
    const buttonLogin = screen.getByTestId(buttonLoginID);

    userEvent.type(email, 'cliente@hotmail.com');
    userEvent.type(senha, '1234');

    expect(buttonLogin).toBeDisabled();

    userEvent.type(senha, '1234567Bb');

    userEvent.click(buttonLogin);
  });
  test('É renderizado um botão que te manda para outro local', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const email = screen.getByTestId(emailInputID);
    const senha = screen.getByTestId(SenhaInputID);
    const buttonLogin = screen.getByTestId(buttonLoginID);
    // const buttonRegister = screen.getByTestId(buttonRegisterID);

    userEvent.type(email, 'cliente@hotmail.com');
    userEvent.type(senha, '1234567Bb');

    userEvent.click(buttonLogin);
    expect(history.location.pathname).toBe('/login');
  });
  test('if your click in sign up, do you is redirect to /register ', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const buttonRegister = screen.getByTestId(buttonForRedirectID);

    userEvent.click(buttonRegister);
    expect(history.location.pathname).toBe('/register');
  });
  test('in register page', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const buttonRedirectRegister = screen.getByTestId(buttonForRedirectID);

    userEvent.click(buttonRedirectRegister);
    expect(history.location.pathname).toBe('/register');
    const email = screen.getByTestId(emailRegisterID);
    const senha = screen.getByTestId(passwordRegisterID);
    const name = screen.getByTestId(nameRegisterID);
    const buttonRegister = screen.getByTestId(ButtonRegisterID);

    expect(email).toBeDefined();
    expect(senha).toBeDefined();
    expect(name).toBeDefined();
    expect(buttonRegister).toBeDefined();
  });
  test('register in regeister page', () => {
    const { history } = renderWithRouterAndRedux(<Register />);

    const email = screen.getByTestId(emailRegisterID);
    const senha = screen.getByTestId(passwordRegisterID);
    const name = screen.getByTestId(nameRegisterID);
    const buttonRegister = screen.getByTestId(ButtonRegisterID);

    userEvent.type(name, 'pereira silva sauro');
    userEvent.type(email, 'emailbonito@gmail.com');
    userEvent.type(senha, 'çenhaÇecreta');
    userEvent.click(buttonRegister);
    expect(history.location.pathname).toBe('/');
  });
});
