```
# 🧠 DeepSeek AI · Expert & Instant

**DeepSeek AI** is a free, multi-language artificial intelligence assistant powered by **DeepSeek-V3**, one of the most advanced large language models in the world, accessed through the OpenRouter API. This project brings the power of state-of-the-art AI directly to your browser with no registration, no login, and no cost.

The application was built from scratch by **Sepehr**, an 11-year-old self-taught developer from Iran. It represents months of learning, experimentation, and pure dedication to understanding how modern AI systems work and how to make them accessible to everyone.

---

## ✨ Features

### 🧠 Dual Mode System (Permanent Choice)
- **Expert Mode** — Provides detailed, comprehensive answers with deep reasoning. Suitable for research, learning, and complex problem-solving. The AI takes its time to think and delivers thorough responses.
- **Instant Mode** — Delivers fast, concise, and to-the-point answers. Perfect for quick questions, simple tasks, and everyday conversations. No fluff, just the essential information.
- **Important:** The mode selection is permanent and cannot be changed later. This ensures a consistent experience tailored to each user's needs.

### 🌐 Multi-Language Support
The interface and AI responses are available in four languages:
- **English** (Default)
- **فارسی** (Persian)
- **العربية** (Arabic)
- **Türkçe** (Turkish)

Language switching is done through the Settings panel and takes effect immediately across the entire application, including the welcome message, placeholder text, and error messages.

### 💬 Real-Time Chat Interface
- Typing indicator with animated dots shows when the AI is processing a response
- Messages appear with smooth slide-up animations
- User messages and AI responses are visually distinct with different bubble styles and avatars
- The chat area auto-scrolls to show the latest message
- Code blocks are formatted with monospace font and dark background for readability

### 💾 Local Chat History
- All conversations are saved automatically to the browser's localStorage
- History persists between sessions — close the browser and come back later
- A dedicated button allows clearing the chat history with a confirmation dialog
- Each user's history is isolated and private to their device

### 🎨 Modern Dark UI Design
- Inspired by Samsung One UI and modern design principles
- Deep dark color palette with purple accent colors
- Smooth rounded corners and subtle shadows
- Clean, minimal interface with no distractions
- Fully responsive — works perfectly on phones, tablets, and desktops

### 🔒 Security & Privacy
- The API key is protected using HTTP Referrer headers
- No user data is collected, stored, or shared
- No accounts, no passwords, no tracking
- Open source with MIT License for transparency

### ⚖️ Legal Protection
- Full copyright notice embedded in the source code
- MIT License file included in the repository
- Clear terms of use protecting the creator's intellectual property rights

---

## 🚀 Live Demo

The application is live and ready to use:

👉 **[https://s75577947-droid.github.io/deepseek.ai](https://s75577947-droid.github.io/deepseek.ai)**

Open the link, choose your mode, and start chatting with DeepSeek-V3 instantly.

---

## 📂 Repository Structure

```

deepseek.ai/
├── index.html      # Complete application (HTML + CSS + JavaScript)
├── LICENSE         # MIT License with copyright protection
└── README.md       # Comprehensive documentation

```

The entire application is contained in a single HTML file, making it extremely portable and easy to deploy on any static hosting service.

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla, no frameworks) |
| **AI Model** | DeepSeek-V3 via OpenRouter API |
| **Storage** | Browser localStorage |
| **Hosting** | GitHub Pages (free static hosting) |
| **Design** | Custom CSS with CSS Variables and Flexbox |

---

## 📦 How to Use

### For Users:
1. Open the live demo link in any modern browser
2. Select **Expert** or **Instant** mode (this choice is permanent)
3. Optionally change the language in Settings (gear icon)
4. Type your question and press Enter or click the send button
5. Wait for the AI to respond — a typing indicator will appear
6. Your conversation is saved automatically

### For Developers:
1. Clone the repository:
```bash
git clone https://github.com/s75577947-droid/deepseek.ai.git
```

2. Open index.html in any browser to run locally
3. To use your own API key, edit the API_CONFIG object in the JavaScript section
4. Deploy to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

---

⚙️ Setting Up Your Own API Key

1. Go to OpenRouter and create a free account
2. Navigate to the API Keys section and generate a new key
3. Open index.html and find the API_CONFIG object at the top of the script
4. Replace the apiKey value with your own key
5. Update the HTTP-Referer header to match your deployment URL
6. Save and deploy

---

👨‍💻 About the Creator

Sepehr is an 11-year-old self-taught programmer and AI enthusiast from Iran. He built this project entirely on his own, using only his Android phone and free online tools. His journey into programming started with curiosity and grew into a deep passion for artificial intelligence, web development, and cybersecurity.

Sepehr is also skilled in:

· Android customization (rooting, Magisk, Odin, Termux)
· Kotlin and XML for native Android app development
· Web security scanning and ethical hacking
· Building AI-powered applications with free APIs

This project is the result of countless hours of learning, coding, debugging, and refusing to give up — even when things didn't work the first, second, or tenth time.

---

🙏 Acknowledgments

· DeepSeek — For creating the powerful V3 model
· OpenRouter — For providing free API access
· GitHub — For free hosting and version control
· The open-source community — For endless learning resources
· Family and friends — For their support and encouragement

---

📜 License

This project is licensed under the MIT License — see the LICENSE file for details.

© 2026 Sepehr. All rights reserved. Any unauthorized copying, reproduction, or theft of this code will be subject to legal prosecution.

---

📧 Contact & Support

For questions, feedback, or collaboration:

· GitHub: @s75577947-droid
· Repository: deepseek.ai

---

⭐ Star This Project

If you find this project useful or inspiring, please consider giving it a star on GitHub. It helps others discover it and motivates the creator to keep building!

---

Built with ❤️ by an 11-year-old who believes age is just a number.

```
