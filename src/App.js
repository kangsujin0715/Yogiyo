import './App.css';
import { Route, Routes } from 'react-router-dom';
import Index from './page';
import TestPage from './page/TestPage';
import Sample from './page/sample';
import CategoryFilter from './page/CategoryFilter';

export const pageList = [
  { title: '인덱스', path: '/', element: <Index /> },
  { title: '테스트 페이지 A', path: '/test/a', element: <TestPage /> },
  { title: '테스트 페이지 B', path: '/test/b', element: <h1>hello, world B </h1> },
  { title: '카테고리필터 테스트', path: '/category/filter', element: <CategoryFilter /> },
];

function App() {
  return (
    <Routes>
      {pageList.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
}

export default App;
