import React from "react";
import { X } from "lucide-react";

export const ReactModals = () => {
  return (
    <div>
      <h2>React Modal Example</h2>
      <SimpleModal />
    </div>
  );
};

function SimpleModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = React.useState(false);

  return (
    <div>
      <div className="hook-demo-card">
        <div className="use-state-exam">
          <button onClick={() => setIsOpen(true)} className="hook-button">
            Open Simple Modal
          </button>
        </div>

        <div className="use-state-exam">
          <button
            onClick={() => setIsRegistrationOpen(true)}
            className="hook-button"
          >
            Registration Modal
          </button>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Simple Modal"
      >
        This is a simple modal. It's controlled by plain <code>useState</code> —
        no Context API needed for a single, local modal like this.
        <button
          onClick={() => setIsOpen(false)}
          className="hook-button"
          style={{ marginTop: "10px" }}
        >
          Got It
        </button>
      </Modal>

      <RegistrationFormModal
        isRegistrationOpen={isRegistrationOpen}
        onRegistrationClose={() => {
          setIsRegistrationOpen(false);
        }}
        title="Sign Up"
      >
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="hook-button">
            Register
          </button>
        </form>
      </RegistrationFormModal>
    </div>
  );
}

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modal-content"
      >
        <div className="modal-header">
          <h3>{title}</h3>
          <button onClick={onClose} className="close-button">
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

interface RegistrationFormModalProps {
  isRegistrationOpen: boolean;
  onRegistrationClose: () => void;
  title: string;
  children: React.ReactNode;
}

function RegistrationFormModal({
  isRegistrationOpen,
  onRegistrationClose,
  title,
  children,
}: RegistrationFormModalProps) {
  if (!isRegistrationOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        style={{ padding: 0 }}
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-header">
          <h3 style={{ margin: 0 }}>{title}</h3>
          <button onClick={onRegistrationClose} className="close-button">
            <X />
          </button>
        </div>

        <div style={{ padding: "10px" }}>{children}</div>
      </div>
    </div>
  );
}
