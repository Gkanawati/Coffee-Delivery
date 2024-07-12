import styled from 'styled-components';

export const HomeContainer = styled.main`
  color: ${props => props.theme['base-title']};
  padding: 6.5rem 0;
`;

export const IntroContainer = styled.div`
  display: flex;
  padding: 5.875rem 0;

   @media (max-width: 575.98px) { 
    & {
      padding: 3rem 0;
    }
  }
`;

export const ContentIntro = styled.div`
  z-index: 1;
  display: flex;
  gap: 3.5rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991.98px) { 
    & {
      flex-direction: column;
      align-items: center;
    }

    img {
      max-width: 320px;
    }
  }
`

export const MainText = styled.div`
  gap: 1rem
`;

export const Title = styled.h2`
  font-family: 'Baloo 2', 'Roboto', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: ${props => props.theme['base-title']};

  @media (max-width: 575.98px) { 
    & {
      font-size: 2.5rem;
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme['base-subtitle']};
  margin-top: 1rem;
`;

export const TopicsContainer = styled.div`
  margin-top: 4.125rem;
  display: flex;
  gap: 2.5rem;

  @media (max-width: 575.98px) { 
    & {
      gap: 1em;
    }
  }
`;

export const TopicsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme['base-text']};
  }
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
`

export const ContentContainer = styled.div`
  padding: 2rem 0;

  h3 {
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']};
    margin-bottom: 2rem;
  }
`;

export const CoffeeSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 639px) {
    & {
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
  }
`;