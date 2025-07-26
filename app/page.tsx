"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Code, Sparkles, ArrowRight, MessageCircle, Star, Users, Zap, Shield, ChevronDown } from "lucide-react"
import { EnhancedAIAssistant } from "@/components/enhanced-ai-assistant"
import { ProductShowcase } from "@/components/product-showcase"
import { InteractiveDemo } from "@/components/interactive-demo"
import Link from "next/link"

export default function HomePage() {
  const [showAssistant, setShowAssistant] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    const timer = setTimeout(() => setShowAssistant(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-slate-700/50"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-slate-400 to-slate-600 bg-clip-text text-transparent">
                SoulTech
              </span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["Products", "Solutions", "Developers", "About"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-400 hover:text-slate-200 transition-colors duration-200 font-medium"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/auth">
                <Button variant="ghost" className="text-slate-300 hover:text-slate-100 hover:bg-slate-800/20">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth?mode=signup">
                <Button className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 text-white border-0">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-black/30 to-slate-800/20"
        />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
              className="inline-flex items-center space-x-2 bg-slate-900/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-slate-600/50"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-slate-200">Where Technology Meets Soul</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
                Experiences with Heart
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <em>
                "Where every line of code carries intention, every interface whispers empathy, and every solution blooms
                from the garden of human understanding."
              </em>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/auth?mode=signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-700 to-black hover:from-slate-600 hover:to-slate-900 text-white border-0 px-8 py-3 text-lg group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/auth">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-500 text-slate-300 hover:bg-slate-800/20 px-8 py-3 text-lg bg-transparent"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Sign In
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </section>

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Interactive Demo Section */}
      <InteractiveDemo />

      {/* Features Grid */}
      <section className="py-20 bg-gradient-to-r from-slate-900/80 to-black/60">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Built for Humans, Powered by Intelligence
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Every feature designed with empathy, every interaction crafted with care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Privacy First",
                description: "Your data, your control. Built with trust at the core",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance that respects your time",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Shaped by feedback, evolved through collaboration",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Code,
                title: "Developer Friendly",
                description: "Clean APIs, comprehensive docs, seamless integration",
                color: "from-purple-500 to-violet-500",
              },
              {
                icon: Star,
                title: "Continuously Learning",
                description: "AI that grows smarter with every interaction",
                color: "from-indigo-500 to-purple-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/30 hover:shadow-2xl hover:shadow-slate-500/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-100">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Beautiful?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join thousands of developers and creators who are building the future with empathy
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/auth?mode=signup">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 text-white px-8 py-3 text-lg"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-500 text-slate-300 hover:bg-slate-800/20 px-8 py-3 text-lg bg-transparent"
              >
                View Documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced AI Assistant with Sidebar */}
      {showAssistant && <EnhancedAIAssistant />}
    </div>
  )
}
