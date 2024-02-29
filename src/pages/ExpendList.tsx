import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import Header from "../components/Header.tsx";
import {useNavigation} from "@react-navigation/native";
import styled from "styled-components/native";
import WholeCard from "../components/WholeCard.tsx";
import Section from "../components/Section.tsx";
import {useAtom} from "jotai";
import {dataAtom} from "../store/Data.tsx";

const ExpendList = () => {
    const navigation = useNavigation()
    const [data ,setData] =useAtom(dataAtom)
    const [expend, setIExpend] = useState(0)

    useEffect(() => {
        const MinousItems = data.filter(item => !item.isPlus);
        const totalExpend = MinousItems.reduce((acc, item) => acc + item.price, 0);
        setIExpend(totalExpend)
    }, [data]);
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "#1A1D25",
            paddingHorizontal: 20,
        }}>
            <Header title={"이번 달 총 지출"} back={() => navigation.goBack()}/>
            <View style={{
                flex: 1,
                paddingVertical: 16,
            }}>
                <WholeCard title={"이번 달 총 지출"} content={expend}/>
                <ScrollView style={{
                    flex: 1,
                    marginTop:16,
                }}>
                    {data.map((item) => {
                        if(item.isPlus) return
                        return <Section title={item.usage}
                                        date={item.date.getFullYear() + '.' + item.date.getMonth() + '.' + item.date.getDate()}
                                        priceColor={item.isPlus ? "#fff" : "#F6453A"} price={item.price}
                                        isMinous={!item.isPlus}/>
                    })}

                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const SectionContainer = styled.ScrollView`
  gap: 20px;
`
export default ExpendList;