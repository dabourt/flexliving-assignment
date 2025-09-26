# FlexLiving Reviews Dashboard 🚀

A full-stack assignment project for **FlexLiving** that implements a reviews moderation system.  
Built with **Node.js + Express (backend)** and **React + Vite + TailwindCSS (frontend)**.

---

## 📂 Project Structure
root/
├─ backend/ # Node.js + Express API
│ ├─ src/
│ │ ├─ routes/ # Reviews endpoints
│ │ ├─ services/ # Data handling (mock + approved store)
│ │ └─ data/ # JSON storage (mock_reviews.json, approved_reviews.json)
│ └─ package.json
│
└─ frontend/ # React + Vite + Tailwind dashboard
├─ src/
│ ├─ api/ # Axios API functions
│ ├─ pages/ # Dashboard + PublicReviews
│ ├─ components/ # Reusable UI components (ReviewCard)
│ └─ App.jsx
├─ tailwind.config.js
├─ vite.config.js
└─ package.json


---

## ⚙️ Backend (Express API)

### Endpoints
- `GET /api/reviews/hostaway` → Fetch normalized reviews (mock data).
- `POST /api/reviews/:id/approve` → Approve a review.
- `POST /api/reviews/:id/reject` → Reject a review.
- `GET /api/reviews/approved/full` → Fetch full approved reviews.

### Run backend
```bash
cd backend
npm install
npm run dev

Backend will run at 👉 http://localhost:3000

💻 Frontend (React + Vite + Tailwind)
Pages

Dashboard → Manager view, list of all reviews with Approve/Reject buttons.

Public Reviews → Public view, shows only approved reviews.

Run frontend
cd frontend
npm install
npm run dev


Frontend will run at 👉 http://localhost:5173

🔗 Proxy Setup

The frontend proxies /api calls to the backend (port 3000).
Configured in vite.config.js:

server: {
  proxy: {
    "/api": "http://localhost:3000",
  },
},

🎨 Styling

TailwindCSS used for fast & clean UI.

Responsive grid layout for reviews.

Reusable ReviewCard component.

📸 Screenshots
Dashboard

Manager view with Approve/Reject actions.

Public Reviews

Public page showing only approved reviews.


🚀 Bonus Implementations

Routing with react-router-dom (/dashboard, /reviews).

Reusable ReviewCard component.

Smart dashboard styling with Tailwind.

✅ How to Use

Start backend (localhost:3000).

Start frontend (localhost:5173).

Visit:

http://localhost:5173/dashboard
 → Manager Dashboard

http://localhost:5173/reviews
 → Public Reviews

📦 Possible Improvements

Replace JSON storage with a real database (SQLite / MongoDB).

Add toast notifications instead of browser alerts.

Deploy frontend (Vercel/Netlify) + backend (Render/Railway).

👨‍💻 Author

FlexLiving Assignment – built by Tarek Dabour