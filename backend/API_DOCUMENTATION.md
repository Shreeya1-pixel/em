# Emergent++ Backend API Documentation

## Base URL
```
http://localhost:8001/api
```

## Features

### 1. **Conversational AI with Memory**
Chat with Emergent++ AI that remembers context across conversations.

### 2. **Persistent Memory Storage**
Store ideas, goals, projects, and notes with categories and tags.

### 3. **Startup Simulator**
Create and simulate startup growth with realistic metrics and milestones.

### 4. **Canvas Designer**
Generate AI-powered designs using DALL-E 3.

---

## API Endpoints

### Health Check

#### `GET /api/health`
Check if the API is running.

**Response:**
```json
{
  "status": "healthy",
  "service": "Emergent++ Backend"
}
```

---

## Chat Endpoints

### Chat with AI

#### `POST /api/chat`
Send a message to Emergent++ and get AI response.

**Request Body:**
```json
{
  "message": "I have an idea for a SaaS product",
  "session_id": "user-session-123",
  "user_api_key": "sk-..." // Optional: your OpenAI API key
}
```

**Response:**
```json
{
  "response": "That's exciting! Tell me more about your SaaS idea...",
  "session_id": "user-session-123"
}
```

### Get Chat History

#### `GET /api/chat/history/{session_id}?limit=20`
Get conversation history for a session.

**Response:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Hello",
      "timestamp": "2024-10-28T10:00:00"
    }
  ]
}
```

---

## Memory Endpoints

### Create Memory

#### `POST /api/memory`
Store a new memory.

**Request Body:**
```json
{
  "session_id": "user-session-123",
  "content": "Build a project management tool for remote teams",
  "category": "idea",
  "tags": ["saas", "productivity", "remote-work"]
}
```

**Categories:** `idea`, `goal`, `project`, `note`

### Get Memories

#### `GET /api/memory/{session_id}?category=idea`
Get all memories for a session, optionally filtered by category.

**Response:**
```json
{
  "memories": [...],
  "count": 5
}
```

### Search Memories

#### `GET /api/memory/search/{session_id}?q=saas`
Search memories by content or tags.

### Delete Memory

#### `DELETE /api/memory/{memory_id}`
Delete a specific memory.

---

## Startup Simulator Endpoints

### Create Startup

#### `POST /api/startup`
Create a new startup simulation.

**Request Body:**
```json
{
  "session_id": "user-session-123",
  "name": "TaskFlow",
  "description": "AI-powered project management for remote teams",
  "user_api_key": "sk-..." // Optional
}
```

**Response:**
```json
{
  "success": true,
  "startup": {
    "id": "startup-uuid",
    "name": "TaskFlow",
    "stage": "idea",
    "metrics": {
      "users": 0,
      "revenue": 0.0,
      "funding": 0.0,
      "team_size": 1
    }
  }
}
```

### Get Startups

#### `GET /api/startup/{session_id}`
Get all startups for a session.

### Get Startup Details

#### `GET /api/startup/detail/{startup_id}`
Get specific startup with full details.

### Simulate Startup Growth

#### `POST /api/startup/simulate`
Generate realistic growth simulation.

**Request Body:**
```json
{
  "startup_id": "startup-uuid",
  "months": 6,
  "user_api_key": "sk-..." // Optional
}
```

**Response:**
```json
{
  "success": true,
  "startup_id": "startup-uuid",
  "simulation": {
    "simulation": "Monthly growth projections..."
  }
}
```

### Delete Startup

#### `DELETE /api/startup/{startup_id}`
Delete a startup.

---

## Canvas Designer Endpoints

### Generate Design

#### `POST /api/canvas/generate`
Generate AI-powered design with DALL-E.

**Request Body:**
```json
{
  "session_id": "user-session-123",
  "prompt": "Modern SaaS landing page hero section",
  "design_type": "mockup",
  "user_api_key": "sk-..." // Optional
}
```

**Design Types:** `slide`, `mockup`, `visual`, `logo`

**Response:**
```json
{
  "success": true,
  "design": {
    "id": "design-uuid",
    "title": "Mockup Design",
    "prompt": "Modern SaaS landing page hero section",
    "image_url": "https://...",
    "design_type": "mockup"
  }
}
```

### Get Designs

#### `GET /api/canvas/{session_id}`
Get all designs for a session.

### Delete Design

#### `DELETE /api/canvas/{design_id}`
Delete a design.

---

## Session Management

### Get Session Summary

#### `GET /api/session/{session_id}/summary`
Get complete overview of a session.

**Response:**
```json
{
  "session_id": "user-session-123",
  "memories_count": 10,
  "startups_count": 3,
  "designs_count": 5,
  "messages_count": 25,
  "summary": {
    "memories": [...],
    "startups": [...],
    "designs": [...]
  }
}
```

---

## API Key Configuration

### Option 1: User's Own API Key
Pass `user_api_key` in request body for endpoints that use AI:
- `/api/chat`
- `/api/startup/simulate`
- `/api/canvas/generate`

### Option 2: System Default Key
Set `OPENAI_API_KEY` in `/app/backend/.env` file.

### Option 3: Emergent LLM Key
Configure Emergent universal key in environment variables.

---

## Error Handling

All endpoints return standard HTTP status codes:
- `200`: Success
- `404`: Resource not found
- `500`: Server error

**Error Response Format:**
```json
{
  "detail": "Error message here"
}
```

---

## Example Usage

### Complete Flow Example

```bash
# 1. Create a session and chat
curl -X POST http://localhost:8001/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "I want to build a productivity app",
    "session_id": "demo-session",
    "user_api_key": "sk-..."
  }'

# 2. Save idea as memory
curl -X POST http://localhost:8001/api/memory \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "demo-session",
    "content": "Productivity app with AI task prioritization",
    "category": "idea",
    "tags": ["productivity", "ai"]
  }'

# 3. Create startup simulation
curl -X POST http://localhost:8001/api/startup \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "demo-session",
    "name": "TaskGenius",
    "description": "AI-powered task prioritization app"
  }'

# 4. Generate a design
curl -X POST http://localhost:8001/api/canvas/generate \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "demo-session",
    "prompt": "Mobile app interface for task management",
    "design_type": "mockup",
    "user_api_key": "sk-..."
  }'

# 5. Get session summary
curl http://localhost:8001/api/session/demo-session/summary
```

---

## Database Collections

MongoDB Collections:
- `conversations` - Chat history
- `memories` - Stored memories
- `startups` - Startup simulations
- `designs` - Generated designs

---

## Tech Stack

- **Framework:** FastAPI
- **Database:** MongoDB
- **AI:** OpenAI GPT-4o, DALL-E 3
- **Python:** 3.10+

---

## Notes

1. **Session IDs**: Use unique session IDs for each user. Can be UUID or any unique string.
2. **API Keys**: For production, implement proper API key management.
3. **Rate Limiting**: Consider adding rate limiting for production use.
4. **Caching**: Implement caching for frequently accessed data.
