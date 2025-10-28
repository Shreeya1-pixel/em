# 🚀 Emergent++ 

**An intelligent AI workspace that remembers, brainstorms, simulates, and designs with you.**

Your creative co-founder for building the future.

![Emergent++](https://img.shields.io/badge/Emergent++-AI%20Workspace-ff3399?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=for-the-badge&logo=fastapi)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb)

---

## 🌟 Features

### 🧠 Persistent Memory
- Remembers your context, goals, and projects over time
- Never repeat yourself
- Intelligent context management
- Searchable memory storage

### 🚀 Startup Simulator
- Simulate business growth like a game
- Track funding rounds and team scaling
- Realistic metrics and projections
- Milestone tracking

### 🎨 Canvas Designer
- AI-powered design generation
- Create slides, mockups, visuals, and logos
- Powered by DALL-E 3
- Instant professional designs

### 💬 Conversational Core
- Chat naturally with Emergent++
- Context-aware conversations
- Brainstorms and builds alongside you
- Actionable insights

---

## 🏗️ Architecture

### Frontend (Next.js)
- **Framework:** Next.js 16 with React 19
- **Styling:** Tailwind CSS with glassmorphism effects
- **Animations:** Framer Motion
- **UI Components:** Radix UI
- **Design:** Futuristic Gen-Z aesthetic

### Backend (FastAPI)
- **Framework:** FastAPI with async support
- **Database:** MongoDB for flexible storage
- **AI:** OpenAI GPT-4o & DALL-E 3
- **Architecture:** Service-oriented with separation of concerns

---

## 📁 Project Structure

```
emergent-plus/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles with theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── code-background.tsx    # Video background
│   ├── hero-section.tsx       # Hero section
│   ├── features-grid.tsx      # Features display
│   └── chat-interface.tsx     # Chat UI
├── backend/               # FastAPI backend
│   ├── server.py          # Main API server
│   ├── models.py          # Data models
│   ├── services/          # Business logic
│   │   ├── ai_service.py
│   │   ├── memory_service.py
│   │   ├── startup_service.py
│   │   └── canvas_service.py
│   ├── requirements.txt   # Python dependencies
│   └── .env              # Environment config
├── lib/                   # Utilities
│   ├── api.ts            # API client
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.10+
- MongoDB running on localhost:27017
- OpenAI API key (optional - users can provide their own)

### 1. Clone Repository
```bash
git clone <your-repo-url>
cd emergent-plus
```

### 2. Install Frontend Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Install Backend Dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 4. Configure Environment

**Frontend `.env`:**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend `.env`:**
```env
MONGO_URL=mongodb://localhost:27017
DATABASE_NAME=emergent_plus
OPENAI_API_KEY=sk-your-key-here  # Optional
```

### 5. Start Services

**Terminal 1 - Frontend:**
```bash
npm run dev
# Runs on http://localhost:3000
```

**Terminal 2 - Backend:**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
# Runs on http://localhost:8001
```

**Terminal 3 - MongoDB:**
```bash
mongod --bind_ip_all
# Runs on mongodb://localhost:27017
```

### 6. Open Application
Navigate to `http://localhost:3000`

---

## 🎨 Design System

### Color Palette
- **Dark Blue:** `oklch(0.12 0.02 250)` - Background
- **Hot Pink:** `oklch(0.65 0.25 330)` - Primary
- **Neon Blue:** `oklch(0.45 0.15 250)` - Accent
- **Grey:** Various shades for depth

### Effects
- **Glassmorphism:** Backdrop blur with transparency
- **Neon Glow:** Pink and blue neon shadows
- **Animations:** Smooth Framer Motion transitions
- **Video Background:** Looping coding aesthetic

---

## 🔌 API Integration

### Using the API Client

```typescript
import { api } from '@/lib/api';

// Set user's API key (optional)
api.setApiKey('sk-your-openai-key');

// Chat with AI
const response = await api.chat('I have a startup idea', 'session-123');

// Create memory
const memory = await api.createMemory(
  'session-123',
  'Build a SaaS product',
  'idea',
  ['saas', 'business']
);

// Create startup
const startup = await api.createStartup(
  'session-123',
  'MyStartup',
  'Description here'
);

// Generate design
const design = await api.generateDesign(
  'session-123',
  'Modern landing page hero',
  'mockup'
);
```

### API Endpoints

See [Backend API Documentation](./backend/API_DOCUMENTATION.md) for complete reference.

---

## 💡 Usage Examples

### Example 1: Brainstorming Session
```typescript
// User chats about their idea
await api.chat('I want to build a productivity app', sessionId);

// Save key insights as memories
await api.createMemory(sessionId, 'AI-powered task prioritization', 'idea', ['productivity', 'ai']);

// Create startup simulation
await api.createStartup(sessionId, 'TaskGenius', 'AI task manager');
```

### Example 2: Design Generation
```typescript
// Generate logo
const logo = await api.generateDesign(
  sessionId,
  'Modern tech startup logo with gradient',
  'logo'
);

// Generate mockup
const mockup = await api.generateDesign(
  sessionId,
  'Mobile app dashboard for analytics',
  'mockup'
);
```

### Example 3: Growth Simulation
```typescript
// Simulate 12 months of growth
const simulation = await api.simulateStartup(startupId, 12);
console.log(simulation.simulation);
```

---

## 🔑 API Key Options

### Option 1: User's Own Key (Recommended)
Users provide their OpenAI API key in the UI.

**Pros:**
- Users control their usage
- No shared rate limits
- Better privacy

### Option 2: System Key
Configure `OPENAI_API_KEY` in backend `.env`.

**Pros:**
- Simpler user experience
- Good for demos

**Cons:**
- Shared rate limits
- Cost management needed

### Option 3: Emergent LLM Key
Use Emergent universal key for multi-provider support.

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest tests/
```

### Manual API Tests
```bash
# Health check
curl http://localhost:8001/api/health

# Create memory
curl -X POST http://localhost:8001/api/memory \
  -H "Content-Type: application/json" \
  -d '{
    "session_id": "test",
    "content": "Test idea",
    "category": "idea",
    "tags": ["test"]
  }'
```

---

## 📊 Database Schema

### Collections

**memories** - User memories and ideas
**conversations** - Chat history
**startups** - Startup simulations
**designs** - Generated designs

See [Backend README](./backend/README.md) for detailed schema.

---

## 🎯 Roadmap

- [ ] User authentication
- [ ] Real-time collaboration
- [ ] Advanced analytics dashboard
- [ ] Export to various formats
- [ ] Mobile app
- [ ] API rate limiting
- [ ] Caching layer
- [ ] Multi-language support

---

## 🛠️ Development

### Code Style
- **Frontend:** Prettier + ESLint
- **Backend:** Black + Flake8

### Git Workflow
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

---

## 📦 Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
npm run start
```

### Backend (Docker)
```dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN pip install -r requirements.txt
COPY backend/ .
CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

### Environment Variables
Set all required env vars in your deployment platform.

---

## 🔒 Security

- [ ] Implement API authentication
- [ ] Add rate limiting
- [ ] Input validation and sanitization
- [ ] HTTPS only in production
- [ ] Secure MongoDB with auth
- [ ] Environment variable encryption
- [ ] CORS restrictions

---

## 📝 License

MIT License - feel free to use for your projects!

---

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repo
2. Create feature branch
3. Add tests
4. Submit PR

---

## 📞 Support

- **Documentation:** See `/backend/API_DOCUMENTATION.md`
- **Issues:** Create GitHub issue
- **Questions:** Open discussion

---

## 🎉 Credits

Built with:
- Next.js & React
- FastAPI
- MongoDB
- OpenAI GPT-4o & DALL-E 3
- Tailwind CSS
- Framer Motion
- Radix UI

---

## ⚡ Performance Tips

1. **MongoDB Indexing:** Add indexes for session_id fields
2. **Caching:** Implement Redis for frequent queries
3. **CDN:** Use CDN for static assets
4. **Code Splitting:** Optimize Next.js bundle size
5. **Database Pooling:** Configure connection pooling

---

**Built with ❤️ for builders, creators, and founders**

Start building with Emergent++ today! 🚀
