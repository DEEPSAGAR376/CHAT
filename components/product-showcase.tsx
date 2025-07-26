"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, ArrowRight, Play, Sparkles } from "lucide-react"

const products = [
  // Removed SoulMateAI product
  {
    id: "mindvault",
    name: "MindVault",
    tagline: "Your Digital Sanctuary",
    description:
      "A secure, intelligent knowledge management system that learns from your thoughts, organizes your ideas, and helps you discover connections you never knew existed.",
    icon: Brain,
    color: "from-slate-600 to-slate-800",
    features: ["Smart Organization", "Thought Mapping", "Secure Encryption", "Cross-Platform Sync"],
    demo: "Live knowledge graph demo",
  },
  {
    id: "devcore",
    name: "DevCore",
    tagline: "Code with Consciousness",
    description:
      "A development platform that bridges the gap between technical excellence and human-centered design, empowering developers to build with both logic and heart.",
    icon: Code,
    color: "from-slate-400 to-slate-600",
    features: ["AI Code Review", "Empathy Metrics", "Accessibility First", "Team Collaboration"],
    demo: "Code analysis playground",
  },
]

export function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-slate-800/50 text-slate-300 hover:bg-slate-700/50">
            <Sparkles className="w-3 h-3 mr-1" />
            Our Products
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Technology That Understands You
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Each product crafted with intention, designed to enhance human potential while respecting individual dignity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {" "}
          {/* Changed grid-cols-3 to grid-cols-2 */}
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-slate-900/90 border border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-500 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${product.color}`} />

                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${product.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <product.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100">{product.name}</h3>
                      <p className="text-sm font-medium text-slate-400">{product.tagline}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">{product.description}</p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-slate-300">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} mr-3`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button
                      className={`w-full bg-gradient-to-r from-slate-600 to-slate-800 hover:opacity-90 text-white border-0 group`}
                    >
                      Explore {product.name}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-slate-600/50 text-slate-300 hover:bg-slate-800/20 group bg-transparent"
                    >
                      <Play className="mr-2 w-4 h-4" />
                      {product.demo}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
