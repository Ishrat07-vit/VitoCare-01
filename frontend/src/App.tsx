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
import PrescriptionsPage from './features/patient/pages/PrescriptionsPage'
import VolunteersPage from './features/patient/pages/VolunteersPage'
import SettingsPage from './features/patient/pages/SettingsPage'

import { MedicineProvider } from './features/patient/store/MedicineContext'
import { PrescriptionProvider } from './features/patient/store/PrescriptionContext'
import { VolunteerProvider } from './features/patient/store/VolunteerContext'

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
    <MedicineProvider>

      <PrescriptionProvider>

        <VolunteerProvider>

          <BrowserRouter>

            <Routes>

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
                path="/prescriptions"
                element={<PrescriptionsPage />}
              />

              <Route
                path="/volunteers"
                element={<VolunteersPage />}
              />

              <Route
                path="/settings"
                element={<SettingsPage />}
              />

            </Routes>

          </BrowserRouter>

        </VolunteerProvider>

      </PrescriptionProvider>

    </MedicineProvider>
  )
}

export default App