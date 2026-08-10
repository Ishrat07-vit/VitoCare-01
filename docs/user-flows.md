# VitoCare User Flows

## 1. Patient Registration

```text
Landing Page
     ↓
Register
     ↓
Select Patient
     ↓
Enter Personal Information
     ↓
Enter Health Information
     ↓
Validate Information
     ↓
Create Account
     ↓
Login
     ↓
Patient Dashboard
```

---

# 2. Patient Login

```text
Login
 ↓
Enter Mobile / Email
 ↓
Enter Password
 ↓
Authentication
 ↓
Role Verification
 ↓
Patient Dashboard
```

---

# 3. Patient Medicine Flow

```text
Patient Dashboard
 ↓
Medicines
 ↓
Today's Medicines
 ↓
Select Medicine
 ↓
View Instructions
 ↓
Mark as Taken
 ↓
Save
 ↓
Success
```

Offline:

```text
Mark as Taken
 ↓
No Internet
 ↓
Save Locally
 ↓
Pending Sync
 ↓
Internet Restored
 ↓
Synchronize
 ↓
Server Confirmation
```

---

# 4. Appointment Flow

```text
Patient Dashboard
 ↓
Appointments
 ↓
Book Appointment
 ↓
Select Hospital
 ↓
Select Doctor
 ↓
Select Date
 ↓
Select Available Slot
 ↓
Confirm
 ↓
Backend Validation
 ↓
Appointment Confirmed
```

---

# 5. Doctor Flow

```text
Doctor Login
 ↓
Doctor Dashboard
 ↓
Patients
 ↓
Select Patient
 ↓
View Authorized Health Information
 ↓
Add Diagnosis
 ↓
Create Prescription
 ↓
Save
 ↓
Patient Record Updated
```

---

# 6. Hospital Assistant Flow

```text
Hospital Assistant Login
 ↓
Dashboard
 ↓
Register Patient
 ↓
Enter Patient Information
 ↓
Assign Hospital
 ↓
Assign Doctor
 ↓
Create Patient Account
 ↓
Confirmation
```

---

# 7. Volunteer Flow

```text
Volunteer Login
 ↓
Dashboard
 ↓
Assigned Patients
 ↓
Select Patient
 ↓
View Required Information
 ↓
Schedule / Confirm Visit
 ↓
Complete Visit
 ↓
Update Visit Status
 ↓
Submit Report
```

---

# 8. Admin Flow

```text
Admin Login
 ↓
Admin Dashboard
 ↓
Manage Users / Hospitals
 ↓
Select Operation
 ↓
Confirm Authorization
 ↓
Perform Action
 ↓
Audit Log
 ↓
Success
```

---

# 9. Emergency Flow

```text
Patient
 ↓
Emergency Support
 ↓
Emergency Confirmation
 ↓
Create Emergency Request
 ↓
Backend
 ↓
Authorized Notification
 ↓
Confirmation
```

If offline:

```text
Emergency Request
 ↓
No Internet
 ↓
Store Pending Request
 ↓
Clearly Inform User
 ↓
Attempt Sync
 ↓
Backend Confirmation
```

---

# 10. Logout Flow

```text
User
 ↓
Logout
 ↓
Invalidate Session
 ↓
Clear Appropriate Local Session Data
 ↓
Login Screen
```