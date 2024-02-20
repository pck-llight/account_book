import React from 'react';
import styled from 'styled-components/native'

interface AccountLogProps {
    type:'income' | 'outcome';

}

const AccountLog = () => {
    return (
        <Container>
            <Left>

            </Left>
        </Container>
    );
};

const Container = styled.View`
  display: flex;
  padding: 14px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const Left = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`

const MoneyText = styled.Text<>`
`
export default AccountLog;