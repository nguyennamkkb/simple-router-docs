// API Configuration
export const API_CONFIG = {
  BASE_URL: 'http://127.0.0.1:8317',
  BASE_URL_V1: 'http://127.0.0.1:8317/v1',
  DEFAULT_API_KEY: 'api-key-1',
} as const;

// Telegram Bot
export const TELEGRAM_BOT_URL = 'https://t.me/simple_route_bot';
export const TELEGRAM_BOT_HANDLE = '@simple_route_bot';

// Default Models
export const DEFAULT_MODELS = {
  CLAUDE_SONNET_THINKING: 'gemini-claude-sonnet-4-5-thinking',
  CLAUDE_OPUS_THINKING: 'gemini-claude-opus-4-5-thinking',
  CLAUDE_SONNET: 'gemini-claude-sonnet-4-5',
  GEMINI_3_PRO: 'gemini-3-pro-preview',
  GEMINI_3_FLASH: 'gemini-3-flash-preview',
  GPT_OSS: 'gpt-oss-120b-medium',
} as const;

// Code Examples Generators
export const codeExamples = {
  curl: () => `curl ${API_CONFIG.BASE_URL_V1}/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${API_CONFIG.DEFAULT_API_KEY}" \\
  -d '{
    "model": "${DEFAULT_MODELS.CLAUDE_SONNET_THINKING}",
    "messages": [
      {"role": "user", "content": "Xin chào!"}
    ]
  }'`,

  python: () => `from openai import OpenAI

client = OpenAI(
    base_url="${API_CONFIG.BASE_URL_V1}",
    api_key="${API_CONFIG.DEFAULT_API_KEY}"
)

response = client.chat.completions.create(
    model="${DEFAULT_MODELS.CLAUDE_SONNET_THINKING}",
    messages=[
        {"role": "user", "content": "Xin chào!"}
    ]
)

print(response.choices[0].message.content)`,

  node: () => `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: '${API_CONFIG.BASE_URL_V1}',
  apiKey: '${API_CONFIG.DEFAULT_API_KEY}',
});

const response = await client.chat.completions.create({
  model: '${DEFAULT_MODELS.CLAUDE_SONNET_THINKING}',
  messages: [
    { role: 'user', content: 'Xin chào!' }
  ],
});

console.log(response.choices[0].message.content);`,

  claudeCodeEnv: {
    unix: () => `export ANTHROPIC_BASE_URL=${API_CONFIG.BASE_URL}
export ANTHROPIC_AUTH_TOKEN=${API_CONFIG.DEFAULT_API_KEY}
export ANTHROPIC_DEFAULT_OPUS_MODEL=${DEFAULT_MODELS.CLAUDE_OPUS_THINKING}
export ANTHROPIC_DEFAULT_SONNET_MODEL=${DEFAULT_MODELS.CLAUDE_SONNET_THINKING}
export ANTHROPIC_DEFAULT_HAIKU_MODEL=${DEFAULT_MODELS.GEMINI_3_FLASH}`,
    windows: () => `$env:ANTHROPIC_BASE_URL="${API_CONFIG.BASE_URL}"
$env:ANTHROPIC_AUTH_TOKEN="${API_CONFIG.DEFAULT_API_KEY}"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="${DEFAULT_MODELS.CLAUDE_OPUS_THINKING}"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="${DEFAULT_MODELS.CLAUDE_SONNET_THINKING}"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="${DEFAULT_MODELS.GEMINI_3_FLASH}"`,
  },

  openCodeConfig: () => `{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "simple-router": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "Simple Router",
      "options": {
        "baseURL": "${API_CONFIG.BASE_URL_V1}",
        "apiKey": "${API_CONFIG.DEFAULT_API_KEY}"
      },
      "models": {
        "${DEFAULT_MODELS.CLAUDE_SONNET_THINKING}": {
          "name": "Claude Sonnet 4.5 Thinking"
        },
        "${DEFAULT_MODELS.CLAUDE_OPUS_THINKING}": {
          "name": "Claude Opus 4.5 Thinking"
        },
        "${DEFAULT_MODELS.GEMINI_3_FLASH}": {
          "name": "Gemini 3 Flash"
        },
        "${DEFAULT_MODELS.GEMINI_3_PRO}": {
          "name": "Gemini 3 Pro"
        }
      }
    }
  }
}`,

  droidConfig: () => `{
  "custom_models": [
    {
      "model": "${DEFAULT_MODELS.GEMINI_3_FLASH}",
      "base_url": "${API_CONFIG.BASE_URL_V1}",
      "api_key": "${API_CONFIG.DEFAULT_API_KEY}",
      "provider": "openai"
    },
    {
      "model": "${DEFAULT_MODELS.CLAUDE_OPUS_THINKING}",
      "base_url": "${API_CONFIG.BASE_URL}",
      "api_key": "${API_CONFIG.DEFAULT_API_KEY}",
      "provider": "anthropic"
    },
    {
      "model": "${DEFAULT_MODELS.GPT_OSS}",
      "base_url": "${API_CONFIG.BASE_URL}",
      "api_key": "${API_CONFIG.DEFAULT_API_KEY}",
      "provider": "openai"
    }
  ]
}`,
};
