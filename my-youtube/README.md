# YouTube Clone (React + Tailwind)

This is a responsive YouTube UI clone built using React, Tailwind CSS, Redux, and React Router. It mimics core features of YouTube—like video browsing, live chat, search suggestions, and a sidebar menu—while showcasing frontend performance techniques like debouncing, caching, and polling.

---

## ✅ Features

### 1. Header
- Debounced search bar with API calls and cached results
- Hamburger toggle for sidebar
- Fully responsive for mobile and desktop

### 2. Sidebar
- Sectioned navigation (Home, Shorts, Subscriptions, History, etc.)
- Expand/collapse logic based on menu state in Redux

### 3. Video Browsing (`VideoContainer.js`)
- Fetches and displays videos using YouTube API
- Grid layout with responsive breakpoints
- First video is shown as an ad card

### 4. Watch Page (`WatchPage.js`)
- Embedded YouTube iframe player
- Like/Dislike toggle
- Subscribe and share buttons
- Expandable video description with tags
- Channel name and view count display

### 5. Live Chat (`LiveChat.js`)
- Simulates real-time chat with polling (every 1.5s)
- Auto-scroll to latest messages
- User input with local state and Redux dispatch

### 6. Comments Section
- Nested replies with toggleable visibility
- User avatars and comment metadata

---

## 🧠 Technical Concepts

### 🔁 Debouncing (Search Optimization)
When users type in the search bar, we delay API calls to avoid unnecessary traffic:
- A 200ms debounce delay is used
- If two keystrokes are within 200ms, the previous API call is canceled
- After 200ms of no typing, the API is triggered

**Example:**
Typing “iphone pro max”
- Without debouncing: 14 API calls
- With debouncing: ~3 API calls

This saves bandwidth and makes the app faster.

### ⚡ Caching (Search Suggestions)
We cache previous search results to speed things up:
- Suggestions are stored in a plain JavaScript object
- This gives O(1) time complexity for lookups

```js
{
  "i": [...],
  "ip": [...],
  "iphone": [...]
}
```

No need to hit the API again for the same query.

### 💬 Live Chat: Polling vs WebSockets

We simulate live chat with **API polling**:
- Every 1.5 seconds, a random message is added
- Works well for demos and mimics YouTube’s chat feel

In a real-world app, **WebSockets** would be ideal:
- WebSockets allow true two-way data flow
- Messages arrive instantly, without waiting for intervals
- Used in apps like WhatsApp, stock trading dashboards

---

## 📁 Folder Structure (Relevant Files)

```
/components
├── Header.js
├── SideBar.js
├── SideBar_close.js
├── Body.js
├── VideoContainer.js
├── WatchPage.js
├── LiveChat.js
├── Comments.js
├── ChatMessage.js
├── Button.js
```

---

## 🛠 Tech Stack

- **React**
- **Redux Toolkit**
- **React Router DOM**
- **Tailwind CSS**
- **YouTube Data API (simulated / mocked)**

---

> ⚠️ Note: This is a frontend-only UI project for learning and demo purposes. No backend or authentication is included.