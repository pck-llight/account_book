import React, {useEffect, useState} from 'react';
import styled from "styled-components/native";
import {TouchableOpacity, View} from "react-native";

interface SectionProps {
    title: string,
    date: string,
    priceColor: string,
    price: number,
    isMinous?: boolean
}

const Section = ({title, date, priceColor, price, isMinous}: SectionProps) => {
    const [priceOutput, setPriceOutput] = useState<String>(price.toLocaleString())

    useEffect(() => {
        setPriceOutput(price.toLocaleString())
    }, [price]);
    return (
        <TouchableOpacity onLongPress={()=>{

        }} style={{
            // flex: 1,
            alignItems: "center",
            flexDirection: "row",
        }}>
            <View style={{
                flex:1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 6,
                paddingVertical:14,
            }}>
                <SectionTitle>{title}</SectionTitle>
                <Date>{String(date)}</Date>
            </View>
            <Subtitle style={{color: priceColor}}>{isMinous && "-"} {priceOutput} 원</Subtitle>
        </TouchableOpacity>

    );
};
const SectionTitle = styled.Text`
  color: #FFF;
  text-align: center;
  font-family: SUIT;
  font-size: 18px;
  font-weight: 700;
`
const Date = styled.Text`
  color: rgba(255, 255, 255, 0.31);
  text-align: center;
  font-family: SUIT;
  font-size: 12px;
  font-weight: 500;
`
const Subtitle = styled.Text`
  text-align: center;
  font-family: SUIT;
  font-size: 18px;
  font-weight: 700;
`
export default Section;