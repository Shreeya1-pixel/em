"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! I'm Emergent++, your AI co-founder. What are we building today?",
    },
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([...messages, { role: "user", content: input }])
    setInput("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm processing your idea and storing it in memory. Let's break this down into actionable steps...",
        },
      ])
    }, 1000)
  }

  return (
    <section className="relative py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Start <span className="text-accent text-glow-blue">conversing</span>
          </h2>
          <p className="text-xl text-muted-foreground text-balance">Your AI workspace is ready</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-strong rounded-3xl border border-white/10 overflow-hidden"
        >
          {/* Chat messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground neon-glow-pink"
                        : "glass border border-accent/30"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-accent" />
                        <span className="text-xs font-medium text-accent">Emergent++</span>
                      </div>
                    )}
                    <p className="leading-relaxed">{message.content}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input area */}
          <div className="border-t border-white/10 p-6 bg-secondary/30">
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Describe your startup idea..."
                className="glass border-white/20 focus:border-primary/50 bg-background/50 text-foreground placeholder:text-muted-foreground rounded-xl px-6 py-6 text-base"
              />
              <Button
                onClick={handleSend}
                size="lg"
                className="neon-glow-pink bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
