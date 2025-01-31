import { fetchModels } from "@/services/api";
import { HumanMessage } from "@langchain/core/messages";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import React, { useCallback, useState } from "react";

const ApiSelect = ({
  selectedApi,
  onApiChange,
  setModels,
}: {
  selectedApi: string;
  onApiChange: (api: string) => void;
  setModels: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    const selectedApi = event.target.value as string;
    onApiChange(selectedApi);

    fetchModels(selectedApi).then((fetchedModels) => {
      setModels(fetchedModels);
      console.log("Fetched models for", selectedApi, ":", fetchedModels);
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="api-select-label">API</InputLabel>
      <Select
        labelId="api-select-label"
        id="api-select"
        value={selectedApi}
        label="API"
        onChange={handleChange}
      >
        <MenuItem value={"openai"}>OpenAI</MenuItem>
        <MenuItem value={"anthropic"}>Anthropic</MenuItem>
        <MenuItem value={"google"}>Google</MenuItem>
        <MenuItem value={"deepseek"}>Deepseek</MenuItem>
        <MenuItem value={"groq"}>Groq</MenuItem>
        <MenuItem value={"ollama"}>Ollama</MenuItem>
        <MenuItem value={"lmstudio"}>LM Studio</MenuItem>
        <MenuItem value={"openrouter"}>OpenRouter</MenuItem>
      </Select>
    </FormControl>
  );
};

const ModelSelect = ({
  selectedApi,
  selectedModel,
  onModelChange,
  models,
}: {
  selectedApi: string;
  selectedModel: string;
  onModelChange: (model: string) => void;
  models: string[];
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="model-select-label">Model</InputLabel>
      <Select
        labelId="model-select-label"
        id="model-select"
        value={selectedModel}
        label="Model"
        onChange={(e) => onModelChange(e.target.value as string)}
      >
        {models.map((modelName) => (
          <MenuItem key={modelName} value={modelName}>
            {modelName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const ApiKeyInput = ({
  setApiKeyInput,
}: {
  setApiKeyInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKeyInput(event.target.value);
    console.log("API Key updated:", event.target.value);
  };

  return (
    <FormControl fullWidth>
      <TextField
        id="api-key-input"
        label="API Key"
        onChange={handleChange}
        variant="outlined"
        type="password"
      />
    </FormControl>
  );
};

const AdvancedSettings = () => {
  return (
    <FormControl component="fieldset" fullWidth>
      <FormLabel component="legend">Advanced Settings</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Grounding"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Structure Formatting"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Code Execution"
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Tools / Functions"
        />
      </FormGroup>
    </FormControl>
  );
};

const SystemPrompt = () => {
  const [systemPrompt, setSystemPrompt] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSystemPrompt(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <TextField
        id="system-prompt-input"
        label="System Prompt"
        multiline
        rows={4}
        value={systemPrompt}
        onChange={handleChange}
        variant="outlined"
      />
    </FormControl>
  );
};

export default function ChatPage() {
  const [selectedApi, setSelectedApi] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [models, setModels] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [apiKeyInput, setApiKeyInput] = useState("");

  const handleApiChange = (api: string) => {
    setSelectedApi(api);
    setSelectedModel("");
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const sendMessage = useCallback(async () => {
    if (!message.trim() || !selectedModel || !selectedApi) {
      alert("Please select an API, a model, and enter a message.");
      return;
    }

    if (selectedApi === "google") {
      if (!apiKeyInput.trim()) {
        alert("Please enter your Google API Key.");
        return;
      }

      try {
        const geminiModel = new ChatGoogleGenerativeAI({
          apiKey: apiKeyInput,
          modelName: selectedModel,
        });

        const geminiResponse = await geminiModel.call([
          new HumanMessage(message),
        ]);

        setResponse(String(geminiResponse.content)); // Convert to string
      } catch (error: any) {
        console.error("Gemini API error:", error);
        setResponse(`Error fetching response from Gemini: ${error.message}`);
      }
    } else if (selectedApi === "openai") {
      setResponse(`API '${selectedApi}' is not yet implemented.`);
    } else if (selectedApi === "anthropic") {
      setResponse(`API '${selectedApi}' is not yet implemented.`);
    } else if (selectedApi === "deepseek") {
      setResponse(`API '${selectedApi}' is not yet implemented.`);
    } else if (selectedApi === "groq") {
      setResponse(`API '${selectedApi}' is not yet implemented.`);
    } else if (selectedApi === "ollama") {
      setResponse(`API '${selectedApi}' is not yet implemented.`);
    } else if (selectedApi === "lmstudio") {
      setResponse(`API '${selectedApi}' is not yet implemented.`);
    } else if (selectedApi === "openrouter") {
      setResponse(`API '${selectedApi}' is not yet implemented.`);
    } else {
      setResponse(`API '${selectedApi}' is not yet implemented.`);
    }
    setMessage("");
  }, [message, selectedApi, selectedModel, apiKeyInput]);

  return (
    <Box>
      <ApiSelect
        selectedApi={selectedApi}
        onApiChange={handleApiChange}
        setModels={setModels}
      />
      <ModelSelect
        selectedApi={selectedApi}
        selectedModel={selectedModel}
        onModelChange={handleModelChange}
        models={models}
      />
      <ApiKeyInput setApiKeyInput={setApiKeyInput} />
      <SystemPrompt />
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField
          id="chat-input"
          label="Enter your message"
          multiline
          rows={2}
          value={message}
          onChange={handleMessageChange}
          variant="outlined"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
      </FormControl>
      <Box sx={{ mt: 2, p: 2, border: "1px solid #ccc", borderRadius: 1 }}>
        {response}
      </Box>
      Chat Area
    </Box>
  );
}

export { AdvancedSettings, ApiKeyInput, ApiSelect, ModelSelect, SystemPrompt };
