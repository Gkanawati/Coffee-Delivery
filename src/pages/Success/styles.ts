import styled from 'styled-components';

export const SuccessContainer = styled.div`
  padding: 6.5rem 0;
`;

export const TextContainer = styled.div`
  margin-top: 5rem;

  h2 {
    font-family: 'Baloo 2', 'Roboto';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme['yellow-dark']};
  }

  p {
    margin-top: 0.25rem;
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    img {
      max-width: 450px;
    }
  }

  @media (max-width: 1000px) {
    img {
      max-width: 400px;
    }
  }

  @media (max-width: 860px) {
    & {
      flex-direction: column;
      align-items: center;
    }

    img {
      margin-top: 2rem;
    }
  }

  @media (max-width: 575.98px) {
    img {
      max-width: 340px;
    }
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px;
  gap: 32px;
  border-radius: 6px 36px;
  background-color: ${props => props.theme.background};

  @media (min-width: 1200px) {
    & {
      min-width: 526px;
    }
  }
`;

export const InfoBorder = styled.div`
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  z-index: -1;
  border-radius: inherit;
  background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
`;

export const OrderInfo = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export type IconContainerVariant = 'yellow-dark' | 'yellow' | 'purple' | 'base-text';

interface IconContainerProps {
  bgColor: IconContainerVariant;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  padding: 8px;
  border-radius: 100%;
  background-color: ${props => props.theme[props.bgColor]};
`;