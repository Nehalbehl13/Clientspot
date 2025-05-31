# 🧠 Xeno Mini CRM Platform – SDE Internship Assignment 2025

Welcome! This repository contains my submission for the Xeno SDE Internship Assignment – 2025. It includes a full-stack Mini CRM Platform with customer segmentation, campaign management, and AI-powered insights.

## 🚀 Project Overview

Build a Mini CRM Platform to:

- Ingest customer and order data
- Create dynamic customer segments
- Deliver personalized campaigns
- Track campaign performance
- Use AI to enhance user experience and insights

## 📦 Features

### ✅ Data Ingestion APIs

- Secure REST APIs for customers & orders
- Swagger/Postman documentation
- Optional: Pub-Sub using Redis/Kafka for async processing

### ✅ Campaign Creation UI

- Segment builder with dynamic AND/OR rule logic
- Audience preview
- Campaign history with stats

### ✅ Campaign Delivery & Logging

- Simulated vendor message delivery
- Delivery receipt handling with status updates
- Communication log with sent/failed stats

### ✅ Authentication

- Google OAuth 2.0 protected routes

### ✅ AI Integration

- \[Selected Use Case: e.g., Natural Language to Rule Conversion or AI-Powered Message Suggestions]
- AI API used: \[e.g., OpenAI GPT-4]

## 🛠 Tech Stack

| Layer         | Technology             |
| ------------- | ---------------------- |
| Frontend      | React.js (Vite)        |
| Backend       | Node.js + Express      |
| Database      | MongoDB                |
| Auth          | Google OAuth 2.0       |
| AI            | OpenAI API             |
| Pub-Sub (Opt) | Redis Streams          |
| Hosting       | \[e.g., Vercel/Render] |

## 🧱 Architecture Diagram

```mermaid
graph TD
  A[Frontend: React] -->|OAuth Login| B[Google OAuth]
  A --> C[API Server: Node.js]
  C --> D[Database: MongoDB]
  C --> E[Vendor API Simulation]
  C --> F[AI Service (OpenAI)]
  C --> G[Redis/Kafka Consumer (optional)]
  E --> C
```

## 🧪 Local Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/xeno-mini-crm.git
cd xeno-mini-crm

# 2. Install dependencies
cd client
npm install
cd ../server
npm install

# 3. Setup environment variables (.env files for client and server)

# 4. Run locally
cd server
npm run dev
cd ../client
npm run dev
```

## 📊 AI Features Used

| Feature                        | Description                                           |
| ------------------------------ | ----------------------------------------------------- |
| AI-Powered Message Suggestions | Generates 2-3 message variants based on campaign goal |
| Tool Used                      | OpenAI GPT-4 API                                      |

## ⚠️ Known Limitations / Assumptions

- Delivery stats are simulated (\~90% success rate).
- Audience size preview is estimated using mock data.
- Redis-based pub-sub is optional and may require setup.
- AI suggestions are mock-driven for demo purposes.

## 📽 Demo

🎥 [Link to Demo Video](https://link-to-demo-video.com)

## 🌐 Live Deployment

🔗 [Live Demo](https://your-deployed-url.com)

## 📥 Submission

- ✅ GitHub Repo
- ✅ Hosted URL
- ✅ Demo Video
- ✅ README with setup, architecture, and AI details

## 👨‍💻 Developed By

**Nehal Behl**
[LinkedIn](https://www.linkedin.com/in/nehal-behl-515931277/) | [GitHub](https://github.com/Nehalbehl13)

> > > > > > > cf3b6ed (commit)
