# VitoCare API Design

## 1. Purpose

This document defines the REST API contract for VitoCare.

The API acts as the communication layer between the React frontend and the Node.js/Express backend.

The API will be designed with:

- REST principles
- Authentication
- Role-based authorization
- Input validation
- Consistent responses
- Secure error handling
- Resource-based URLs
- Scalability
- Offline synchronization support

---

# 2. Base URL

Development:

```text
http://localhost:5000/api