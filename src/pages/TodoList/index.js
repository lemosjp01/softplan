import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchTodosStart} from '../../services/reducers/todos.reducer';
import {fetchUsersStart} from '../../services/reducers/users.reducer';
import {SafeAreaView, View, ActivityIndicator, FlatList} from 'react-native';
import styles from './styles';
const Header = React.lazy(() => import('../../components/Header'));
const Item = React.lazy(() => import('../../components/Item'));

const TodoList = props => {
  useEffect(() => {
    async function getUsers() {
      const {fetchUsers} = props;

      await fetchUsers();
    }

    async function getTodos() {
      const {fetchTodos} = props;

      await fetchTodos();
    }

    getTodos();
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {todos, users} = props;

  function buildList(a, b) {
    const newArr = a.map(todo => {
      let c = b.filter(user => user.id === todo.userId);
      return {
        title: todo.title,
        status: todo.completed,
        userResponsible: c[0].name,
      };
    });
    return (
      <FlatList
        data={newArr}
        renderItem={({item}) => (
          <Item
            title={item.title}
            status={item.status}
            userResponsible={item.userResponsible}
            onPress={() => props.navigation.navigate('ResponsibleTodo')}
          />
        )}
        keyExtractor={(item, key) => key.toString()}
      />
    );
  }

  console.log('TODOS: ', todos);
  console.log('USERS: ', users);
  return (
    <View style={styles.container}>
      <React.Suspense fallback={<ActivityIndicator />}>
        <Header
          title={'<- Sair'}
          onPress={() => props.navigation.navigate('Login')}
        />
      </React.Suspense>
      <SafeAreaView style={styles.list}>
        {todos &&
          users &&
          !todos.isLoading &&
          !users.isLoading &&
          todos.data &&
          users.data &&
          !!todos.data.length &&
          !!users.data.length && (
            <React.Suspense fallback={<ActivityIndicator />}>
              {buildList(todos.data, users.data)}
            </React.Suspense>
          )}
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodosStart()),
  fetchUsers: () => dispatch(fetchUsersStart()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(TodoList));
