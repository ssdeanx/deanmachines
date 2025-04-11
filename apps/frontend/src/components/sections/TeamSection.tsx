'use client';
import * as React from "react"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { IconWrapper } from "@/components/common/IconWrapper"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const team: TeamMember[] = [
  {
    name: "Dr. Alexandra Wright",
    role: "Chief AI Architect",
    bio: "Leading the development of our next-generation AI agent architecture. Previously led AI research at Stanford.",
    image: "/team/alexandra.jpg",
    social: {
      twitter: "https://twitter.com/alexwright",
      linkedin: "https://linkedin.com/in/alexwright",
      github: "https://github.com/alexwright",
    },
  },
  {
    name: "Marcus Chen",
    role: "Lead Engineer",
    bio: "Architect of our distributed agent deployment system. 15+ years experience in cloud infrastructure.",
    image: "/team/marcus.jpg",
    social: {
      twitter: "https://twitter.com/marcuschen",
      linkedin: "https://linkedin.com/in/marcuschen",
      github: "https://github.com/marcuschen",
    },
  },
  {
    name: "Dr. Maria Santos",
    role: "Head of Research",
    bio: "Leading research in agent memory systems and context preservation. PhD in Machine Learning.",
    image: "/team/maria.jpg",
    social: {
      twitter: "https://twitter.com/mariasantos",
      linkedin: "https://linkedin.com/in/mariasantos",
    },
  },
  {
    name: "James Wilson",
    role: "Security Lead",
    bio: "Expert in AI system security and data privacy. Previously security architect at major tech firms.",
    image: "/team/james.jpg",
    social: {
      linkedin: "https://linkedin.com/in/jameswilson",
      github: "https://github.com/jameswilson",
    },
  },
]

export function TeamSection() {
  return (
    <div className="container py-20">
      <div className="mx-auto mb-16 text-center md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
          Meet Our Team
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          The experts behind Mastra AI&apos;s innovative agent technology
        </p>
      </div>
      <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <Card key={member.name} className="overflow-hidden">
            <div className="aspect-[4/3] relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="mt-2 text-sm">{member.bio}</p>
              <div className="mt-4 flex space-x-4">
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <IconWrapper icon={Twitter} size="sm" />
                  </a>
                )}
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <IconWrapper icon={Linkedin} size="sm" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <IconWrapper icon={Github} size="sm" />
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
