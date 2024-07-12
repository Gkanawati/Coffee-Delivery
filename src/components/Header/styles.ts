import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 2rem 5rem;
  background-color: ${props => props.theme.background};
  z-index: 2;

  @media (max-width: 575.98px) { 
    & {
      padding: 2rem 1rem;
    }
  }
`

export const HeaderContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;

  @media (max-width: 1438px) { 
    & {
      padding: 0rem 1rem;
    }
  }

  @media (max-width: 575.98px) { 
    & {
      padding: 0rem 1rem;
    }
  }
`

export const ActionsHeader = styled.div`
  display: flex;
  gap: 12px;
`;

export const LocationButton = styled.a`
  background-color: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple']};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
  text-decoration: none;

  span {
    color: ${props => props.theme['purple-dark']};
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CartContainer = styled.div`

`;

export const CartButton = styled.a`
  position: relative;
  padding: 8px;
  gap: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  transition: background-color 300ms;

  &:hover {
    background-color: ${props => props.theme['yellow']};
    color: ${props => props.theme['yellow-light']};
  }
`;

export const Counter = styled.div`
  background: ${props => props.theme['yellow-dark']};
  border-radius: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-self: flex-end;

  position: absolute;
  width: 20px;
  height: 20px;
  right: -8.35px;
  top: -8px;

  span {
    color: ${props => props.theme.white};
    font-size: 12px;
    font-weight: 700;
    line-height: 100%;
  }
`;