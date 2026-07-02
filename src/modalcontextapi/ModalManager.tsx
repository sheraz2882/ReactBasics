import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

//creating modal context
type ModalState = {
  type: string | null;
  props: Record<string, unknown>;
};

type ModalContextType = {
  modal: ModalState;
  showModal: (type: string, props?: Record<string, unknown>) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState<ModalState>({ type: null, props: {} });

  const showModal = (type: string, props: Record<string, unknown> = {}) => {
    setModal({ type, props });
  };

  const closeModal = () => {
    setModal({ type: null, props: {} });
  };

  return (
    <ModalContext.Provider value={{ modal, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
