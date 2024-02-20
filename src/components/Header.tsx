import styled from "styled-components/native";
import Enter_icon from "../assets/img/arrow_back_ios.svg"
import ArrowIcon from "../assets/img/arrow_ios.svg";
import React from "react";
interface HeaderProps {
    title: string;
}

const Header = ({title}:HeaderProps) => {
    return (
        <HeaderContainer>
            <ArrowIconComponent>
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
  color: #232627;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.408px;
 //position: absolute;
`;

const ArrowIconComponent = styled.TouchableOpacity`
  width: 24px; height: 24px;
`

export default Header;
