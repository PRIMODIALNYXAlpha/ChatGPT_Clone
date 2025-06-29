Here’s your `README.md` content rewritten cleanly **without the `#` markdown headings** and still organized for clarity:

---

**ChatGPT Clone 🤖**

A modern, responsive ChatGPT clone built with Next.js and integrated with the Gemini API. This project features a clean, user-friendly interface that mimics the original ChatGPT experience while adding custom enhancements.

---

**Features 🌟**

* Real-time Chat Interface: Smooth, responsive chat experience.
* AI Integration: Powered by Google's Gemini API.
* Modern UI/UX: Clean and intuitive interface with dark mode support.
* Responsive Design: Works seamlessly across desktop, tablet, and mobile devices.
* Loading States: Visual feedback with skeleton loading for better UX.
* Message History: Maintains chat history during the session.
* Suggestion Cards: Quick-start prompts for user engagement.
* Error Handling: Robust error management for API interactions.

---

**Technologies Used 🛠️**

* Frontend Framework: Next.js
* Styling: CSS Modules
* API Integration: Gemini API
* Icons: SVG icons for clean scalable graphics
* Image Handling: Next.js Image component
* TypeScript: For type safety and better development experience

---

**API Configuration 🔌**

**Gemini API Setup**

1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey).
2. API endpoint used:

```javascript
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent'
```

**Alternative API Options**

If the Gemini API isn't working, switch to:

**OpenAI API**

```javascript
const API_URL = 'https://api.openai.com/v1/chat/completions'

const response = await fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
  },
  body: JSON.stringify({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: messages }]
  })
});
```

**Claude API**

```javascript
const API_URL = 'https://api.anthropic.com/v1/messages'

const response = await fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01'
  },
  body: JSON.stringify({
    model: "claude-2",
    messages: [{ role: "user", content: messages }]
  })
});
```

**API Troubleshooting**

* **401 Unauthorized Error**

  * Ensure your API key is correctly set in `.env`.
  * Use the correct header format:

```javascript
headers: {
  'Content-Type': 'application/json',
  'x-goog-api-key': process.env.NEXT_PUBLIC_GEMINI_API_KEY
}
```

* **CORS Issues**

  * Add appropriate CORS headers.
  * Use a proxy server if needed.

* **Rate Limiting**

  * Use retry logic with exponential backoff.
  * Handle rate limit responses gracefully.

**API Code Location**

* File: `src/Components/RightSection.tsx`
* Function: `sendMessage`

```typescript
const sendMessage = async () => {
  if (!messages.trim()) return;
  
  try {
    setIsLoading(true);
    setAllMessages(prev => [...prev, {
      role: 'user',
      content: messages
    }]);
    
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': 'YOUR_API_KEY'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: messages
          }]
        }]
      })
    });
    // ...rest of the function
  }
}
```

---

**Getting Started 🚀**

**Prerequisites**

* Node.js v14 or higher
* npm or yarn
* Gemini API key

**Installation Steps**

1. Clone the repository:

```bash
git clone https://github.com/PRIMODIALNYXAlpha/ChatGPT_Clone.git
```

2. Install dependencies:

```bash
cd ChatGPT_Clone
npm install
```

3. Create a `.env` file:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
```

5. Open in your browser:
   [http://localhost:3000](http://localhost:3000)

---

**Responsive Design 📱**

Supports breakpoints for:

* Large Screens: 1200px and up
* Medium Screens: 992px to 1199px
* Tablets: 768px to 991px
* Large Mobile: 576px to 767px
* Small Mobile: 320px to 575px
* Extra Small: Less than 380px

---

**Key Components 🎯**

* RightSection: Main chat interface
* Message Display: Renders and formats messages
* Input Section: Handles user input
* Loading States: Skeleton placeholders for responses
* Suggestion Cards: Prompt ideas for users

---

**Security 🔒**

* Uses environment variables
* Validates user input
* Handles client-side errors

---

**Contributing 🤝**

Contributions are welcome! Submit a pull request if you'd like to improve the project.

---

**License 📝**

Open source under the [MIT License](LICENSE)

---

**Acknowledgments 🙏**

* Inspired by OpenAI’s ChatGPT
* Powered by Gemini API
* Built using Next.js and React

---

**Contact 📧**

For questions or ideas, please open an issue in the repository.

---

⭐ Star this repository if you find it helpful!

---

Let me know if you'd like this in downloadable `.md` file format too.
