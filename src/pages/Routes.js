import React, {PureComponent} from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Login from './Login';
import TodoList from './TodoList';

class RouterNav extends PureComponent {
  render() {
    const Routes = {
      Login: {
        path: '/login',
        screen: Login,
        navigationOptions: ({navigation}) => ({navigation}),
      },
      TodoList: {
        path: '/todo-list',
        screen: TodoList,
        navigationOptions: ({navigation}) => ({navigation}),
      },
      App: {
        path: '/',
        screen: RouterNav,
      },
    };

    const Configs = function(initialRouteName) {
      return {
        initialRouteName: initialRouteName,
        contentOptions: {
          activeTintColor: '#40bbca',
          activeBackgroundColor: 'transparent',
          inactiveTintColor: '#333333',
          inactiveBackgroundColor: 'transparent',
          labelStyle: {
            fontSize: 15,
            marginLeft: 0,
          },
        },
      };
    };

    const MainRoot = createAppContainer(
      createSwitchNavigator(Routes, Configs('TodoList')),
    );

    return <MainRoot />;
  }
}

export default RouterNav;
