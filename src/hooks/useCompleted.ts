import { useState } from "react";

export const useCompleted = () => {
  const [showCompletedModal, setShowCompletedModal] = useState<boolean>(false);

  const toggleCompletedModal = () => {
    setShowCompletedModal((prev) => !prev);
  };

  return { showCompletedModal, toggleCompletedModal };
};
