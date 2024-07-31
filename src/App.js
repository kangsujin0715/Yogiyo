import './App.css';
import './css/common.css';
import { Route, Routes } from 'react-router-dom';
import Index from './page';
import GiftDetail2 from './page/GiftDetail2';
import GiftHeader from './Component/GiftHeader';
import GiftComplete from './page/GiftComplete';
import GiftSending from './page/GiftSending';
import GiftError from './page/GiftError';
import ServiceError from './page/ServiceError';
import KakaoComplete from './page/KakaoComplete';
import SendGiftDetail from './page/SendGiftDetail';
import SendGiftDetailCancel from './page/SendGiftDetailCancel';
import SendingGiftDetail from './page/SendingGiftDetail';
import GetGiftDetail from './page/GetGiftDetail';
import Refund from './page/Refund';
import Refunding from './page/Refunding';
import HomeIndex from './page/HomeIndex';
import MainHeader from './Component/MainHeader';
import Container from '@mui/material/Container';

export const pageList = [
  { title: '-------------------', path: '/', element: <Index /> },
  { title: '선물하기 상세', path: '/test/giftdetail', element: <GiftDetail2 /> },
  { title: '선물하기 완료 (선물 완료)', path: '/test/complete', element: <GiftComplete /> },
  { title: '선물하기 완료 (보내는중)', path: '/test/complete2', element: <GiftSending /> },
  { title: '선물하기 오류', path: '/test/error', element: <GiftError /> },
  { title: '서비스 장애', path: '/test/serviceError', element: <ServiceError /> },
  { title: '알림톡 이동화면 (카톡 브라우저)', path: '/test/kakaoComplete', element: <KakaoComplete /> },
  { title: '보낸 선물 상세', path: '/test/sendGiftDetail', element: <SendGiftDetail /> },
  { title: '보낸 선물 상세 취소', path: '/test/sendGiftDetailCancel', element: <SendGiftDetailCancel /> },
  { title: '선물 보내는 중', path: '/test/SendingGiftDetail', element: <SendingGiftDetail /> },
  { title: '받은 선물 상세', path: '/test/getGiftDetail', element: <GetGiftDetail /> },
  { title: '환불', path: '/test/refund', element: <Refund /> },
  { title: '환불 진행 상태', path: '/test/refunding', element: <Refunding /> },
];

function App() {
	console.log("pathname",window.location.pathname)
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <MainHeader />
              <HomeIndex />
            </>
          }
        />
        {pageList.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                <GiftHeader />
                <Container className='col'>{element}</Container>
              </>
            }
          />
        ))}
      </Routes>
    </>
  );
}
export default App;
