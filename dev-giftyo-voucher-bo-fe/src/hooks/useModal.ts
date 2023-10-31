import { useRecoilState, useResetRecoilState } from 'recoil';
import { modalsSelectorFamily } from 'src/recoil/modal/modalAtoms';
import { ModalTable, ModalTypes } from 'src/components/modal/table/modalTable';

export const useModal = <T>(modalId: ModalTypes) => {
  const [_, setModal] = useRecoilState(modalsSelectorFamily(modalId));
  const resetModal = useResetRecoilState(modalsSelectorFamily(modalId));

  const openModal = (props?: T) => {
    const preConfig = ModalTable.find((mi) => mi.type === modalId);

    setModal((current) => ({
      ...current,
      isOpen: true,
      component: preConfig?.component,
      props: props,
    }));
  };

  const closeModal = () => {
    resetModal();
  };

  const hideModal = () => {
    setModal((current) => ({ ...current, isOpen: false }));
  };

  return { openModal, closeModal, hideModal };
};
