import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navigation/Navbar'

import HeroSection from './features/landing/HeroSection'
import FeaturesSection from './features/landing/FeaturesSection'
import HowItWorksSection from './features/landing/HowItWorksSection'
import UserRolesSection from './features/landing/UserRolesSection'
import CTASection from './features/landing/CTASection'
import Footer from './features/landing/Footer'

import LoginPage from './features/auth/pages/LoginPage'
import RegisterPage from './features/auth/pages/RegisterPage'

import PatientDashboard from './features/patient/pages/PatientDashboard'
import AppointmentsPage from './features/patient/pages/AppointmentsPage'
import MedicinesPage from './features/patient/pages/MedicinesPage'
import SettingsPage from './features/patient/pages/SettingsPage'

import { AppointmentProvider } from './features/patient/store/AppointmentContext'

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <UserRolesSection />
        <CTASection />
      </main>

      <Footer />

    </div>
  )
}

function App() {
  return (
    <BrowserRouter>

      <AppointmentProvider>

        <Routes>

          {/* Public pages */}

          <Route
            path="/"
            element={<LandingPage />}
          />

          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />

          {/* Patient pages */}

          <Route
            path="/dashboard"
            element={<PatientDashboard />}
          />

          <Route
            path="/appointments"
            element={<AppointmentsPage />}
          />

          <Route
            path="/medicines"
            element={<MedicinesPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />

        </Routes>

      </AppointmentProvider>

    </BrowserRouter>
  )
}

export default App