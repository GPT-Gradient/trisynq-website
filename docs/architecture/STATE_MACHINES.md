# State Machine Diagrams
## ClearForge Website

**Version:** 1.0
**Last Updated:** 2025-10-10

---

## 1. Beta Application Lifecycle

```
                    ┌─────────────────────────────────────────┐
                    │         User Submits Form               │
                    └────────────────┬────────────────────────┘
                                     │
                                     ▼
                              ┌──────────┐
                              │  PENDING │ (Initial State)
                              └─────┬────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │ Team Reviews Application      │
                    ▼                               ▼
              ┌───────────┐                   ┌──────────┐
              │ REVIEWING │                   │ REJECTED │ (Terminal)
              └─────┬─────┘                   └──────────┘
                    │
        ┌───────────┴────────────┐
        │                        │
        ▼                        ▼
  ┌──────────┐            ┌──────────┐
  │ APPROVED │            │ REJECTED │ (Terminal)
  └─────┬────┘            └──────────┘
        │
        │ Team Reaches Out
        ▼
  ┌───────────┐
  │ CONTACTED │ (Terminal)
  └───────────┘
```

**States:**
- `PENDING`: Initial state after submission
- `REVIEWING`: Team is actively reviewing
- `APPROVED`: Application approved, pending outreach
- `REJECTED`: Application rejected
- `CONTACTED`: Team has reached out to applicant (success)

**Transitions:**
| From | To | Trigger | Actor |
|------|-----|---------|-------|
| PENDING | REVIEWING | Team assigns to reviewer | Team Member |
| REVIEWING | APPROVED | Review passed | Team Member |
| REVIEWING | REJECTED | Review failed | Team Member |
| PENDING | REJECTED | Auto-reject (spam) | System |
| APPROVED | CONTACTED | Outreach email sent | Team Member |

---

## 2. Contact Form Lifecycle

```
                    ┌─────────────────────────────────────────┐
                    │      User Submits Contact Form         │
                    └────────────────┬────────────────────────┘
                                     │
                                     ▼
                                ┌──────┐
                                │  NEW │ (Initial State)
                                └───┬──┘
                                    │
                    ┌───────────────┴─────────────┐
                    │ System Classifies Intent    │
                    │ & Assigns Priority          │
                    ▼                             │
              ┌──────────┐                        │
              │ ASSIGNED │                        │
              └─────┬────┘                        │
                    │                             │
        ┌───────────┴────────────┐               │
        │                        │               │
        ▼                        ▼               ▼
  ┌───────────┐           ┌──────────┐    ┌──────────┐
  │ RESPONDED │           │  CLOSED  │    │  CLOSED  │
  └─────┬─────┘           └──────────┘    └──────────┘
        │                  (Terminal)      (Terminal - No Response)
        │
        ▼
  ┌──────────┐
  │  CLOSED  │ (Terminal)
  └──────────┘
```

**States:**
- `NEW`: Just submitted, awaiting assignment
- `ASSIGNED`: Assigned to team member
- `RESPONDED`: Team has responded
- `CLOSED`: Conversation closed (terminal)

**Transitions:**
| From | To | Trigger | Actor |
|------|-----|---------|-------|
| NEW | ASSIGNED | Auto-assign by intent | System |
| ASSIGNED | RESPONDED | Team member replies | Team Member |
| RESPONDED | CLOSED | Conversation ends | Team Member |
| ASSIGNED | CLOSED | No action needed | Team Member |
| NEW | CLOSED | Spam/invalid | System |

---

## 3. Form Submission Flow (Client)

```
  ┌──────────┐
  │   IDLE   │ (Initial)
  └─────┬────┘
        │ User starts typing
        ▼
  ┌────────────┐
  │  EDITING   │
  └─────┬──────┘
        │ User clicks Submit
        ▼
  ┌────────────────┐
  │  VALIDATING    │
  └────┬───────┬───┘
       │       │ Validation fails
       │       ▼
       │  ┌────────┐
       │  │ ERROR  │
       │  └────┬───┘
       │       │ User fixes error
       │       ▼
       │  ┌──────────┐
       │  │ EDITING  │
       │  └──────────┘
       │
       │ Validation passes
       ▼
  ┌─────────────┐
  │ SUBMITTING  │
  └────┬────┬───┘
       │    │ Submit fails
       │    ▼
       │  ┌────────┐
       │  │ ERROR  │
       │  └────┬───┘
       │       │ User retries
       │       ▼
       │  ┌─────────────┐
       │  │ SUBMITTING  │
       │  └─────────────┘
       │
       │ Submit succeeds
       ▼
  ┌───────────┐
  │  SUCCESS  │ (Terminal)
  └───────────┘
```

**States:**
- `IDLE`: Form not touched
- `EDITING`: User is filling form
- `VALIDATING`: Client-side validation running
- `ERROR`: Validation or submission error
- `SUBMITTING`: Request in flight to server
- `SUCCESS`: Successful submission (terminal)

---

## 4. Cloud Run Instance Lifecycle

```
         ┌─────────────┐
         │  COLD START │
         └──────┬──────┘
                │ Container starts (2-3s)
                ▼
         ┌─────────────┐
         │    WARM     │
         └──────┬──────┘
                │
    ┌───────────┴──────────┐
    │ Request arrives      │
    ▼                      │
┌─────────┐                │
│ SERVING │◄───────────────┘
└────┬────┘
     │
     │ No requests for 15 min
     ▼
┌──────────┐
│   IDLE   │
└────┬─────┘
     │ Container shut down
     ▼
┌──────────┐
│ STOPPED  │
└──────────┘
```

**States:**
- `COLD START`: Container initializing
- `WARM`: Ready to serve requests
- `SERVING`: Actively processing requests
- `IDLE`: No requests, awaiting shutdown
- `STOPPED`: Container terminated

**Performance:**
- COLD START → WARM: 2-3 seconds
- WARM → SERVING: < 100ms
- IDLE → STOPPED: After 15 minutes

---

## 5. Rate Limiter State

```
     ┌──────────────┐
     │  NO RECORD   │ (Initial)
     └──────┬───────┘
            │ First request
            ▼
     ┌──────────────────┐
     │  TRACKING (1/5)  │
     └──────┬───────────┘
            │ Subsequent requests
            ▼
     ┌──────────────────┐
     │  TRACKING (5/5)  │
     └──────┬───────────┘
            │ Next request
            ▼
     ┌──────────────┐
     │  RATE LIMITED│
     └──────┬───────┘
            │ Window expires (60s)
            ▼
     ┌──────────────┐
     │  NO RECORD   │
     └──────────────┘
```

**States:**
- `NO RECORD`: No requests in window
- `TRACKING (n/limit)`: Counting requests
- `RATE LIMITED`: Limit exceeded, rejecting requests

**Transitions:**
- Request arrives + no record → Create record, allow
- Request arrives + under limit → Increment, allow
- Request arrives + at limit → Reject (429)
- Time > resetAt → Delete record

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-10 | Claude | Initial state machine diagrams |
