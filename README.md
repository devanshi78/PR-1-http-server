# PR-1-HTTP-SERVER

This is a simple HTTP server project that serves multiple HTML pages using Node.js.

## 📂 Project Structure

```text
PR-1-HTTP-SERVER/
│-- 404.html # Error page (Not Found)
│-- about.html # About page
│-- blog.html # Blog page
│-- contact.html # Contact page
│-- index.html # Home page
│-- index.js # Node.js server file
```

markdown
Copy code

## 🚀 Features
- Serves static HTML pages.
- Handles routing for:
  - `/` → `index.html`
  - `/about` → `about.html`
  - `/blog` → `blog.html`
  - `/contact` → `contact.html`
  - Any other route → `404.html`

## 📦 Installation & Usage
1. Clone this repository:
   ```bash
   git clone <repo-url>
   cd PR-1-HTTP-SERVER

2. Run the server:
   node index.js

3. Open in browser:
   http://localhost:8081