// app.tsx

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home.tsx'; // Home 컴포넌트가 있는 파일의 경로를 정확하게 지정해주세요.
import AccountBookInput from './src/pages/AccountBookInput.tsx'; // AccountBookInput 컴포넌트가 있는 파일의 경로를 정확하게 지정해주세요.

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AccountBookInput" component={AccountBookInput} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
