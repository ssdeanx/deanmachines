"use client";

import React from "react";
import Link from "next/link";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
    <Card className="card">
      <CardHeader>
        <Typography variant="h6" component="h3" className="text-xl font-medium text-foreground dark:text-muted-foreground">
          Recent Blog Posts
        </Typography>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-4" style={{ listStyle: 'none', padding: 0 }}>
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                className="text-foreground hover:text-primary dark:text-muted-foreground dark:hover:text-primary" style={{ textDecoration: 'none' }}
                href={post.slug}
              >
                {post.title}
              </Link>
              <Typography variant="body2" className="text-sm text-foreground dark:text-muted-foreground">
                {post.date}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BlogList;
