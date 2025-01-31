"use client";
import Box from "@mui/material/Box";
import * as React from "react";
import { Providers } from "../providers";
import { AdvancedSettings, ApiSelect, ModelSelect, SystemPrompt } from "./page";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(true);
  const [selectedApi, setSelectedApi] = React.useState("");
  const [selectedModel, setSelectedModel] = React.useState("");
  const [models, setModels] = React.useState<string[]>([]); // State for models list

  const handleApiChange = (api: string) => {
    setSelectedApi(api);
    setSelectedModel(""); // Reset model selection when API changes
  };

  const handleModelChange = (model: string) => {
    setSelectedModel(model);
  };

  return (
    <Box>
      <Providers>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            height: "100vh",
          }}
        >
          {/* Left Sidebar (Chat List) */}
          <Box
            sx={{
              width: 240,
              borderRight: "1px solid #ccc",
              padding: 2,
            }}
          >
            {/* Chat list will go here */}
            <div>Chats</div>
          </Box>

          {/* Main Content (Chat Area) */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
            }}
          >
            <main>{children}</main>
          </Box>

          {/* Right Sidebar (Settings) */}
          <Box
            sx={{
              width: isSettingsOpen ? 300 : 0,
              borderLeft: "1px solid #ccc",
              padding: isSettingsOpen ? 2 : 0,
              overflowX: "hidden",
              transition: "width 0.3s ease-in-out",
            }}
          >
            {isSettingsOpen && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  padding: 2,
                }}
              >
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

                <AdvancedSettings />
                <SystemPrompt />
                <button onClick={() => setIsSettingsOpen(false)}>
                  Close Settings
                </button>
              </Box>
            )}
            {!isSettingsOpen && (
              <button onClick={() => setIsSettingsOpen(true)}>
                Open Settings
              </button>
            )}
          </Box>
        </Box>
      </Providers>
    </Box>
  );
}
