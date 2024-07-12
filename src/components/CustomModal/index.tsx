import React from 'react';
import { ActionsContainer, DialogTextContainer, ModalBackdrop, ModalButton, ModalContent } from './styles';

type CustomModalProps = {
  isOpen: boolean;
  title: string;
  description?: string;
  goActionText?: string;
  cancelText?: string;
  onClose: () => void;
  goAction: () => void;
  hideCancelButton?: boolean;
};

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, goAction, title, description, goActionText, cancelText = 'Cancelar', hideCancelButton }) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop>
      <ModalContent>
        <DialogTextContainer>
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </DialogTextContainer>

        <ActionsContainer>
          {!hideCancelButton &&
            <ModalButton onClick={onClose}>
              {cancelText ?? 'Cancelar'}
            </ModalButton>
          }

          <ModalButton onClick={goAction} isActionButton>
            {goActionText ?? 'OK'}
          </ModalButton>
        </ActionsContainer>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default CustomModal;