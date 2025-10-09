# **Gemini Chat UI Clone (Full Stack)**

Frontend deployed with Vercel: https://gemini-clone-app-orpin.vercel.app
Backend hosted on Render: https://gemini-clone-backend-yusb.onrender.com

A highly responsive, full-stack application that accurately replicates the modern user interface and core chat functionality of Google's Gemini AI. 
This project showcases proficiency in modern React state management, complex responsive design, and decoupled API integration.

Try the App!
[🚀 Live Demo](https://gemini-clone-app-orpin.vercel.app)

Note: The AI model used for generation is Groq's high-performance Llama 3.1 8B, not Google's proprietary Gemini model

📸 Project Showcase

<img width="1469" height="835" alt="Main Page Dark Mode" src="https://github.com/user-attachments/assets/15b6f982-13fc-465e-8942-6bac0ef10319" />
<img width="1470" height="832" alt="Main Page Light Mode" src="https://github.com/user-attachments/assets/05e2b3d2-50b2-4dea-94cd-129e5fa89f7a" />
<img width="1469" height="836" alt="Prompt" src="https://github.com/user-attachments/assets/ed792add-ebe0-4ec9-94d9-b25f420c68a9" />
<img width="571" height="724" alt="Small screen" src="https://github.com/user-attachments/assets/fbca318a-06d0-4e9e-ad4e-0bd35de09aaf" />

---

✨ Key Features & Technical Highlights

| Feature | Description | Skills Demonstrated |
| :--- | :--- | :--- |
| **Full Responsiveness** | Seamless adaptation to desktop, tablet, and mobile, including a sliding mobile sidebar menu. | Tailwind CSS, Media Queries, UI/UX Design |
| **Dynamic Sidebar** | Advanced sidebar logic with state management for collapse/expand and persistent hover effects (desktop). | React Hooks (`useState`, `useEffect`), Event Handling |
| **Typed State Management** | Complex chat history and context handled via a dedicated `ChatContext` with **TypeScript interfaces**. | React Context API, TypeScript Interfaces & Generics |
| **Asynchronous API** | Client-side (Vite) communication with a custom Express/Groq backend, managing loading states and error handling. | `fetch`, Promises, Full-Stack Integration |
| **Model Simulation** | Frontend components simulating different AI models and account management dropdowns. | Conditional Rendering, Dropdown Management (`useRef`) |

---

💻 Tech Stack

The project is structured into two decoupled services housed within a single repository:

### Frontend (`gemini-clone`)
* **Framework:** React (Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **State:** React Context API

### Backend (`gemini-clone-backend`)
* **Runtime:** Node.js
* **Framework:** Express
* **AI Integration:** Groq SDK (`llama-3.1-8b-instant`)


---

🚀 Installation and Local Setup

To run the full application locally, you will need a Groq API Key.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/ibrahimi46/gemini-clone.git](https://github.com/ibrahimi46/gemini-clone.git)
    cd gemini-clone
    ```

2.  **Setup Backend (`gemini-clone-backend`)**
    ```bash
    cd gemini-clone-backend
    npm install
    # 🛑 IMPORTANT: Create a .env file here and add your key:
    # GROQ_API_KEY="YOUR_SECRET_GROQ_KEY"
    node server.js
    # The API will run on http://localhost:5001
    ```

3.  **Setup Frontend (`gemini-clone`)**
    ```bash
    cd ../gemini-clone
    npm install
    # 🛑 IMPORTANT: Create a .env file here and set the local API URL:
    # VITE_API_URL="http://localhost:5001" 
    npm run dev
    # The frontend will open, communicating with your local backend.
    ```

---

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
