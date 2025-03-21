﻿# ChatGPT Clone 
Here’s the content of your `README.md` file with appropriate `h1` and `h2` styles:

```markdown
# ChatGPT Clone 🤖

A modern, responsive ChatGPT clone built with Next.js and integrated with the Gemini API. This project features a clean, user-friendly interface that mimics the original ChatGPT experience while adding custom enhancements.

## Features 🌟

- **Real-time Chat Interface**: Smooth, responsive chat experience.
- **AI Integration**: Powered by Google's Gemini API.
- **Modern UI/UX**: Clean and intuitive interface with dark mode support.
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices.
- **Loading States**: Visual feedback with skeleton loading for better UX.
- **Message History**: Maintains chat history during the session.
- **Suggestion Cards**: Quick-start prompts for user engagement.
- **Error Handling**: Robust error management for API interactions.

## Technologies Used 🛠️

- **Frontend Framework**: Next.js.
- **Styling**: CSS Modules.
- **API Integration**: Gemini API.
- **Icons**: SVG icons for clean scalable graphics.
- **Image Handling**: Next.js Image component for optimized image loading.
- **TypeScript**: For type safety and better development experience.

## API Configuration 🔌

### Gemini API Setup

1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey).
2. The API endpoint used in the project:

```javascript
// In RightSection.tsx
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent'
```

### Alternative API Options

If the Gemini API isn't working, you can switch to other AI providers:

1. **OpenAI API**:

```javascript
// Replace in RightSection.tsx
const API_URL = 'https://api.openai.com/v1/chat/completions'

// Update the fetch request:
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

2. **Claude API**:

```javascript
// Replace in RightSection.tsx
const API_URL = 'https://api.anthropic.com/v1/messages'

// Update the fetch request:
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

### API Troubleshooting

If you encounter API issues:

- **401 Unauthorized Error**: 
   - Check if your API key is correctly set in `.env`.
   - Verify the API key format in the headers:

```javascript
headers: {
  'Content-Type': 'application/json',
  'x-goog-api-key': process.env.NEXT_PUBLIC_GEMINI_API_KEY
}
```

- **CORS Issues**: 
   - Add appropriate CORS headers in your request.
   - Consider using a proxy server if needed.

- **Rate Limiting**: 
   - Implement retry logic with exponential backoff.
   - Add error handling for rate limit responses.

The API integration code is located in:

```
src/Components/RightSection.tsx
```

Look for the `sendMessage` function to modify API settings:

```typescript
const sendMessage = async() => {
  if (!messages.trim()) return;
  
  try {
    setIsLoading(true);
    // Add user message immediately
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
    // ... rest of the function
  }
}
```

## Getting Started 🚀

### Prerequisites

- Node.js (v14 or higher).
- npm or yarn.
- Gemini API key.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/PRIMODIALNYXAlpha/ChatGPT_Clone.git
```

2. Install dependencies:

```bash
cd ChatGPT_Clone
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:

```env
NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Responsive Design 📱

The application is fully responsive with breakpoints for:

- Large Screens (1200px and up).
- Medium Screens (992px to 1199px).
- Tablets (768px to 991px).
- Large Mobile (576px to 767px).
- Small Mobile (320px to 575px).
- Extra Small Devices (Less than 380px).

## Key Components 🎯

- **RightSection**: Main chat interface component.
- **Message Display**: Handles message rendering and formatting.
- **Input Section**: User input handling with send functionality.
- **Loading States**: Skeleton loading for better user experience.
- **Suggestion Cards**: Quick-start prompts for new conversations.

## Security 🔒

- Environment variables for API key protection.
- Client-side error handling.
- Input validation and sanitization.

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📝

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments 🙏

- Inspired by OpenAI's ChatGPT interface.
- Powered by Google's Gemini API.
- Built with Next.js and React.

## Contact 📧

For any queries or suggestions, please open an issue in the repository.

---

⭐ Star this repository if you find it helpful!
```

 
