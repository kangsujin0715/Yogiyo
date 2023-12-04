import './App.css';
import './css/common.css';
import { Route, Routes } from 'react-router-dom';
import Index from './page';
import TestPage from './page/TestPage';

import GiftDetail from './page/GiftDetail';
import GiftHeader from './page/GiftHeader';
import Privacy from './page/Privacy';
import GiftComplete from './page/GiftComplete';
import KakaoComplete from './page/KakaoComplete';
import SendGiftDetail from './page/SendGiftDetail';
import SendGiftDetailCancel from './page/SendGiftDetailCancel';
import GetGiftDetail from './page/GetGiftDetail';
import Refunding from './page/Refunding';
import CategoryFilter from './page/CategoryFilter';
import ProductList from './page/ProductList';


export const pageList = [
  { title: '인덱스', path: '/', element: <Index /> },
  { title: '테스트 페이지 A', path: '/test/a', element: <TestPage /> },
  { title: '테스트 페이지 B', path: '/test/b', element: <h1>hello, world B </h1> },
  { title: '선물하기 상세', path: '/test/giftdetail', element: <GiftDetail /> },
  { title: '선물하기 상세 텝', path: '/test/privacy', element: <Privacy /> },
  { title: '선물하기 완료', path: '/test/complete', element: <GiftComplete /> },
  { title: '선물 등록하기 카톡 브라우저', path: '/test/kakaoComplete', element: <KakaoComplete /> },
  { title: '보낸 선물 상세', path: '/test/sendGiftDetail', element: <SendGiftDetail /> },
  { title: '보낸 선물 상세 취소', path: '/test/sendGiftDetailCancel', element: <SendGiftDetailCancel /> },
  { title: '받은 선물 상세', path: '/test/getGiftDetail', element: <GetGiftDetail /> },
  { title: '환불 진행 상태', path: '/test/refunding', element: <Refunding /> },
  { title: '카테고리필터 테스트', path: '/category/filter', element: <CategoryFilter /> },
  { title: '상품리스트 테스트', path: '/pooduct/list', element: <ProductList /> },
];

function App() {
  return (
	<>
		<GiftHeader/>
		<Routes>
		{pageList.map(({ path, element }) => (
			<Route key={path} path={path} element={element} />
		))}
		</Routes>
	</>
  );
}

export default App;
