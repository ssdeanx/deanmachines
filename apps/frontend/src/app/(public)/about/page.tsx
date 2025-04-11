import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, User, Target, Zap, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// SEO Metadata for About Page - Emphasizing Founder + AI Synergy & 2025 Trends
export const metadata: Metadata = {
  title: "About DeanMachines AI | Founder-Led, AI-Powered Innovation",
  description: "Discover DeanMachines AI: A founder-driven vision amplified by AI. Learn about the mission to empower developers through efficient, responsible AI solutions.",
  keywords: [
    "about DeanMachines AI", "AI founder vision", "AI platform mission",
    "founder-led AI company", "AI-powered development", "responsible AI commitment",
    "lean AI startup", "efficient AI solutions",
    "AI technology expertise", "ethical AI development", "AI innovation leadership",
    "building trust in AI", "transparent AI development", "DeanMachines AI founder",
    "next-generation AI platform", "SGE optimized AI", "generative AI tools"
  ],
  openGraph: {
    title: "DeanMachines AI: Founder Vision, Amplified by AI",
    description: "Learn how DeanMachines AI leverages a founder-led approach with AI synergy for rapid innovation.",
    url: "https://deanmachines.com/about",
    siteName: "DeanMachines AI",
    images: [
      {
        url: "https://deanmachines.com/og-image-about-founder-ai-2025.png",
        width: 1200,
        height: 630,
        alt: "DeanMachines AI - Founder-Led, AI-Powered",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeanMachines AI: Founder-Driven, AI-Augmented",
    description: "Discover the unique, efficient approach behind DeanMachines AI.",
    images: ["https://deanmachines.com/twitter-image-about-founder-ai-2025.png"],
  },
  alternates: {
    canonical: "https://deanmachines.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Renders the About Us page, highlighting the founder-led, AI-powered approach.
 * @returns {JSX.Element} The about page component.
 */
export default function AboutPage(): JSX.Element {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            The Vision Behind DeanMachines AI
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A founder-driven mission, amplified by artificial intelligence, to build the future of intelligent applications efficiently and responsibly.
          </p>
        </div>
      </section>

      {/* Founder & AI Synergy Section - Further Enhanced */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 w-80 mx-auto md:mx-0 rounded-full overflow-hidden bg-gray-300 border-4 border-primary/20 shadow-lg">
              <Image
                src="/images/founder-photo.jpg"
                alt="Dean Machines, Founder of DeanMachines AI"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">Founder Vision, AI Execution</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Hi, I'm Dean Machines, the founder of DeanMachines AI. My path wasn't conventional, but it was deeply rooted in a passion for building things with code. It started with hands-on computer science training during high school trade school, providing a practical foundation that many traditional paths miss. This was complemented by formal programming studies in college, broadening my theoretical understanding and problem-solving skills.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Entering the world as a freelance developer wasn't just a job; it was an intensive, real-world masterclass. Each project brought unique challenges, demanding adaptability, rapid learning, and a relentless focus on delivering functional, robust solutions. This period solidified my understanding of developer needs, the friction points in common workflows, and the constant pressure to build faster and smarter.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Now, we stand at an inflection point. The emergence of powerful AI tools – sophisticated coding assistants that act as tireless pair programmers, automation platforms that handle repetitive tasks, and generative models that accelerate prototyping – represents a monumental leap. For someone with my background, combining years of practical coding experience with these AI capabilities isn't just helpful; it's transformative. It unlocks a level of productivity and creative potential previously unimaginable for a single developer.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                DeanMachines AI is the direct result of this synergy. It's built using the very AI tools it aims to help others leverage. This allows me to maintain a singular focus on the core vision, rapidly iterate based on real-world feedback, and build a complex, powerful platform with the agility and efficiency of a solo operator. It proves that the combination of deep domain knowledge and cutting-edge AI makes truly ambitious goals achievable, demonstrating that today, anything is possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-last">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Mission: Empowering Developers</h2>
              <p className="text-lg text-muted-foreground mb-4">
                My mission is to democratize access to advanced AI capabilities. DeanMachines AI provides developers with intuitive, powerful tools and infrastructure to create innovative intelligent agents, removing barriers and accelerating development.
              </p>
              <h3 className="text-2xl font-semibold mb-4 mt-6">Vision: Responsible AI Integration</h3>
              <p className="text-lg text-muted-foreground">
                I envision a future where AI seamlessly integrates into applications, enhancing human potential responsibly. DeanMachines AI aims to be the leading platform for building trustworthy, impactful, and efficiently developed AI solutions.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden bg-muted">
              <Image
                src="/images/about-mission-vision-ai.jpg"
                alt="DeanMachines AI Mission - Empowering Developers with AI"
                layout="fill"
                objectFit="cover"
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Guiding Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { title: "Focused Innovation", desc: "Relentlessly pushing AI boundaries relevant to developer needs.", icon: Zap },
              { title: "Developer Centricity", desc: "Prioritizing intuitive tools and exceptional developer experience.", icon: User },
              { title: "AI-Augmented Efficiency", desc: "Leveraging AI for rapid development and lean operation.", icon: Bot },
              { title: "Responsible Impact", desc: "Committing to ethical, transparent, and beneficial AI.", icon: CheckCircle },
            ].map((value) => (
              <div key={value.title} className="p-4 border border-border rounded-lg bg-card shadow-sm">
                <value.icon className="h-10 w-10 text-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Responsible AI */}
      <section className="py-16 md:py-24 bg-gradient-to-t from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Commitment to Responsible AI</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Building the future of AI, especially with significant AI involvement in the development process itself, demands a deep commitment to responsibility. Ethical principles, fairness, transparency, and security are foundational to DeanMachines AI. I provide tools and guidance to help users build AI systems that are not only powerful but also trustworthy and beneficial.
          </p>
          <Link href="/docs/responsible-ai" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Learn About the Principles
          </Link>
        </div>
      </section>
    </div>
  );
}
