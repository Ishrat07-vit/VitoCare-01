# VitoCare Database Design

## 1. Purpose

This document defines the database structure for the VitoCare healthcare platform.

VitoCare will use MongoDB as its primary database.

The database design is intended to support:

- Patients
- Doctors
- Hospital assistants
- Volunteers
- Administrators
- Hospitals
- Appointments
- Prescriptions
- Medicines
- Health records
- Notifications
- Emergency reports
- Offline synchronization

The design prioritizes data integrity, security, scalability, and maintainability.

---

# 2. Database Technology

Primary database:

```text
MongoDB
```

MongoDB is selected because VitoCare contains different types of healthcare and operational data that may evolve as the application grows.

The application will use a MongoDB ODM such as Mongoose for schema definition and validation.

---

# 3. Database Architecture

The backend will communicate with MongoDB through the application data layer.

```text
React Frontend
       ↓
Backend API
       ↓
Business Services
       ↓
Mongoose Models
       ↓
MongoDB
```

The frontend will never communicate directly with MongoDB.

---

# 4. Collections

The initial database will contain the following major collections:

```text
users
patients
doctors
hospitalAssistants
volunteers
hospitals
appointments
prescriptions
medicines
healthRecords
notifications
emergencies
syncRecords
```

Some collections may be combined or separated during implementation if requirements change.

---

# 5. Users Collection

The `users` collection stores common authentication and account information.

## Purpose

All authenticated users will have a user account.

## Fields

```text
_id
fullName
mobileNumber
email
passwordHash
role
accountStatus
createdAt
updatedAt
lastLoginAt
```

## Role Values

```text
patient
doctor
hospital_assistant
volunteer
admin
```

## Account Status

```text
active
inactive
suspended
pending
```

Passwords must never be stored as plain text.

Only securely hashed passwords will be stored.

---

# 6. Patient Collection

The `patients` collection stores patient-specific information.

## Fields

```text
_id
userId
fullName
age
gender
mobileNumber
address
bloodGroup
emergencyContact
healthIssues
assignedHospitalId
assignedDoctorId
createdAt
updatedAt
```

## Relationships

```text
Patient
   │
   ├── User
   ├── Hospital
   └── Doctor
```

The `userId` references the associated user account.

---

# 7. Doctor Collection

The `doctors` collection stores doctor-specific information.

## Fields

```text
_id
userId
fullName
specialization
licenseNumber
hospitalId
phoneNumber
availability
createdAt
updatedAt
```

## Relationships

```text
Doctor
   │
   ├── User
   └── Hospital
```

Doctor accounts will be created or approved through authorized administrative processes.

---

# 8. Hospital Assistant Collection

The `hospitalAssistants` collection stores hospital assistant information.

## Fields

```text
_id
userId
hospitalId
employeeId
department
phoneNumber
createdAt
updatedAt
```

## Relationships

```text
Hospital Assistant
        │
        ├── User
        └── Hospital
```

---

# 9. Volunteer Collection

The `volunteers` collection stores volunteer information.

## Fields

```text
_id
userId
phoneNumber
address
availability
verificationStatus
assignedPatients
createdAt
updatedAt
```

## Verification Status

```text
pending
verified
suspended
rejected
```

Volunteers should be verified before receiving sensitive patient assignments.

---

# 10. Hospital Collection

The `hospitals` collection stores registered hospital information.

## Fields

```text
_id
name
address
district
state
contactNumber
email
departments
workingHours
location
status
createdAt
updatedAt
```

## Location

Location may contain:

```text
latitude
longitude
```

This can later support nearby hospital discovery.

---

# 11. Appointment Collection

The `appointments` collection stores patient appointments.

## Fields

```text
_id
patientId
doctorId
hospitalId
appointmentDate
appointmentTime
status
reason
notes
createdAt
updatedAt
```

## Appointment Status

```text
requested
scheduled
confirmed
completed
cancelled
missed
```

## Relationships

```text
Patient
   │
   └── Appointment
          │
          ├── Doctor
          └── Hospital
```

---

# 12. Prescription Collection

The `prescriptions` collection stores prescriptions created by doctors.

## Fields

```text
_id
patientId
doctorId
hospitalId
diagnosis
medicines
instructions
prescriptionDate
createdAt
updatedAt
```

## Medicine Information

Each prescription may contain:

```text
medicineId
medicineName
dosage
frequency
duration
instructions
```

Example:

```json
{
  "medicineName": "Example Medicine",
  "dosage": "500mg",
  "frequency": "Twice daily",
  "duration": "7 days",
  "instructions": "Take after meals"
}
```

---

# 13. Medicine Collection

The medicine system manages the patient's actual medicine schedule and adherence.

## Fields

```text
_id
patientId
prescriptionId
medicineName
dosage
frequency
startDate
endDate
reminderTimes
status
adherence
createdAt
updatedAt
```

## Status

```text
active
completed
paused
cancelled
```

## Adherence

Medicine adherence records may contain:

```text
date
scheduledTime
status
takenAt
```

Possible status values:

```text
taken
missed
skipped
pending
```

---

# 14. Health Records Collection

The `healthRecords` collection stores relevant patient health history.

## Fields

```text
_id
patientId
doctorId
hospitalId
recordType
title
description
diagnosis
attachments
recordDate
createdAt
updatedAt
```

## Record Types

Examples:

```text
diagnosis
consultation
lab_report
prescription
vaccination
other
```

Access to health records must be strictly controlled.

---

# 15. Notification Collection

The `notifications` collection stores application notifications.

## Fields

```text
_id
recipientId
type
title
message
relatedEntityId
relatedEntityType
isRead
priority
createdAt
readAt
```

## Notification Types

Examples:

```text
medicine_reminder
appointment_reminder
appointment_update
volunteer_assignment
emergency
system
```

---

# 16. Emergency Collection

The `emergencies` collection stores emergency reports.

## Fields

```text
_id
patientId
reportedBy
description
location
priority
status
assignedTo
createdAt
updatedAt
resolvedAt
```

## Priority

```text
low
medium
high
critical
```

## Status

```text
reported
acknowledged
in_progress
resolved
cancelled
```

Emergency records require strict authorization and audit logging.

---

# 17. Synchronization Collection

The `syncRecords` collection will support the offline-first architecture.

## Fields

```text
_id
userId
deviceId
operation
entityType
entityId
payload
clientTimestamp
serverTimestamp
syncStatus
createdAt
```

## Operation Types

```text
create
update
delete
```

## Sync Status

```text
pending
synced
failed
conflict
```

The exact synchronization strategy will be finalized during offline architecture implementation.

---

# 18. Relationships

The major relationships are:

```text
User
 │
 ├──────── Patient
 │
 ├──────── Doctor
 │
 ├──────── Hospital Assistant
 │
 └──────── Volunteer
```

```text
Hospital
 │
 ├── Doctors
 ├── Hospital Assistants
 └── Patients
```

```text
Patient
 │
 ├── Appointments
 ├── Prescriptions
 ├── Medicines
 ├── Health Records
 ├── Notifications
 └── Emergency Reports
```

```text
Doctor
 │
 ├── Patients
 ├── Appointments
 ├── Prescriptions
 └── Health Records
```

---

# 19. Entity Relationship Overview

Although MongoDB is a document database, the logical relationships can be represented as:

```text
                         User
                          │
          ┌───────────────┼────────────────┐
          │               │                │
       Patient         Doctor          Volunteer
          │               │
          │               │
          ├───────┐       │
          │       │       │
          ▼       ▼       ▼
    Appointment Prescription Health Record
          │       │
          │       │
          ▼       ▼
       Doctor   Medicine
          │
          ▼
       Hospital
```

---

# 20. Referencing Strategy

VitoCare will primarily use references between major entities.

For example:

```text
patientId
doctorId
hospitalId
prescriptionId
appointmentId
userId
```

References help maintain relationships without duplicating large amounts of data.

Frequently displayed information may be safely denormalized where performance requirements justify it.

---

# 21. Indexing Strategy

Indexes will be created for frequently queried fields.

Potential indexes include:

```text
users.mobileNumber
users.email
users.role

patients.userId
patients.assignedDoctorId
patients.assignedHospitalId

doctors.userId
doctors.hospitalId

appointments.patientId
appointments.doctorId
appointments.hospitalId
appointments.appointmentDate

prescriptions.patientId
prescriptions.doctorId

medicines.patientId

notifications.recipientId

emergencies.status
emergencies.createdAt
```

Indexes will be finalized based on actual query patterns.

---

# 22. Data Validation

Data validation will occur at multiple layers.

```text
Frontend Validation
        ↓
API Validation
        ↓
Business Logic Validation
        ↓
Mongoose Schema Validation
        ↓
MongoDB
```

The backend must never rely only on frontend validation.

---

# 23. Sensitive Healthcare Data

Healthcare information is sensitive.

The system will apply strict access controls to:

- Diagnoses
- Prescriptions
- Health history
- Emergency information
- Patient contact information
- Medical records

Users will only receive data required for their role and task.

---

# 24. Password Security

Passwords will never be stored directly.

The system will store:

```text
passwordHash
```

instead of:

```text
password
```

Passwords will be securely hashed using an appropriate password hashing algorithm.

---

# 25. Audit Information

Sensitive operations should maintain audit information.

Potential audit information includes:

```text
createdBy
updatedBy
createdAt
updatedAt
```

Future versions may introduce a dedicated audit log collection.

Important operations such as prescription creation, emergency updates, and permission changes should be auditable.

---

# 26. Soft Deletion

Important healthcare records should generally not be permanently deleted through normal user actions.

Where appropriate, records may use:

```text
isDeleted
deletedAt
deletedBy
```

This helps preserve historical information and supports auditing.

The exact deletion policy will depend on legal, privacy, and retention requirements.

---

# 27. Offline Data Considerations

Only data required for offline functionality should be cached on the user's device.

Potential offline data:

```text
Medicine schedules
Upcoming appointments
Basic patient profile
Essential healthcare instructions
Pending synchronization operations
```

Sensitive information should not be cached unnecessarily.

Local data must be protected appropriately.

---

# 28. Data Synchronization

When the user is offline:

```text
User Action
    ↓
Local Database
    ↓
Pending Sync Operation
```

When connectivity returns:

```text
Internet Available
       ↓
Sync Engine
       ↓
Backend API
       ↓
Validation
       ↓
Conflict Detection
       ↓
MongoDB
       ↓
Sync Confirmation
```

Conflict resolution rules will be defined during offline architecture design.

---

# 29. Backup and Recovery

Production database infrastructure should support:

- Automated backups
- Backup retention
- Recovery procedures
- Monitoring
- Disaster recovery planning

The exact backup strategy will be defined during deployment planning.

---

# 30. Database Security

Database security will include:

- Strong authentication
- Restricted database access
- Environment-based credentials
- Encrypted connections
- Least-privilege access
- Secure backups
- Access monitoring
- No database credentials in source code

---

# 31. Database Environment Separation

Separate databases or database environments should be used for:

```text
Development
Testing
Production
```

Development data must not accidentally be used as production healthcare data.

---

# 32. Example Patient Data Flow

```text
Patient Registration
        ↓
User Account Created
        ↓
Patient Profile Created
        ↓
Hospital Assignment
        ↓
Doctor Assignment
        ↓
Appointment
        ↓
Consultation
        ↓
Prescription
        ↓
Medicine Schedule
        ↓
Medicine Reminders
        ↓
Adherence History
```

---

# 33. Example Appointment Data Flow

```text
Patient
   ↓
Select Doctor
   ↓
Select Hospital
   ↓
Select Date/Time
   ↓
Appointment Request
   ↓
Availability Check
   ↓
Appointment Created
   ↓
Notification
   ↓
Doctor Confirmation
   ↓
Appointment Completed
```

---

# 34. Example Prescription Data Flow

```text
Doctor
   ↓
Open Patient
   ↓
Review Health History
   ↓
Create Prescription
   ↓
Add Medicines
   ↓
Save Prescription
   ↓
Create Medicine Schedule
   ↓
Patient Notification
```

---

# 35. Database Design Principles

The database will follow:

- Data integrity
- Least privilege
- Minimal unnecessary duplication
- Clear relationships
- Validation
- Indexing
- Scalability
- Auditability
- Security
- Privacy
- Offline compatibility
- Maintainability

---

# 36. Future Database Expansion

Future collections may include:

```text
auditLogs
labReports
medicineInventory
medicineOrders
healthAnalytics
aiInteractions
feedback
supportRequests
```

These will only be introduced when their requirements are clearly defined.

---

# 37. Final Database Architecture

The planned database structure is:

```text
MongoDB
│
├── users
├── patients
├── doctors
├── hospitalAssistants
├── volunteers
├── hospitals
├── appointments
├── prescriptions
├── medicines
├── healthRecords
├── notifications
├── emergencies
└── syncRecords
```

The database will serve as the persistent data layer of VitoCare.

All database access will occur through the backend application and authorized services.