import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home.tsx'; // Home 컴포넌트가 있는 파일의 경로를 정확하게 지정해주세요.
import AccountBookInput from './src/pages/AccountBookInput.tsx';
import IncomeList from "./src/pages/IncomeList.tsx";
import ExpendList from "./src/pages/ExpendList.tsx";
import {StatusBar} from "react-native"; // AccountBookInput 컴포넌트가 있는 파일의 경로를 정확하게 지정해주세요.
import { Provider } from 'jotai'

const Stack = createStackNavigator();

const App = () => {

    return (
        <Provider>
            <NavigationContainer>
                <StatusBar backgroundColor={"#1A1D25"} barStyle={"light-content"}/>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Home" component={Home}/>
                    <Stack.Screen name="AccountBookInput" component={AccountBookInput}/>
                    <Stack.Screen name="IncomeList" component={IncomeList}/>
                    <Stack.Screen name="ExpendList" component={ExpendList}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
