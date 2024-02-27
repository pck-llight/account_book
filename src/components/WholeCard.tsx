import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import styled from "styled-components/native";

interface WholeCardProps {
    title: string
    content: number
}

const WholeCard = ({title, content}: WholeCardProps) => {
    const [priceOutput, setPriceOutput] = useState<String>(content.toLocaleString())

    useEffect(() => {
        setPriceOutput(content.toLocaleString())
    }, [content]);

    return (
        <View style={{
            height: 103,
            gap: 8,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            backgroundColor: "#212632",
        }}>
            <Title>{title}</Title>
            <Content>{priceOutput} 원</Content>
        </View>
    );
};

const Title = styled.Text`
  color: #FFF;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-weight: 600;
`

const Content = styled.Text`
  color: #FFF;
  font-family: SUIT;
  font-size: 24px;
  font-weight: 700;
`

export default WholeCard;