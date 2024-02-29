import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import styled from "styled-components/native";
import {ScrollView} from "react-native"
import CashCard from "../components/CashCard.tsx";
import InputButton from "../components/InputButton.tsx";
import {SafeAreaView, View} from "react-native";
import Section from "../components/Section.tsx";
import {useNavigation} from '@react-navigation/native';
import {useAtom} from "jotai";
import {dataAtom} from "../store/Data.tsx";

const Home = () => {
    const [currentCash, setCurrentCash] = useState<number>(0)
    const [income, setIncome] = useState<string>("0")
    const [expend, setExpend] = useState<string>("0")
    const navigation = useNavigation();
    const [data, setData] = useAtom(dataAtom)

    useEffect(() => {
        // isPlus가 참인 아이템들의 합계를 계산하여 income 상태 업데이트
        const plusItems = data.filter(item => item.isPlus);
        const totalIncome = plusItems.reduce((acc, item) => acc + item.price, 0);
        setIncome(totalIncome.toLocaleString());
        const MinousItems = data.filter(item => !item.isPlus);
        const totalExpend = MinousItems.reduce((acc, item) => acc + item.price, 0);
        setExpend(totalExpend.toLocaleString());

        setCurrentCash(totalIncome - totalExpend)
    }, [data]); // data가 변경될 때마다 호출


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
                    <CashCard full title={"현금 자산 총액"} subtitle={currentCash.toLocaleString() + " 원"} subtitleColor={"#fff"}
                              disabled={true}/>
                    <IncomeAndOutputContainer>
                        <CashCard title={"이번 달 총 수입"} subtitle={income + " 원"} subtitleColor={"#fff"}
                                  iconVisible={true} onPress={() => {
                            console.log("총 수입")
                            navigation.navigate("IncomeList")
                        }}/>
                        <CashCard title={"이번 달 총 지출"} subtitle={expend + " 원"} subtitleColor={"#F6453A"}
                                  iconVisible={true} onPress={() => {
                            console.log("총 지출")
                            navigation.navigate("ExpendList")
                        }}/>
                    </IncomeAndOutputContainer>
                </CashContainer>
                <SectionTop>최근 지출/소비 내역</SectionTop>
                <ScrollView style={{
                    flex: 1,
                    paddingVertical: 14,
                    marginBottom: 54
                }}>
                    {data.map((item) => {
                        return <Section title={item.usage}
                                        date={item.date.getFullYear() + '.' + item.date.getMonth() + '.' + item.date.getDate()}
                                        priceColor={item.isPlus ? "#fff" : "#F6453A"} price={item.price}
                                        isMinous={!item.isPlus}/>
                    })}
                </ScrollView>
            </View>
            <InputButton title={"수입 / 지출 입력"} onPress={() => {
                navigation.navigate("AccountBookInput");
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
