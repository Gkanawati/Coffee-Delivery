import React from 'react';
import { ActionsContainer, DialogTextContainer, ModalBackdrop, ModalButton, ModalContent } from './styles';

type CustomModalProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  cancelText?: string;
  onClose: () => void;
  goAction: () => void;
};

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, goAction, title, description, cancelText = 'Cancelar' }) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop>
      <ModalContent>
        <DialogTextContainer>
          <h4>{title}</h4>
          <p>{description}</p>
        </DialogTextContainer>

        <ActionsContainer>
          <ModalButton onClick={onClose}>
            {cancelText ?? 'Cancelar'}
          </ModalButton>

          <ModalButton onClick={goAction} isActionButton>
            Ir para o Carrinho
          </ModalButton>
        </ActionsContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default CustomModal;