export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    aiConfigured: Boolean(process.env.OPENAI_API_KEY),
    version: 'portfolio-v3-real-ai'
  });
}
