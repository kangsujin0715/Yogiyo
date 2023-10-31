import { useEffect } from 'react';
import { ModalTypes } from 'src/components/modal/table/modalTable';
import { useModal } from 'src/hooks/useModal';

export interface AlertProps {
  body: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const CustomAlertModal = (props: AlertProps) => {
  const modal = useModal<AlertProps>(ModalTypes.ALERT);

  const handleConfirm = () => {
    if (props.onConfirm) props.onConfirm();

    modal.hideModal();
  };

  const handleCancel = () => {
    if (props.onCancel) props.onCancel();

    modal.hideModal();
  };

  const onKeyDownKeyword = (e: any) => {
    console.log('onKeyDownKeyword');
    if (e.key === 'Enter') {
      if (props.onConfirm) props.onConfirm();

      modal.hideModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDownKeyword);

    return () => {
      window.removeEventListener('keydown', onKeyDownKeyword);
    };
  }, []);

  return (
    <div className={``} onKeyDown={onKeyDownKeyword}>
      <div className={''}>
        <section className={'styled.alert_inner'}>
          <div className={'styled.alert_content'}>
            <p className={'styled.new_line'}>{props.body}</p>
          </div>
          <div className={'styled.alert_btn'}>
            {props.cancelButtonText && (
              <span>
                <button onClick={handleCancel}>
                  {props.cancelButtonText}{' '}
                </button>
              </span>
            )}

            <span>
              <button onClick={handleConfirm} onKeyDown={onKeyDownKeyword}>
                {props.confirmButtonText ?? '확인'}
              </button>
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomAlertModal;
