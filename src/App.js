import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './page';
import TestPage from './page/TestPage';
import GiftDetail from './page/GiftDetail';
import GiftHeader from './page/GiftHeader';
import Privacy from './page/Privacy';

export const pageList = [
  { title: '인덱스', path: '/', element: <Index /> },
  { title: '테스트 페이지 A', path: '/test/a', element: <TestPage /> },
  { title: '테스트 페이지 B', path: '/test/b', element: <h1>hello, world B </h1> },
  { title: '선물하기 상세', path: '/test/giftdetail', element: <GiftDetail /> },
  { title: '선물하기 상세 텝', path: '/test/privacy', element: <Privacy /> }
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
