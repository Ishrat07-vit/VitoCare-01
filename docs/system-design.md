# VitoCare Detailed System Design

## 1. Purpose

This document describes the internal software design of the VitoCare platform.

VitoCare will initially use a modular monolithic backend architecture. The application will be divided into independent functional modules while remaining within a single backend deployment.

The goal is to maintain clear separation of responsibilities, improve maintainability, and allow future scaling.

---

# 2. Backend Architecture

The backend will use:

- Node.js
- Express.js
- TypeScript
- MongoDB

The backend will expose RESTful APIs to the React frontend.

---

# 3. Backend Structure

The planned backend structure is:

```text
backend/
│
├── src/
│   │
│   ├── config/
│   │
│   ├── middleware/
│   │
│   ├── modules/
│   │   │
│   │   ├── auth/
│   │   ├── users/
│   │   ├── patients/
│   │   ├── doctors/
│   │   ├── hospitals/
│   │   ├── appointments/
│   │   ├── prescriptions/
│   │   ├── medicines/
│   │   ├── volunteers/
│   │   ├── notifications/
│   │   └── ai/
│   │
│   ├── routes/
│   │
│   ├── services/
│   │
│   ├── utils/
│   │
│   └── app.ts
│
├── tests/
│
├── .env
├── .env.example
├── package.json
└── README.md
```

This structure is a design proposal and will be finalized before implementation.

---

# 4. Authentication Module

## Responsibilities

- User registration
- User login
- Logout
- Password management
- Authentication
- Session/token management
- Account security

Example APIs:

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

---

# 5. Users Module

## Responsibilities

- Manage common user information
- Manage account status
- Manage user roles
- Retrieve authorized user information

Authentication determines the identity of a user, while authorization determines what the user is allowed to access.

---

# 6. Patient Module

## Responsibilities

- Patient profile
- Patient information
- Health information
- Assigned doctor
- Assigned hospital
- Patient history

Example APIs:

```text
GET /api/patients/:id
PUT /api/patients/:id
```

Access to patient information will be restricted according to role and authorization rules.

---

# 7. Doctor Module

## Responsibilities

- Doctor profile
- Assigned patients
- Doctor availability
- Patient-related operations
- Prescription creation
- Appointment management

---

# 8. Hospital Module

## Responsibilities

- Hospital registration
- Hospital information
- Departments
- Doctors
- Working hours
- Contact information

Example APIs:

```text
GET /api/hospitals
GET /api/hospitals/:id
```

---

# 9. Appointment Module

## Responsibilities

- Create appointments
- Reschedule appointments
- Cancel appointments
- View appointments
- Manage appointment status
- Appointment reminders

Appointment lifecycle:

```text
Requested
    ↓
Scheduled
    ↓
Confirmed
    ↓
Completed
```

Alternative flow:

```text
Scheduled
    ↓
Cancelled
```

---

# 10. Prescription Module

## Responsibilities

- Create prescriptions
- View prescriptions
- Manage prescribed medicines
- Link prescriptions to patients
- Link prescriptions to doctors

General flow:

```text
Doctor
   ↓
Patient
   ↓
Prescription
   ↓
Medicines
   ↓
Medicine Schedule
```

---

# 11. Medicine Module

The medicine module manages medicine schedules and adherence information.

## Responsibilities

- Medicine schedules
- Dosage information
- Frequency
- Duration
- Reminder timing
- Taken/missed status
- Medicine adherence history

The prescription represents what the doctor prescribed, while the medicine module manages the patient's medicine schedule and reminder behavior.

---

# 12. Volunteer Module

## Responsibilities

- Volunteer profiles
- Patient assignments
- Home visits
- Visit status
- Visit reports
- Emergency reporting

General workflow:

```text
Patient requests help
        ↓
Volunteer assignment
        ↓
Volunteer notification
        ↓
Home visit
        ↓
Visit completed
        ↓
Visit report
```

---

# 13. Notification Module

## Responsibilities

- Medicine reminders
- Appointment reminders
- Volunteer notifications
- Emergency notifications
- System notifications

A notification may contain:

```text
Recipient
Type
Message
Status
Created Time
```

---

# 14. AI Module

The AI module provides a controlled interface between VitoCare and Gemini.

The frontend will not directly communicate with Gemini.

```text
React Frontend
      ↓
VitoCare Backend
      ↓
AI Module
      ↓
Gemini API
```

Potential AI features:

- Health information explanations
- Prescription information extraction
- Healthcare information summarization
- Patient-friendly explanations

AI functionality will be assistive and will not replace qualified medical professionals.

---

# 15. Middleware

Middleware will process requests before they reach application controllers.

Potential middleware includes:

```text
Authentication Middleware
Authorization Middleware
Validation Middleware
Error Handling Middleware
Rate Limiting Middleware
```

General flow:

```text
Request
   ↓
Authentication
   ↓
Authorization
   ↓
Validation
   ↓
Controller
```

---

# 16. Controllers

Controllers handle HTTP requests and responses.

Controllers should remain focused on request handling and should not contain large amounts of business logic.

Example:

```text
HTTP Request
     ↓
Controller
     ↓
Service
     ↓
Database
```

---

# 17. Services

Services contain reusable business logic.

Potential services include:

```text
Notification Service
AI Service
Synchronization Service
Email Service
```

Example:

```text
Appointment Controller
        ↓
Appointment Service
        ↓
Database
```

---

# 18. Routes

Routes define the REST API endpoints.

Potential route groups include:

```text
/api/auth
/api/users
/api/patients
/api/doctors
/api/hospitals
/api/appointments
/api/prescriptions
/api/medicines
/api/volunteers
/api/notifications
/api/health-records
/api/ai
```

---

# 19. Request Processing Flow

A typical request will follow:

```text
React Frontend
       ↓
HTTPS Request
       ↓
Express Route
       ↓
Middleware
       ↓
Controller
       ↓
Service
       ↓
Database / External Service
       ↓
Service
       ↓
Controller
       ↓
API Response
       ↓
React Frontend
```

---

# 20. Example: Patient Books an Appointment

The appointment booking process will follow:

```text
Patient
   ↓
Appointment Page
   ↓
Select Doctor
   ↓
Select Date and Time
   ↓
Frontend Validation
   ↓
POST /api/appointments
   ↓
Authentication
   ↓
Authorization
   ↓
Request Validation
   ↓
Appointment Controller
   ↓
Appointment Service
   ↓
Check Doctor Availability
   ↓
Check Patient
   ↓
Create Appointment
   ↓
MongoDB
   ↓
Appointment Confirmation
   ↓
Notification Service
   ↓
Patient
```

---

# 21. Emergency Reporting Flow

Emergency reporting will be treated as a high-priority operation.

```text
Patient / Volunteer
        ↓
Emergency Report
        ↓
Frontend
        ↓
Backend API
        ↓
Authentication
        ↓
Authorization
        ↓
Emergency Validation
        ↓
Emergency Record
        ↓
MongoDB
        ↓
Notification Service
        ↓
Authorized Healthcare Staff
```

Real-time communication may be used for immediate notifications.

---

# 22. Offline Data Flow

When the device is offline:

```text
User
 ↓
React Application
 ↓
Local Storage / IndexedDB
 ↓
Cached Essential Data
```

When connectivity returns:

```text
Local Data
     ↓
Synchronization Engine
     ↓
Backend API
     ↓
Validation
     ↓
MongoDB
```

The exact synchronization and conflict-resolution strategy will be defined during the Offline Architecture stage.

---

# 23. Security Boundary

The backend will act as the primary security boundary.

Sensitive operations will follow:

```text
Client
  ↓
Authentication
  ↓
Authorization
  ↓
Validation
  ↓
Business Logic
  ↓
Database
```

Frontend restrictions alone will not be considered sufficient for protecting resources.

The backend will independently verify permissions for protected operations.

---

# 24. Error Handling

Errors will be handled centrally.

General flow:

```text
Request
   ↓
Validation
   ↓
Business Logic
   ↓
Error
   ↓
Central Error Handler
   ↓
Safe API Response
```

Internal errors should not expose sensitive system information to users.

---

# 25. Design Principles

The system will follow these principles:

- Separation of responsibilities
- Modular architecture
- Secure backend boundaries
- Role-based authorization
- Reusable services
- Input validation
- Centralized error handling
- Offline-first design
- Maintainability
- Scalability
- Privacy
- Least privilege

---

# 26. Future Expansion

The modular monolithic architecture allows future expansion.

Potential future modules include:

- Health analytics
- Medicine delivery
- Nearby hospitals
- Multi-language support
- Voice assistant
- OCR prescription processing
- Advanced AI assistance
- Emergency SOS

These features will only be added when their requirements and technical designs have been defined.

---

# 27. System Design Summary

VitoCare will use a modular monolithic backend with clear separation between:

```text
Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Services
   ↓
Database / External Services
```

The major functional modules are:

```text
Authentication
Users
Patients
Doctors
Hospitals
Appointments
Prescriptions
Medicines
Volunteers
Notifications
AI
```

This design provides a structured foundation for implementing VitoCare as a maintainable, secure, and scalable healthcare platform.