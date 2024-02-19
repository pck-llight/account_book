import React from 'react';
import styled from "styled-components/native";
import {Text} from "react-native";

const App = () => {
    return (
        <>
            <Box></Box>
        </>
    );
};

const Box = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
`

export default App;