import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import AccountBookInput from '../pages/AccountBookInput';
import IncomeList from "../pages/IncomeList";
import ExpendList from "../pages/ExpendList";

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AccountBookInput" component={AccountBookInput} />
        <Stack.Screen name="IncomeList" component={IncomeList}/>
        <Stack.Screen name="ExpendList" component={ExpendList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;