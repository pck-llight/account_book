import React from 'react';
import styled from "styled-components/native";
import {SafeAreaView} from "react-native";
import Home from "./src/pages/Home.tsx";

const App = () => {
    return (
        <SafeAreaView>
            <Home/> 
        </SafeAreaView>
    );
};

const Box = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
`

export default App;
