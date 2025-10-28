"use client"

import { Brain, TrendingUp, Palette, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Brain,
    title: "Persistent Memory",
    description: "Remembers your context, goals, and projects over time. Never repeat yourself.",
    color: "text-primary",
    glow: "neon-glow-pink",
  },
  {
    icon: TrendingUp,
    title: "Startup Simulator",
    description: "Simulate business growth, funding rounds, team scaling, and metrics like a game.",
    color: "text-accent",
    glow: "neon-glow-blue",
  },
  {
    icon: Palette,
    title: "Canvas Designer",
    description: "AI-powered design space for slides, visuals, and mockups. Instant creativity.",
    color: "text-primary",
    glow: "neon-glow-pink",
  },
  {
    icon: MessageSquare,
    title: "Conversational Core",
    description: "Chat naturally with Emergent++. It brainstorms and builds alongside you.",
    color: "text-accent",
    glow: "neon-glow-blue",
  },
]

export function FeaturesGrid() {
  return (
    <section className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything you need to <span className="text-primary text-glow-pink">build</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">Powered by AI, designed for creators</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`glass-strong rounded-3xl p-8 border border-white/10 ${feature.glow} transition-all duration-300 group cursor-pointer`}
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-secondary/50 mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
