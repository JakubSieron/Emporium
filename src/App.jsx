import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Miniatures from './pages/Miniatures';
import Books from './pages/Books';
import Paints from './pages/Paints';
import Cart from './pages/Cart';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './pages/ProductDetail';
import DashboardRedirect from './pages/DashboardRedirect';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import ProtectedUserRoute from './components/ProtectedUserRoute';
import ProductForm from './pages/ProductForm';


import './App.css';

function AppRoutes() {
  const location = useLocation();
  const state = location.state;
  const backgroundLocation = state && state.background;

  return (
    <>
      <Navbar />
      <Header />
      <main className={backgroundLocation ? 'main-content blur-sm' : 'main-content'}>
        <Routes location={backgroundLocation || location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/miniatures" element={<Miniatures />} />
          <Route path="/books" element={<Books />} />
          <Route path="/paints" element={<Paints />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardRedirect />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/new" element={<ProductForm />} />
          <Route path="/admin/edit/:id" element={<ProductForm />} />
          <Route path="/admin" element={<ProtectedAdminRoute><AdminDashboard /></ProtectedAdminRoute>} />
          <Route path="/user" element={<ProtectedUserRoute><UserDashboard /></ProtectedUserRoute>} />
        </Routes>

        {/* Modal route: only active if navigated from background state */}
        {backgroundLocation && (
          <Routes>
            <Route path="/product/:id" element={<ProductDetail isModal={true} />} />
          </Routes>
        )}
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
