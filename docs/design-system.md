# VitoCare Design System

## 1. Purpose

The VitoCare Design System defines the visual language, reusable components, typography, spacing, accessibility, and interaction patterns used throughout the application.

The goal is to create a healthcare interface that is:

- Clean
- Trustworthy
- Accessible
- Modern
- Responsive
- Easy to understand
- Suitable for users with limited technical experience

---

# 2. Design Principles

VitoCare follows these principles:

### Simplicity

Healthcare information should be understandable without requiring technical knowledge.

### Accessibility

The interface should work for users with different levels of digital literacy.

### Consistency

The same components and interaction patterns should be used throughout the platform.

### Trust

Healthcare interfaces should communicate reliability and safety.

### Visibility

Important information such as medicines, appointments, and emergencies should be easy to find.

### Responsive Design

The application should work across:

- Desktop
- Tablet
- Mobile

---

# 3. Visual Style

VitoCare will use a modern healthcare-inspired interface.

The visual style should be:

```text
Clean
Minimal
Friendly
Professional
Calm
Accessible
```

The interface should avoid excessive visual complexity.

---

# 4. Color System

The application will use a healthcare-oriented color palette.

### Primary

Primary color:

```text
#0F766E
```

Used for:

- Primary buttons
- Navigation highlights
- Important actions
- Links
- Active states

### Secondary

Secondary color:

```text
#2563EB
```

Used for:

- Information
- Secondary actions
- Links
- Data visualization

### Success

```text
#16A34A
```

Used for:

- Medicine taken
- Successful operations
- Confirmed appointments
- Completed tasks

### Warning

```text
#D97706
```

Used for:

- Pending actions
- Offline state
- Warnings
- Upcoming events

### Error

```text
#DC2626
```

Used for:

- Errors
- Emergency actions
- Failed operations
- Validation messages

### Neutral

The interface will use neutral colors for:

- Backgrounds
- Cards
- Borders
- Text
- Disabled elements

---

# 5. Typography

The primary interface font will be:

```text
Inter
```

Fallback:

```text
system-ui
sans-serif
```

Typography hierarchy:

```text
H1 → Page Title
H2 → Section Title
H3 → Card Title
Body → Main Information
Small → Supporting Information
Caption → Metadata
```

---

# 6. Spacing

The application will use a consistent spacing scale.

```text
4px
8px
12px
16px
24px
32px
48px
64px
```

Spacing should be consistent across components.

---

# 7. Border Radius

Components should use rounded corners.

Suggested values:

```text
Small → 6px
Medium → 10px
Large → 16px
Pills → 999px
```

---

# 8. Buttons

Primary button:

```text
Filled
High contrast
Rounded
Clear label
```

Examples:

```text
Book Appointment
Save Changes
Add Medicine
Create Prescription
```

Secondary button:

```text
Outlined
```

Danger button:

```text
Used only for destructive or emergency actions
```

---

# 9. Cards

Cards will be used to group related information.

Examples:

```text
Medicine Card
Appointment Card
Patient Card
Prescription Card
Health Summary Card
```

Cards should contain:

```text
Title
Important information
Status
Primary action
```

---

# 10. Status Indicators

Statuses should be visually obvious.

Examples:

```text
✓ Taken
✓ Confirmed
⏳ Pending
⚠ Offline
✕ Failed
```

Status should never rely only on color.

Text or icons must also communicate the meaning.

---

# 11. Forms

Forms should:

- Have clear labels
- Show required fields
- Validate input
- Display helpful errors
- Avoid unnecessary fields
- Support keyboard navigation

Example:

```text
Full Name
[________________]

Age
[________________]

Mobile Number
[________________]

[ Create Account ]
```

---

# 12. Navigation

Desktop navigation:

```text
Sidebar
```

Mobile navigation:

```text
Bottom Navigation
```

The sidebar should contain:

```text
Dashboard
Appointments
Medicines
Prescriptions
Health History
Profile
Settings
Logout
```

The navigation changes based on user role.

---

# 13. Dashboard Design

Every role receives a personalized dashboard.

Dashboard structure:

```text
Header
   ↓
Welcome Section
   ↓
Summary Cards
   ↓
Important Actions
   ↓
Recent Activity
   ↓
Upcoming Events
```

---

# 14. Patient Dashboard

The patient dashboard should prioritize:

```text
Today's Medicines
Upcoming Appointment
Health Summary
Recent Prescriptions
Volunteer Support
Emergency Access
```

---

# 15. Doctor Dashboard

Doctor dashboard:

```text
Today's Appointments
Assigned Patients
Pending Tasks
Recent Patient Activity
Prescription Actions
```

---

# 16. Hospital Assistant Dashboard

Hospital assistant dashboard:

```text
Registered Patients
Today's Appointments
Pending Registrations
Hospital Activity
```

---

# 17. Volunteer Dashboard

Volunteer dashboard:

```text
Assigned Patients
Today's Visits
Pending Visits
Emergency Reports
Recent Updates
```

---

# 18. Admin Dashboard

Admin dashboard:

```text
Total Users
Patients
Doctors
Volunteers
Hospitals
Appointments
System Activity
Analytics
```

---

# 19. Responsive Design

Desktop:

```text
Sidebar + Main Content
```

Tablet:

```text
Collapsed Sidebar + Main Content
```

Mobile:

```text
Top Header
Main Content
Bottom Navigation
```

---

# 20. Accessibility

The interface should support:

- Keyboard navigation
- Screen readers
- Sufficient contrast
- Clear focus states
- Large touch targets
- Descriptive labels
- Accessible form errors
- Semantic HTML

---

# 21. Loading States

Loading states should be shown when data is being retrieved.

Examples:

```text
Skeleton Cards
Loading Spinner
Progress Indicator
```

---

# 22. Empty States

Empty states should explain what the user can do.

Example:

```text
No upcoming appointments

You don't have any appointments scheduled.

[ Book Appointment ]
```

---

# 23. Error States

Errors should be human-readable.

Bad:

```text
HTTP 500
```

Better:

```text
Something went wrong.

We couldn't load your appointments.
Please try again.

[ Try Again ]
```

---

# 24. Offline State

The application should clearly display connectivity.

```text
🟢 Online
```

```text
🟠 Offline
Changes will sync when you're connected.
```

---

# 25. Emergency UI

Emergency actions should always be visually prominent but must avoid accidental activation.

Example:

```text
┌──────────────────────────┐
│     Emergency Support    │
│                          │
│     [ GET HELP ]         │
└──────────────────────────┘
```

Confirmation may be required depending on the action.

---

# 26. Design Goal

The final VitoCare interface should feel like a professional healthcare product rather than a college project.
