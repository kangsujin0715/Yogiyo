import { useRecoilState } from 'recoil';
import { useModal } from 'src/hooks/useModal';
import { AlertProps } from 'src/components/modal/CustomAlertModal';
import { ModalTypes } from 'src/components/modal/table/modalTable';
import useDeviceInfo from 'src/hooks/useDeviceInfo';
import useCounter from 'src/hooks/useCounter';
import { useEffect } from 'react';
import { couponCountAtom } from 'src/recoil/coupon/couponAtoms';
import { Counter } from 'src/components/ui/counter/Counter';
import { useRouter } from 'next/router';
import LargeCheckBox from 'src/components/ui/checkbox/LargeCheckbox';

const Auth = () => {
  const modal = useModal<AlertProps>(ModalTypes.ALERT);
  const deviceInfo = useDeviceInfo();
  const router = useRouter();
  const [couponCount, setCouponCount] = useRecoilState(couponCountAtom);
  const [count, increment, decrement] = useCounter(0);

  const buttonClick = () => {
    modal.openModal({
      body: 'dasdasdasd',
      onConfirm: () => alert('success'),
    });
  };

  useEffect(() => {
    setCouponCount(count);
  }, [count]);

  return (
    <div>
      <div>Auth Page</div>
      <button onClick={() => buttonClick()}>모달</button>
      <p>
        <strong>카운트 : </strong>
        {count} {'P'}
      </p>
      <p>
        <strong>recoil 카운트 : </strong>
        {couponCount} {'P'}
      </p>

      <Counter>
        <Counter.Decrement onClick={decrement}>마이너스</Counter.Decrement>
        <Counter.Label>카운트</Counter.Label>
        <Counter.Count />
        <Counter.Increment onClick={increment}>플러스</Counter.Increment>
      </Counter>
      <br />
      <br />
      <br />
      <button onClick={() => setCouponCount(count)}>set recoil</button>
      <button onClick={() => router.push('/login')}>go login</button>
      <button onClick={() => router.push('/coupon/list')}>go list</button>
      <button onClick={() => router.push('/coupon/detail/3')}>go detail</button>
      <LargeCheckBox label={'asd'} />
    </div>
  );
};

export default Auth;
