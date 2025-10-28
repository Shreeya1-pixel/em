# 🚀 Emergent++ Quick Start Guide

Get up and running with Emergent++ in 5 minutes!

## ✅ Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Python 3.10+ installed  
- [ ] MongoDB running
- [ ] OpenAI API key (optional - users can provide their own)

## 📦 Installation

### Step 1: Install Dependencies

**Frontend:**
```bash
npm install --legacy-peer-deps
```

**Backend:**
```bash
cd backend
pip install -r requirements.txt
```

### Step 2: Configure Environment

**Create `/app/.env`:**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Update `/app/backend/.env`:**
```env
MONGO_URL=mongodb://localhost:27017
DATABASE_NAME=emergent_plus
OPENAI_API_KEY=  # Optional - leave empty to let users provide their own
```

### Step 3: Start Services

**Option A: Using Supervisor (Recommended)**
```bash
sudo supervisorctl start nextjs
sudo supervisorctl start backend
sudo supervisorctl start mongodb
```

**Option B: Manual Start**

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Terminal 3 - MongoDB:
```bash
mongod --bind_ip_all
```

### Step 4: Verify Everything Works

**Check Services:**
```bash
# Backend health
curl http://localhost:8001/api/health

# Frontend
open http://localhost:3000
```

## 🎯 Your First Session

### 1. Open the App
Navigate to `http://localhost:3000`

### 2. Start Chatting
- Type a message in the chat interface
- Emergent++ will respond and remember your context

### 3. Create a Memory
```bash
curl -X POST http://localhost:8001/api/memory \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "my-first-session",
    "content": "Build a SaaS product for remote teams",
    "category": "idea",
    "tags": ["saas", "remote", "productivity"]
  }'
```

### 4. Create a Startup
```bash
curl -X POST http://localhost:8001/api/startup \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "my-first-session",
    "name": "RemoteFlow",
    "description": "Collaboration platform for distributed teams"
  }'
```

### 5. Generate a Design (Requires OpenAI API Key)
```bash
curl -X POST http://localhost:8001/api/canvas/generate \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "my-first-session",
    "prompt": "Modern SaaS landing page hero section",
    "design_type": "mockup",
    "user_api_key": "sk-your-openai-key"
  }'
```

## 🔑 API Key Setup

### For Demo/Testing (No API Key)
You can test all features except:
- AI Chat responses (POST /api/chat)
- Startup simulation (POST /api/startup/simulate)
- Design generation (POST /api/canvas/generate)

### To Enable All Features

**Option 1: Set System Key**
Add to `/app/backend/.env`:
```env
OPENAI_API_KEY=sk-your-key-here
```

**Option 2: User Provides Key**
Pass `user_api_key` in API requests:
```json
{
  "message": "Hello",
  "session_id": "user-123",
  "user_api_key": "sk-user-key-here"
}
```

## 📱 Using the Frontend

### Features Available

1. **Hero Section**
   - Beautiful glassmorphism design
   - Animated gradient orbs
   - Video background

2. **Features Grid**
   - Persistent Memory
   - Startup Simulator
   - Canvas Designer
   - Conversational Core

3. **Chat Interface**
   - Real-time messaging
   - Context-aware responses
   - Memory retention

## 🧪 Quick API Tests

### Test All Endpoints

```bash
# Health check
curl http://localhost:8001/api/health

# Create memory
curl -X POST http://localhost:8001/api/memory \
  -H "Content-Type: application/json" \
  -d '{"session_id": "test", "content": "Test memory", "category": "note", "tags": []}'

# Get memories
curl http://localhost:8001/api/memory/test

# Create startup
curl -X POST http://localhost:8001/api/startup \
  -H "Content-Type: application/json" \
  -d '{"session_id": "test", "name": "TestStartup", "description": "Test description"}'

# Get startups
curl http://localhost:8001/api/startup/test

# Get session summary
curl http://localhost:8001/api/session/test/summary
```

## 🐛 Troubleshooting

### Frontend not loading?
```bash
# Check if Next.js is running
sudo supervisorctl status nextjs

# View logs
tail -f /var/log/supervisor/nextjs.out.log
```

### Backend errors?
```bash
# Check backend status
sudo supervisorctl status backend

# View logs
tail -f /var/log/supervisor/backend.err.log
```

### MongoDB connection issues?
```bash
# Check MongoDB
sudo supervisorctl status mongodb

# Test connection
mongosh --eval "db.runCommand({ ping: 1 })"
```

### Port already in use?
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Kill process on port 8001
lsof -ti:8001 | xargs kill -9
```

## 📚 Next Steps

1. **Read Full Documentation**
   - Frontend: `/app/README.md`
   - Backend: `/app/backend/README.md`
   - API: `/app/backend/API_DOCUMENTATION.md`

2. **Explore API Client**
   - Check `/app/lib/api.ts` for TypeScript client

3. **Customize Design**
   - Edit `/app/app/globals.css` for colors
   - Modify components in `/app/components/`

4. **Add Features**
   - Extend backend services
   - Create new API endpoints
   - Build custom UI components

## 🎨 Customization Tips

### Change Colors
Edit `/app/app/globals.css`:
```css
--primary: oklch(0.65 0.25 330); /* Hot pink */
--accent: oklch(0.45 0.15 250);  /* Neon blue */
```

### Add New API Endpoint
1. Add route in `/app/backend/server.py`
2. Create service method if needed
3. Update `/app/lib/api.ts` client

### Modify Video Background
Replace video URL in `/app/components/code-background.tsx`:
```typescript
<source src="your-video-url.mp4" type="video/mp4" />
```

## 💡 Pro Tips

1. **Session Management**: Use consistent session IDs to maintain context
2. **Memory Categories**: Use appropriate categories (idea, goal, project, note)
3. **Tags**: Add descriptive tags for better searching
4. **API Keys**: Keep API keys secure, never commit to git
5. **Monitoring**: Watch logs for errors and performance issues

## 🔄 Restart Services

```bash
# Restart all
sudo supervisorctl restart all

# Restart individually
sudo supervisorctl restart nextjs
sudo supervisorctl restart backend
```

## 📊 Monitor Usage

```bash
# Check service status
sudo supervisorctl status

# View all logs
tail -f /var/log/supervisor/*.log

# MongoDB logs
tail -f /var/log/mongodb.out.log
```

## 🎉 Success!

You're all set! Start building with Emergent++:

1. Open `http://localhost:3000`
2. Chat with your AI co-founder
3. Save ideas as memories
4. Simulate your startup
5. Generate amazing designs

**Happy building! 🚀**

---

Need help? Check the full documentation or create an issue.
