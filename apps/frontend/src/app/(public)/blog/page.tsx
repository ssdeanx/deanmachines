import * as React from "react"
import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchInput } from "@/components/common/SearchInput"

export const metadata: Metadata = {
  title: `Blog - ${siteConfig.name}`,
  description: "Latest news, updates, and insights about AI development and our platform.",
}

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  image: string
  authors: string[]
  tags: string[]
}

// In a real app, this would come from your MDX content
const blogPosts: BlogPost[] = [
  {
    slug: "introducing-deanmachines",
    title: "Introducing deanmachines: The Future of AI Development",
    description: "Today, we're excited to announce the launch of our revolutionary platform for building and deploying intelligent AI solutions.",
    date: "2025-04-01",
    image: "/blog/launch.jpg",
    authors: ["Dean X"],
    tags: ["Announcement", "Product"],
  },
  {
    slug: "ai-development-best-practices",
    title: "AI Development Best Practices in 2025",
    description: "Learn about the latest best practices for developing AI solutions and how to implement them in your projects.",
    date: "2025-04-05",
    image: "/blog/best-practices.jpg",
    authors: ["Dean X", "AI Team"],
    tags: ["Technical", "AI"],
  },
  // Add more blog posts here
]

export default function BlogPage() {
  return (
    <div className="container relative">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl py-12 text-center md:py-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
          Latest Updates
        </h1>
        <p className="mt-6 text-lg text-muted-foreground md:text-xl">
          Insights and news from the {siteConfig.name} team
        </p>
      </section>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <SearchInput
          className="md:w-64"
          placeholder="Search posts..."
        />
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Announcement", "Technical", "AI", "Product", "Engineering"].map((tag) => (
            <Badge
              key={tag}
              variant={tag === "All" ? "default" : "secondary"}
              className="cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">
                  {post.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-muted-foreground">
                  {post.description}
                </p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString()}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.authors.join(", ")}</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
