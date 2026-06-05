# 🍽️ AI Diet — Intelligent Nutrition Assistant

A modern, full-stack application that delivers personalized diet and nutrition guidance powered by cutting-edge generative AI. Built with a robust Express/MongoDB backend that seamlessly integrates AI services, paired with a responsive React + Vite frontend for an exceptional user experience.

---

## ✨ Key Features

- 🤖 **AI-Powered Chat Assistant** — Intelligent, real-time diet and health guidance
- 🔐 **Secure Authentication** — JWT-based user authentication with MongoDB persistence
- 📊 **Comprehensive Diet Management** — Complete CRUD operations for food tracking and meal planning
- 📱 **Responsive Design** — Mobile-first React frontend with Vite optimization and Tailwind CSS support
- ⚡ **Performance Optimized** — Fast build times and runtime efficiency

---

## 🛠️ Technology Stack

| Layer | Technologies |
|-------|---------------|
| **Backend** | Node.js • Express.js • MongoDB (Mongoose ODM) |
| **AI Integration** | Google Generative AI (Gemini) |
| **Frontend** | React 18+ • Vite • Tailwind CSS |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher with npm
- MongoDB instance (local, Docker, or MongoDB Atlas cloud)
- Google Generative AI API Key (obtain from [Google AI Studio](https://makersuite.google.com/app/apikey))

### Installation

#### 1️⃣ Clone and Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

#### 2️⃣ Configure Environment Variables

Create a `.env` file in the `backend/` directory with the following configuration:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string_here
JWT_SECRET=your_secure_jwt_secret_key_here
GEMINI_API_KEY_2=your_google_generative_ai_key_here
```

#### 3️⃣ Launch the Application

**Backend Server** (from `backend/` directory):

```bash
node server.js
```
> Server runs on `http://localhost:3000` by default

**Frontend Development Server** (from `frontend/` directory):

```bash
npm run dev
```
> Application will be available at `http://localhost:5173`

---

## 📡 API Reference

### Chat Endpoint

**Endpoint:** `POST /api/chat`

**Request:**

```json
{
  "message": "How can I reduce sugar intake?"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Chat response generated successfully",
  "data": "AI-generated nutrition guidance..."
}
```

**Error Handling:** The backend gracefully handles AI service unavailability, returning a 503 status code with a user-friendly retry message.

---

## 🔑 Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server listening port | `3000` |
| `MONGODB_URI` | Complete MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/dbname` |
| `JWT_SECRET` | Secure token signing key | `your_random_secret_key` |
| `GEMINI_API_KEY_2` | Google Generative AI authentication key | `sk-xxxxxxxxxxxxx` |

---

## 📁 Project Architecture

```
backend/
  ├── src/
  │   ├── app.js                 # Express application setup & route initialization
  │   ├── controller/            # Request handlers (auth, chat, diet, food)
  │   ├── routes/                # API route definitions
  │   ├── models/                # Mongoose data schemas
  │   ├── db/                    # Database connection management
  │   └── utils/                 # Helper functions (chat integration, diet logic)
  ├── server.js                  # Server entry point
  └── package.json

frontend/
  ├── src/
  │   ├── components/            # Reusable React components
  │   ├── pages/                 # Page-level components
  │   ├── assets/                # Images and static resources
  │   ├── App.jsx                # Main application component
  │   └── main.jsx               # React DOM entry point
  ├── vite.config.js             # Vite configuration
  └── package.json
```

---

## 📝 License & Support

For questions, issues, or contributions, please refer to the project repository.

- `frontend/` — React app built with Vite

## Contributing

Contributions are welcome. Please open issues for bugs or feature requests, and submit pull requests for code changes. Keep changes small and focused, and include tests where relevant.

## License

This project is provided as-is; add a license file if you intend to publish or distribute.

## Contact

If you need help running the project or integrating your Gemini API key, open an issue or contact the maintainer.

