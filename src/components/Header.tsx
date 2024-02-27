import styled from "styled-components/native";
import Enter_icon from "../assets/img/arrow_back_ios.svg"
import ArrowIcon from "../assets/img/arrow_ios.svg";
import React from "react";
import {NavigationProp, useNavigation} from "@react-navigation/native";
interface HeaderProps {
    title: string;
    back: ()=>void;
}

const Header = ({title, back}:HeaderProps) => {
    const navigation = useNavigation()
    return (
        <HeaderContainer>
            <ArrowIconComponent onPress={back}>
                <ArrowIcon/>
            </ArrowIconComponent>
            <ScreenTitle>{title}</ScreenTitle>
            <EmtpyView/>
        </HeaderContainer>
    );
};


const HeaderContainer = styled.View`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const EmtpyView = styled.View`
  width: 24px;
  height: 24px;
`;

const ScreenTitle = styled.Text`
  color: #fff;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.408px;
`;

const ArrowIconComponent = styled.TouchableOpacity`
  width: 24px; height: 24px;
`

export default Header;
