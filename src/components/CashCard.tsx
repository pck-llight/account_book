import styled from "styled-components/native";
import Enter_icon from "../assets/img/arrow_back_ios.svg"
interface ButtonProps {
    title: string;
    subtitle?: string;
    subtitleColor: string;
    onPress?: () => void;
    disabled?: boolean;
    full?:boolean;
    iconVisible?:boolean;
}

const CashCard = ({title, subtitle, subtitleColor, onPress, disabled, full, iconVisible}:ButtonProps) => {

    return (
        <ButtonContainer style={{
            flex: full ? 0 : 1,
            padding: 16,
        }} onPress={onPress} disabled={disabled}>
            <TitleContainer>
                <Title>{title}</Title>
                { iconVisible && <Enter_icon width={10} height={10}/> }
            </TitleContainer>
            <SubTitle style={{color:subtitleColor}}>{subtitle}</SubTitle>
        </ButtonContainer>
    );
};

const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  background: #212632;
  align-self: stretch;
  
`

const TitleContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
`

const Title = styled.Text`
  display: flex;
  padding-right: 2px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  color: #fff;
  font-family: SUIT;
  font-weight: 600;
  font-size: 12px;
`

const SubTitle = styled.Text`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  color: black;
  font-family: SUIT;
  font-weight: 700;
  font-size: 20px;
`
export default CashCard;