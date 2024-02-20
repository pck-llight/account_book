import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import styled from "styled-components/native";
import Header from "../components/Header.tsx";
import AccountTypeButton from "../components/AccountTypeButton.tsx";
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

const AccountBookInput = () => {
    console.log("렌더링");

    //Date 모달 관련 상태
    const [date,setDate] = useState<Date>(new Date());
    const [open, setOpen] = useState(false)

    //수입 지출
    const [accountType, setType] = useState<string>("수입");

    //현재 돈
    const [money,setMoney] = useState("");


    let secondInputQ;
    let thirdInputQ;

    if(accountType=="수입") {
        secondInputQ = "언제의 수입인가요?";
        thirdInputQ = "얼마만큼의 수입인가요?";}
    else {
        secondInputQ = "언제의 지출인가요?";
        thirdInputQ = "얼마만큼의 지출인가요?";}

    const typeStateCallback = (title:string) => {
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
      return(
          <DateInputBox onPress={()=>{setOpen(true)}}>
              <DateText>{date.getFullYear()}</DateText>
              <DateText>{date.getMonth() + 1}</DateText>
              <DateText>{date.getDate()}</DateText>
          </DateInputBox>
      );
    };


    return (
        <Screen>
            <Header title={"수입/지출 입력"}/>
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
                        <MoneyInputBox value={money} placeholder="원화 단위로 값을 입력하세요" onChangeText={(text) => setMoney(text)}/>
                    </InputContainer>
                </InputListCard>
                <DataModal/>
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

const InputContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const InputTitle = styled.Text`
  color: #3F4446;
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
  background: #FAFAFA;
`

const DateInputBox = styled.TouchableOpacity`
  display: flex;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #EDEDED;
  background: #F5F5F5;
  flex-direction: row;
`;

const MoneyInputBox = styled.TextInput`
  display: flex;
  height: 46px;
  justify-content: center;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #EDEDED;
  background: #F5F5F5;
  flex-direction: row;
  text-align-vertical: center;
  text-align: center; /* 수정된 부분 */
`;

const DateText = styled.Text`
  color: #525759;
  text-align: center;
  font-family: SUIT;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;

  letter-spacing: -0.4px;`

const MainContainer = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
`



export default AccountBookInput;
