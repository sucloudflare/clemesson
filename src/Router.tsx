import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { OrderTracking } from './pages/OrderTracking';
import { Cart } from './pages/Cart';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/rastreamento" element={<OrderTracking />} />
      <Route path="/carrinho" element={<Cart />} />
    </Routes>
  );
}