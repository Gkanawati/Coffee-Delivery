import { Minus, Plus } from 'phosphor-react';
import styled from 'styled-components';


export const CoffeeContainer = styled.div`
  padding:  1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 16rem;
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px 36px;
  margin-top: 1rem;

  @media (max-width: 639px) {
    & {
      max-width: 15rem;
    }
  }

  @media (max-width: 527px) {
    & {
      max-width: 18rem;
    }
  }

  img {
    margin-top: -40px;
    width: 120px;
    height: 120px;

   @media (max-width: 1200px) {
      & {
        max-width: 110px;
        max-height: 110px;
      }
    }
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 0.75rem 0 1rem 0;
`

export const TagItem = styled.div`
  background-color: ${props => props.theme['yellow-light']};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  max-height: 1.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    color: ${props => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
  }
`;

export const CoffeeTitle = styled.h4`
  font-family: 'Baloo 2', 'Roboto', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme['base-subtitle']};
`;

export const CoffeeDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme['base-label']};
  margin: 0.5rem 0 2.0625rem 0;
`;

export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.875rem;

  span {
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const PriceText = styled.h6`
  font-family: 'Baloo 2', 'Roboto', sans-serif;
  color: ${props => props.theme['base-text']};
  font-size: 1.5rem;
  font-weight: 800;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const AmountContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;
  padding: 8px;
  gap: 4px;
  align-items: center;

  span {
    font-size: 1rem;
    color: ${props => props.theme['base-title']};
    padding: 0 4px;
  }

  @media (max-width: 1200px) {
    span {
      font-size: 1rem;
      line-height: 100%;
    }
  }
`;

export const IconButton = styled.button`
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :focus {
    box-shadow: none;
  }
`;

export const MinusIcon = styled(Minus)`
  color: ${props => props.theme['purple']};
`;

export const PlusIcon = styled(Plus)`
  color: ${props => props.theme['purple']};
`;

export const ShopButton = styled.button`
  border: 0;
  background-color: ${props => props.theme['purple-dark']};
  padding: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 200ms;

  :hover {
    background-color: ${props => props.theme['purple']};
  }
`;