import { ReactElement } from "react";
import styled from "styled-components";

type ModalProps = {
  children: ReactElement | ReactElement[];
};

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-out;
`;

const ModalBody = styled.div`
  vertical-align: middle;
  max-width: 500px;
  width: 90%;
`;

const ModalContent = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: left;
  padding: 30px;
`;

const Modal = ({ children }: ModalProps) => {
  return (
    <ModalWrapper>
      <ModalBody>
        <ModalContent>{children}</ModalContent>
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;
