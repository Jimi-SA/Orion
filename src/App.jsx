import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebNavbar from './components/WebNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import { Sidebar } from './components/app/Navbar';
import { BottomNavBar } from './components/app/Navbar';
import { DarkModeToggle } from './components/app/DarkModeToggle';


const Dashboard = lazy(() => import('./pages/app/Dashboard'));
const Profile = lazy(() => import('./pages/app/Profile'));
const Tasks = lazy(() => import('./pages/app/Tasks'));
const Wallets = lazy(() => import('./pages/app/Wallet'));
const Notifications = lazy(() => import('./pages/app/Notifications'));

// Layout component to handle sidebar or bottom nav
import { motion } from 'framer-motion';

const DashboardLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col lg:flex-row bg-white dark:bg-gray-900">
    {/* Sidebar for Desktop */}
    <Sidebar />

    {/* Bottom Navigation for Mobile */}
    <BottomNavBar />

    {/* Main Content */}
    <motion.div
      className="flex-1 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>

    {/* Dark Mode Toggle */}
    <DarkModeToggle />
  </div>
);


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Public Navbar for non-dashboard routes */}
        <WebNavbar />
        
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* Dashboard Routes (using DashboardLayout) */}
            <Route
              path="/dashboard"
              element={
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              }
            />
            <Route
              path="/profile"
              element={
                <DashboardLayout>
                  <Profile />
                </DashboardLayout>
              }
            />
            <Route
              path="/wallets"
              element={
                <DashboardLayout>
                  <Wallets />
                </DashboardLayout>
              }
            />
            <Route
              path="/tasks"
              element={
                <DashboardLayout>
                  <Tasks />
                </DashboardLayout>
              }
            />
          </Routes>
        </div>

        {/* Footer for non-dashboard routes */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
