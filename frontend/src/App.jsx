import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';
import AuthLayout from './components/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import Addresses from './pages/Addresses';
import Orders from './pages/Orders';
import OrderDetails from './pages/OrderDetails';
import OrderSuccess from './pages/OrderSuccess';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ScrollToTop />
            <Toaster position="top-center" />
            <Routes>
              {/* Main Layout routes */}
              <Route path="/" element={<MainLayout />}>
                {/* Public Routes */}
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms" element={<TermsAndConditions />} />
                <Route path="refund-policy" element={<RefundPolicy />} />
                <Route path="shipping-policy" element={<ShippingPolicy />} />

                {/* Protected Routes */}
                <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                <Route path="wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
                <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="addresses" element={<ProtectedRoute><Addresses /></ProtectedRoute>} />
                <Route path="orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
                <Route path="order/:id" element={<ProtectedRoute><OrderDetails /></ProtectedRoute>} />
                <Route path="order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
              </Route>

              {/* Auth Layout routes */}
              <Route element={<AuthLayout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="reset-password" element={<ResetPassword />} />
              </Route>
            </Routes>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
