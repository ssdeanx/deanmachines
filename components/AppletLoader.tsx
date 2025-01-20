import React, { useEffect, useRef } from "react";

interface AppletLoaderProps {
  appletPath: string;
}

const AppletLoader: React.FC<AppletLoaderProps> = ({ appletPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadApplet = async () => {
      if (!containerRef.current) return;

      try {
        const htmlResponse = await fetch(`${appletPath}/index.html`);
        const html = await htmlResponse.text();

        containerRef.current.innerHTML = html;

        const script = document.createElement("script");

        script.src = `${appletPath}/script.js`;
        script.type = "module";
        containerRef.current.appendChild(script);

        const link = document.createElement("link");

        link.rel = "stylesheet";
        link.href = `${appletPath}/styles.css`;
        containerRef.current.appendChild(link);
      } catch {}
    };

    loadApplet();
  }, [appletPath]);

  return <div ref={containerRef} />;
};

export default AppletLoader;
