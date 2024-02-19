import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import styled from "styled-components/native";
import ArrowIcon from "../assets/img/arrow_ios.svg"
import {StatusBar} from "react-native"
import CashCard from "../components/CashCard.tsx";

const AccountBookInput = () => {
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor("#EBF2F3");
    StatusBar.setBarStyle("dark-content");

    const [currentCash, setCurrentCash] = useState<number>(123456789)
    const [income, setIncome] = useState<number>(10000)
    const [expend, setExpend] = useState<number>(100)

    useEffect(()=>{
        setCurrentCash(income-expend)
    }, [income, expend])

    return (
        <Screen>

            <Header>
                <ArrowIcon/>
                <ScreenTitle>가계부 이름을 입력하세요</ScreenTitle>
                <EmtpyView/>
            </Header>

            <MainContainer>
                <TextCurrentAsset>나의 자산 현황</TextCurrentAsset>
                <AssetsContainer>
                    <CashCard title={"현금 자산 총액"} subtitle={currentCash + "원"} subtitleColor={"#000"} onPress={() => {
                        console.log("뭐야 왜 돼")
                    }}/>
                    <IncomeAndOutputContainer>
                        <CashCard title={"이번 달 총 수입"} subtitle={income + "원"} subtitleColor={"#F6453A"} onPress={()=>{
                            console.log("왜 안돼")
                        }}/>
                        <CashCard title={"이번 달 총 지출"} subtitle={expend + "원"} subtitleColor={"#385FEA"} onPress={()=>{
                            console.log("왜 안돼")
                        }}/>
                    </IncomeAndOutputContainer>
                </AssetsContainer>
            </MainContainer>
        </Screen>
    );
};
const Screen = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  //justify-content: center;
  padding: 11px 20px;
  background-color: #EBF2F3;
`

const Header = styled.View`
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
  line-height: normal;
  letter-spacing: -0.408px;
 //position: absolute;
`;

const ArrowIconComponent = styled.View`
  width: 24px; height: 24px;
`

const BtnEditBookName = styled.TouchableOpacity`
  width: 14px;
  height: 14px;
  margin-left: 6px;
  display: flex;
`

const MainContainer = styled.View`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`

const TextCurrentAsset = styled.Text`
  font-size: 16px;
  font-family: SUIT;
  font-weight: 700;
  color: #232627;
  margin-top: 20px;
  margin-left: 10px;
`

const AssetsContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  align-self: stretch;
  
`

const IncomeAndOutputContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  flex-direction: row;
  width: 100%;
`
export default AccountBookInput;