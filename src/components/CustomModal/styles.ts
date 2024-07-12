import styled from 'styled-components';

// Define styled components
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 2rem;
  gap: 2rem;

  @media (min-width: 768px) {
    min-width: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const DialogTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: start;

  h4 {
    color: ${props => props.theme['base-title']};
    text-align: start;
  }

  p {
    color: ${props => props.theme['base-text']};
    text-align: start;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-self: flex-end;
`;

export const ModalButton = styled.button<{ isActionButton?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  background-color: ${props => (props.isActionButton ? props.theme['yellow-light'] : props.theme['base-button'])};
  color: ${props => (props.isActionButton ? props.theme['yellow-dark'] : props.theme['base-text'])};
  transition: all 0.3s;

  &:hover {
    color: ${props => (props.isActionButton ? props.theme['yellow-light'] : props.theme['base-text'])};
    background-color: ${props => (props.isActionButton ? props.theme['yellow-dark'] : props.theme['base-hover'])};
  }
`;
