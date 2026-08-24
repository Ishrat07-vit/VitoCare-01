import type { Notification } from '../types/notification'

interface NotificationItemProps {
  notification: Notification
  onRead: (id: number) => void
  onDelete: (id: number) => void
}

function NotificationItem({
  notification,
  onRead,
  onDelete,
}: NotificationItemProps) {
  const icons = {
    appointment: '📅',
    medicine: '💊',
    prescription: '📋',
    volunteer: '🤝',
    health: '🏥',
  }

  return (
    <div
      className={`rounded-2xl border p-5 transition ${
        notification.read
          ? 'border-slate-200 bg-white'
          : 'border-teal-100 bg-teal-50/40'
      }`}
    >
      <div className="flex gap-4">

        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
          {icons[notification.type]}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">

          <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">

            <div>

              <div className="flex items-center gap-2">

                <h3 className="font-semibold text-slate-900">
                  {notification.title}
                </h3>

                {!notification.read && (
                  <span className="h-2 w-2 rounded-full bg-teal-600" />
                )}

              </div>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {notification.message}
              </p>

            </div>

            <span className="shrink-0 text-xs text-slate-400">
              {notification.time}
            </span>

          </div>

          {/* Actions */}
          <div className="mt-4 flex flex-wrap gap-2">

            {!notification.read && (
              <button
                type="button"
                onClick={() => onRead(notification.id)}
                className="rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700 transition hover:bg-teal-100"
              >
                Mark as read
              </button>
            )}

            <button
              type="button"
              onClick={() => onDelete(notification.id)}
              className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-red-50 hover:text-red-600"
            >
              Delete
            </button>

          </div>

        </div>

      </div>
    </div>
  )
}

export default NotificationItem