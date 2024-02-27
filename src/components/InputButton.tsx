import React, {Component} from 'react';
import styled from "styled-components/native";
import {ButtonProps, Dimensions} from "react-native";

const InputButton = ({title, onPress, disabled}: ButtonProps) => {
    return (
        <InputButtonContainer onPress={onPress}>
            <InputButtonText>{title}</InputButtonText>
        </InputButtonContainer>
    );
}
const InputButtonContainer = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  bottom: 20px;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #fff;
`
const InputButtonText = styled.Text`
  color: #1A1D25;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-weight: 700;
`
export default InputButton;