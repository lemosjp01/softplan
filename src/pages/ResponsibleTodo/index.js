import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, Text} from 'react-native';
import styles from './styles';
const Header = React.lazy(() => import('../../components/Header'));
const MapView = React.lazy(() => import('react-native-maps'));
import {Marker} from 'react-native-maps';

const ResponsibleTodo = props => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUsers() {
      let newUser = await props.navigation.getParam('data', null);
      setUser(newUser);
    }

    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <React.Suspense fallback={<ActivityIndicator />}>
        <Header
          title={'<- Voltar para a lista'}
          onPress={() => props.navigation.navigate('TodoList')}
        />
      </React.Suspense>
      <View style={styles.userData}>
        {user && !!Object.keys(user).length && (
          <React.Suspense fallback={<ActivityIndicator />}>
            <View style={styles.userInfo}>
              <View style={styles.row}>
                <Text style={styles.text}>Nome:</Text>
                <Text style={styles.text}>{user.name}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Email:</Text>
                <Text style={styles.text}>{user.email}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Telefone:</Text>
                <Text style={styles.text}>{user.phone}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Endereço:</Text>
                <Text style={styles.address}>
                  Rua {user.address.street}, {user.address.suite},{' '}
                  {user.address.city}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>CEP:</Text>
                <Text style={styles.text}>{user.address.zipcode}</Text>
              </View>
            </View>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: parseFloat(user.address.geo.lat),
                longitude: parseFloat(user.address.geo.lng),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker
                coordinate={{
                  latitude: parseFloat(user.address.geo.lat),
                  longitude: parseFloat(user.address.geo.lng),
                }}
                title={user.name}
                description={user.phone}
              />
            </MapView>
          </React.Suspense>
        )}
      </View>
    </View>
  );
};

export default React.memo(ResponsibleTodo);
