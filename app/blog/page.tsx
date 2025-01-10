import Image from "next/image";

import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto max-w-3xl py-10">
        <div className="relative h-96 w-full overflow-hidden rounded-lg">
          <Image
            fill
            alt="Blog Post"
            className="size-full object-cover"
            src="https://images.unsplash.com/photo-1508873778024-770028d8e015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </div>
        <h1 className={title()}>My Awesome Blog Post</h1>
        <h2 className="mt-2 text-xl text-gray-500">
          A Subtitle for My Awesome Blog Post
        </h2>
        <Image
          alt="Author Avatar"
          className="mr-4 rounded-full"
          height={40}
          src="https://avatars.githubusercontent.com/u/123456?v=4"
          width={40}
        />
        <div className="flex flex-col">
          <span>By: Cline</span>
          <span className="text-sm">Published on: October 26, 2023</span>
        </div>
      </div>
      <div className="prose prose-lg dark:prose-invert mt-8">
        <p>
          This is the first paragraph of my awesome blog post. I will write some
          interesting things here.
        </p>
        <blockquote className="my-6 border-l-4 border-gray-300 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-800">
          {/* eslint-disable-next-line */}
          "This is a quote from my awesome blog post."
        </blockquote>
        <p>
          This is the second paragraph of my awesome blog post. I will write
          some more interesting things here.
        </p>
        <p>
          This is the third paragraph of my awesome blog post. I will write even
          more interesting things here.
        </p>
      </div>
    </>
  );
}
