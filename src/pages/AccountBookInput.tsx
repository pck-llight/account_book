import 'react-native-gesture-handler';
import React, {useState} from 'react';
import styled from "styled-components/native";
import Header from "../components/Header.tsx";
import AccountTypeButton from "../components/AccountTypeButton.tsx";
import DatePicker from 'react-native-date-picker'
import {useNavigation} from "@react-navigation/native";
import InputButton from "../components/InputButton.tsx";

const AccountBookInput = () => {
    const navigation = useNavigation();

    //Date 모달 관련 상태
    const [date, setDate] = useState<Date>(new Date());
    const [open, setOpen] = useState(false)

    //수입 지출
    const [accountType, setType] = useState<string>("수입");

    //현재 돈
    const [money, setMoney] = useState("");


    let secondInputQ;
    let thirdInputQ;

    if (accountType == "수입") {
        secondInputQ = "언제의 수입인가요?";
        thirdInputQ = "얼마만큼의 수입인가요?";
    } else {
        secondInputQ = "언제의 지출인가요?";
        thirdInputQ = "얼마만큼의 지출인가요?";
    }

    const typeStateCallback = (title: string) => {
        setType(title);
    };

    const DataModal = () => {
        return (
            <>
                <DatePicker
                    modal
                    mode="date"
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
            </>
        )
    }

    const DateInput = () => {
        return (
            <DateInputBox onPress={() => {
                setOpen(true)
            }}>
                <DateText>{date.getFullYear()}</DateText>
                <DateText>|</DateText>
                <DateText>{date.getMonth() + 1}</DateText>
                <DateText>|</DateText>
                <DateText>{date.getDate()}</DateText>
            </DateInputBox>
        );
    };


    return (
        <Screen>
            <Header title={"수입/지출 입력"} back={() => {
                navigation.goBack()
            }}/>
            <MainContainer>
                <InputListCard>
                    <InputContainer>
                        <InputTitle>수입인가요? 지출인가요?</InputTitle>
                        <AccountTypeButton stateCallback={typeStateCallback}/>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>{secondInputQ}</InputTitle>
                        <DateInput/>
                    </InputContainer>
                    <InputContainer>
                        <InputTitle>{thirdInputQ}</InputTitle>
                        <MoneyInputBox keyboardType={"numeric"} value={money}
                                       placeholderTextColor={"rgba(255,255,255,0.31)"} placeholder="금액 입력"
                                       onChangeText={(text) => {
                                           const cleanedText = text.replace(/[^0-9]/g, '');
                                           setMoney(cleanedText)
                                       }}/>
                    </InputContainer>
                </InputListCard>
                <DataModal/>
                <InputButton title={"수입 / 지출 입력"} onPress={() => {
                    navigation.goBack();
                    // 저장 하는 기능을 이제 추가 해서 여기에 넣어야 겠죠?그죠?그렇겠죠? 진짜네..
                    // 입력이 올바른지 판별하는 것도 필요하겠죠?
                }}/>
            </MainContainer>
        </Screen>
    );
};
const Screen = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 11px 20px;
  background-color: #1A1D25;
`

const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const InputTitle = styled.Text`
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
`

const InputListCard = styled.View`
  display: flex;
  width: 100%;
  padding: 43px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 200px;
  gap: 40px;

  border-radius: 8px;
  background-color: #212632;
`

const DateInputBox = styled.TouchableOpacity`
  display: flex;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  border-radius: 6px;
  background-color: #181C25;
  flex-direction: row;
`;

const MoneyInputBox = styled.TextInput`
  display: flex;
  height: 46px;
  justify-content: center;
  align-self: stretch;
  border-radius: 6px;
  background-color: #181C25;
  text-align: center;
  font-family: SUIT;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

const DateText = styled.Text`
  color: #fff;
  text-align: center;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
`

const MainContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px 0px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`

export default AccountBookInput;
