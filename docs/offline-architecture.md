# VitoCare Offline-First Architecture

## 1. Purpose

VitoCare is designed as an offline-first healthcare platform.

The application must remain useful when users have unreliable or temporarily unavailable internet connectivity.

This is especially important for patients and healthcare workers in rural, tribal, and underserved communities.

The offline-first architecture allows selected features to continue functioning without an active internet connection and synchronizes data with the backend when connectivity is restored.

---

# 2. Offline-First Principles

VitoCare follows these principles:

- The application should remain usable during temporary network failures.
- Important patient-facing information should be available offline when safely permitted.
- User actions performed offline should not be immediately lost.
- Offline changes should be stored locally.
- Changes should synchronize automatically when connectivity returns.
- Conflicts must be detected before conflicting data is overwritten.
- Sensitive healthcare data must be minimized in local storage.
- The server remains the authoritative source for persistent healthcare records.

---

# 3. Online Architecture

When internet connectivity is available:

```text
User
 │
 ▼
React Frontend
 │
 ▼
API Client
 │
 │ HTTPS
 ▼
Node.js + Express
 │
 ├── Authentication
 ├── Authorization
 ├── Validation
 ├── Business Logic
 └── Sync Service
 │
 ▼
MongoDB
```

The backend validates and processes requests before storing persistent information in MongoDB.

---

# 4. Offline Architecture

When the device has no internet connection:

```text
User
 │
 ▼
React Frontend
 │
 ▼
Offline Data Layer
 │
 ├── Cached Data
 ├── Local Application Data
 └── Pending Operations
```

The application can continue supporting selected offline features.

No request requiring the backend should be assumed to have succeeded until synchronization is confirmed.

---

# 5. Offline Data Storage

The frontend will use a browser-supported local database for structured offline data.

The preferred technology is:

```text
IndexedDB
```

A library such as Dexie.js may be used to simplify IndexedDB operations.

The local database is separate from MongoDB.

```text
MongoDB
   ↑
   │ Synchronization
   ↓
IndexedDB
```

MongoDB remains the server-side source of truth.

---

# 6. Data That May Be Available Offline

Only data required for essential functionality should be cached.

Potential offline data includes:

```text
Basic Patient Profile
Active Medicine Schedules
Upcoming Appointments
Essential Healthcare Instructions
Recently Accessed Information
Pending User Actions
Notification Information
```

The exact offline data set will be finalized during implementation.

---

# 7. Data That Should Not Be Cached Unnecessarily

Sensitive information should not be stored locally unless there is a clear functional requirement.

Examples include:

```text
Complete Medical History
Unnecessary Patient Records
Other Patients' Information
Sensitive Administrative Data
Authentication Secrets
Backend Credentials
AI API Keys
```

The application should follow the principle of storing the minimum information required for offline functionality.

---

# 8. Offline Medicine Reminders

Medicine reminders are one of the most important offline features.

A patient should be able to receive scheduled reminders even if the device temporarily loses internet connectivity.

Example:

```text
Medicine Schedule
       ↓
Stored Locally
       ↓
Reminder Time Reached
       ↓
Local Reminder
       ↓
Patient Marks Medicine
       ↓
Local Adherence Record
```

The reminder itself should not depend on a live backend request.

---

# 9. Offline Appointment Access

Patients may be able to view previously synchronized upcoming appointments while offline.

Example:

```text
Internet Available
       ↓
Appointments Downloaded
       ↓
Stored Locally
       ↓
Internet Lost
       ↓
Patient Can View Appointment
```

Creating or changing appointments may require synchronization with the backend.

The UI must clearly communicate whether an appointment action is:

```text
Confirmed
Pending Synchronization
Failed
```

---

# 10. Offline User Actions

When a user performs an action while offline, the application should create a local pending operation.

Example:

```text
Patient marks medicine as taken
             ↓
        Internet Offline
             ↓
       Save Locally
             ↓
     Add Sync Operation
             ↓
    Show "Pending Sync"
```

The user should not be told that the server has permanently stored the information until synchronization succeeds.

---

# 11. Pending Operations Queue

Offline actions will be stored in a local synchronization queue.

Example:

```text
syncQueue
```

Each operation may contain:

```text
operationId
userId
deviceId
operationType
entityType
entityId
payload
createdAt
status
retryCount
```

Possible statuses:

```text
pending
syncing
synced
failed
conflict
```

---

# 12. Example Sync Operation

Example:

```json
{
  "operationId": "OPERATION_ID",
  "operationType": "update",
  "entityType": "medicineAdherence",
  "entityId": "RECORD_ID",
  "payload": {
    "status": "taken",
    "takenAt": "2026-08-10T08:30:00Z"
  },
  "createdAt": "2026-08-10T08:30:05Z",
  "status": "pending"
}
```

The operation remains locally stored until the server confirms successful synchronization.

---

# 13. Connectivity Detection

The frontend will monitor network connectivity.

Possible states:

```text
online
offline
syncing
sync_error
```

The application should not rely solely on the browser's network status.

A successful backend request should ultimately determine whether the application can communicate with the server.

---

# 14. User Interface Offline Indicator

The application should clearly communicate connectivity status.

Example:

```text
🟢 Online
```

When offline:

```text
🟠 Offline
Some features are temporarily unavailable.
Your changes will sync when you're connected.
```

During synchronization:

```text
🔄 Syncing...
```

After successful synchronization:

```text
✓ Synced
```

The interface should avoid confusing users with technical terminology.

---

# 15. Synchronization Process

When connectivity returns:

```text
Internet Restored
       ↓
Connectivity Check
       ↓
Start Sync
       ↓
Read Pending Operations
       ↓
Send Operations to Backend
       ↓
Backend Validation
       ↓
Conflict Detection
       ↓
Apply Valid Changes
       ↓
Return Sync Result
       ↓
Update Local Database
       ↓
Mark Operations as Synced
```

---

# 16. Synchronization API

The backend will expose:

```text
POST /api/v1/sync
```

The frontend sends pending operations to the backend.

Example:

```json
{
  "deviceId": "DEVICE_ID",
  "lastSyncTime": "2026-08-10T08:00:00Z",
  "changes": [
    {
      "operationId": "OPERATION_ID",
      "operationType": "update",
      "entityType": "medicineAdherence",
      "entityId": "RECORD_ID",
      "payload": {
        "status": "taken"
      }
    }
  ]
}
```

---

# 17. Server Synchronization Response

The server should return the result of each operation.

Example:

```json
{
  "success": true,
  "results": [
    {
      "operationId": "OPERATION_ID",
      "status": "synced"
    }
  ],
  "serverTime": "2026-08-10T08:35:00Z"
}
```

Possible results:

```text
synced
failed
conflict
rejected
```

---

# 18. Conflict Detection

Conflicts may occur when the same record is changed from multiple devices or by different users.

Example:

```text
Device A
   ↓
Medicine Status = Taken

Device B
   ↓
Medicine Status = Missed
```

Both changes may reach the server.

The backend must determine whether a conflict exists.

---

# 19. Conflict Resolution Strategy

VitoCare will use explicit conflict resolution rules rather than blindly overwriting data.

Possible strategies include:

```text
Server-authoritative resolution
Role-based priority
Timestamp comparison
Domain-specific resolution
Manual review
```

For healthcare-related records, important conflicts should not be silently overwritten.

The exact conflict rules will be finalized for each entity during implementation.

---

# 20. Server as Source of Truth

MongoDB on the backend remains the authoritative persistent source.

```text
Local Device
     │
     │ Temporary
     ▼
IndexedDB
     │
     │ Synchronization
     ▼
Backend
     │
     ▼
MongoDB
```

Local data should never permanently override authoritative server data without validation.

---

# 21. Retry Strategy

Temporary network failures should not permanently discard offline operations.

Failed operations may be retried using controlled retry logic.

Example:

```text
Sync Attempt
     ↓
Failed
     ↓
Wait
     ↓
Retry
     ↓
Failed
     ↓
Retry with Backoff
```

The system should limit retries to prevent unnecessary network usage.

---

# 22. Idempotency

Synchronization operations should be designed to avoid duplicate processing.

Each offline operation should have a unique:

```text
operationId
```

The backend can use this identifier to detect whether an operation has already been processed.

Example:

```text
Operation OP-123
      ↓
Server processes
      ↓
OP-123 stored as processed
      ↓
Client retries OP-123
      ↓
Server detects duplicate
      ↓
No duplicate action
```

This is important when network connections are unstable.

---

# 23. Sync Ordering

Some operations depend on previous operations.

For example:

```text
Create Medicine
      ↓
Create Medicine Schedule
      ↓
Mark Medicine as Taken
```

The synchronization engine should respect dependencies when necessary.

Operations may therefore include:

```text
sequenceNumber
```

or dependency information.

---

# 24. Authentication During Synchronization

Synchronization must occur only for authenticated and authorized users.

The backend will verify:

```text
User Identity
Role
Permissions
Device/Session Context
Operation Ownership
```

The client must never be trusted to determine whether a user has permission to modify healthcare data.

---

# 25. Offline Authentication

VitoCare should minimize offline authentication capabilities.

The application may maintain a secure local session for a previously authenticated user where appropriate.

However:

```text
Password
JWT Secret
API Keys
Backend Credentials
```

must never be stored insecurely in local storage.

Offline authentication behavior will be finalized during security implementation.

---

# 26. Offline Emergency Handling

Emergency functionality requires special treatment.

The application should not falsely imply that an emergency report has reached healthcare staff while offline.

If emergency reporting is attempted without connectivity:

```text
Emergency Triggered
       ↓
No Internet
       ↓
Store Emergency Locally
       ↓
Show Clear Warning
       ↓
Attempt Synchronization
       ↓
Server Confirmation
```

The interface must clearly communicate whether emergency information has actually reached the backend.

Where appropriate, the application may provide alternative emergency contact mechanisms available on the device.

---

# 27. Offline Notifications

Some notifications can be generated locally.

Examples:

```text
Medicine Reminder
Upcoming Appointment Reminder
Pending Sync Notification
```

Server-dependent notifications require connectivity.

The application should distinguish between:

```text
Local Reminder
Server Notification
```

---

# 28. Data Freshness

Offline data may become outdated.

The application should track synchronization information such as:

```text
lastSyncedAt
dataVersion
updatedAt
```

The interface may display:

```text
Last updated 10 minutes ago
```

for important cached information.

---

# 29. Local Data Cleanup

Cached data should not remain indefinitely.

The application may remove:

```text
Expired Cache
Old Temporary Data
Completed Sync Operations
Obsolete Notifications
```

Data cleanup must not remove required medical records or unsynchronized changes.

Pending operations must always be protected from accidental cleanup.

---

# 30. Security of Local Data

Offline storage introduces additional security risks.

The application should:

- Minimize stored sensitive information
- Avoid storing secrets in plain text
- Clear data on logout where appropriate
- Protect local sessions
- Validate all synchronized operations
- Avoid caching unnecessary patient records
- Use secure browser storage mechanisms
- Prevent unauthorized users from accessing cached data

The exact security controls will be finalized during the security design milestone.

---

# 31. Offline Architecture Flow

Complete flow:

```text
                    VITOCARE
                        │
                 React Frontend
                        │
              ┌─────────┴─────────┐
              │                   │
          Internet              Offline
              │                   │
              ▼                   ▼
        Backend API          IndexedDB
              │                   │
              ▼                   ▼
           MongoDB          Pending Queue
              │                   │
              │                   │
              └─────────┬─────────┘
                        │
                 Internet Restored
                        │
                        ▼
                  Sync Engine
                        │
                        ▼
                Conflict Detection
                        │
                        ▼
                  Backend API
                        │
                        ▼
                     MongoDB
```

---

# 32. Example: Patient Takes Medicine Offline

```text
Patient opens VitoCare
        ↓
Internet unavailable
        ↓
Medicine schedule loaded from IndexedDB
        ↓
Patient selects "Taken"
        ↓
Local adherence record updated
        ↓
Sync operation created
        ↓
UI shows "Pending Sync"
        ↓
Internet restored
        ↓
Sync engine starts
        ↓
Backend validates operation
        ↓
MongoDB updated
        ↓
Server confirms operation
        ↓
Local operation marked "Synced"
        ↓
UI shows "Synced"
```

---

# 33. Example: Appointment While Offline

```text
Patient opens appointment screen
        ↓
Offline
        ↓
Cached appointments displayed
        ↓
Patient attempts to create appointment
        ↓
Application checks whether operation
can safely be queued
        ↓
Request stored locally if supported
        ↓
UI displays "Pending Confirmation"
        ↓
Internet restored
        ↓
Backend checks doctor availability
        ↓
Backend creates or rejects appointment
        ↓
Result synchronized to device
```

An appointment must not be displayed as confirmed until the backend confirms it.

---

# 34. Offline Architecture Boundaries

Not every feature should work fully offline.

### Suitable for offline operation

```text
Medicine reminders
Cached appointment viewing
Basic profile information
Previously synchronized information
Pending local actions
```

### Requires backend connectivity

```text
Real-time appointment availability
New doctor assignment
User management
Hospital management
Emergency server confirmation
AI assistant
New prescription synchronization
Sensitive administrative operations
```

The exact feature boundaries may evolve during implementation.

---

# 35. Offline Testing Strategy

Offline functionality must be tested deliberately.

Test scenarios include:

```text
Internet lost during page usage
Internet lost before submitting action
Internet lost after submitting action
Internet restored
Repeated synchronization
Duplicate synchronization
Conflicting updates
Expired cached data
Failed synchronization
User logout while offline
Device restart while offline
Multiple pending operations
```

---

# 36. Offline Monitoring

The system should record synchronization metrics such as:

```text
Successful Syncs
Failed Syncs
Conflict Count
Pending Operations
Average Sync Duration
Retry Count
```

These metrics can help identify reliability problems.

---

# 37. Future Improvements

Future versions may introduce:

```text
Background Synchronization
Service Workers
Push Notifications
Advanced Conflict Resolution
Encrypted Local Database
Background Sync API
Offline Analytics
Optimized Data Compression
```

These features will be considered after the core offline architecture is stable.

---

# 38. Final Architecture

The final offline-first architecture is:

```text
                VitoCare Client
                      │
             ┌────────┴────────┐
             │                 │
          Online            Offline
             │                 │
             ▼                 ▼
        REST API          IndexedDB
             │                 │
             │           Sync Queue
             │                 │
             └────────┬────────┘
                      │
               Connectivity
                  Restored
                      │
                      ▼
                 Sync Engine
                      │
                      ▼
               Backend Validation
                      │
                      ▼
              Conflict Resolution
                      │
                      ▼
                   MongoDB
```

VitoCare therefore follows an offline-first architecture while keeping the backend and MongoDB as the authoritative source of persistent healthcare information.