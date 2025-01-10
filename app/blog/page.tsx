import { title } from "@/components/primitives";
import Image from "next/image";

export default function BlogPage() {
  return (
    <>
      <div className="container mx-auto max-w-3xl py-10">
        <div className="relative w-full h-96 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1508873778024-770028d8e015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Blog Post"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className={title()}>My Awesome Blog Post</h1>
        <h2 className="text-gray-500 text-xl mt-2">
          A Subtitle for My Awesome Blog Post
        </h2>
        <Image
          src="https://avatars.githubusercontent.com/u/123456?v=4"
          alt="Author Avatar"
          width={40}
          height={40}
          className="rounded-full mr-4"
        />
        <div className="flex flex-col">
          <span>By: Cline</span>
          <span className="text-sm">Published on: October 26, 2023</span>
        </div>
      </div>
      <div className="mt-8 prose prose-lg dark:prose-invert">
        <p>
          This is the first paragraph of my awesome blog post. I will write
          some interesting things here.
        </p>
        <blockquote className="mt-6 mb-6 p-4 border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-800 dark:border-gray-600">
          {/* eslint-disable-next-line */}
          "This is a quote from my awesome blog post."
        </blockquote>
        <p>
          This is the second paragraph of my awesome blog post. I will write
          some more interesting things here.
        </p>
        <p>
          This is the third paragraph of my awesome blog post. I will write
          even more interesting things here.
        </p>
      </div>
    </>
  );
}
