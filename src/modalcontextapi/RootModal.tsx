import React from "react";

import { useModal } from "./ModalManager";
import { ConfirmDialog } from "./ConfirmDialog";
import { ImagePreview } from "./ImagePreview";

const MODAL_TYPES = {
  PREVIEW: ImagePreview,
  CONFIRM: ConfirmDialog,
};

//root modal container
const RootModalContainer = () => {
  const { modal, closeModal } = useModal();

  if (!modal.type) return null;

  // const SpecificModal = MODAL_TYPES[modal.type];

  return <div></div>;
};
