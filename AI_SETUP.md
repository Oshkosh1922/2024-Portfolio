# Real AI Assistant Setup

The portfolio chatbot is a real server-side OpenAI integration. The browser sends conversation messages to `/api/chat`; the serverless function calls the OpenAI Responses API and returns a grounded answer.

## Required deployment setting

Add this environment variable to the Vercel project:

- `OPENAI_API_KEY` — a private OpenAI API key

Optional:

- `OPENAI_MODEL` — defaults to `gpt-5-mini`

Never place the API key in `index.html`, browser JavaScript, or the GitHub repository.

## Deployment

1. Import this GitHub repository into Vercel or connect the existing project.
2. Choose the `portfolio-v3-real-ai` branch for a preview deployment.
3. Add `OPENAI_API_KEY` under Project Settings → Environment Variables for Preview.
4. Deploy and test free-form conversation.
5. Merge the pull request only after reviewing the preview.

## Protections included

- Server-side API key
- Input-length limits
- Conversation-history limits
- Basic per-IP request throttling
- No-store responses
- Grounding instructions that prohibit invented experience
