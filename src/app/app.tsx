import Main from '../pages/main/main';
import Favorites from '../pages/favorites/favorites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/layout';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
