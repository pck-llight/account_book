    import 'react-native-gesture-handler';
    import React, {useEffect, useState} from 'react';
    import styled from "styled-components/native";
    import Wallet_icon from "../assets/img/Wallet_icon.svg"
    import Edit_icon from "../assets/img/Edit_square.svg"
    import {Button, StatusBar, Text} from "react-native"
    import CashCard from "../components/CashCard.tsx";

    const Home = () => {
        //StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor("#EBF2F3");
        StatusBar.setBarStyle("dark-content");

        const [currentCash, setCurrentCash] = useState<number>(123456789)
        const [income, setIncome] = useState<number>(0)
        const [expend, setExpend] = useState<number>(0)

        useEffect(()=>{
            setCurrentCash(income-expend)
        }, [income, expend])

        return (
            <Screen>
                <TopBar>
                    <Wallet_icon width={24} height={24}/>
                    <BookName>가계부 이름을 입력하세요</BookName>
                    <BtnEditBookName><Edit_icon width={16} height={16}/></BtnEditBookName>
                </TopBar>
                <MainContainer>
                    <TextCurrentAsset>나의 자산 현황</TextCurrentAsset>
                    <CashContainer>
                        <CashCard title={"현금 자산 총액"} subtitle={currentCash + "원"} subtitleColor={"#000"} onPress={() => {
                            console.log("뭐야 왜 돼")
                        }}/>
                        <IncomeAndOutputContainer>
                            <CashCard title={"이번 달 총 수입"} subtitle={income + "원"} subtitleColor={"#F6453A"} onPress={()=>{
                                console.log("왜 안돼")
                                setIncome( income + 100)
                            }}/>
                            <CashCard title={"이번 달 총 지출"} subtitle={expend + "원"} subtitleColor={"#385FEA"} onPress={()=>{
                                console.log("왜 안돼")
                                setExpend( expend + 100)
                            }}/>
                        </IncomeAndOutputContainer>
                    </CashContainer>
                </MainContainer>
            </Screen>
        );
    };
    const Screen = styled.View`
      height: 100%;
      width: 100vw;
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

    const CashContainer = styled.View`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      align-self: stretch;
    `

    const IncomeAndOutputContainer = styled.View`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      align-self: center;
      flex-direction: row;
      
    `
    export default Home;
