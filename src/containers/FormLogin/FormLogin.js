import React from 'react';
import {View, Text} from 'react-native';
import {ErrorMessage} from 'formik';
import Input from '../../components/Input';
import ButtonLogin from '../../components/ButtonLogin';

const FormLogin = ({...props}) => {
  return (
    <>
      <Input
        keyboardType={'default'}
        id="name"
        value={props.values.name}
        name="name"
        onChangeText={props.handleChange('name')}
        onBlur={props.handleBlur('name')}
        placeholder={'Digite seu nome'}
      />
      <View>
        {props &&
          props.errors &&
          props.errors.name &&
          props.touched &&
          props.touched.name && <ErrorMessage component={Text} name="name" />}
      </View>
      <ButtonLogin
        onPress={() => props.handleSubmit()}
        title={'Entrar'}
        disabled={
          props && props.values.name !== '' && !props.errors.name ? false : true
        }
      />
    </>
  );
};

export default React.memo(FormLogin);
