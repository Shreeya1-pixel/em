import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { CodeBackground } from "@/components/code-background"
import { ChatInterface } from "@/components/chat-interface"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <CodeBackground />

      <div className="relative z-10">
        <HeroSection />
        <FeaturesGrid />
        <ChatInterface />
      </div>
    </main>
  )
}
