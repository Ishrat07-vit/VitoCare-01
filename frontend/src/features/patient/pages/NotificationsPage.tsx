import { useState } from 'react'

import PatientSidebar from '../components/PatientSidebar'
import PatientHeader from '../components/PatientHeader'
import NotificationItem from '../components/NotificationItem'

import type { Notification } from '../types/notification'

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: 'appointment',
    title: 'Appointment tomorrow',
    message:
      'You have an appointment scheduled for tomorrow at 10:30 AM.',
    time: '10 min ago',
    read: false,
  },
  {
    id: 2,
    type: 'medicine',
    title: 'Medicine reminder',
    message:
      'Your next medicine dose is scheduled for 7:00 PM today.',
    time: '1 hour ago',
    read: false,
  },
  {
    id: 3,
    type: 'prescription',
    title: 'Prescription updated',
    message:
      'Your prescription information has been updated successfully.',
    time: '3 hours ago',
    read: false,
  },
  {
    id: 4,
    type: 'volunteer',
    title: 'Volunteer request received',
    message:
      'Your volunteer assistance request is currently pending.',
    time: 'Yesterday',
    read: true,
  },
  {
    id: 5,
    type: 'health',
    title: 'Health check reminder',
    message:
      'Remember to keep your health information and medicines updated.',
    time: 'Yesterday',
    read: true,
  },
]

function NotificationsPage() {
  const [notifications, setNotifications] = useState(
    initialNotifications,
  )

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification,
      ),
    )
  }

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      })),
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications((current) =>
      current.filter(
        (notification) => notification.id !== id,
      ),
    )
  }

  const clearAll = () => {
    setNotifications([])
  }

  return (
    <div className="flex min-h-screen bg-slate-50">

      {/* Sidebar */}
      <PatientSidebar />

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">

        <PatientHeader />

        <main className="flex-1 p-6 lg:p-8">

          <div className="mx-auto max-w-5xl">

            {/* Heading */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <p className="text-sm font-medium text-teal-700">
                  Stay Updated
                </p>

                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                  Notifications
                </h1>

                <p className="mt-2 text-slate-600">
                  Important updates about your healthcare activity.
                </p>

              </div>

              {notifications.length > 0 && (
                <div className="flex flex-wrap gap-2">

                  {unreadCount > 0 && (
                    <button
                      type="button"
                      onClick={markAllAsRead}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      Mark all as read
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={clearAll}
                    className="rounded-xl border border-red-100 bg-white px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                  >
                    Clear all
                  </button>

                </div>
              )}

            </div>

            {/* Summary */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Total notifications
                </p>

                <p className="mt-2 text-2xl font-bold text-slate-900">
                  {notifications.length}
                </p>

              </div>

              <div className="rounded-2xl border border-teal-100 bg-teal-50 p-5">

                <p className="text-sm text-teal-700">
                  Unread
                </p>

                <p className="mt-2 text-2xl font-bold text-teal-800">
                  {unreadCount}
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                <p className="text-sm text-slate-500">
                  Status
                </p>

                <p className="mt-2 text-sm font-semibold text-teal-700">
                  {unreadCount === 0
                    ? 'All caught up'
                    : 'Needs attention'}
                </p>

              </div>

            </div>

            {/* Notification list */}
            <section className="mt-8">

              {notifications.length > 0 ? (

                <div className="space-y-4">

                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      notification={notification}
                      onRead={markAsRead}
                      onDelete={deleteNotification}
                    />
                  ))}

                </div>

              ) : (

                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 text-3xl">
                    🔔
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-slate-900">
                    You're all caught up!
                  </h2>

                  <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                    You don't have any notifications right now.
                    We'll let you know when there's an important
                    update about your healthcare.
                  </p>

                </div>

              )}

            </section>

            {/* Information */}
            <section className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-6">

              <div className="flex items-start gap-4">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                  💚
                </div>

                <div>

                  <h2 className="font-semibold text-teal-900">
                    Stay informed about your care
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-teal-800">
                    VitoCare notifications can help you keep track
                    of appointments, medicines, prescriptions,
                    volunteer assistance, and important healthcare
                    updates.
                  </p>

                </div>

              </div>

            </section>

          </div>

        </main>

      </div>

    </div>
  )
}

export default NotificationsPage