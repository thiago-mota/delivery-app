import React from 'react';
import { waitFor, act, fireEvent } from '@testing-library/react';
import * as axios from 'axios';
import renderWithRouterAndRedux from './utils/renderWithRouter';

import Register from '../pages/Register/Register';
import App from '../App';

const errorId = 'common_login__element-invalid-email';
const emailRegisterID = 'common_register__input-email';
const nameRegisterID = 'common_register__input-name';
const passwordRegisterID = 'common_register__input-password';
const ButtonRegisterID = 'common_register__button-register';
// const buttonForRedirectID = 'common_login__button-register';

const testLocalStorage = {
  name: 'pedro pedroso',
  email: 'pedropedroso@gmail.com',
  role: 'customer',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwibmFtZSI6IlBhdWxvIFJ1YmlvIFRlc3QiLCJlbWFpbCI6InRyeWJlckB0ZXN0ZS5jb20iLCJwYXNzd29yZCI6ImY1YmIwYzhkZTE0NmM2N2I0NGJhYmJmNGU2NTg0Y2MwIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc1MTg4MTA5LCJleHAiOjE2NzY5MTYxMDl9.fwL6J2jBDimRoaD7dEmPZbvasW_4eHiRO7-yE7LfR2s',
};

const mockRegister = {
  data: {
    response: {
      name: 'pedro pedroso',
      email: 'pedropedroso@gmail.com',
      role: 'customer',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwibmFtZSI6IlBhdWxvIFJ1YmlvIFRlc3QiLCJlbWFpbCI6InRyeWJlckB0ZXN0ZS5jb20iLCJwYXNzd29yZCI6ImY1YmIwYzhkZTE0NmM2N2I0NGJhYmJmNGU2NTg0Y2MwIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc1MTg4MTA5LCJleHAiOjE2NzY5MTYxMDl9.fwL6J2jBDimRoaD7dEmPZbvasW_4eHiRO7-yE7LfR2s',
    },
  },
  status: 201,
};

const mockErrorRegister = {
  data: {
    response: {
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      role: 'seller',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwibmFtZSI6IlBhdWxvIFJ1YmlvIFRlc3QiLCJlbWFpbCI6InRyeWJlckB0ZXN0ZS5jb20iLCJwYXNzd29yZCI6ImY1YmIwYzhkZTE0NmM2N2I0NGJhYmJmNGU2NTg0Y2MwIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjc1MTg4MTA5LCJleHAiOjE2NzY5MTYxMDl9.fwL6J2jBDimRoaD7dEmPZbvasW_4eHiRO7-yE7LfR2s',
    },
  },
  status: 201,
};

jest.mock('axios');
describe('testing in register', () => {
  test('testing in success register', async () => {
    // const mockOnSubmit = jest.fn().mockResolvedValue(testRegister);
    axios.post.mockResolvedValue(mockRegister);
    const { getByTestId, history } = renderWithRouterAndRedux(<Register />);
    // history.location.pathname('/register');
    await act(async () => {
      fireEvent.change(
        getByTestId(emailRegisterID),
        { target: { value: mockRegister.data.response.email } },
      );
      fireEvent.change(
        getByTestId(passwordRegisterID),
        { target: { value: 'testtest' } },
      );
      fireEvent.change(
        getByTestId(nameRegisterID),
        { target: { value: mockRegister.data.response.name } },
      );
    });

    await act(async () => {
      fireEvent.click(
        getByTestId(ButtonRegisterID),
      );
    });
    await waitFor(() => {
      expect(history.location.pathname).toBe('/customer/products');
    });

    const localEmail = localStorage.getItem('user', {
      name: testLocalStorage.name,
      email: testLocalStorage.email,
      role: testLocalStorage.role,
      token: testLocalStorage.token,
    });
    console.log(localEmail);

    expect(localEmail).toBeDefined();
  });
  // test('testing in error register', async () => {
  //   axios.post.mockResolvedValue(mockErrorRegister);

  //   const { getByTestId, history, container, getByRole } = renderWithRouterAndRedux(
  //     <App />,
  //   );
  //   history.push('/register');
  //   // history.location.pathname('/register');
  //   await act(async () => {
  //     fireEvent.change(
  //       getByTestId(emailRegisterID),
  //       { target: { value: mockErrorRegister.data.response.email } },
  //     );
  //     fireEvent.change(
  //       getByTestId(passwordRegisterID),
  //       { target: { value: '3c28d2b0881bf46457a853e0b07531c6' } },
  //     );
  //     fireEvent.change(
  //       getByTestId(nameRegisterID),
  //       { target: { value: mockErrorRegister.data.response.name } },
  //     );
  //   });

  //   await act(async () => {
  //     fireEvent.click(
  //       getByRole('button'),
  //     );
  //   });

  //   const error = 'Request failed with status code 404';
  //   expect(mockErrorRegister.status).toBe(404);
  //   expect(container.innerHTML).toBe(error);
  // });
});
