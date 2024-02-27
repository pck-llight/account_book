import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import Header from "../components/Header.tsx";
import {useNavigation} from "@react-navigation/native";
import Home from "./Home.tsx";
import styled from "styled-components/native";
import WholeCard from "../components/WholeCard.tsx";
import Section from "../components/Section.tsx";

const ExpendList = () => {
    const navigation = useNavigation()
    const day = new Date()

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#1A1D25",
            paddingHorizontal: 20,
        }}>
            <Header title={"이번 달 총 수입"} back={() => navigation.navigate(Home)}/>
            <View style={{
                flex: 1,
                paddingVertical: 16,
            }}>
                <WholeCard title={"이번 달 총 수입"} content={123123}/>
                <ScrollView style={{
                    flex: 1,
                    marginTop:16,
                }}>
                    <Section title={"맥북사조"} date={day.getFullYear() + '.' + day.getMonth() + '.' + day.getDate()}
                             priceColor={"#F6453A"} price={123123123123} isMinous={true}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const SectionContainer = styled.ScrollView`
  gap: 20px;
`
export default ExpendList;