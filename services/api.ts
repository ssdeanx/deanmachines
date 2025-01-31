// services/api.ts

export const fetchModels = async (api: string) => {
  switch (api) {
    case "openai":
      return ["gpt-3.5-turbo", "gpt-4"];
    case "anthropic":
      return ["claude-instant-100k", "claude-2"];
    case "google":
      return [" PaLM 2", " Gemini Pro"];
    case "deepseek":
      return ["deepseek-chat", "deepseek-coder"];
    case "groq":
      return ["llama2-70b-8192"]; // Example model, replace with actual Groq models
    case "ollama":
      return ["llama2", "mistral"]; // Example models, replace with actual Ollama models
    case "lmstudio":
      return ["local-model-1", "local-model-2"]; // Example models, replace with actual LM Studio models
    case "openrouter":
      return ["openai/gpt-3.5-turbo", "anthropic/claude-instant-100k"]; // Example models, replace with actual OpenRouter models
    default:
      return [];
  }
};
