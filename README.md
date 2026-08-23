# ✉️ AI Email Reply Assistant

An AI-powered email reply generator built with **Spring Boot**, **React**, and a **Chrome extension**.
Paste any email (or open one in Gmail) and get a professional, tone-adjusted reply generated using Google's **Gemini** model.

> 🎯 Two ways to use it: a standalone **web app** and a **Chrome extension** that adds an **"AI Reply"** button inside Gmail.

---

## 🧩 Tech Stack

- **Backend:** Java 21, Spring Boot 3.5, Spring WebFlux (`WebClient`), Gemini API
- **Frontend:** React 19, Vite, Material UI (MUI), Axios
- **Extension:** Chrome Manifest V3 (content script injected into Gmail)

---

## 📸 Features

- 🤖 Generate professional email replies from email content
- 🎨 Choose a tone: Professional / Casual / Friendly
- 🌗 Light & dark mode in the web app
- 📋 One-click copy to clipboard
- 📨 **Gmail integration** via the Chrome extension — an "AI Reply" button appears in the compose toolbar

---

## 🗂️ Project Structure

```text
Email-Assistant/
├── email-writer-sb/       # Spring Boot backend
├── emai-writer-react/     # React + Vite web app
├── emailWriterExt/        # Chrome extension

## 🚀 Run Locally

### 1. Backend

Requires **Java 21** and a **Gemini API key**.

```bash
cd email-writer-sb
mvnw.cmd spring-boot:run
```

Set your Gemini API key as an environment variable before starting the backend.

### 2. Web App

Requires **Node.js 18+**.

```bash
cd emai-writer-react
npm install
npm run dev
```

The web app runs locally at `http://localhost:5173`.

### 3. Chrome Extension

1. Open Chrome and go to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the `emailWriterExt` folder
5. Open Gmail and use the **AI Reply** button

---


## 👤 Author

**Meena** — [GitHub](https://github.com/meenaprajapat)
