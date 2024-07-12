import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Checkout from './pages/Checkout';
import { Home } from './pages/Home';
import Success from './pages/Success';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success/:orderId' element={<Success />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  )
}
