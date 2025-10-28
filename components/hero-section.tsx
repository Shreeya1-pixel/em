"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Brain, Rocket } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255, 51, 153, 0.4), transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(51, 153, 255, 0.4), transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm text-primary"
        >
          <Sparkles className="w-4 h-4" />
          <span className="font-medium">Your AI Co-Founder</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight text-balance"
        >
          <span className="text-glow-pink text-primary">Emergent</span>
          <span className="text-glow-blue text-accent">++</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed"
        >
          An intelligent AI workspace that remembers, brainstorms, simulates, and designs with you. Your creative
          co-founder for building the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button
            size="lg"
            className="neon-glow-pink bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Brain className="w-5 h-5 mr-2" />
            Start Building
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass-strong border-accent/50 hover:border-accent text-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Explore Features
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto"
        >
          {[
            { label: "Ideas Stored", value: "10K+" },
            { label: "Startups Simulated", value: "5K+" },
            { label: "Designs Created", value: "25K+" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 border border-primary/20">
              <div className="text-3xl font-bold text-primary text-glow-pink">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
