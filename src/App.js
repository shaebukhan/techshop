
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import { AdminRoute, PrivateRoute, PublicRoute } from "./routes/AuthRoute";
import AdminDash from './pages/admin/AdminDash';
import AdminProfile from './pages/admin/AdminProfile';
import EditUser from './pages/admin/EditUser';
import Transactions from './pages/admin/Transactions';
import UserDashboard from './pages/user/UserDashboard';
import Products from './pages/admin/Products';
import UserWithdrawals from './pages/user/UserWithdrawals';
import Fees from './pages/user/Fees';
import Reports from './pages/user/Reports';
import UserProfile from './pages/user/UserProfile';
import NotFound from "./pages/NotFound";
import UploadProducts from "./pages/admin/UploadProducts";
import ProductDetails from "./pages/admin/ProductDetails";
import ProductDetailsClient from "./pages/home/ProductDetailsClient";
import Category from "./pages/home/Category";
import Search from "./pages/Features/Search";
import Cart from "./pages/home/Cart";
import Orders from "./pages/home/Orders";
import AllProducts from "./pages/home/AllProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import OrderDetails from "./pages/admin/OrderDetails";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/:id" element={<Orders />} />
        <Route path="/products" element={<AllProducts />} />

        {/* Auth routes */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />

        {/* Private Routes (Requires Login) */}
        <Route
          path="/dashboard/user"
          element={<PrivateRoute> <UserDashboard /> </PrivateRoute>}
        />

        <Route
          path="/dashboard/user/withdrawals"
          element={<PrivateRoute> <UserWithdrawals /> </PrivateRoute>}
        />
        <Route
          path="/dashboard/user/fees"
          element={<PrivateRoute> <Fees /> </PrivateRoute>}
        />
        <Route
          path="/dashboard/user/reports"
          element={<PrivateRoute> <Reports /> </PrivateRoute>}
        />
        <Route
          path="/dashboard/user/profile-settings"
          element={<PrivateRoute> <UserProfile /> </PrivateRoute>}
        />


        {/* Admin Routes (Requires Admin Access) */}
        <Route path="/dashboard/admin" element={<AdminRoute><AdminDash /></AdminRoute>} />
        <Route path="/dashboard/admin/profile" element={<AdminRoute><AdminProfile /></AdminRoute>} />
        <Route path="/dashboard/admin/edit-user/:id" element={<AdminRoute><EditUser /></AdminRoute>} />
        <Route path="/dashboard/admin/transactions" element={<AdminRoute><Transactions /></AdminRoute>} />
        <Route path="/dashboard/admin/products" element={<AdminRoute><Products /></AdminRoute>} />
        <Route path="/dashboard/admin/upload-products" element={<AdminRoute><UploadProducts /></AdminRoute>} />
        <Route path="/dashboard/admin/edit-product-details/:id" element={<AdminRoute><ProductDetails /></AdminRoute>} />
        <Route path="/dashboard/admin/orders" element={<AdminRoute><AdminOrders /></AdminRoute>} />
        <Route path="/dashboard/admin/order/:id" element={<AdminRoute><OrderDetails /></AdminRoute>} />


        {/* public Routes */}
        <Route path="/product-details/:id" element={<ProductDetailsClient />} />
        <Route path="/category/:category" element={<Category />} />
        {/* Catch-all route for 404 pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;