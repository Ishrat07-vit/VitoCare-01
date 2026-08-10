# VitoCare Functional Requirements

## 1. Introduction

This document defines the functional requirements of the VitoCare healthcare platform.

Functional requirements describe the specific operations and behaviors that the system must provide to its users.

The requirements are organized according to the major user roles and modules of VitoCare.

---

# 2. Authentication and Authorization

## FR-AUTH-01 — User Registration

The system shall allow eligible users to create an account by providing the required registration information.

The system shall validate the provided information before creating the account.

---

## FR-AUTH-02 — User Login

The system shall allow registered users to log in using their authorized credentials.

---

## FR-AUTH-03 — Role-Based Access

The system shall identify the role of the authenticated user.

The system shall provide access only to the features permitted for that role.

Supported roles:

- Patient
- Doctor
- Hospital Assistant
- Volunteer
- Administrator

---

## FR-AUTH-04 — Secure Authentication

The system shall securely authenticate users and protect their account credentials.

---

## FR-AUTH-05 — Logout

The system shall allow authenticated users to securely log out of the platform.

---

# 3. Patient Module

## FR-PAT-01 — Patient Profile

The system shall allow patients to view their personal and healthcare profile.

The profile may contain:

- Full Name
- Age
- Gender
- Mobile Number
- Address
- Blood Group
- Emergency Contact
- Health Issues
- Assigned Hospital
- Assigned Doctor

---

## FR-PAT-02 — Update Profile

The system shall allow patients to update permitted personal information.

---

## FR-PAT-03 — View Prescriptions

The system shall allow patients to view prescriptions assigned to them by authorized healthcare personnel.

---

## FR-PAT-04 — View Medicines

The system shall display medicines associated with a patient's prescriptions.

Medicine information may include:

- Medicine Name
- Dosage
- Frequency
- Duration
- Instructions

---

## FR-PAT-05 — Medicine Reminders

The system shall generate medicine reminders according to the patient's prescribed medicine schedule.

---

## FR-PAT-06 — Mark Medicine as Taken

The system shall allow patients to mark a scheduled medicine as taken.

The system shall record the medicine-taking activity.

---

## FR-PAT-07 — Medicine History

The system shall maintain a history of medicine-taking activities.

---

## FR-PAT-08 — View Appointments

The system shall allow patients to view their upcoming and previous appointments.

---

## FR-PAT-09 — Appointment Information

The system shall display relevant appointment information including:

- Doctor
- Hospital
- Date
- Time
- Appointment Status

---

## FR-PAT-10 — Health History

The system shall allow patients to view their available healthcare history.

---

## FR-PAT-11 — Volunteer Assistance Request

The system shall allow eligible patients to request assistance from a volunteer.

The request shall contain relevant information required to process the assistance request.

---

# 4. Doctor Module

## FR-DOC-01 — Doctor Dashboard

The system shall provide doctors with a dashboard containing information relevant to their assigned activities.

---

## FR-DOC-02 — View Assigned Patients

The system shall allow doctors to view patients assigned to them.

---

## FR-DOC-03 — View Patient History

The system shall allow authorized doctors to view relevant healthcare information of their assigned patients.

---

## FR-DOC-04 — Add Diagnosis

The system shall allow doctors to add diagnosis information to an authorized patient's healthcare record.

---

## FR-DOC-05 — Create Prescription

The system shall allow doctors to create prescriptions for patients.

A prescription may contain:

- Medicine Name
- Dosage
- Frequency
- Duration
- Instructions

---

## FR-DOC-06 — Update Prescription

The system shall allow authorized doctors to update prescription information when required.

---

## FR-DOC-07 — Schedule Appointment

The system shall allow doctors to schedule appointments for patients.

---

## FR-DOC-08 — View Appointments

The system shall allow doctors to view their scheduled appointments.

---

# 5. Hospital Assistant Module

## FR-HOS-01 — Patient Registration

The system shall allow authorized hospital assistants to register patients.

---

## FR-HOS-02 — Create Patient Account

The system shall allow authorized hospital assistants to create patient accounts when required.

---

## FR-HOS-03 — Update Patient Information

The system shall allow authorized hospital assistants to update permitted patient information.

---

## FR-HOS-04 — Upload Prescription

The system shall allow authorized hospital assistants to upload prescription information or documents.

---

## FR-HOS-05 — Appointment Management

The system shall allow hospital assistants to schedule and manage patient appointments.

---

# 6. Volunteer Module

## FR-VOL-01 — Volunteer Dashboard

The system shall provide volunteers with a dashboard containing their assigned activities.

---

## FR-VOL-02 — View Assigned Patients

The system shall allow volunteers to view patients assigned to them.

---

## FR-VOL-03 — Receive Visit Requests

The system shall notify volunteers when a patient assistance request is assigned to them.

---

## FR-VOL-04 — Confirm Home Visit

The system shall allow volunteers to confirm completion of an assigned home visit.

---

## FR-VOL-05 — Update Patient Condition

The system shall allow authorized volunteers to submit observations about a patient's condition after a visit.

---

## FR-VOL-06 — Report Emergency

The system shall allow volunteers to report an emergency involving an assigned patient.

Emergency reports shall be made available to appropriate authorized users.

---

# 7. Administrator Module

## FR-ADM-01 — Administrator Dashboard

The system shall provide administrators with a dashboard for managing the platform.

---

## FR-ADM-02 — User Management

The system shall allow administrators to view and manage registered users.

---

## FR-ADM-03 — Create Doctor IDs

The system shall allow administrators to create authorized doctor accounts or IDs.

---

## FR-ADM-04 — Create Volunteer IDs

The system shall allow administrators to create authorized volunteer accounts or IDs.

---

## FR-ADM-05 — Create Hospital Assistant IDs

The system shall allow administrators to create authorized hospital assistant accounts or IDs.

---

## FR-ADM-06 — Hospital Management

The system shall allow administrators to add, update, and manage registered hospitals.

Hospital information may include:

- Hospital Name
- Address
- Contact Number
- Departments
- Working Hours
- Available Doctors

---

## FR-ADM-07 — Reports

The system shall allow administrators to view relevant platform reports.

---

## FR-ADM-08 — Analytics

The system shall provide administrators with relevant platform analytics.

---

# 8. Appointment Management

## FR-APP-01 — Create Appointment

The system shall allow authorized users to create an appointment between a patient and healthcare provider.

---

## FR-APP-02 — View Appointment

The system shall allow authorized users to view appointment details.

---

## FR-APP-03 — Update Appointment

The system shall allow authorized users to update an appointment when permitted.

---

## FR-APP-04 — Appointment Status

The system shall maintain appointment statuses such as:

- Scheduled
- Completed
- Cancelled
- Rescheduled

---

# 9. Medicine Management

## FR-MED-01 — Medicine Schedule

The system shall store the schedule associated with prescribed medicines.

---

## FR-MED-02 — Reminder Generation

The system shall generate reminders based on stored medicine schedules.

---

## FR-MED-03 — Medicine Activity

The system shall record whether a scheduled medicine was taken.

---

## FR-MED-04 — Medication History

The system shall allow authorized users to view relevant medication history.

---

# 10. Hospital Management

## FR-HOSP-01 — Hospital Listing

The system shall provide a list of registered hospitals.

---

## FR-HOSP-02 — Hospital Details

The system shall allow authorized users to view available hospital information.

---

## FR-HOSP-03 — Hospital Doctors

The system shall associate doctors with their respective hospitals.

---

# 11. Offline Support

## FR-OFF-01 — Offline Access

The system shall provide access to selected essential features when internet connectivity is unavailable.

---

## FR-OFF-02 — Local Data

The system shall temporarily store permitted essential data on the user's device for offline access.

---

## FR-OFF-03 — Data Synchronization

The system shall synchronize locally stored changes with the server when internet connectivity is restored.

---

# 12. Notifications

## FR-NOT-01 — Medicine Notifications

The system shall provide medicine reminders according to the patient's medicine schedule.

---

## FR-NOT-02 — Appointment Notifications

The system shall notify relevant users about upcoming appointments.

---

## FR-NOT-03 — Volunteer Notifications

The system shall notify volunteers when assistance requests are assigned to them.

---

## FR-NOT-04 — Emergency Notifications

The system shall notify appropriate authorized users when an emergency is reported.

---

# 13. Healthcare Records

## FR-HCR-01 — Patient Records

The system shall maintain healthcare records associated with patients.

---

## FR-HCR-02 — Authorized Access

The system shall allow healthcare information to be accessed only by authorized users.

---

## FR-HCR-03 — Record Updates

The system shall maintain updated healthcare information when authorized users modify patient records.

---

# 14. Future Functional Requirements

The following requirements are planned for future versions of VitoCare:

- AI Health Assistant
- OCR Prescription Scanner
- Voice Assistant
- Multiple Language Support
- Medicine Delivery Integration
- Nearby Hospital Locator
- Health Analytics
- Emergency SOS