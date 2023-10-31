import {
  atom,
  atomFamily,
  DefaultValue,
  selector,
  selectorFamily,
} from 'recoil';
import { ModalTypes } from 'src/components/modal/table/modalTable';
import { ModalKeys } from 'src/recoil/modal/modalAtomKey';

interface ModalInfo {
  type: ModalTypes;
  isOpen: boolean;
  component: any;
  props?: any;
}

const modalsAtomFamily = atomFamily<ModalInfo, ModalTypes>({
  key: ModalKeys.MODALS_FAMILY,
  default: (type) => ({
    type: type,
    isOpen: false,
    component: undefined,
    props: undefined,
  }),
});

export const modalIdsAtom = atom<ModalInfo[]>({
  key: ModalKeys.MODAL_IDS,
  default: [],
});

export const modalSelector = selector<ModalInfo[]>({
  key: ModalKeys.MODAL_SELECTOR,
  get: ({ get }) => {
    const modal = get(modalIdsAtom);

    return modal.filter((modal) => modal.isOpen);
  },
});

export const modalsSelectorFamily = selectorFamily<ModalInfo, ModalTypes>({
  key: ModalKeys.MODAL_SELECTOR_FAMILY,
  get:
    (modalId) =>
    ({ get }) =>
      get(modalsAtomFamily(modalId)),

  set:
    (modalId) =>
    ({ get, set, reset }, modalInfo) => {
      if (modalInfo instanceof DefaultValue) {
        reset(modalsAtomFamily(modalId));
        set(modalIdsAtom, (prevValue) =>
          prevValue.filter((item) => item.type !== modalId),
        );

        return;
      }

      set(modalsAtomFamily(modalId), modalInfo);

      if (
        !get(modalIdsAtom).find((item) => item.type === modalId) &&
        modalInfo.isOpen
      ) {
        set(modalIdsAtom, (prev) => Array.from(new Set([...prev, modalInfo])));

        return;
      }

      set(modalIdsAtom, (prevValue) => {
        const newValue = prevValue.map((item) => {
          if (item.type === modalId) {
            return {
              type: item.type,
              isOpen: modalInfo.isOpen,
              component: modalInfo.component,
              props: modalInfo.props,
            };
          }
          return item;
        });

        return newValue;
      });
    },
});
