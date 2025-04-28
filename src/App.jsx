import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import ProtectedAdminRoute from './components/ProtectedAdminRoute'; // ✅ import it
import ProtectedUserRoute from './components/ProtectedUserRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import './App.css'


function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/miniatures" element={<Miniatures />} />
        <Route path="/books" element={<Books />} />
        <Route path="/paints" element={<Paints />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardRedirect />} />
        <Route path="/admin" element={
          <ProtectedAdminRoute>
            <AdminDashboard />
        </ProtectedAdminRoute>
        } />
        <Route path="/user" element={
          <ProtectedUserRoute>
            <UserDashboard />
        </ProtectedUserRoute>
        } />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
