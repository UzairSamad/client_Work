import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from '../screens/home';
import Adress from '../screens/Adress';
// import * as firebase from '@react-native-firebase/app';
import '@react-native-firebase/analytics';
import Branch from '../screens/branch';
import Delivery from '../screens/Delivery';
import DeliveryAddress from '../screens/deliveryAddress';
import Itemlist from '../screens/Itemlist';
import UserDetail from '../screens/UserDetail';
import Login from '../screens/login';
import Signup from '../screens/signup';
import SelectBranch from '../screens/selectBranch';
import { Provider } from 'react-redux';
import store from '../Store/store';
const Stack = createStackNavigator();
import Cart from '../screens/Cart';
import LoginForm from '../screens/LoginForm';
import firebase from 'firebase';
const screenOptionStyle = {
  headerTransparent: false,
  headerTitle: null,
  headerLeft: null,
};

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};
function MyStack() {
  React.useEffect(() => {


    var firebaseConfig = {
      apiKey: "AIzaSyDemHT0TNb8d0UHCw9tjC0a2OsM67thGsQ",
      authDomain: "ballatikka-55a10.firebaseapp.com",
      databaseURL: "https://ballatikka-55a10-default-rtdb.firebaseio.com",
      projectId: "ballatikka-55a10",
      storageBucket: "ballatikka-55a10.appspot.com",
      messagingSenderId: "916012287346",
      appId: "1:916012287346:web:7c7551e7084e3cc24209eb",
      measurementId: "G-W8C8MF6360"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({ experimentalForceLongPolling: true });

    // firebase.analytics();

  }, [])


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="branch" component={Branch} />
          <Stack.Screen name="Delivery" component={Delivery} />
          <Stack.Screen name="Itemlist" component={Itemlist} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="deliveryAddress" component={DeliveryAddress} />
          <Stack.Screen name="UserDetail" component={UserDetail} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="selectBranch" component={SelectBranch} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="LoginForm" component={LoginForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const SettingStackNavigator = () => {
  return <Stack.Navigator screenOptions={screenOptionStyle}></Stack.Navigator>;
};

export default MyStack;
