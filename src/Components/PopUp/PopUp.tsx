import { ReactNode } from "react";
import "./style.css";

interface PopUp {
  modalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

export const PopUp = ({ modalActive, setModalActive, children }: PopUp) => {
  return (
    <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
      <div className={modalActive ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
