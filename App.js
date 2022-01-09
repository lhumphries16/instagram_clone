import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'

import { View, Text } from 'react-native'
import firebase from 'firebase/compat/app'

//TODO before production use environment variables in order to hide api keys
const firebaseConfig = {
  apiKey: "AIzaSyAscVzVUGhcMBZY3vhfDQIRN9yX7oI8TkQ",
  authDomain: "instagram-dev-7ba53.firebaseapp.com",
  projectId: "instagram-dev-7ba53",
  storageBucket: "instagram-dev-7ba53.appspot.com",
  messagingSenderId: "605251745035",
  appId: "1:605251745035:web:dccbeb7c9671144e349e0e",
  measurementId: "G-9KT8Z7B0JL"
};

if(firebase.apps.length === 0){
//TODO change this to firebase V9
 firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import LoginScreen from './components/auth/Login'

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }
/*
  componentDidMount() {
    firebase.auth().onAuthStateChanged( user => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded:true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  */
  render() {

    const { loggedIn, loaded } = this.state
    /*if(!loaded){//The navigation container will never be run if loaded is false
      return(
        <View style={{flex: 1, justifyConent: 'center' }}>
          <Text>Loading</Text>
        </View>
      );
    }*/
    if(!loggedIn){
      return (
        <NavigationContainer> 
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: true }}/>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return(
      <View style={{flex: 1, justifyConent: 'center' }}>
        <Text>Signed in</Text>
      </View>
    );
  }
}


export default App
