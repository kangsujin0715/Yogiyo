import { useRecoilValue, useResetRecoilState } from 'recoil';
import { Suspense, useEffect } from 'react';
import { modalIdsAtom, modalSelector } from 'src/recoil/modal/modalAtoms';
import { ModalTable } from 'src/components/modal/table/modalTable';

const ModalManager = () => {
  const modals = useRecoilValue(modalSelector);
  const resetAtom = useResetRecoilState(modalIdsAtom);

  const goHistoryBack = () => {
    resetAtom();
  };

  useEffect(() => {
    if (modals.every((data) => !data.isOpen)) {
      resetAtom();
    }
  }, [modals]);

  useEffect(() => {
    window.addEventListener('popstate', goHistoryBack);

    return () => {
      window.removeEventListener('popstate', goHistoryBack);
    };
  }, []);

  return (
    <div>
      {modals.map((modal, idx) => {
        // index 에 지정된 component 정보 가져오기
        const preConfig = ModalTable.find((mi) => mi.type === modal.type);

        if (!preConfig?.component) {
          console.error('not found modal component');
          return null;
        }

        const ModalComponent = modal.component;
        const { props } = modal;

        return (
          <Suspense key={preConfig.type} fallback={null}>
            <ModalComponent {...props} />
          </Suspense>
        );
      })}
    </div>
  );
};

export default ModalManager;
