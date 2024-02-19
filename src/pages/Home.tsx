import 'react-native-gesture-handler';
import React, {useState} from 'react';
import styled from "styled-components/native";
import Wallet_icon from "../assets/img/Wallet_icon.svg"
import Edit_icon from "../assets/img/Edit_square.svg"
import {StatusBar} from "react-native"
import CashCard from "../components/CashCard.tsx";

const Home = () => {
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor("#EBF2F3");
    StatusBar.setBarStyle("dark-content");

    const [currentAsset, setCurrentAsset]= useState<number>(0)
    
    return (
        <Screen>
            <TopBar>
                <Wallet_icon width={24} height={24}/>
                <BookName>가계부 이름을 입력하세요</BookName>
                <BtnEditBookName><Edit_icon width={16} height={16}/></BtnEditBookName>
            </TopBar>
            <MainContainer>
                <TextCurrentAsset>나의 자산 현황</TextCurrentAsset>
                <AssetsContainer>
                    <CashCard title={"현금 자산 총액"} subtitle={"원"} onPress={()=>{
                        console.log("")
                    }}/>
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

const TopBar = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
`

const BookName = styled.Text`
  font-size: 14px;
  font-weight: 600;
  font-family: SUIT;
  color: #232627;
  margin-left: 6px;
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

export default Home;