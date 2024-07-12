import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 80rem;
  padding: 0rem 5rem;
  margin: 0 auto;

  @media (max-width: 991.98px) { 
    & {
      padding: 0rem 3rem;
    }
  }

  @media (max-width: 575.98px) { 
    & {
      padding: 0rem 1rem;
    }
  }
`;