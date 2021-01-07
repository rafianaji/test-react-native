import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import List from './screens/List';
import store from './store';
import Detail from './screens/Detail';
import Form from './screens/Form';

const Stack = createStackNavigator()
const deviceHeight = Dimensions.get('window').height
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Form" component={Form} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4E9EF',
    alignItems: 'center',
    justifyContent: 'center',
    height: deviceHeight
  },
});
