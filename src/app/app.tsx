import Main from '../pages/main/main';
import Favorites from '../pages/favorites/favorites';
import Layout from '../components/layout/layout';
import Error from '../pages/error/error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
