import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchUsersStart} from '../../services/reducers/users.reducer';
import {SafeAreaView, View, ActivityIndicator, FlatList} from 'react-native';
import styles from './styles';
const Header = React.lazy(() => import('../../components/Header'));

const TodoList = props => {
  useEffect(() => {
    async function getUsers() {
      const {fetchUsers} = props;

      await fetchUsers();
    }

    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {users} = props;

  console.log('USERS: ', users);
  return (
    <View style={styles.container}>
      <React.Suspense fallback={<ActivityIndicator />}>
        <Header
          title={'<- Voltar para a lista'}
          onPress={() => props.navigation.navigate('TodoList')}
        />
      </React.Suspense>
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
)(React.memo(TodoList));
