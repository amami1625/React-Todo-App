import { createContext, ReactNode, useContext, useState } from "react";

type ModalContextType = {
  showCompletedModal: boolean;
  toggleCompletedModal: () => void;
};

type ModalProviderProps = {
  children: ReactNode;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [showCompletedModal, setShowCompletedModal] = useState<boolean>(false);

  const toggleCompletedModal = () => {
    setShowCompletedModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ showCompletedModal, toggleCompletedModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default ModalProvider;
