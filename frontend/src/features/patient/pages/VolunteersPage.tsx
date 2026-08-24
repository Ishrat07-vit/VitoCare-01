import { useState } from 'react'

import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import VolunteerCard from '../components/VolunteerCard'

import type {
  AssistanceRequest,
  Volunteer,
} from '../types/volunteer'

const volunteers: Volunteer[] = [
  {
    id: 1,
    name: 'Aarav Kumar',
    area: 'Mangalagiri',
    distance: '1.2 km',
    availability: 'Available',
    rating: 4.9,
    completedRequests: 42,
    skills: [
      'Hospital Visits',
      'Medicine Pickup',
      'Transport Support',
    ],
  },
  {
    id: 2,
    name: 'Fatima Rahman',
    area: 'Guntur',
    distance: '3.5 km',
    availability: 'Available',
    rating: 4.8,
    completedRequests: 35,
    skills: [
      'Medicine Pickup',
      'Translation',
      'Appointment Support',
    ],
  },
  {
    id: 3,
    name: 'Rahul Verma',
    area: 'Vijayawada',
    distance: '5.1 km',
    availability: 'Busy',
    rating: 4.7,
    completedRequests: 28,
    skills: [
      'Transport Support',
      'Hospital Visits',
    ],
  },
  {
    id: 4,
    name: 'Sara Ahmed',
    area: 'Tenali',
    distance: '7.4 km',
    availability: 'Available',
    rating: 4.9,
    completedRequests: 51,
    skills: [
      'Elder Care',
      'Medicine Pickup',
      'Appointment Support',
    ],
  },
]

function VolunteersPage() {
  const [request, setRequest] =
    useState<AssistanceRequest | null>(null)

  const [selectedVolunteer, setSelectedVolunteer] =
    useState<Volunteer | null>(null)

  const [requestType, setRequestType] =
    useState('Hospital Visit')

  const handleRequest = (volunteer: Volunteer) => {
    setSelectedVolunteer(volunteer)
    setRequestType('Hospital Visit')
  }

  const submitRequest = () => {
    if (!selectedVolunteer) {
      return
    }

    const newRequest: AssistanceRequest = {
      volunteerId: selectedVolunteer.id,
      volunteerName: selectedVolunteer.name,
      requestType,
      requestedAt: 'August 24, 2026 · 4:45 PM',
      status: 'Pending',
    }

    setRequest(newRequest)
    setSelectedVolunteer(null)
  }

  const cancelRequest = () => {
    setRequest(null)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <PatientSidebar />

      {/* Main content */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <div>

              <p className="text-sm font-medium text-teal-700">
                Community Healthcare
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Volunteer Assistance
              </h1>

              <p className="mt-2 max-w-2xl text-slate-600">
                Connect with trusted community volunteers who can
                help you with hospital visits, medicine pickup,
                appointments, and other healthcare needs.
              </p>

            </div>

            {/* Active request */}
            {request && (
              <section className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                      🤝
                    </div>

                    <div>

                      <p className="text-sm font-medium text-teal-700">
                        Assistance Request
                      </p>

                      <h2 className="mt-1 text-lg font-semibold text-teal-900">
                        Request sent to {request.volunteerName}
                      </h2>

                      <p className="mt-1 text-sm text-teal-800">
                        {request.requestType} · {request.requestedAt}
                      </p>

                    </div>

                  </div>

                  <span className="w-fit rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                    {request.status}
                  </span>

                </div>

                <div className="mt-5 flex flex-wrap gap-3">

                  <button
                    type="button"
                    className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    View Request
                  </button>

                  <button
                    type="button"
                    onClick={cancelRequest}
                    className="rounded-xl border border-teal-200 bg-white px-5 py-2.5 text-sm font-semibold text-teal-700 transition hover:bg-teal-100"
                  >
                    Cancel Request
                  </button>

                </div>

              </section>
            )}

            {/* How it works */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-xl">
                  💚
                </div>

                <div>

                  <h2 className="font-semibold text-slate-900">
                    How volunteer assistance works
                  </h2>

                  <div className="mt-4 grid gap-5 md:grid-cols-3">

                    <div>
                      <p className="text-sm font-semibold text-teal-700">
                        01 · Choose
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Find an available volunteer near your area.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-teal-700">
                        02 · Request
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Tell the volunteer what kind of assistance
                        you need.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-teal-700">
                        03 · Connect
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Once accepted, you can coordinate with the
                        volunteer.
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </section>

            {/* Nearby volunteers */}
            <section className="mt-10">

              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

                <div>

                  <h2 className="text-xl font-semibold text-slate-900">
                    Nearby Volunteers
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Trusted community members available to help.
                  </p>

                </div>

                <span className="text-sm font-medium text-teal-700">
                  {volunteers.filter(
                    (volunteer) =>
                      volunteer.availability === 'Available',
                  ).length}{' '}
                  available now
                </span>

              </div>

              <div className="grid gap-5 xl:grid-cols-2">

                {volunteers.map((volunteer) => (
                  <VolunteerCard
                    key={volunteer.id}
                    volunteer={volunteer}
                    onRequest={handleRequest}
                  />
                ))}

              </div>

            </section>

            {/* Safety notice */}
            <section className="mt-10 rounded-2xl border border-amber-100 bg-amber-50 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  ⚠️
                </div>

                <div>

                  <h2 className="font-semibold text-amber-900">
                    Important safety information
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-amber-800">
                    Volunteers provide community assistance and are
                    not a replacement for professional medical care.
                    For medical emergencies, contact your local
                    emergency service immediately.
                  </p>

                </div>

              </div>

            </section>

          </div>

        </main>

      </div>

      {/* Request modal */}
      {selectedVolunteer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">

          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-sm font-medium text-teal-700">
                  Request Assistance
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {selectedVolunteer.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  📍 {selectedVolunteer.area} ·{' '}
                  {selectedVolunteer.distance}
                </p>

              </div>

              <button
                type="button"
                onClick={() => setSelectedVolunteer(null)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100"
              >
                ✕
              </button>

            </div>

            {/* Request type */}
            <div className="mt-6">

              <label
                htmlFor="requestType"
                className="text-sm font-medium text-slate-700"
              >
                What do you need help with?
              </label>

              <select
                id="requestType"
                value={requestType}
                onChange={(event) =>
                  setRequestType(event.target.value)
                }
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
              >
                <option value="Hospital Visit">
                  Hospital Visit
                </option>

                <option value="Medicine Pickup">
                  Medicine Pickup
                </option>

                <option value="Appointment Support">
                  Appointment Support
                </option>

                <option value="Transport Support">
                  Transport Support
                </option>

                <option value="General Assistance">
                  General Assistance
                </option>
              </select>

            </div>

            {/* Volunteer info */}
            <div className="mt-5 rounded-xl bg-slate-50 p-4">

              <p className="text-xs text-slate-500">
                Volunteer rating
              </p>

              <p className="mt-1 text-sm font-semibold text-slate-900">
                ⭐ {selectedVolunteer.rating.toFixed(1)} ·{' '}
                {selectedVolunteer.completedRequests} completed
                requests
              </p>

            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={() => setSelectedVolunteer(null)}
                className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={submitRequest}
                className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
              >
                Send Request
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default VolunteersPage