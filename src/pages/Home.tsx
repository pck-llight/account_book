import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import styled from "styled-components/native";
import {ScrollView} from "react-native"
import CashCard from "../components/CashCard.tsx";
import InputButton from "../components/InputButton.tsx";
import {SafeAreaView, View} from "react-native";
import Section from "../components/Section.tsx";
import {useNavigation} from '@react-navigation/native';
import AccountBookInput from "./AccountBookInput.tsx";
import IncomeList from "./IncomeList.tsx";
import ExpendList from "./ExpendList.tsx";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Home = () => {
    const [currentCash, setCurrentCash] = useState<number>(0)
    const [income, setIncome] = useState<number>(0)
    const [expend, setExpend] = useState<number>(0)
    const navigation = useNavigation();

    const date1 = new Date(2024, 2, 27, 0, 0, 0, 0)

    useEffect(() => {
        setCurrentCash(income - expend)
    }, [income, expend])

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('1', "123123123");
        } catch (e) {
            // saving error
        }
    };

    const getData = async (key: string) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value
            }
        } catch (e) {
            // error reading value
        }
    };

    const [대충 이따가 키랑 벨류 리스트 만들어서 관리해 아랐지?]

    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: "#1A1D25",
    }}>
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
        }}>
            <View style={{
                flex: 1
            }}>
                <SectionTop>나의 자산 현황</SectionTop>
                <CashContainer>
                    <CashCard full title={"현금 자산 총액"} subtitle={currentCash + "원"} subtitleColor={"#fff"}
                              disabled={true} onPress={() => {
                        console.log("뭐야 왜 돼")
                    }}/>
                    <IncomeAndOutputContainer>
                        <CashCard title={"이번 달 총 수입"} subtitle={income + "원"} subtitleColor={"#fff"}
                                  iconVisible={true} onPress={() => {
                            console.log("총 수입")
                            navigation.navigate(IncomeList)
                        }}/>
                        <CashCard title={"이번 달 총 지출"} subtitle={expend + "원"} subtitleColor={"#F6453A"}
                                  iconVisible={true} onPress={() => {
                            console.log("총 지출")
                            navigation.navigate(ExpendList)
                        }}/>
                    </IncomeAndOutputContainer>
                </CashContainer>
                <SectionTop>최근 지출/소비 내역</SectionTop>
                <ScrollView style={{
                    flex: 1,
                    paddingVertical: 14,
                    // paddingHorizontal: 20,
                    marginBottom: 54
                }}>
                    <Section title={"aa"} date={date1.toDateString()} priceColor={"#fff"} price={}/>
                </ScrollView>
            </View>
            <InputButton title={"수입 / 지출 입력"} onPress={() => {
                navigation.navigate(AccountBookInput);
            }}/>
        </View>
    </SafeAreaView>;
};
//현재 자산 및 수입 지출
const SectionTop = styled.Text`
  font-size: 16px;
  font-family: SUIT;
  font-weight: 700;
  color: #fff;
  padding-top: 20px;
  padding-bottom: 12px;
`
const CashContainer = styled.View`
  gap: 10px;
  align-self: stretch;
`
const IncomeAndOutputContainer = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  flex-direction: row;
`
export default Home;
