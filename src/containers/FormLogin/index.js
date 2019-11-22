import React from 'react';
import {Formik} from 'formik';
import FormLogin from './FormLogin';
import * as Yup from 'yup';

const LoginForm = ({data, navigation}) => {
  function capitalizeFirstLetter(string) {
    return string.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  async function verifyAccess(user) {
    let users = data;
    let currentUser = capitalizeFirstLetter(user.name);

    console.log('USERS: ', users);
    console.log('CURRENT_USER: ', currentUser);

    let validAccess = await users.filter(a => a.name === currentUser);

    if (validAccess.length >= 1) {
      navigation.navigate('TodoList');
    } else alert('Usuário não cadastrado!');
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string('Tipo inválido!')
      .strict(true)
      .lowercase('Apenas letras minúsculas!')
      .required(),
  });

  const initialValues = {
    name: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, {setSubmitting, setStatus, setErrors}) => {
        setTimeout(() => {
          verifyAccess(values);
        }, 400);
      }}
      validationSchema={validationSchema}>
      {props => <FormLogin {...props} />}
    </Formik>
  );
};

export default React.memo(LoginForm);
