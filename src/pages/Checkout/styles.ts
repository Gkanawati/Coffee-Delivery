import styled, { ThemedStyledProps } from 'styled-components';

export const CheckoutContainer = styled.div`
  padding: 6.5rem 0;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;

   @media (max-width: 1200px) {
    & {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const HeadTitle = styled.h3`
  font-family: 'Baloo 2', 'Roboto';
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 3px;
`;

export const AddressContainer = styled.div`
  width: 60%;

  @media (max-width: 1200px) {
    & {
      width: 100%;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 32px;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 12px;
`;

export const TitleForm = styled.div`
  display: flex;
  gap: 8px;


  h4 {
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};
    padding-bottom: 2px;
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
  }
`;

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  div {
    display: flex;
    gap: 12px;

   @media (max-width: 1200px) {
      & {
        flex-wrap: wrap;
      }
    }
  }
`;

export const StyledField = styled.input`
  background-color: ${props => props.theme['base-input']};
  padding: 12px;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme['base-button']};
  font-size: 0.875rem;
  /* color: ${props => props.theme['base-label']}; */
  color: ${props => props.theme['base-title']};
`;

export const ContainerInputWithText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme['base-input']};
  border-radius: 4px;
  border: 1px solid ${props => props.theme['base-button']};
  color: ${props => props.theme['base-label']};
  flex: 1;
  position: relative;
`;

export const ComplementField = styled.input`
  background-color: ${props => props.theme['base-input']};
  border: 0;
  font-size: 0.875rem;
  padding: 12px;
  width: 100%;
  color: ${props => props.theme['base-label']};
`;

export const OptionalField = styled.div`
  font-size: 0.75rem;
  font-style: italic;
  padding: 12px;
  position: absolute;
  right: 12px;

  @media (max-width: 1200px) {
    span {
      display: none;
    }
  }
`;

interface PaymentButtonProps {
  selected: boolean;
}

export const PaymentContainer = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 1200px) {
      & {
        flex-wrap: wrap;
      }
    }
`;

export const BaseButton = styled.button`
  background-color: ${(props) =>  props.theme['base-button']};
  border: none;
  padding: 0px 8px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  text-transform: uppercase;
  font-size: 12px;
  line-height: 160%;
  font-weight: 400;
  color: ${(props) => props.theme['base-text']};
  transition: background 200ms;

  :hover {
    & {
      background: ${props => props.theme['base-hover']};
    }
  }
`;

export const PaymentOptionButton = styled(BaseButton)<ThemedStyledProps<PaymentButtonProps, any>>`
  background-color: ${(props) => (props.selected ? props.theme['purple-light'] : props.theme['base-button'])};
  width: 100%;
  padding: 16px;
 
  :not(:focus) {
    border: 1px solid ${(props) => props.selected ? props.theme['purple']: 'transparent'};
  }

  :hover {
    & {
      background: ${props => props.theme['purple-light']};
    }
  }
`;


export const OrderContainer = styled.div`
`;

export const CoffeeCard = styled(CardContainer)`
  border-radius: 6px 44px;
  width: 100%;
  gap: 24px;
`;


export const ResumeOrderValues = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const SubmitButton = styled.button`
  text-transform: uppercase;
  padding: 12px 8px;
  gap: 4px;
  background: ${props => props.theme.yellow};
  border-radius: 6px;
  width: 100%;
  border: none;
  color: ${props => props.theme.white};
  font-size: 14px;
  font-weight: 700;
  line-height: 160%;
  cursor: pointer;
  transition: background 200ms;

  :hover {
    & {
      background: ${props => props.theme['yellow-dark']};
    }
  }
`;

export const EmptyCartContainer = styled.div`
  min-width: 320px;
  text-align: center;

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }

  a {
    text-decoration: none;
  }
`;