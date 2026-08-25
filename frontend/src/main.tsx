import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App'

import { AppointmentProvider } from './features/patient/store/AppointmentContext'
import { MedicineProvider } from './features/patient/store/MedicineContext'
import { PrescriptionProvider } from './features/patient/store/PrescriptionContext'
import { ProfileProvider } from './features/patient/store/ProfileContext'
import { VolunteerProvider } from './features/patient/store/VolunteerContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProfileProvider>
      <AppointmentProvider>
        <MedicineProvider>
          <PrescriptionProvider>
            <VolunteerProvider>
              <App />
            </VolunteerProvider>
          </PrescriptionProvider>
        </MedicineProvider>
      </AppointmentProvider>
    </ProfileProvider>
  </StrictMode>,
)