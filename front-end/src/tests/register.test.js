// import React from 'react';
// import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { renderWithRouterAndRedux } from './renderWithRouter';
// import Register from '../pages/Register/Register';
// import App from '../App';

// const emailRegisterID = 'common_register__input-email';
// const nameRegisterID = 'common_register__input-name';
// const passwordRegisterID = 'common_register__input-password';
// const ButtonRegisterID = 'common_register__button-register';
// const buttonForRedirectID = 'common_login__button-register';

// describe('testing in register', () => {
//   test('in register page', () => {
//     const { history } = renderWithRouterAndRedux(<App />);

//     const buttonRedirectRegister = screen.getByTestId(buttonForRedirectID);

//     userEvent.click(buttonRedirectRegister);
//     expect(history.location.pathname).toBe('/register');
//     const email = screen.getByTestId(emailRegisterID);
//     const senha = screen.getByTestId(passwordRegisterID);
//     const name = screen.getByTestId(nameRegisterID);
//     const buttonRegister = screen.getByTestId(ButtonRegisterID);

//     expect(email).toBeDefined();
//     expect(senha).toBeDefined();
//     expect(name).toBeDefined();
//     expect(buttonRegister).toBeDefined();
//   });
//   test('register in regeister page', () => {
//     const { history } = renderWithRouterAndRedux(<Register />);

//     const email = screen.getByTestId(emailRegisterID);
//     const senha = screen.getByTestId(passwordRegisterID);
//     const name = screen.getByTestId(nameRegisterID);
//     const buttonRegister = screen.getByTestId(ButtonRegisterID);

//     userEvent.type(name, 'pereira silva sauro');
//     userEvent.type(email, 'emailbonito@gmail.com');
//     userEvent.type(senha, 'çenhaÇecreta');
//     userEvent.click(buttonRegister);
//     expect(history.location.pathname).toBe('/');
//   });
// test('errors in register', () => {
//   renderWithRouterAndRedux(<Register />);

//   const email = screen.getByTestId(emailRegisterID);
//   const senha = screen.getByTestId(passwordRegisterID);
//   const name = screen.getByTestId(nameRegisterID);
//   const buttonRegister = screen.getByTestId(ButtonRegisterID);

//   userEvent.type(name, 'pereuro testes da silva');
//   userEvent.type(email, 'emailboail.com');
//   userEvent.type(senha, 'çenhaÇecreta');
//   userEvent.click(buttonRegister);
//   expect(buttonRegister).toBeDisabled();
// userEvent.click(buttonRegister);
// expect(history.location.pathname).toBe('/');
// });
// });
