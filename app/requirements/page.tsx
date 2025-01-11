"use client";
import {
  useState,
  type AwaitedReactNode,
  type JSXElementConstructor,
  type Key,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
} from "react";

import { title } from "@/components/primitives";

export default function DocsPage() {
  const [data] = useState<Array<any>>([
    {
      id: 1,
      title: "Loading...",
      description: "Please wait while we fetch data.",
    },
  ]);

  //This fetch call will need to be handled on the server side for Server Components
  // fetch("https://api.example.com/data")
  //   .then((response) => response.json())
  //   .then((data) => setData(data))
  //   .catch((error) => console.error("Error fetching data:", error));

  return (
    <div className="p-4">
      <h1 className={title({ color: "violet", size: "lg" })}>Docs</h1>
      <ul>
        {data.map(
          (item: {
            id: Key | null | undefined;
            title:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
            description:
              | string
              | number
              | bigint
              | boolean
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | ReactPortal
              | Promise<AwaitedReactNode>
              | null
              | undefined;
          }) => (
            <li key={item.id}>
              <h2 className={title({ color: "foreground", size: "md" })}>
                {item.title}
              </h2>
              <p>{item.description}</p>
            </li>
          ),
        )}
      </ul>
    </div>
  );
}
