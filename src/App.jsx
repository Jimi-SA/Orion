import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebNavbar from './components/WebNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import TermsAndConditions from './pages/Terms';
import PasswordReset from './pages/PasswordReset';
import { Sidebar, BottomNavBar } from './components/app/Navbar';
import { DarkModeToggle } from './components/app/DarkModeToggle';
import Dashboard from './pages/app/Dashboard';
import Profile from './pages/app/Profile';
import Tasks from './pages/app/Tasks';
import Wallets from './pages/app/Wallet';
import Notifications from './pages/app/Notifications';
import { motion } from 'framer-motion';

// Define the dashboard routes where the footer should be hidden
const dashboardRoutes = ['/dashboard', '/profile', '/tasks', '/wallets', '/notifications'];

const DashboardLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col lg:flex-row bg-white dark:bg-gray-900">
    {/* Sidebar for Desktop */}
    <div className="hidden lg:block lg:w-[20%]">
      <Sidebar />
    </div>

    {/* Main Content */}
    <motion.div
      className="flex-1 p-6 lg:p-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>

    {/* Bottom Navigation for Mobile */}
    <div className="lg:hidden">
      <BottomNavBar />
    </div>

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
            <Route path="/forgot-password" element={<PasswordReset />} />
            <Route path="/terms" element={<TermsAndConditions />} />
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
            <Route
              path="/notifications"
              element={
                <DashboardLayout>
                  <Notifications />
                </DashboardLayout>
              }
            />
          </Routes>
        </div>

        {/* Footer for non-dashboard routes */}
        {!dashboardRoutes.includes(window.location.pathname) && <Footer />}
      </div>
    </Router>
  );
}

export default App;
