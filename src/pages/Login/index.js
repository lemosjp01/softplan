import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsersStart} from '../../services/reducers/users.reducer';
import {View, Image, ActivityIndicator} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import logo from '../../assets/images/logo.png';
const LoginForm = React.lazy(() => import('../../containers/FormLogin'));

const Login = props => {
  useEffect(() => {
    async function getUsers() {
      const {fetchUsers} = props;

      await fetchUsers();
    }
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {users} = props;
  return (
    <View style={styles.container}>
      <Header title={'Lista de Tarefas'} />
      <View style={styles.imageBox}>
        <Image style={styles.image} source={logo} resizeMode={'cover'} />
      </View>
      <View style={styles.form}>
        {users && !users.isLoading && users.data && !!users.data.length && (
          <React.Suspense fallback={<ActivityIndicator />}>
            <LoginForm data={users.data} navigation={props.navigation} />
          </React.Suspense>
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsersStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
