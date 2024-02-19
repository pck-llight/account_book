import styled from "styled-components/native";
interface ButtonProps {
    title: string;
    subtitle?: string;
    onPress: () => void;
    disabled?: boolean;
}

const CashCard = ({title, subtitle,onPress, disabled}:ButtonProps) => {
    return (
        <ButtonContainer onPress={onPress}>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
        </ButtonContainer>
    );
};

const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  padding: 14px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: #fff;
`

const Title = styled.Text`
  display: flex;
  padding-right: 2px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: black;
`

const SubTitle = styled.Text`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  color: black;
`
export default CashCard;