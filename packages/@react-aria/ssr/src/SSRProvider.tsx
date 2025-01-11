"use client";

import * as React from "react";

interface SSRContextValue {
  isSSR?: boolean;
  setSSR?: (isSSR: boolean) => void;
}

const defaultContext: SSRContextValue = {};

const SSRContext = React.createContext<SSRContextValue>(defaultContext);
const IsSSRContext = React.createContext(false);

export interface SSRProviderProps {
  children: React.ReactNode;
}

/**
 * SSRProvider enables components that rely on useSSRSafeId to work correctly in an SSR environment.
 * It should be placed at the root of your app.
 */
export const SSRProvider: React.FC<SSRProviderProps> = (props: {
  children:
    | string
    | number
    | bigint
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | Promise<React.AwaitedReactNode>
    | null
    | undefined;
}) => {
  const [isSSR, setSSR] = React.useState(true);

  return (
    <IsSSRContext.Provider value={isSSR}>
      <SSRContext.Provider value={{ isSSR, setSSR }}>
        {props.children}
      </SSRContext.Provider>
    </IsSSRContext.Provider>
  );
};

/**
 * useSSRContext is used by useSSRSafeId to determine if the component is currently rendering on the server.
 */
export function useSSRContext() {
  return React.useContext(SSRContext);
}

/**
 * useIsSSRContext is used by client components that need to know if they are being rendered on the server.
 */
export function useIsSSRContext() {
  return React.useContext(IsSSRContext);
}
