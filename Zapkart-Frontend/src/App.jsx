import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomerDashboard from './Components/CustomerDashboard';
import AdminDashboard from './Components/Admin/AdminDashboard';
import SellerDashboard from './Components/Seller/SellerDashboard';
import Razorpay from './Components/RazorpayPage.jsx';
import './App.css';

import Home from './Components/Home';
import ProductGallery from './Components/ProductGallery';
import ProductsHome from './Components/ProductsHome';
import ComputersPage from './Components/ProductPages/ComputersPage';
import FridgesPage from './Components/ProductPages/FridgesPage';
import MobilesPage from './Components/ProductPages/MobilesPage';
import WatchesPage from './Components/ProductPages/WatchesPage';
import MenwearPage from './Components/ProductPages/Menwear';
import WomanwearPage from './Components/ProductPages/Womanwear';
import SpeakersPage from './Components/ProductPages/Speakerspage';
import TvPage from './Components/ProductPages/TvPage';
import FurniturePage from './Components/ProductPages/FurniturePage';
import AcPage from './Components/ProductPages/AcPage';
import KitchenPage from './Components/ProductPages/KitchenPage';
import Cart from './Components/Cart';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './Components/MyOrders';
import ManageProfile from './Components/ManageProfile';
import Forgotpassword from './Components/Forgotpassword';
import Resetpassword from './Components/Resetpassword';
import SellerOrders from './Components/Seller/SellerOrders.jsx';

export default function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customer" element={<CustomerDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/seller" element={<SellerDashboard />} />
        <Route path="/sellerorders" element={<SellerOrders />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/manage-profile" element={<ManageProfile />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/checkout" element={<Razorpay />} />

        <Route path="/productgallery" element={<ProductGallery />} />
        <Route path="/productshome" element={<ProductsHome />} />
        <Route path="/productshome/computers" element={<ComputersPage />} />
        <Route path="/productshome/fridges" element={<FridgesPage />} />
        <Route path="/productshome/mobiles" element={<MobilesPage />} />
        <Route path="/productshome/watches" element={<WatchesPage />} />
        <Route path="/productshome/menwear" element={<MenwearPage />} />
        <Route path="/productshome/womanwear" element={<WomanwearPage />} />
        <Route path="/productshome/speaker" element={<SpeakersPage />} />
        <Route path="/productshome/tv" element={<TvPage />} />
        <Route path="/productshome/furniture" element={<FurniturePage />} />
        <Route path="/productshome/kitchen" element={<KitchenPage />} />
        <Route path="/productshome/ac" element={<AcPage />} />
      </Routes>
    </>
  );
}
