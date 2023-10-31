import { lazy } from 'react';

export enum ModalTypes {
  ALERT,
  CONFIRM,
}

export interface ModalState {
  type: ModalTypes;
  component: any;
}

const LazyAlertModal = lazy(() => import('../CustomAlertModal'));

export const ModalTable: ModalState[] = [
  {
    type: ModalTypes.ALERT,
    component: LazyAlertModal,
  },
];
