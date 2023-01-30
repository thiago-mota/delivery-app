import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './AdminRegister.module.css';

const STYLE_CLASSNAMES = {
  FORM_LABEL: 'form-label',
};

function AdminRegister() {
  const [isError, setIsError] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: '',
    },
    criteriaMode: 'all',
    mode: 'onBlur',
  });

  const handleError = (error) => {
    const statusCode = error.response.status;
    const badResponse = 409;
    if (statusCode === badResponse) {
      setIsError(['Email não disponível ou já cadastrado']);
    }
  };

  const onSubmit = async (formData) => {
    try {
      const data = await axios.post(
        'http://localhost:3001/users',
        formData,
      );
      console.log(data);
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  };

  return (
    <main className={ styles['register-container'] }>
      Cadastrar novo usuário
      <form
        onSubmit={ handleSubmit(onSubmit) }
        className={ styles['form-container'] }
      >
        <label htmlFor="name" className={ styles[STYLE_CLASSNAMES.FORM_LABEL] }>
          Nome
          <input
            type="name"
            id="name"
            data-testid="admin_manage__input-name"
            { ...register('name', {
              required: 'Nome é obrigatório',
              minLength: {
                value: 12,
                message: 'Nome completo deve ter pelo menos 12 letras',
              },
            }) }
          />
          {errors?.name && <p>{errors.name.message}</p>}
        </label>

        <label
          htmlFor="email"
          className={ styles[STYLE_CLASSNAMES.FORM_LABEL] }
        >
          Email
          <input
            type="email"
            id="email"
            data-testid="admin_manage__input-email"
            { ...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: 'Email deve ser no formato exemplo@exemplo.com',
              },
            }) }
          />
          {errors?.email && <p>{errors.email.message}</p>}
        </label>

        <label
          htmlFor="password"
          className={ styles[STYLE_CLASSNAMES.FORM_LABEL] }
        >
          Password
          <input
            type="password"
            id="password"
            data-testid="admin_manage__input-password"
            { ...register('password', {
              required: 'Password é obrigatório',
              minLength: { value: 6, message: 'Password is too short!' },
              // pattern: {
              //   value: /^(?=.*[A-Z])[A-Za-z\d]*$/,
              //   message: 'Please enter at least one uppercase letter!',
              // },
            }) }
          />
          {errors?.password && <p>{errors.password.message}</p>}
        </label>

        <label htmlFor="role" className={ styles[STYLE_CLASSNAMES.FORM_LABEL] }>
          Role
          <select
            type="role"
            id="role"
            data-testid="admin_manage__select-role"
            { ...register('role') }
          >
            <option selected="selected">customer</option>
            <option>seller</option>
            <option>administrator</option>
          </select>
          {errors?.role && <p>{errors.role.message}</p>}
        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ !isValid }
        >
          CADASTRAR
        </button>
        {isError
            && isError.map((errorMessage) => (
              <p
                key="errorMessage"
                data-testid="admin_manage__element-invalid_register"
              >
                {errorMessage}
              </p>
            ))}
      </form>
    </main>
  );
}

export default AdminRegister;
