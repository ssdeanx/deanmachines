"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import FPVVideoDisplay from "@/components/FPVVideoDisplay";
import DashboardSidebar from "@/components/dashboard-sidebar";

const FPVPage = () => {
  const [videoUrl, setVideoUrl] = useState(
    "https://www.example.com/fpv-video.mp4",
  );
  const [savedUrl, setSavedUrl] = useState(videoUrl);

  const handleSaveUrl = () => {
    setSavedUrl(videoUrl);
  };

  return (
    <div className="flex">
      <DashboardSidebar />
      <div className="flex-1">
        <h1>FPV Video</h1>
        <p>This is the FPV video page.</p>
        <Input
          label="Video URL"
          type="text"
          value={videoUrl}
          onValueChange={setVideoUrl}
        />
        <Button className="mt-2" onClick={handleSaveUrl}>
          Save URL
        </Button>
        <div className="mt-4">
          <label className="block">
            <input className="mr-2" type="checkbox" />
            Enable Real-time Processing
          </label>
          <label className="block">
            <input className="mr-2" type="checkbox" />
            Enable Low Latency Mode
          </label>
          <label className="block">
            <input className="mr-2" type="checkbox" />
            Enable High Resolution
          </label>
        </div>
        <FPVVideoDisplay videoUrl={savedUrl} />
      </div>
    </div>
  );
};

export default FPVPage;
