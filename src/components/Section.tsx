import React from 'react';
import styled from "styled-components/native";
import DatePicker from "react-native-date-picker";
import {View} from "react-native";

interface SectionProps {
    title: String,
    date?: DatePicker,
    priceColor: string,
    price: number,
}

const Section = ({title, date, priceColor, price}: SectionProps) => {
    return (
        <View style={{
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
            }}>
                <SectionTitle>{title}</SectionTitle>
                <Date>{date}</Date>
            </View>
            <Subtitle style={{color: priceColor}}>{price}</Subtitle>
        </View>

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
  font-style: normal;
  font-weight: 700;
`
export default Section;