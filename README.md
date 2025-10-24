# Gemini Chat UI Clone

A full-stack chat application that recreates Google's Gemini AI interface. Built with React and Express, it's fully responsive and works great on desktop and mobile.

**Live Demo:** https://gemini-clone-app-orpin.vercel.app

*Note: This uses Groq's Llama 3.1 8B model for responses, not Google's actual Gemini model.*

## Screenshots

<img width="1469" height="835" alt="Main Page Dark Mode" src="https://github.com/user-attachments/assets/15b6f982-13fc-465e-8942-6bac0ef10319" />
<img width="1470" height="832" alt="Main Page Light Mode" src="https://github.com/user-attachments/assets/05e2b3d2-50b2-4dea-94cd-129e5fa89f7a" />
<img width="1469" height="836" alt="Prompt" src="https://github.com/user-attachments/assets/ed792add-ebe0-4ec9-94d9-b25f420c68a9" />
<img width="571" height="724" alt="Small screen" src="https://github.com/user-attachments/assets/fbca318a-06d0-4e9e-ad4e-0bd35de09aaf" />

## Features

- **Responsive design** - Works on desktop, tablet, and mobile with a smooth sliding sidebar
- **Light/Dark mode** - Toggle between themes
- **Chat history** - Keeps track of your conversations
- **Real-time responses** - Streams AI responses as they generate
- **Clean UI** - Closely matches Gemini's modern interface

## Tech Stack

**Frontend:**
- React + TypeScript
- Vite
- Tailwind CSS
- Context API for state management

**Backend:**
- Node.js + Express
- Groq SDK for AI responses

## Running Locally

You'll need a Groq API key (get one at [console.groq.com](https://console.groq.com)).

**1. Clone the repo**
```bash
git clone https://github.com/ibrahimi46/gemini-clone.git
cd gemini-clone
```

**2. Set up the backend**
```bash
cd gemini-clone-backend
npm install
```

Create a `.env` file:
```
GROQ_API_KEY=your_api_key_here
```

Start the server:
```bash
node server.js
```

**3. Set up the frontend**

In a new terminal:
```bash
cd gemini-clone
npm install
```

Create a `.env` file:
```
VITE_API_URL=http://localhost:5001
```

Start the dev server:
```bash
npm run dev
```

Open your browser to the URL shown (usually `http://localhost:5173`).

## Deployment

- Frontend: Deployed on Vercel
- Backend: Deployed on Render

## License

MIT License - feel free to use this project however you want.
