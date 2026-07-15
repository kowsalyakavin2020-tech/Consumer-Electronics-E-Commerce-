import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";

import CustomerDashboard from "../dashboard/CustomerDashboard/CustomerDashboard";
import CustomerOrders from "../dashboard/CustomerDashboard/CustomerOrders";
import CustomerWishlist from "../dashboard/CustomerDashboard/CustomerWishlist";
import CustomerProfile from "../dashboard/CustomerDashboard/CustomerProfile";
import CustomerSettings from "../dashboard/CustomerDashboard/CustomerSettings";

import SellerDashboard from "../dashboard/SellerDashboard/SellerDashboard";
import SellerProducts from "../dashboard/SellerDashboard/SellerProducts";
import SellerOrders from "../dashboard/SellerDashboard/SellerOrders";
import SellerAnalytics from "../dashboard/SellerDashboard/SellerAnalytics";
import SellerSettings from "../dashboard/SellerDashboard/SellerSettings";

import AdminDashboard from "../dashboard/AdminDashboard/AdminDashboard";
import AdminUsers from "../dashboard/AdminDashboard/AdminUsers";
import AdminSellers from "../dashboard/AdminDashboard/AdminSellers";
import AdminOrders from "../dashboard/AdminDashboard/AdminOrders";
import AdminSettings from "../dashboard/AdminDashboard/AdminSettings";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Customer Dashboard */}
      <Route
        element={
          <ProtectedRoute allowedRole="customer">
            <DashboardLayout role="customer" title="Customer Dashboard" />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard/customer" element={<CustomerDashboard />} />
        <Route path="/dashboard/customer/orders" element={<CustomerOrders />} />
        <Route path="/dashboard/customer/wishlist" element={<CustomerWishlist />} />
        <Route path="/dashboard/customer/profile" element={<CustomerProfile />} />
        <Route path="/dashboard/customer/settings" element={<CustomerSettings />} />
      </Route>

      {/* Seller Dashboard */}
      <Route
        element={
          <ProtectedRoute allowedRole="seller">
            <DashboardLayout role="seller" title="Seller Dashboard" />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard/seller" element={<SellerDashboard />} />
        <Route path="/dashboard/seller/products" element={<SellerProducts />} />
        <Route path="/dashboard/seller/orders" element={<SellerOrders />} />
        <Route path="/dashboard/seller/analytics" element={<SellerAnalytics />} />
        <Route path="/dashboard/seller/settings" element={<SellerSettings />} />
      </Route>

      {/* Admin Dashboard */}
      <Route
        element={
          <ProtectedRoute allowedRole="admin">
            <DashboardLayout role="admin" title="Admin Dashboard" />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/admin/users" element={<AdminUsers />} />
        <Route path="/dashboard/admin/sellers" element={<AdminSellers />} />
        <Route path="/dashboard/admin/orders" element={<AdminOrders />} />
        <Route path="/dashboard/admin/settings" element={<AdminSettings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;