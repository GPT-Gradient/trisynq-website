# XynergyOS Phase 2A: Slack + CRM + Communication Intelligence
## Technical Requirements Document (TRD)

**Version:** 1.0  
**Date:** October 10, 2025  
**Status:** Ready for Implementation  
**Priority:** HIGH - Critical for NEXUS Beta Launch  
**Owner:** ClearForge Technologies

---

## EXECUTIVE SUMMARY

### Purpose

This TRD defines the technical implementation for XynergyOS Phase 2A integrations that enable AI-powered communication intelligence across Slack, Email, Calendar, and a built-in CRM system. These features are **critical for managing 100 NEXUS beta partners** launching Q4 2025.

### Business Context

**Current Challenge:**
- Managing 6 Continuum projects simultaneously
- 100 NEXUS beta partners launching Q4 2025
- Communication fragmented across Slack, Gmail, Calendar, Apple Calendar
- No unified view of customer/partner relationships
- Manual context switching causing cognitive overhead
- Missing opportunities buried in message streams

**Solution:**
Unified communication intelligence layer that monitors all channels, provides AI-powered triage and response drafting, maintains relationship context, and surfaces critical information automatically.

### Success Metrics

**Quantitative:**
- Reduce email/Slack response time by 70%
- AI drafts 80% of responses (requiring only approval)
- Zero missed urgent partner communications
- 100% of partner interactions automatically logged
- Context retrieval time < 2 seconds

**Qualitative:**
- Single dashboard for all communication
- Zero context switching between tools
- Complete partner relationship history
- Proactive opportunity identification
- ADHD-optimized information density

---

## SYSTEM ARCHITECTURE

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    XYNERGYOS FRONTEND                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ Slack Panel  │  │  Email Panel │  │  CRM Panel   │  │
│  │              │  │              │  │              │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  │
│         │                  │                  │          │
└─────────┼──────────────────┼──────────────────┼──────────┘
          │                  │                  │
          ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────┐
│              INTELLIGENCE GATEWAY (Next.js)              │
│  ┌─────────────────────────────────────────────────┐   │
│  │         Communication Intelligence Router         │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
          │                  │                  │
    ┌─────┴─────┐     ┌─────┴─────┐     ┌─────┴─────┐
    ▼           ▼     ▼           ▼     ▼           ▼
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│ Slack   │ │ Gmail   │ │ Google  │ │   CRM   │ │   AI    │
│Intelligence│ │Intelligence│ │ Calendar│ │ Engine  │ │ Routing │
│ Service │ │ Service │ │   API   │ │ Service │ │ Engine  │
└─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘
     │           │           │           │           │
     └───────────┴───────────┴───────────┴───────────┘
                          │
                          ▼
              ┌─────────────────────────┐
              │  Shared Data Layer      │
              ├─────────────────────────┤
              │ Firestore: Real-time    │
              │ BigQuery: Analytics     │
              │ Cloud Storage: Assets   │
              │ Secret Manager: Keys    │
              └─────────────────────────┘
```

### Component Overview

| Component | Purpose | Technology | Status |
|-----------|---------|------------|--------|
| **Slack Intelligence Service** | Monitor Slack, AI analysis, response generation | Cloud Run (Python) | NEW |
| **Gmail Intelligence Service** | Email triage, AI drafting, categorization | Cloud Run (Python) | NEW |
| **Calendar Integration Service** | Unified calendar view, meeting prep | Cloud Run (TypeScript) | NEW |
| **CRM Engine** | Relationship management, interaction tracking | Cloud Run (TypeScript) | NEW |
| **Intelligence Gateway** | Orchestration layer for all integrations | Next.js API Routes | ENHANCE |
| **XynergyOS Frontend** | User interface for all communication | Next.js + React | ENHANCE |

---

## 1. SLACK INTELLIGENCE SERVICE

### 1.1 Service Specifications

**Service Name:** `xynergy-slack-intelligence`  
**Runtime:** Cloud Run (Python 3.11)  
**Region:** us-central1  
**Scaling:** 0-10 instances (scale to zero when idle)  
**Memory:** 1 GiB  
**CPU:** 2 vCPU  
**Timeout:** 60 seconds

### 1.2 Slack App Configuration

**OAuth Scopes Required:**

```yaml
bot_scopes:
  read:
    - channels:history      # Read public channel messages
    - channels:read         # List public channels
    - groups:history        # Read private channel messages (if invited)
    - groups:read           # List private channels
    - im:history            # Read direct messages
    - im:read               # List DMs
    - mpim:history          # Group DMs
    - users:read            # User profile information
    - reactions:read        # Message reactions (sentiment)
    - files:read            # Attached files
    - team:read             # Workspace info
  
  write:
    - chat:write            # Send messages
    - chat:write.customize  # Custom name/avatar
    - reactions:write       # Add reactions

user_scopes:
  - None required (bot-only)
```

**Event Subscriptions:**

```yaml
events:
  - message.channels        # New public channel message
  - message.groups          # New private channel message
  - message.im              # New direct message
  - message.mpim            # Group DM message
  - reaction_added          # Reaction added (sentiment tracking)
  - reaction_removed        # Reaction removed
  - member_joined_channel   # Track channel membership
  - app_mention             # Bot mentioned

request_url: https://xynergy-slack-intelligence-835612502919.us-central1.run.app/slack/events
```

### 1.3 Data Models

**SlackMessage:**

```typescript
interface SlackMessage {
  // Core Identifiers
  id: string;                       // Firestore document ID
  ts: string;                       // Slack timestamp (unique message ID)
  thread_ts?: string;               // Parent message if part of thread
  channel_id: string;
  channel_name: string;
  channel_type: 'public' | 'private' | 'dm' | 'group_dm';
  
  // User Info
  user_id: string;
  user_name: string;
  user_email?: string;
  user_real_name?: string;
  
  // Message Content
  text: string;                     // Original text
  text_normalized: string;          // Cleaned for AI processing
  blocks?: any[];                   // Rich formatting blocks
  files?: SlackFile[];
  attachments?: any[];
  reactions?: SlackReaction[];
  
  // Context
  conversation_history?: SlackMessage[];  // Previous 10 messages in thread
  
  // Timestamps
  created_at: Timestamp;
  processed_at: Timestamp;
  
  // Tenant Isolation
  tenant_id: string;                // Always: ClearForge for now
}

interface SlackFile {
  id: string;
  name: string;
  mimetype: string;
  url_private: string;
  size: number;
}

interface SlackReaction {
  name: string;                     // Emoji name
  count: number;
  users: string[];
}
```

**SlackIntelligence:**

```typescript
interface SlackIntelligence {
  // Reference
  id: string;
  message_id: string;               // Links to SlackMessage
  
  // AI Analysis
  priority: 'urgent' | 'high' | 'medium' | 'low' | 'fyi';
  category: 'question' | 'issue' | 'bug_report' | 'feature_request' | 
            'feedback' | 'social' | 'noise' | 'opportunity';
  sentiment: 'very_positive' | 'positive' | 'neutral' | 'negative' | 'very_negative';
  sentiment_score: number;          // -1 to 1
  
  // Action Requirements
  action_needed: boolean;
  action_type?: 'respond' | 'escalate' | 'track' | 'document';
  urgency_reason?: string;          // Why is this urgent?
  
  // AI-Generated Content
  ai_summary: string;               // One-line summary
  ai_context: string;               // What this is about
  ai_suggested_response?: string;   // Draft response
  ai_suggested_actions?: string[];  // Recommended next steps
  confidence_score: number;         // 0-1 AI confidence
  
  // Relationships
  related_crm_contact?: string;     // CRM contact ID
  related_project?: string;         // Continuum project
  related_memories?: string[];      // Living Memory entries
  
  // Status
  status: 'pending' | 'draft_ready' | 'responded' | 'dismissed';
  handled_by?: string;              // User who handled
  handled_at?: Timestamp;
  response_sent?: string;           // Actual response sent
  
  // Timestamps
  created_at: Timestamp;
  updated_at: Timestamp;
  
  // Tenant Isolation
  tenant_id: string;
}
```

### 1.4 Core Functions

**A. Message Ingestion:**

```python
# File: xynergy-slack-intelligence/src/handlers/events.py

@app.route('/slack/events', methods=['POST'])
async def handle_slack_event():
    """
    Receive Slack events via Events API
    """
    data = request.json
    
    # Verify Slack signature
    if not verify_slack_signature(request):
        return jsonify({'error': 'Invalid signature'}), 403
    
    # Handle URL verification challenge
    if data.get('type') == 'url_verification':
        return jsonify({'challenge': data['challenge']})
    
    # Process event asynchronously
    event = data.get('event', {})
    if event.get('type') == 'message':
        # Queue for processing (don't block Slack's 3-second timeout)
        await queue_message_processing(event)
    
    return jsonify({'ok': True}), 200


async def queue_message_processing(event: dict):
    """
    Queue message for async processing via Pub/Sub
    """
    # Publish to Pub/Sub topic
    publisher = pubsub_v1.PublisherClient()
    topic_path = publisher.topic_path(PROJECT_ID, 'slack-message-processing')
    
    message_data = json.dumps(event).encode('utf-8')
    future = publisher.publish(topic_path, message_data)
    
    return future.result()
```

**B. Message Processing:**

```python
# File: xynergy-slack-intelligence/src/processors/message_processor.py

async def process_slack_message(event: dict) -> SlackIntelligence:
    """
    Main processing pipeline for Slack messages
    """
    
    # 1. Extract and normalize message
    message = extract_message_data(event)
    
    # 2. Enrich with context
    message = await enrich_message_context(message)
    
    # 3. Check if user is in CRM
    crm_contact = await find_crm_contact(message['user_email'])
    
    # 4. Get conversation history (if thread)
    if message.get('thread_ts'):
        conversation_history = await get_thread_history(
            message['channel_id'], 
            message['thread_ts']
        )
    else:
        conversation_history = []
    
    # 5. AI Analysis
    intelligence = await analyze_with_ai(
        message=message,
        conversation_history=conversation_history,
        crm_contact=crm_contact
    )
    
    # 6. Generate response if needed
    if intelligence['action_needed']:
        intelligence['ai_suggested_response'] = await generate_response(
            message=message,
            intelligence=intelligence,
            conversation_history=conversation_history,
            crm_contact=crm_contact
        )
    
    # 7. Save to Firestore
    await save_slack_intelligence(message, intelligence)
    
    # 8. Create Living Memory entry if significant
    if intelligence['priority'] in ['urgent', 'high']:
        await create_living_memory_entry(message, intelligence)
    
    # 9. Send notification if urgent
    if intelligence['priority'] == 'urgent':
        await send_notification(intelligence)
    
    return intelligence


async def analyze_with_ai(message: dict, conversation_history: list, 
                         crm_contact: dict) -> dict:
    """
    AI-powered message analysis
    """
    
    # Build comprehensive prompt
    prompt = f"""
Analyze this Slack message for priority, category, sentiment, and required action.

MESSAGE: "{message['text']}"
FROM: {message['user_name']} ({message.get('user_email', 'unknown')})
CHANNEL: {message['channel_name']} ({message['channel_type']})

{"CONVERSATION HISTORY:" if conversation_history else ""}
{format_conversation_history(conversation_history)}

{"CRM CONTEXT:" if crm_contact else "NO CRM RECORD"}
{format_crm_context(crm_contact) if crm_contact else "This user is not in CRM"}

CURRENT DATE: {datetime.now().isoformat()}

Analyze and return JSON with:
{{
  "priority": "urgent|high|medium|low|fyi",
  "category": "question|issue|bug_report|feature_request|feedback|social|noise|opportunity",
  "sentiment": "very_positive|positive|neutral|negative|very_negative",
  "sentiment_score": -1 to 1,
  "action_needed": true/false,
  "action_type": "respond|escalate|track|document",
  "urgency_reason": "Why this priority?",
  "ai_summary": "One sentence summary",
  "ai_context": "What is this about?",
  "ai_suggested_actions": ["action1", "action2"],
  "related_project": "Which Continuum project? (nexus|rankright|asorocket|etc or null)",
  "confidence_score": 0-1
}}

PRIORITY GUIDELINES:
- urgent: Customer down, security issue, time-sensitive opportunity, escalation
- high: Direct question needing response today, partnership discussion, feature request from key partner
- medium: General questions, feedback, feature ideas
- low: FYI updates, casual conversation
- fyi: Automated messages, noise, irrelevant to business

CATEGORY GUIDELINES:
- question: Asking how to do something
- issue: Something not working as expected
- bug_report: Clear bug with reproduction steps
- feature_request: Requesting new capability
- feedback: Opinion or suggestion
- social: General conversation, thanks, chitchat
- noise: Automated messages, bots, irrelevant
- opportunity: Business opportunity, partnership, referral

Respond ONLY with valid JSON.
"""
    
    # Call AI Routing Engine
    response = await call_ai_routing_engine(prompt, use_frontier=False)
    
    try:
        return json.loads(response)
    except json.JSONDecodeError:
        # Fallback if AI returns invalid JSON
        return {
            'priority': 'medium',
            'category': 'question',
            'sentiment': 'neutral',
            'sentiment_score': 0,
            'action_needed': True,
            'ai_summary': message['text'][:100],
            'confidence_score': 0.3
        }


async def generate_response(message: dict, intelligence: dict, 
                           conversation_history: list, crm_contact: dict) -> str:
    """
    Generate AI-drafted response
    """
    
    # Get Shawn's communication style
    communication_style = await get_communication_style()
    
    # Build response generation prompt
    prompt = f"""
You are Shawn from ClearForge Technologies responding to a Slack message.

YOUR COMMUNICATION STYLE:
{communication_style}

ORIGINAL MESSAGE: "{message['text']}"
FROM: {message['user_name']}
CONTEXT: {intelligence['ai_context']}
SENTIMENT: {intelligence['sentiment']}

{"CRM CONTEXT:" if crm_contact else ""}
{format_crm_context(crm_contact) if crm_contact else ""}

{"CONVERSATION HISTORY:" if conversation_history else ""}
{format_conversation_history(conversation_history)}

Generate a response that:
1. Directly addresses their {intelligence['category']}
2. Matches Shawn's style: friendly, technical but clear, helpful, concise
3. Provides specific next steps if applicable
4. Is 2-3 sentences unless the situation requires more
5. Uses their name if appropriate
6. Shows you understand their context

Response:
"""
    
    response = await call_ai_routing_engine(prompt, use_frontier=False)
    
    return response.strip()
```

**C. Response Sending:**

```python
# File: xynergy-slack-intelligence/src/handlers/responses.py

async def send_slack_response(intelligence_id: str, response_text: str, 
                              user_id: str) -> dict:
    """
    Send response back to Slack
    """
    
    # Get intelligence record
    intelligence = await get_intelligence_record(intelligence_id)
    message = await get_message_record(intelligence['message_id'])
    
    # Send via Slack API
    client = WebClient(token=SLACK_BOT_TOKEN)
    
    result = client.chat_postMessage(
        channel=message['channel_id'],
        thread_ts=message.get('thread_ts') or message['ts'],  # Reply in thread
        text=response_text,
        username='Shawn (via XynergyOS)',  # Show it's AI-assisted
    )
    
    # Update intelligence record
    await update_intelligence_status(
        intelligence_id=intelligence_id,
        status='responded',
        response_sent=response_text,
        handled_by=user_id,
        handled_at=datetime.now()
    )
    
    # Create Living Memory entry
    await create_living_memory({
        'type': 'slack_conversation',
        'title': f'Responded to {message["user_name"]} in #{message["channel_name"]}',
        'content': f'Q: {message["text"]}\n\nA: {response_text}',
        'related_crm_contact': intelligence.get('related_crm_contact'),
        'related_project': intelligence.get('related_project'),
        'tags': ['slack', 'communication', intelligence['category']]
    })
    
    return result
```

### 1.5 API Endpoints

**Intelligence Gateway Routes:**

```typescript
// File: intelligence-gateway/src/routes/slack.ts

// Get pending Slack messages requiring attention
GET /api/xynergyos/v2/slack/intelligence/pending
Query Params:
  - priority: urgent|high|medium (filter)
  - limit: number (default 20)
  - offset: number (pagination)
Response: {
  messages: SlackIntelligence[],
  total: number,
  has_more: boolean
}

// Get Slack intelligence for specific message
GET /api/xynergyos/v2/slack/intelligence/:id
Response: SlackIntelligence

// Send response to Slack
POST /api/xynergyos/v2/slack/responses
Body: {
  intelligence_id: string,
  response_text: string,
  custom: boolean  // true if user edited AI draft
}
Response: {
  success: boolean,
  slack_message_ts: string
}

// Dismiss message (mark as not needing response)
POST /api/xynergyos/v2/slack/intelligence/:id/dismiss
Body: {
  reason: string
}
Response: { success: boolean }

// Get AI insights from recent Slack activity
GET /api/xynergyos/v2/slack/insights
Query Params:
  - timeframe: day|week|month
Response: {
  total_messages: number,
  by_priority: { urgent: number, high: number, ... },
  by_sentiment: { positive: number, neutral: number, negative: number },
  common_topics: string[],
  response_rate: number,
  avg_response_time: number,
  suggestions: string[]
}

// Real-time updates (WebSocket)
WS /api/xynergyos/v2/slack/stream
Events:
  - new_message: New Slack message processed
  - intelligence_updated: Intelligence analysis updated
  - response_sent: Response sent successfully
```

---

## 2. GMAIL INTELLIGENCE SERVICE

### 2.1 Service Specifications

**Service Name:** `xynergy-gmail-intelligence`  
**Runtime:** Cloud Run (Python 3.11)  
**Region:** us-central1  
**Scaling:** 0-10 instances  
**Memory:** 1 GiB  
**CPU:** 2 vCPU  
**Timeout:** 300 seconds (longer for email processing)

### 2.2 Gmail API Configuration

**Required Scopes:**

```yaml
gmail_scopes:
  - https://www.googleapis.com/auth/gmail.readonly        # Read emails
  - https://www.googleapis.com/auth/gmail.modify          # Mark read, archive, label
  - https://www.googleapis.com/auth/gmail.send            # Send emails
  - https://www.googleapis.com/auth/gmail.compose         # Draft emails
  - https://www.googleapis.com/auth/gmail.labels          # Manage labels
```

**Authentication:**
- OAuth 2.0 with user consent (Shawn's Gmail account)
- Refresh token stored in Secret Manager
- Service account cannot access Gmail (user account required)

**Pub/Sub Push Subscription:**
```yaml
topic: projects/xynergy-dev-1757909467/topics/gmail-notifications
push_endpoint: https://xynergy-gmail-intelligence-835612502919.us-central1.run.app/gmail/push
```

### 2.3 Data Models

**GmailMessage:**

```typescript
interface GmailMessage {
  // Identifiers
  id: string;                       // Firestore doc ID
  gmail_id: string;                 // Gmail message ID
  thread_id: string;                // Gmail thread ID
  
  // Email Headers
  from: EmailAddress;
  to: EmailAddress[];
  cc?: EmailAddress[];
  bcc?: EmailAddress[];
  subject: string;
  
  // Content
  body_text: string;                // Plain text
  body_html?: string;               // HTML
  snippet: string;                  // Gmail's snippet
  attachments?: GmailAttachment[];
  
  // Metadata
  labels: string[];                 // Gmail labels
  is_unread: boolean;
  is_starred: boolean;
  is_important: boolean;
  received_at: Timestamp;
  
  // Thread Context
  thread_messages?: GmailMessage[]; // Previous emails in thread
  is_reply: boolean;
  
  // Tenant Isolation
  tenant_id: string;
}

interface EmailAddress {
  name?: string;
  email: string;
}

interface GmailAttachment {
  id: string;
  filename: string;
  mimetype: string;
  size: number;
  data?: string;                    // Base64 if downloaded
}
```

**GmailIntelligence:**

```typescript
interface GmailIntelligence {
  // Reference
  id: string;
  message_id: string;               // Links to GmailMessage
  
  // AI Analysis (same structure as Slack for consistency)
  priority: 'urgent' | 'high' | 'medium' | 'low' | 'fyi';
  category: 'sales_inquiry' | 'support_request' | 'partnership' | 
            'referral' | 'feedback' | 'spam' | 'newsletter';
  sentiment: 'very_positive' | 'positive' | 'neutral' | 'negative' | 'very_negative';
  sentiment_score: number;
  
  // Action Requirements
  action_needed: boolean;
  action_type?: 'respond' | 'forward' | 'calendar_invite' | 'call' | 'document';
  urgency_reason?: string;
  
  // AI-Generated Content
  ai_summary: string;
  ai_context: string;
  ai_suggested_response?: string;
  ai_suggested_subject?: string;    // For replies
  ai_suggested_actions?: string[];
  confidence_score: number;
  
  // Relationships
  related_crm_contact?: string;
  related_project?: string;
  related_memories?: string[];
  
  // Email-Specific
  requires_attachment?: boolean;
  suggested_attachments?: string[];
  estimated_response_time?: string; // "2 minutes", "10 minutes"
  
  // Status
  status: 'pending' | 'draft_ready' | 'sent' | 'dismissed' | 'snoozed';
  handled_by?: string;
  handled_at?: Timestamp;
  response_sent?: string;
  snoozed_until?: Timestamp;
  
  // Timestamps
  created_at: Timestamp;
  updated_at: Timestamp;
  
  // Tenant Isolation
  tenant_id: string;
}
```

### 2.4 Core Functions

```python
# File: xynergy-gmail-intelligence/src/processors/email_processor.py

async def process_gmail_message(gmail_id: string) -> GmailIntelligence:
    """
    Process incoming Gmail message
    """
    
    # 1. Fetch full message from Gmail API
    message = await fetch_gmail_message(gmail_id)
    
    # 2. Get thread context
    if message['thread_id']:
        thread_messages = await fetch_thread_messages(message['thread_id'])
    else:
        thread_messages = []
    
    # 3. Extract sender info and check CRM
    sender_email = message['from']['email']
    crm_contact = await find_crm_contact(sender_email)
    
    # 4. AI Analysis
    intelligence = await analyze_email_with_ai(
        message=message,
        thread_context=thread_messages,
        crm_contact=crm_contact
    )
    
    # 5. Generate response if needed
    if intelligence['action_needed'] and intelligence['action_type'] == 'respond':
        intelligence['ai_suggested_response'] = await generate_email_response(
            message=message,
            intelligence=intelligence,
            thread_context=thread_messages,
            crm_contact=crm_contact
        )
    
    # 6. Save to Firestore
    await save_gmail_intelligence(message, intelligence)
    
    # 7. Apply Gmail labels for organization
    await apply_intelligent_labels(gmail_id, intelligence)
    
    # 8. Create/update CRM contact if new
    if not crm_contact and intelligence['priority'] in ['urgent', 'high']:
        await create_crm_contact_from_email(message, intelligence)
    
    # 9. Create Living Memory for important emails
    if intelligence['priority'] in ['urgent', 'high']:
        await create_living_memory_from_email(message, intelligence)
    
    # 10. Send notification if urgent
    if intelligence['priority'] == 'urgent':
        await send_notification(intelligence)
    
    return intelligence


async def generate_email_response(message: dict, intelligence: dict,
                                  thread_context: list, crm_contact: dict) -> str:
    """
    Generate AI-drafted email response
    """
    
    communication_style = await get_communication_style()
    
    # Check if this person has received emails from you before
    previous_emails = await get_previous_emails_to_sender(message['from']['email'])
    
    prompt = f"""
You are Shawn from ClearForge Technologies drafting an email response.

YOUR EMAIL COMMUNICATION STYLE:
{communication_style}

ORIGINAL EMAIL:
From: {message['from']['name']} <{message['from']['email']}>
Subject: {message['subject']}
Body:
{message['body_text']}

CONTEXT: {intelligence['ai_context']}
CATEGORY: {intelligence['category']}
SENTIMENT: {intelligence['sentiment']}

{"CRM CONTEXT:" if crm_contact else "NEW CONTACT"}
{format_crm_context(crm_contact) if crm_contact else "This is a new contact"}

{"PREVIOUS COMMUNICATION:" if previous_emails else "FIRST EMAIL TO THIS PERSON"}
{format_previous_emails(previous_emails) if previous_emails else "This is the first time you're emailing them"}

{"EMAIL THREAD CONTEXT:" if thread_context else "INITIAL EMAIL"}
{format_thread_context(thread_context) if thread_context else "This is the start of a new conversation"}

Generate an email response that:
1. Addresses their specific {intelligence['category']}
2. Matches Shawn's professional but friendly email style
3. Provides clear next steps or answers
4. Is concise but complete (no unnecessary length)
5. Uses appropriate greeting based on relationship history
6. Ends with appropriate sign-off
7. Does NOT include subject line (just body)

Response:
"""
    
    response = await call_ai_routing_engine(prompt, use_frontier=False)
    
    return response.strip()


async def send_email_response(intelligence_id: str, response_text: str,
                              user_id: str, custom: bool = False) -> dict:
    """
    Send email via Gmail API
    """
    
    intelligence = await get_intelligence_record(intelligence_id)
    original_message = await get_message_record(intelligence['message_id'])
    
    # Build email
    email_body = create_email_message(
        to=original_message['from']['email'],
        subject=f"Re: {original_message['subject']}",
        body=response_text,
        in_reply_to=original_message['gmail_id'],
        references=original_message['gmail_id']
    )
    
    # Send via Gmail API
    result = await send_gmail(email_body)
    
    # Update intelligence status
    await update_intelligence_status(
        intelligence_id=intelligence_id,
        status='sent',
        response_sent=response_text,
        handled_by=user_id,
        handled_at=datetime.now()
    )
    
    # Create Living Memory
    await create_living_memory({
        'type': 'email_conversation',
        'title': f'Email to {original_message["from"]["name"]} re: {original_message["subject"]}',
        'content': f'Their email: {original_message["snippet"]}\n\nMy response: {response_text}',
        'related_crm_contact': intelligence.get('related_crm_contact'),
        'related_project': intelligence.get('related_project'),
        'tags': ['email', 'communication', intelligence['category']]
    })
    
    # Update CRM with interaction
    if intelligence.get('related_crm_contact'):
        await log_crm_interaction(
            contact_id=intelligence['related_crm_contact'],
            type='email_sent',
            details=response_text,
            sentiment=intelligence['sentiment']
        )
    
    return result
```

### 2.5 API Endpoints

```typescript
// File: intelligence-gateway/src/routes/email.ts

// Get pending emails requiring attention
GET /api/xynergyos/v2/email/intelligence/pending
Query Params:
  - priority: urgent|high|medium
  - category: sales_inquiry|support_request|etc
  - limit: number
  - offset: number
Response: {
  emails: GmailIntelligence[],
  total: number,
  has_more: boolean
}

// Get email intelligence for specific message
GET /api/xynergyos/v2/email/intelligence/:id
Response: GmailIntelligence

// Send email response
POST /api/xynergyos/v2/email/responses
Body: {
  intelligence_id: string,
  response_text: string,
  subject?: string,        // Optional custom subject
  cc?: string[],           // Optional CC
  attachments?: string[],  // File IDs from Content Hub
  custom: boolean
}
Response: {
  success: boolean,
  gmail_message_id: string
}

// Save as draft (don't send yet)
POST /api/xynergyos/v2/email/drafts
Body: {
  intelligence_id: string,
  response_text: string
}
Response: {
  success: boolean,
  draft_id: string
}

// Snooze email (hide until later)
POST /api/xynergyos/v2/email/intelligence/:id/snooze
Body: {
  until: ISO timestamp | "tomorrow" | "next_week"
}
Response: { success: boolean }

// Get email insights
GET /api/xynergyos/v2/email/insights
Query Params:
  - timeframe: day|week|month
Response: {
  total_emails: number,
  by_priority: object,
  by_category: object,
  avg_response_time: number,
  response_rate: number,
  top_senders: { email: string, count: number }[],
  suggestions: string[]
}
```

---

## 3. CALENDAR INTEGRATION SERVICE

### 3.1 Service Specifications

**Service Name:** `xynergy-calendar-intelligence`  
**Runtime:** Cloud Run (TypeScript/Node.js)  
**Region:** us-central1  
**Scaling:** 0-5 instances  
**Memory:** 512 MiB  
**CPU:** 1 vCPU  
**Timeout:** 60 seconds

### 3.2 Calendar API Configuration

**Google Calendar API:**

```yaml
scopes:
  - https://www.googleapis.com/auth/calendar.readonly   # Read calendars
  - https://www.googleapis.com/auth/calendar.events     # Create/modify events

authentication:
  - OAuth 2.0 (user consent for Shawn's account)
  - Refresh token in Secret Manager
```

**Apple Calendar (via CalDAV):**

```yaml
protocol: CalDAV
server: caldav.icloud.com
port: 443
authentication:
  - username: Apple ID email
  - app-specific password (stored in Secret Manager)

capabilities:
  - read_events
  - create_events
  - update_events
  - delete_events
```

### 3.3 Data Models

**UnifiedCalendarEvent:**

```typescript
interface UnifiedCalendarEvent {
  // Identifiers
  id: string;                       // Firestore doc ID
  source: 'google' | 'apple';
  source_id: string;                // Original calendar event ID
  calendar_id: string;
  calendar_name: string;
  
  // Event Details
  title: string;
  description?: string;
  location?: string;
  conference_url?: string;          // Zoom, Meet, etc
  
  // Time
  start: Timestamp;
  end: Timestamp;
  timezone: string;
  is_all_day: boolean;
  
  // Participants
  organizer: EventParticipant;
  attendees: EventParticipant[];
  
  // Status
  status: 'confirmed' | 'tentative' | 'cancelled';
  response_status: 'accepted' | 'tentative' | 'declined' | 'needsAction';
  
  // Recurrence
  is_recurring: boolean;
  recurrence_rule?: string;
  
  // AI Intelligence
  ai_prep_needed: boolean;
  ai_prep?: MeetingPrep;
  
  // Relationships
  related_crm_contact?: string;
  related_project?: string;
  related_memories?: string[];
  
  // Sync
  last_synced: Timestamp;
  
  // Tenant Isolation
  tenant_id: string;
}

interface EventParticipant {
  name?: string;
  email: string;
  response_status?: 'accepted' | 'tentative' | 'declined' | 'needsAction';
}

interface MeetingPrep {
  prep_generated_at: Timestamp;
  attendee_context: string[];       // Info about each attendee
  suggested_agenda: string[];
  relevant_documents: string[];     // Living Memory IDs
  discussion_topics: string[];
  open_action_items: string[];      // From CRM
  last_interaction_summary?: string;
  ai_briefing: string;              // Full briefing text
}
```

### 3.4 Core Functions

```typescript
// File: xynergy-calendar-intelligence/src/sync.ts

export async function syncAllCalendars(): Promise<void> {
  /**
   * Sync both Google and Apple calendars
   * Run every 15 minutes via Cloud Scheduler
   */
  
  await Promise.all([
    syncGoogleCalendar(),
    syncAppleCalendar()
  ]);
}

async function syncGoogleCalendar(): Promise<void> {
  const calendar = google.calendar({ version: 'v3', auth: getOAuthClient() });
  
  // Get events from now to 30 days out
  const now = new Date();
  const futureDate = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000));
  
  const response = await calendar.events.list({
    calendarId: 'primary',
    timeMin: now.toISOString(),
    timeMax: futureDate.toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  });
  
  const events = response.data.items || [];
  
  for (const event of events) {
    await processCalendarEvent(event, 'google');
  }
}

async function processCalendarEvent(event: any, source: 'google' | 'apple'): Promise<void> {
  /**
   * Process individual calendar event
   */
  
  // Convert to unified format
  const unifiedEvent = normalizeCalendarEvent(event, source);
  
  // Check if meeting needs AI prep
  if (shouldPrepareForMeeting(unifiedEvent)) {
    const prep = await generateMeetingPrep(unifiedEvent);
    unifiedEvent.ai_prep = prep;
    unifiedEvent.ai_prep_needed = true;
  }
  
  // Match attendees to CRM
  for (const attendee of unifiedEvent.attendees) {
    const crmContact = await findCRMContact(attendee.email);
    if (crmContact) {
      unifiedEvent.related_crm_contact = crmContact.id;
    }
  }
  
  // Save to Firestore
  await saveCalendarEvent(unifiedEvent);
}

async function generateMeetingPrep(event: UnifiedCalendarEvent): Promise<MeetingPrep> {
  /**
   * Generate AI-powered meeting preparation
   */
  
  // Gather context about attendees
  const attendeeContext: string[] = [];
  for (const attendee of event.attendees) {
    const crmContact = await findCRMContact(attendee.email);
    if (crmContact) {
      // Get recent interactions
      const recentInteractions = await getRecentInteractions(crmContact.id);
      // Get open action items
      const openActions = await getOpenActionItems(crmContact.id);
      
      attendeeContext.push(`
${attendee.name || attendee.email}:
- Relationship: ${crmContact.relationship_type}
- Last contact: ${crmContact.last_contact}
- Recent: ${recentInteractions.map(i => i.summary).join(', ')}
- Open items: ${openActions.map(a => a.title).join(', ')}
      `.trim());
    }
  }
  
  // Search Living Memory for relevant context
  const memoryResults = await searchLivingMemory(
    `${event.title} ${event.attendees.map(a => a.name).join(' ')}`
  );
  
  // Build AI prompt
  const prompt = `
Generate meeting preparation for:

MEETING: ${event.title}
TIME: ${event.start.toDate().toLocaleString()}
DURATION: ${calculateDuration(event.start, event.end)}
LOCATION: ${event.location || event.conference_url || 'Not specified'}

ATTENDEES:
${attendeeContext.join('\n\n')}

RELEVANT CONTEXT FROM LIVING MEMORY:
${memoryResults.map(m => `- ${m.title}: ${m.summary}`).join('\n')}

Generate comprehensive meeting preparation including:
1. Brief context about each attendee and your relationship
2. Suggested agenda based on what you know
3. Discussion topics to cover
4. Open action items to follow up on
5. Relevant documents or information to have ready
6. Overall briefing (2-3 paragraphs)

Return as JSON:
{
  "attendee_context": ["context1", "context2"],
  "suggested_agenda": ["item1", "item2"],
  "discussion_topics": ["topic1", "topic2"],
  "open_action_items": ["item1", "item2"],
  "relevant_documents": ["memory_id1", "memory_id2"],
  "ai_briefing": "Full briefing text"
}
`;

  const response = await callAI(prompt);
  return JSON.parse(response);
}
```

### 3.5 API Endpoints

```typescript
// Get unified calendar view
GET /api/xynergyos/v2/calendar/events
Query Params:
  - start: ISO timestamp (default: today)
  - end: ISO timestamp (default: 30 days)
  - source: google|apple|both (default: both)
Response: {
  events: UnifiedCalendarEvent[],
  total: number
}

// Get meeting prep for specific event
GET /api/xynergyos/v2/calendar/events/:id/prep
Response: MeetingPrep

// Create calendar event
POST /api/xynergyos/v2/calendar/events
Body: {
  source: 'google' | 'apple',
  title: string,
  start: ISO timestamp,
  end: ISO timestamp,
  attendees?: string[],
  description?: string,
  location?: string
}
Response: {
  success: boolean,
  event_id: string
}

// Get today's schedule with AI prep
GET /api/xynergyos/v2/calendar/today
Response: {
  events: UnifiedCalendarEvent[],
  ai_summary: string,
  total_hours: number,
  prep_required: number
}
```

---

## 4. CRM ENGINE

### 4.1 Service Specifications

**Service Name:** `xynergy-crm-engine`  
**Runtime:** Cloud Run (TypeScript/Node.js)  
**Region:** us-central1  
**Scaling:** 0-10 instances  
**Memory:** 1 GiB  
**CPU:** 2 vCPU  
**Timeout:** 60 seconds

### 4.2 Data Models

**CRMContact:**

```typescript
interface CRMContact {
  // Identifiers
  id: string;
  
  // Basic Info
  name: string;
  email: string;
  phone?: string;
  company?: string;
  title?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  
  // Profile
  photo_url?: string;
  bio?: string;
  notes?: string;
  
  // Relationship
  type: 'nexus_partner' | 'client' | 'prospect' | 'partner' | 'team' | 'vendor';
  status: 'cold' | 'warm' | 'hot' | 'active' | 'inactive' | 'churned';
  source: 'nexus_beta' | 'referral' | 'inbound' | 'outreach' | 'conference' | 'other';
  tags: string[];
  
  // Projects
  related_projects: string[];       // Continuum project IDs
  
  // Engagement Tracking
  first_contact: Timestamp;
  last_contact: Timestamp;
  total_interactions: number;
  
  // Business Context
  revenue_value: number;            // LTV or contract value
  mrr?: number;                     // If subscription
  onboarding_status?: 'not_started' | 'in_progress' | 'complete' | 'blocked';
  churn_risk?: 'low' | 'medium' | 'high';
  
  // AI Intelligence
  ai_summary: string;               // "Beta partner since Sept, highly engaged..."
  ai_insights: string[];            // ["Potential referral source", "Loves data viz"]
  sentiment_score: number;          // -1 to 1 (from all interactions)
  engagement_score: number;         // 0-100
  predicted_ltv?: number;           // AI prediction
  
  // Communication Preferences
  preferred_channel: 'email' | 'slack' | 'phone' | 'meeting';
  timezone?: string;
  best_contact_time?: string;
  
  // Timestamps
  created_at: Timestamp;
  updated_at: Timestamp;
  
  // Tenant Isolation
  tenant_id: string;
}
```

**CRMInteraction:**

```typescript
interface CRMInteraction {
  // Identifiers
  id: string;
  contact_id: string;
  
  // Interaction Details
  type: 'email_received' | 'email_sent' | 'slack_message' | 'meeting' | 
        'phone_call' | 'note' | 'task_completed' | 'support_ticket';
  
  channel: 'email' | 'slack' | 'calendar' | 'phone' | 'manual';
  
  // Content
  title: string;
  summary: string;
  full_content?: string;
  
  // Sentiment
  sentiment: 'very_positive' | 'positive' | 'neutral' | 'negative' | 'very_negative';
  sentiment_score: number;          // -1 to 1
  
  // Relationships
  related_project?: string;
  related_memory?: string;          // Living Memory entry
  source_message_id?: string;       // Slack or Email message ID
  
  // Action Items
  created_actions?: string[];       // Action item IDs
  
  // Metadata
  duration_minutes?: number;        // For meetings/calls
  attachments?: string[];
  
  // Timestamps
  occurred_at: Timestamp;
  created_at: Timestamp;
  
  // Tenant Isolation
  tenant_id: string;
}
```

**CRMActionItem:**

```typescript
interface CRMActionItem {
  // Identifiers
  id: string;
  contact_id: string;
  
  // Action Details
  title: string;
  description?: string;
  type: 'follow_up' | 'send_document' | 'schedule_meeting' | 
        'check_in' | 'resolve_issue' | 'other';
  
  // Status
  status: 'open' | 'in_progress' | 'complete' | 'cancelled';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  
  // Scheduling
  due_date?: Timestamp;
  reminder_at?: Timestamp;
  
  // Assignment
  assigned_to?: string;             // User ID
  
  // Relationships
  related_project?: string;
  related_interaction?: string;     // Interaction that created this
  
  // Timestamps
  created_at: Timestamp;
  updated_at: Timestamp;
  completed_at?: Timestamp;
  
  // Tenant Isolation
  tenant_id: string;
}
```

### 4.3 Core Functions

```typescript
// File: xynergy-crm-engine/src/contact-manager.ts

export async function findOrCreateContact(email: string, 
                                         source: string): Promise<CRMContact> {
  /**
   * Find existing contact or create new one
   */
  
  // Try to find existing
  const existing = await db.collection('crm_contacts')
    .where('email', '==', email)
    .where('tenant_id', '==', 'clearforge')
    .limit(1)
    .get();
  
  if (!existing.empty) {
    return existing.docs[0].data() as CRMContact;
  }
  
  // Create new contact
  const contact: CRMContact = {
    id: generateId(),
    email,
    name: extractNameFromEmail(email),
    type: determineContactType(source),
    status: 'warm',
    source,
    tags: [],
    related_projects: [],
    first_contact: Timestamp.now(),
    last_contact: Timestamp.now(),
    total_interactions: 0,
    revenue_value: 0,
    sentiment_score: 0,
    engagement_score: 50,
    ai_summary: 'New contact',
    ai_insights: [],
    created_at: Timestamp.now(),
    updated_at: Timestamp.now(),
    tenant_id: 'clearforge',
  };
  
  await db.collection('crm_contacts').doc(contact.id).set(contact);
  
  return contact;
}

export async function logInteraction(params: {
  contact_id: string;
  type: string;
  channel: string;
  title: string;
  summary: string;
  full_content?: string;
  sentiment?: string;
  sentiment_score?: number;
  related_project?: string;
  source_message_id?: string;
}): Promise<CRMInteraction> {
  /**
   * Log interaction with contact
   */
  
  const interaction: CRMInteraction = {
    id: generateId(),
    contact_id: params.contact_id,
    type: params.type as any,
    channel: params.channel as any,
    title: params.title,
    summary: params.summary,
    full_content: params.full_content,
    sentiment: params.sentiment as any || 'neutral',
    sentiment_score: params.sentiment_score || 0,
    related_project: params.related_project,
    source_message_id: params.source_message_id,
    occurred_at: Timestamp.now(),
    created_at: Timestamp.now(),
    tenant_id: 'clearforge',
  };
  
  await db.collection('crm_interactions').doc(interaction.id).set(interaction);
  
  // Update contact stats
  await updateContactStats(params.contact_id, interaction);
  
  // Update AI intelligence
  await updateContactIntelligence(params.contact_id);
  
  return interaction;
}

async function updateContactStats(contact_id: string, 
                                  interaction: CRMInteraction): Promise<void> {
  /**
   * Update contact statistics after interaction
   */
  
  const contact = await getContact(contact_id);
  
  const updates = {
    last_contact: Timestamp.now(),
    total_interactions: contact.total_interactions + 1,
    updated_at: Timestamp.now(),
  };
  
  // Update sentiment (weighted average)
  const newSentiment = (
    (contact.sentiment_score * contact.total_interactions) + 
    interaction.sentiment_score
  ) / (contact.total_interactions + 1);
  
  updates['sentiment_score'] = newSentiment;
  
  // Update engagement score
  updates['engagement_score'] = calculateEngagementScore(contact, interaction);
  
  await db.collection('crm_contacts').doc(contact_id).update(updates);
}

async function updateContactIntelligence(contact_id: string): Promise<void> {
  /**
   * Update AI-generated insights about contact
   */
  
  const contact = await getContact(contact_id);
  const interactions = await getRecentInteractions(contact_id, 20);
  
  const prompt = `
Analyze this contact and provide updated intelligence.

CONTACT: ${contact.name} (${contact.email})
TYPE: ${contact.type}
STATUS: ${contact.status}
COMPANY: ${contact.company || 'Unknown'}
RELATED PROJECTS: ${contact.related_projects.join(', ') || 'None'}

RECENT INTERACTIONS (last 20):
${interactions.map(i => `
- ${i.occurred_at.toDate().toISOString()}: ${i.title}
  Sentiment: ${i.sentiment} (${i.sentiment_score})
  Summary: ${i.summary}
`).join('\n')}

CURRENT AI SUMMARY: ${contact.ai_summary}
CURRENT INSIGHTS: ${contact.ai_insights.join(', ')}

Generate updated intelligence:
{
  "ai_summary": "2-3 sentence summary of this contact and relationship",
  "ai_insights": ["insight1", "insight2", "insight3"],
  "status_recommendation": "cold|warm|hot|active",
  "next_actions": ["action1", "action2"],
  "churn_risk": "low|medium|high",
  "predicted_ltv": number (estimated lifetime value)
}

Consider:
- Engagement level (frequency and quality of interactions)
- Sentiment trend (improving or declining)
- Response patterns (quick responder or slow)
- Value indicators (questions asked, features used)
- Relationship maturity

Respond ONLY with valid JSON.
`;

  const response = await callAI(prompt);
  const intelligence = JSON.parse(response);
  
  // Update contact
  await db.collection('crm_contacts').doc(contact_id).update({
    ai_summary: intelligence.ai_summary,
    ai_insights: intelligence.ai_insights,
    churn_risk: intelligence.churn_risk,
    predicted_ltv: intelligence.predicted_ltv,
    updated_at: Timestamp.now(),
  });
  
  // Create action items if suggested
  for (const action of intelligence.next_actions) {
    await createActionItem({
      contact_id,
      title: action,
      type: 'follow_up',
      priority: 'medium',
      status: 'open',
    });
  }
}

function calculateEngagementScore(contact: CRMContact, 
                                  interaction: CRMInteraction): number {
  /**
   * Calculate 0-100 engagement score
   */
  
  let score = contact.engagement_score;
  
  // Interaction frequency (recent activity = higher score)
  const daysSinceLastContact = daysBetween(contact.last_contact.toDate(), new Date());
  if (daysSinceLastContact < 7) score += 5;
  if (daysSinceLastContact < 3) score += 5;
  if (daysSinceLastContact < 1) score += 10;
  
  // Sentiment impact
  if (interaction.sentiment_score > 0.5) score += 5;
  if (interaction.sentiment_score > 0.8) score += 5;
  if (interaction.sentiment_score < -0.5) score -= 10;
  
  // Response speed (if this is their response to our message)
  // [Calculate response time and adjust score]
  
  // Cap at 0-100
  return Math.max(0, Math.min(100, score));
}
```

### 4.4 API Endpoints

```typescript
// Get all contacts
GET /api/xynergyos/v2/crm/contacts
Query Params:
  - type: nexus_partner|client|prospect|etc
  - status: cold|warm|hot|active
  - project: project_id
  - tag: tag_name
  - search: query string
  - limit: number
  - offset: number
Response: {
  contacts: CRMContact[],
  total: number,
  has_more: boolean
}

// Get single contact with full details
GET /api/xynergyos/v2/crm/contacts/:id
Response: {
  contact: CRMContact,
  interactions: CRMInteraction[],
  action_items: CRMActionItem[],
  related_memories: LivingMemory[]
}

// Create contact
POST /api/xynergyos/v2/crm/contacts
Body: CRMContact (partial)
Response: { contact: CRMContact }

// Update contact
PATCH /api/xynergyos/v2/crm/contacts/:id
Body: Partial<CRMContact>
Response: { contact: CRMContact }

// Log interaction
POST /api/xynergyos/v2/crm/interactions
Body: {
  contact_id: string,
  type: string,
  channel: string,
  title: string,
  summary: string,
  sentiment?: string,
  related_project?: string
}
Response: { interaction: CRMInteraction }

// Get interactions for contact
GET /api/xynergyos/v2/crm/contacts/:id/interactions
Query Params:
  - limit: number
  - offset: number
Response: { interactions: CRMInteraction[], total: number }

// Create action item
POST /api/xynergyos/v2/crm/action-items
Body: CRMActionItem (partial)
Response: { action_item: CRMActionItem }

// Get open action items
GET /api/xynergyos/v2/crm/action-items/open
Query Params:
  - contact_id: string (optional)
  - priority: low|medium|high|urgent
Response: { action_items: CRMActionItem[], total: number }

// Update action item
PATCH /api/xynergyos/v2/crm/action-items/:id
Body: Partial<CRMActionItem>
Response: { action_item: CRMActionItem }

// Get CRM insights
GET /api/xynergyos/v2/crm/insights
Response: {
  total_contacts: number,
  by_type: object,
  by_status: object,
  engagement_distribution: number[],
  churn_risk_contacts: CRMContact[],
  high_value_contacts: CRMContact[],
  needs_attention: CRMContact[],
  recent_interactions: number
}
```

---

## 5. LIVING MEMORY DATABASE VIEWS

### 5.1 Enhanced Data Model

```typescript
interface LivingMemory {
  // Existing fields
  id: string;
  type: string;
  title: string;
  content: string;
  tags: string[];
  created_at: Timestamp;
  
  // NEW: Structured fields for database views
  status?: 'active' | 'archived' | 'draft';
  priority?: 'low' | 'medium' | 'high';
  project?: string;                 // Project ID
  contact?: string;                 // CRM Contact ID
  due_date?: Timestamp;
  completed_date?: Timestamp;
  
  // NEW: Rich content support
  attachments?: {
    type: 'image' | 'pdf' | 'link' | 'video';
    url: string;
    title: string;
  }[];
  
  // NEW: Linked entries
  related_memories?: string[];      // Other memory IDs
  parent_memory?: string;           // Hierarchical organization
  
  // NEW: Custom fields (user-defined)
  custom_fields?: {
    [key: string]: string | number | boolean | Timestamp;
  };
}
```

### 5.2 View Types

**List View:**
- Compact rows with key information
- Sortable columns
- Quick filters
- Bulk actions

**Card View:**
- Visual cards with preview
- Drag-and-drop organization
- Rich previews (images, links)
- Grouping by project/tag

**Timeline View:**
- Chronological display
- Filter by date range
- Show related items
- Historical tracking

**Calendar View:**
- Entries with due dates
- Monthly/weekly views
- Drag to reschedule
- Color-coded by project

**Table View (Database):**
- Full Notion-style database
- Custom columns
- Formulas and rollups
- Relations between entries

### 5.3 API Endpoints

```typescript
// Get memories with view options
GET /api/xynergyos/v2/memory/entries
Query Params:
  - view: list|card|timeline|calendar|table
  - filter: {field: value} (JSON)
  - sort: field:asc|desc
  - project: project_id
  - tag: tag_name
  - search: query
  - limit: number
  - offset: number
Response: {
  entries: LivingMemory[],
  total: number,
  has_more: boolean,
  view_metadata: object
}

// Create memory with structured data
POST /api/xynergyos/v2/memory/entries
Body: LivingMemory
Response: { entry: LivingMemory }

// Update memory
PATCH /api/xynergyos/v2/memory/entries/:id
Body: Partial<LivingMemory>
Response: { entry: LivingMemory }

// Bulk update (for drag-and-drop, status changes)
PATCH /api/xynergyos/v2/memory/entries/bulk
Body: {
  ids: string[],
  updates: Partial<LivingMemory>
}
Response: { updated: number }

// Get related entries (auto-linked)
GET /api/xynergyos/v2/memory/entries/:id/related
Response: { related: LivingMemory[] }
```

---

## 6. RESEARCH SESSION TEMPLATES

### 6.1 Template Structure

```typescript
interface ResearchSessionTemplate {
  id: string;
  name: string;
  description: string;
  category: 'client_project' | 'strategic_planning' | 'content_research' | 
            'competitor_analysis' | 'custom';
  
  // Pre-defined breakouts
  breakouts: {
    name: string;
    description: string;
    suggested_documents?: string[];
    ai_prompt?: string;            // AI instructions for this breakout
  }[];
  
  // Metadata
  created_at: Timestamp;
  usage_count: number;
  is_default: boolean;
}
```

### 6.2 Default Templates

**1. Client Project Research:**
```typescript
{
  name: "Client Project Research",
  description: "Comprehensive research for client projects",
  breakouts: [
    {
      name: "Requirements",
      description: "Client brief, goals, constraints",
      suggested_documents: ["Client brief", "Statement of work"],
      ai_prompt: "Focus on extracting specific requirements and success criteria"
    },
    {
      name: "Competitor Analysis",
      description: "Research on competitors and market",
      ai_prompt: "Analyze competitors' strengths, weaknesses, and opportunities"
    },
    {
      name: "Technical Specs",
      description: "Technical requirements and architecture",
      ai_prompt: "Extract technical requirements and implementation details"
    },
    {
      name: "Deliverables",
      description: "What we're delivering and when",
      ai_prompt: "Organize deliverables, timelines, and milestones"
    }
  ]
}
```

**2. Strategic Planning:**
```typescript
{
  name: "Strategic Planning",
  description: "Quarterly or annual strategic planning",
  breakouts: [
    {
      name: "Market Analysis",
      description: "Industry trends and market conditions"
    },
    {
      name: "Financial Projections",
      description: "Revenue, expenses, profitability"
    },
    {
      name: "Operations",
      description: "Team, processes, infrastructure"
    },
    {
      name: "Risk Assessment",
      description: "Risks and mitigation strategies"
    }
  ]
}
```

**3. Content Research:**
```typescript
{
  name: "Content Research",
  description: "Research for content creation",
  breakouts: [
    {
      name: "Topic Research",
      description: "Core topic and subtopics"
    },
    {
      name: "Competitor Content",
      description: "What others have written"
    },
    {
      name: "Keyword Analysis",
      description: "SEO and search terms"
    }
  ]
}
```

### 6.3 API Endpoints

```typescript
// Get all templates
GET /api/xynergyos/v2/research-sessions/templates
Response: { templates: ResearchSessionTemplate[] }

// Create session from template
POST /api/xynergyos/v2/research-sessions/from-template
Body: {
  template_id: string,
  session_name: string,
  project_id?: string
}
Response: { session: ResearchSession }

// Create custom template
POST /api/xynergyos/v2/research-sessions/templates
Body: ResearchSessionTemplate
Response: { template: ResearchSessionTemplate }
```

---

## 7. IMPLEMENTATION PHASES

### Phase 2A - Month 1 (Weeks 1-5)

**Week 1-2: Infrastructure & Intelligence Gateway**
- [ ] Set up Slack App and OAuth
- [ ] Set up Gmail API access
- [ ] Set up Calendar APIs (Google + Apple)
- [ ] Deploy Intelligence Gateway enhancements
- [ ] Create base data models in Firestore

**Week 3-4: Slack Integration**
- [ ] Build Slack Intelligence Service
- [ ] Implement message ingestion and processing
- [ ] AI analysis and response generation
- [ ] XynergyOS Slack Panel frontend
- [ ] Real-time updates via WebSocket

**Week 5: Basic CRM**
- [ ] CRM data models and structure
- [ ] Contact management functions
- [ ] Auto-create contacts from Slack/Email
- [ ] Basic CRM UI in XynergyOS

**Deliverables:**
- ✅ Slack messages monitored and analyzed
- ✅ AI-drafted Slack responses
- ✅ Basic CRM with auto-population
- ✅ Intelligence Gateway operational

---

### Phase 2A - Month 2 (Weeks 6-10)

**Week 6-7: Gmail Integration**
- [ ] Gmail Intelligence Service deployment
- [ ] Email ingestion and analysis
- [ ] AI email drafting
- [ ] XynergyOS Email Panel frontend
- [ ] Email sending functionality

**Week 8-9: Calendar Integration**
- [ ] Calendar Intelligence Service deployment
- [ ] Unified calendar view (Apple + Gmail)
- [ ] AI meeting prep generation
- [ ] Meeting prep display in XynergyOS
- [ ] Calendar sync automation

**Week 10: CRM Intelligence Layer**
- [ ] Interaction logging from all channels
- [ ] AI-powered contact intelligence
- [ ] Engagement scoring
- [ ] Action item management
- [ ] CRM insights dashboard

**Deliverables:**
- ✅ Gmail fully integrated with AI drafting
- ✅ Unified calendar with meeting prep
- ✅ CRM tracking all interactions
- ✅ Full communication intelligence operational

---

### Phase 2A - Month 3 (Weeks 11-15)

**Week 11-12: Living Memory Database**
- [ ] Enhanced data model with custom fields
- [ ] Multiple view types (list, card, timeline, calendar, table)
- [ ] Filters and search
- [ ] Bulk operations
- [ ] Auto-linking between entries

**Week 13-14: Research Session Templates**
- [ ] Template data structure
- [ ] Default templates (client, strategy, content)
- [ ] Template creation UI
- [ ] Session creation from templates
- [ ] AI-suggested breakouts

**Week 15: Polish & Integration Testing**
- [ ] Full system integration testing
- [ ] Performance optimization
- [ ] UI/UX polish
- [ ] Documentation
- [ ] User acceptance testing

**Deliverables:**
- ✅ Living Memory with database views
- ✅ Research Session templates operational
- ✅ All Phase 2A features integrated
- ✅ System validated and production-ready

---

## 8. SECURITY & PRIVACY

### 8.1 OAuth & API Keys

**Storage:**
- All OAuth tokens in Secret Manager
- Automatic rotation where possible
- Encrypted at rest and in transit
- Never logged or exposed

**Access Control:**
- Service accounts with minimal permissions
- IAM roles strictly scoped
- Audit logging enabled
- Regular access reviews

### 8.2 Data Privacy

**PII Handling:**
- Email content encrypted at rest
- Slack messages encrypted at rest
- Calendar data encrypted at rest
- CRM data encrypted at rest

**Retention:**
- Emails: Retain for 2 years, then archive
- Slack messages: Retain for 1 year, then archive
- CRM interactions: Retain indefinitely
- Calendar events: Sync from source (no independent retention)

**Tenant Isolation:**
- All queries include tenant_id filter
- Firestore security rules enforce isolation
- Service accounts scoped per tenant (future)

### 8.3 AI Content Security

**Prompt Safety:**
- Never include credentials in prompts
- Sanitize user input
- Validate AI responses
- Rate limiting on AI calls

**Content Filtering:**
- Remove sensitive data before AI processing
- Redact PII where appropriate
- Log AI interactions for audit
- Monitor for prompt injection attacks

---

## 9. PERFORMANCE TARGETS

### 9.1 Response Times

| Operation | Target | Maximum |
|-----------|--------|---------|
| Slack message processing | <2s | <5s |
| Email processing | <5s | <10s |
| Calendar sync | <3s | <10s |
| CRM contact lookup | <500ms | <1s |
| AI response generation | <3s | <8s |
| Living Memory search | <1s | <2s |
| Dashboard load | <2s | <5s |

### 9.2 Scalability

**Volume Targets:**
- Slack: 1,000 messages/day
- Email: 500 emails/day
- Calendar: 100 events/day
- CRM: 500 contacts, 10,000 interactions

**Concurrent Users:**
- Initially: 1 (Shawn)
- Phase 3: Up to 5 team members
- Future: Up to 50 (multi-tenant)

### 9.3 Cost Targets

**Monthly Operating Costs (Phase 2A):**
- Slack Intelligence Service: ~$50
- Gmail Intelligence Service: ~$50
- Calendar Intelligence Service: ~$20
- CRM Engine: ~$30
- AI API calls: ~$200 (with caching)
- Storage: ~$20
- **Total: ~$370/month**

---

## 10. TESTING REQUIREMENTS

### 10.1 Unit Testing

**Coverage Target: 80%+**

Critical Functions:
- [ ] Message processing and AI analysis
- [ ] Response generation
- [ ] Contact matching and creation
- [ ] Engagement score calculation
- [ ] Meeting prep generation
- [ ] Living Memory search
- [ ] Template application

### 10.2 Integration Testing

**End-to-End Flows:**
- [ ] Slack message → AI draft → Send → CRM log
- [ ] Email received → AI draft → Send → Living Memory
- [ ] Calendar event → Meeting prep → Display
- [ ] New contact → CRM creation → Intelligence update
- [ ] Research session → Template → Breakouts → AI

### 10.3 Load Testing

**Scenarios:**
- [ ] 100 Slack messages in 1 hour
- [ ] 50 emails in 1 hour
- [ ] 20 calendar events syncing
- [ ] 100 CRM lookups per minute
- [ ] 10 concurrent AI requests

---

## 11. MONITORING & ALERTS

### 11.1 Key Metrics

**Availability:**
- Service uptime (target: 99.9%)
- API response time (p95, p99)
- Error rates

**Performance:**
- AI response time
- Message processing latency
- Database query performance

**Business:**
- Messages processed per day
- AI draft acceptance rate
- Response time to urgent messages
- CRM contacts growth
- Engagement score distribution

### 11.2 Alerts

**Critical:**
- Service down (>5 min)
- Error rate >5%
- AI API failures
- OAuth token expired

**Warning:**
- Response time degradation
- Approaching rate limits
- Storage capacity warnings
- Unusual activity patterns

---

## 12. DEPLOYMENT STRATEGY

### 12.1 Rollout Plan

**Phase 1: Internal Testing (Week 1-2)**
- Deploy to dev environment
- Test with Shawn's accounts
- Validate all integrations
- Fix critical issues

**Phase 2: Limited Production (Week 3-4)**
- Deploy to production
- Monitor closely
- Shawn as only user
- Iterate based on feedback

**Phase 3: Full Production (Week 5+)**
- All features operational
- Monitoring stable
- Ready for team members (future)

### 12.2 Rollback Procedures

**Service Failure:**
1. Automatic rollback to previous version
2. Alert sent to engineering
3. Investigate root cause
4. Fix and redeploy

**Data Issues:**
1. Pause processing
2. Restore from backup
3. Replay missed messages
4. Validate data integrity

---

## 13. SUCCESS CRITERIA

### 13.1 Phase 2A Complete When:

- [ ] Slack integration fully operational
- [ ] Gmail integration fully operational
- [ ] Calendar integration fully operational
- [ ] CRM with 100+ contacts populated
- [ ] Living Memory database views working
- [ ] Research Session templates available
- [ ] All services passing health checks
- [ ] Performance targets met
- [ ] Security review passed
- [ ] Documentation complete
- [ ] Shawn using exclusively for communication management

### 13.2 Business Impact Metrics:

**Target:**
- [ ] 70% reduction in time spent on email/Slack
- [ ] 80% of responses AI-drafted (requiring only approval)
- [ ] 0 missed urgent communications
- [ ] 100% of partner interactions logged
- [ ] <2 seconds to retrieve full contact context

**Qualitative:**
- [ ] Single dashboard replaces multiple tools
- [ ] Context switching eliminated
- [ ] Complete relationship history accessible
- [ ] Proactive opportunity identification
- [ ] ADHD-optimized workflow achieved

---

## APPENDIX A: API AUTHENTICATION

All Intelligence Gateway APIs require authentication:

```typescript
// Request headers
headers: {
  'Authorization': 'Bearer <firebase_id_token>',
  'Content-Type': 'application/json'
}

// Token validation
async function validateRequest(req: Request): Promise<string> {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) throw new UnauthorizedError();
  
  const decodedToken = await admin.auth().verifyIdToken(token);
  return decodedToken.uid;  // User ID
}
```

---

## APPENDIX B: WEBHOOKS & REAL-TIME UPDATES

**WebSocket Connection:**

```typescript
// Client connects
const ws = new WebSocket('wss://intelligence-gateway.../v2/stream');

// Subscribe to topics
ws.send(JSON.stringify({
  action: 'subscribe',
  topics: ['slack', 'email', 'calendar', 'crm']
}));

// Receive updates
ws.onmessage = (event) => {
  const update = JSON.parse(event.data);
  // Handle: new_message, intelligence_updated, response_sent, etc.
};
```

---

## APPENDIX C: COST BREAKDOWN

**Detailed Monthly Costs:**

```
Infrastructure:
- Cloud Run (4 services): $100
- Firestore: $20
- Cloud Storage: $10
- Secret Manager: $5

APIs:
- AI Routing Engine (via internal): $150
- Gmail API: $0 (free tier)
- Calendar API: $0 (free tier)
- Slack API: $0 (free tier)

Bandwidth: $10

TOTAL: ~$295/month (lower than estimate, contingency included)
```

---

**END OF TECHNICAL REQUIREMENTS DOCUMENT**

**Document Control:**
- Version: 1.0
- Status: Ready for Implementation
- Dependencies: Xynergy Platform (deployed), XynergyOS UI Framework (in progress)
- Next Review: After Phase 2A Month 1 completion
- Approval Required: Product Lead, Engineering Lead

**Implementation Start Date:** October 14, 2025  
**Target Completion:** January 15, 2026 (90 days)