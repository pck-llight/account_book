import styled from "styled-components/native";

import React, {useState} from "react";
interface ButtonProps {
    title: string;
}

interface ButtonFieldProps{
    stateCallback: (title: string) => void;
}


const AccountTypeButton : React.FC<ButtonFieldProps> = ({ stateCallback }) => {

    const [buttonState, setState] = useState<string>("수입");

    const Button: React.FC<ButtonProps> = ({ title }) => {

        let buttonBackgroundColor; // 기본 배경색 설정
        let buttonTextColor; // 기본 텍스트 색 설정

        if (title === "수입") {
            buttonBackgroundColor = buttonState === "수입" ? "#F86259" : "#F9DCDA";
            buttonTextColor = buttonState === "수입" ? "#FFF" : "#B6A3A3";
        } else if (title === "지출") {
            buttonBackgroundColor = buttonState === "지출" ? "#5478F4" : "#CDD5F1";
            buttonTextColor = buttonState === "지출" ? "#FFF" : "#A3AAB6";
        }


        const pressButton = () =>{
            setState(title);
            stateCallback(buttonState);
        }

        return(
            <ButtonContainer onPress={pressButton} style={{ backgroundColor: buttonBackgroundColor }} >
                <ButtonText style={{ color: buttonTextColor }}>
                    {title}
                </ButtonText>
            </ButtonContainer>
        );
    };

    return (
        <ButtonField>
            <Button title={"수입"}/>
            <Button title={"지출"}/>
        </ButtonField>
    );
};



const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 6px;
  background: #EDEDED;
`;

const ButtonText = styled.Text`
  color: #A1A1A1;
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.4px;
`;


const ButtonField = styled.View`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-direction: row;
`;

const EmtpyView = styled.View`
  width: 24px;
  height: 24px;
`;


export default AccountTypeButton;
