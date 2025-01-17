import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
}

const BlogList: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: "First Blog Post",
      slug: "/blog/first-post",
      date: "2024-01-01",
    },
    {
      title: "Second Blog Post",
      slug: "/blog/second-post",
      date: "2024-01-05",
    },
    {
      title: "Third Blog Post",
      slug: "/blog/third-post",
      date: "2024-01-10",
    },
  ];

  return (
    <Card className="border border-gray-200/20 bg-gray-50/50 backdrop-blur-lg dark:border-gray-700/20 dark:bg-gray-800/50">
      <CardHeader>
        <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
          Recent Blog Posts
        </h3>
      </CardHeader>
      <CardBody className="p-6">
        <ul className="space-y-4">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                className="text-blue-500 hover:text-blue-700"
                href={post.slug}
              >
                {post.title}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {post.date}
              </p>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default BlogList;
