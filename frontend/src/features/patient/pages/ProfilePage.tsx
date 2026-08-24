import { useState } from 'react'

import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import ProfileInfoCard from '../components/ProfileInfoCard'

import type { PatientProfile } from '../types/profile'

function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const [profile, setProfile] = useState<PatientProfile>({
    name: 'Ishrat',
    email: 'ishrat@example.com',
    phone: '+91 98765 43210',
    dateOfBirth: '15 May 2005',
    gender: 'Female',
    bloodGroup: 'O+',
    address: 'Mangalagiri, Andhra Pradesh',
    emergencyContact: '+91 98765 12345',
    allergies: 'None known',
    healthConditions: 'None',
    currentMedicines: 'None',
  })

  const [editedProfile, setEditedProfile] =
    useState<PatientProfile>(profile)

  const handleEdit = () => {
    setEditedProfile(profile)
    setIsEditing(true)
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
  }

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
  }

  const updateField = (
    field: keyof PatientProfile,
    value: string,
  ) => {
    setEditedProfile((current) => ({
      ...current,
      [field]: value,
    }))
  }

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <PatientSidebar />

      {/* Main area */}
      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-7xl">

            {/* Page heading */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <p className="text-sm font-medium text-teal-700">
                  Patient Account
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  My Profile
                </h1>

                <p className="mt-2 text-slate-600">
                  Manage your personal and healthcare information.
                </p>

              </div>

              {!isEditing && (
                <button
                  type="button"
                  onClick={handleEdit}
                  className="w-fit rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
                >
                  ✏️ Edit Profile
                </button>
              )}

            </div>

            {/* Profile overview */}
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

                {/* Avatar */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-teal-100 text-3xl font-bold text-teal-700">
                  {profile.name
                    .split(' ')
                    .map((name) => name[0])
                    .join('')
                    .slice(0, 2)}
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {profile.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Patient · VitoCare Member
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                      🩸 {profile.bloodGroup}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      👤 {profile.gender}
                    </span>

                  </div>

                </div>

              </div>

            </section>

            {isEditing ? (

              /* ================= EDIT MODE ================= */
              <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <div>

                  <h2 className="text-xl font-semibold text-slate-900">
                    Edit Personal Information
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Keep your healthcare information up to date.
                  </p>

                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      value={editedProfile.name}
                      onChange={(event) =>
                        updateField('name', event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={editedProfile.email}
                      onChange={(event) =>
                        updateField('email', event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      value={editedProfile.phone}
                      onChange={(event) =>
                        updateField('phone', event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  {/* Date of birth */}
                  <div>
                    <label
                      htmlFor="dateOfBirth"
                      className="text-sm font-medium text-slate-700"
                    >
                      Date of Birth
                    </label>

                    <input
                      id="dateOfBirth"
                      type="text"
                      value={editedProfile.dateOfBirth}
                      onChange={(event) =>
                        updateField(
                          'dateOfBirth',
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label
                      htmlFor="gender"
                      className="text-sm font-medium text-slate-700"
                    >
                      Gender
                    </label>

                    <select
                      id="gender"
                      value={editedProfile.gender}
                      onChange={(event) =>
                        updateField('gender', event.target.value)
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                      <option>Prefer not to say</option>
                    </select>
                  </div>

                  {/* Blood group */}
                  <div>
                    <label
                      htmlFor="bloodGroup"
                      className="text-sm font-medium text-slate-700"
                    >
                      Blood Group
                    </label>

                    <select
                      id="bloodGroup"
                      value={editedProfile.bloodGroup}
                      onChange={(event) =>
                        updateField(
                          'bloodGroup',
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    >
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>Unknown</option>
                    </select>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2">

                    <label
                      htmlFor="address"
                      className="text-sm font-medium text-slate-700"
                    >
                      Address
                    </label>

                    <textarea
                      id="address"
                      rows={3}
                      value={editedProfile.address}
                      onChange={(event) =>
                        updateField(
                          'address',
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />

                  </div>

                  {/* Emergency contact */}
                  <div>

                    <label
                      htmlFor="emergencyContact"
                      className="text-sm font-medium text-slate-700"
                    >
                      Emergency Contact
                    </label>

                    <input
                      id="emergencyContact"
                      type="tel"
                      value={editedProfile.emergencyContact}
                      onChange={(event) =>
                        updateField(
                          'emergencyContact',
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />

                  </div>

                  {/* Allergies */}
                  <div>

                    <label
                      htmlFor="allergies"
                      className="text-sm font-medium text-slate-700"
                    >
                      Allergies
                    </label>

                    <input
                      id="allergies"
                      type="text"
                      value={editedProfile.allergies}
                      onChange={(event) =>
                        updateField(
                          'allergies',
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />

                  </div>

                  {/* Health conditions */}
                  <div className="md:col-span-2">

                    <label
                      htmlFor="healthConditions"
                      className="text-sm font-medium text-slate-700"
                    >
                      Health Conditions
                    </label>

                    <textarea
                      id="healthConditions"
                      rows={3}
                      value={editedProfile.healthConditions}
                      onChange={(event) =>
                        updateField(
                          'healthConditions',
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />

                  </div>

                  {/* Medicines */}
                  <div className="md:col-span-2">

                    <label
                      htmlFor="currentMedicines"
                      className="text-sm font-medium text-slate-700"
                    >
                      Current Medicines
                    </label>

                    <textarea
                      id="currentMedicines"
                      rows={3}
                      value={editedProfile.currentMedicines}
                      onChange={(event) =>
                        updateField(
                          'currentMedicines',
                          event.target.value,
                        )
                      }
                      className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                    />

                  </div>

                </div>

                {/* Edit actions */}
                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

                  <button
                    type="button"
                    onClick={handleCancel}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSave}
                    className="rounded-xl bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
                  >
                    Save Changes
                  </button>

                </div>

              </section>

            ) : (

              /* ================= VIEW MODE ================= */
              <>
                {/* Personal information */}
                <section className="mt-8">

                  <div className="mb-5">

                    <h2 className="text-xl font-semibold text-slate-900">
                      Personal Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Your basic account information.
                    </p>

                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

                    <ProfileInfoCard
                      label="Full Name"
                      value={profile.name}
                      icon="👤"
                    />

                    <ProfileInfoCard
                      label="Email"
                      value={profile.email}
                      icon="✉️"
                    />

                    <ProfileInfoCard
                      label="Phone"
                      value={profile.phone}
                      icon="📞"
                    />

                    <ProfileInfoCard
                      label="Date of Birth"
                      value={profile.dateOfBirth}
                      icon="🎂"
                    />

                    <ProfileInfoCard
                      label="Gender"
                      value={profile.gender}
                      icon="⚧️"
                    />

                    <ProfileInfoCard
                      label="Blood Group"
                      value={profile.bloodGroup}
                      icon="🩸"
                    />

                    <ProfileInfoCard
                      label="Address"
                      value={profile.address}
                      icon="📍"
                    />

                    <ProfileInfoCard
                      label="Emergency Contact"
                      value={profile.emergencyContact}
                      icon="🚨"
                    />

                  </div>

                </section>

                {/* Healthcare information */}
                <section className="mt-10">

                  <div className="mb-5">

                    <h2 className="text-xl font-semibold text-slate-900">
                      Healthcare Information
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      Information that can help healthcare providers
                      understand your needs.
                    </p>

                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

                    <ProfileInfoCard
                      label="Allergies"
                      value={profile.allergies}
                      icon="⚠️"
                    />

                    <ProfileInfoCard
                      label="Health Conditions"
                      value={profile.healthConditions}
                      icon="❤️"
                    />

                    <ProfileInfoCard
                      label="Current Medicines"
                      value={profile.currentMedicines}
                      icon="💊"
                    />

                  </div>

                </section>

                {/* Privacy notice */}
                <section className="mt-10 rounded-2xl border border-teal-100 bg-teal-50 p-6">

                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                      🔒
                    </div>

                    <div>

                      <h2 className="font-semibold text-teal-900">
                        Your health information is private
                      </h2>

                      <p className="mt-1 text-sm leading-6 text-teal-800">
                        VitoCare is designed to keep your personal
                        and healthcare information protected. Your
                        information should only be shared with
                        authorized healthcare providers and services.
                      </p>

                    </div>

                  </div>

                </section>
              </>
            )}

          </div>

        </main>

      </div>

    </div>
  )
}

export default ProfilePage