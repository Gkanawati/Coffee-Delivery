import styled from 'styled-components';

export const CoffeeItemOrder = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid ${props => props.theme['base-button']};
  padding-bottom: 24px;

  p {
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 8px;
  }

  img {
    max-width: 64px;
  }

  span {
    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.theme['base-text']}
  }

  @media (max-width: 1200px) {
    & {
      flex-wrap: wrap;
    }

    span {
      font-size: 1.2rem;
      align-self: stretch;
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