import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${props => buttonVariants[props.variant]};
  color: ${props => props.theme.purple};

  /* ou dessa forma */
  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }} */
`;