# VitoCare - Functional Requirements

## Authentication

- Users can create an account.
- Users can log in securely.
- Users can reset their password.
- The system provides role-based access.

---

# Patient Module

The patient can:

- Create an account.
- Log in.
- View profile.
- View prescriptions.
- View medicine schedule.
- Receive medicine reminders (offline after synchronization).
- View appointment details.
- Mark medicines as taken.
- View health history.
- Request volunteer assistance.

---

# Doctor Module

The doctor can:

- Log in.
- View assigned patients.
- Add diagnosis.
- Upload prescriptions.
- Prescribe medicines.
- Schedule appointments.
- View patient history.

---

# Hospital Assistant Module

The hospital assistant can:

- Register patients.
- Create patient accounts.
- Update patient details.
- Upload prescriptions.
- Schedule appointments.

---

# Volunteer Module

The volunteer can:

- Log in.
- View assigned patients.
- Receive visit notifications.
- Update patient health status.
- Confirm home visits.
- Report emergencies.

---

# Administrator Module

The administrator can:

- Log in.
- Create Doctor IDs.
- Create Volunteer IDs.
- Create Hospital Assistant IDs.
- Manage hospitals.
- Manage users.
- View reports.
- View analytics.

---

# Hospital Module

The system stores hospital information including:

- Hospital Name
- Address
- Contact Number
- Departments
- Doctors
- Working Hours

Patients can choose a hospital during registration.

---

# Notification Module

The system should:

- Remind patients to take medicines.
- Remind patients about appointments.
- Notify volunteers if a patient misses an appointment.
- Synchronize notifications when internet becomes available.