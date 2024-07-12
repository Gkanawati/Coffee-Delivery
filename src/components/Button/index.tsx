import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant;
}

export default function Button({ variant = 'primary' }: ButtonProps) {
  return (
    <ButtonContainer variant={variant}>Button</ButtonContainer>
  )
}
