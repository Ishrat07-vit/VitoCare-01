# VitoCare Navigation Architecture

## 1. Navigation Strategy

VitoCare uses role-based navigation.

The navigation displayed to a user depends on their role.

---

# 2. Patient Navigation

```text
Dashboard
Medicines
Appointments
Prescriptions
Health History
Volunteer Support
Profile
Settings
Logout
```

---

# 3. Doctor Navigation

```text
Dashboard
Patients
Appointments
Prescriptions
Profile
Settings
Logout
```

---

# 4. Hospital Assistant Navigation

```text
Dashboard
Patients
Appointments
Hospitals
Profile
Settings
Logout
```

---

# 5. Volunteer Navigation

```text
Dashboard
Assigned Patients
Visits
Emergency Reports
Profile
Settings
Logout
```

---

# 6. Admin Navigation

```text
Dashboard
Users
Patients
Doctors
Volunteers
Hospitals
Appointments
Reports
Analytics
Settings
Audit Logs
Logout
```

---

# 7. Mobile Navigation

Mobile devices will use simplified navigation.

Primary actions will be displayed through:

```text
Bottom Navigation
```

Secondary actions will be accessible through:

```text
Menu
```

---

# 8. Protected Routes

Authenticated routes:

```text
/dashboard
/profile
/appointments
/medicines
/prescriptions
```

Role-specific routes:

```text
/doctor/*
/hospital/*
/volunteer/*
/admin/*
```

Unauthorized users should receive an appropriate access-denied screen.

---

# 9. Navigation Rules

The application must:

- Hide unauthorized navigation options
- Protect routes on the frontend
- Verify permissions on the backend
- Redirect unauthenticated users to login
- Preserve intended navigation where appropriate

Frontend route protection must never replace backend authorization.