"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain, Code, Lightbulb } from "lucide-react"

const demoContent = {
  // Removed soulmateai demo content
  mindvault: {
    title: "MindVault Demo",
    icon: Brain,
    color: "from-slate-600 to-slate-800", // Updated color to match theme
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-lg p-4 border border-slate-600/30">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-slate-100">Knowledge Graph</h4>
            <Badge className="bg-slate-700/50 text-slate-300">Live</Badge>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/30">
              {" "}
              {/* Updated border color */}
              <div className="flex items-center space-x-2 mb-2">
                <Lightbulb className="w-4 h-4 text-slate-400" /> {/* Updated icon color */}
                <span className="text-sm font-medium">Project Ideas</span>
              </div>
              <p className="text-xs text-slate-600">Connected to 12 notes</p>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/30">
              {" "}
              {/* Updated border color */}
              <div className="flex items-center space-x-2 mb-2">
                <Brain className="w-4 h-4 text-slate-400" /> {/* Updated icon color */}
                <span className="text-sm font-medium">Learning Goals</span>
              </div>
              <p className="text-xs text-slate-600">Connected to 8 notes</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
          <h4 className="font-semibold text-slate-100 mb-2">Smart Suggestions</h4>
          <div className="space-y-2">
            <div className="text-sm text-slate-300 bg-slate-600/50 rounded p-2">
              💡 Your notes on "AI Ethics" connect well with "User Privacy" - consider exploring this intersection
            </div>
            <div className="text-sm text-slate-300 bg-slate-600/50 rounded p-2">
              🔗 Found 3 similar concepts in your "Design Patterns" collection
            </div>
          </div>
        </div>
      </div>
    ),
  },
  devcore: {
    title: "DevCore Demo",
    icon: Code,
    color: "from-slate-400 to-slate-600", // Updated color to match theme
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 rounded-lg p-4 border border-slate-600/30">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-slate-100">Code Review Assistant</h4>
            <Badge className="bg-slate-700/50 text-slate-300">Analyzing</Badge>
          </div>
          <div className="bg-slate-900 rounded-lg p-3 text-sm font-mono">
            <div className="text-green-400">✓ Accessibility: Alt text present</div>
            <div className="text-yellow-400">⚠ Empathy: Consider loading states for users</div>
            <div className="text-blue-400">ℹ Performance: Image optimization suggested</div>
          </div>
        </div>

        <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/30">
          <h4 className="font-semibold text-slate-100 mb-2">Human-Centered Metrics</h4>
          <div className="grid grid-cols-2 gap-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">94%</div>
              <div className="text-xs text-slate-600">Accessibility Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">87%</div>
              <div className="text-xs text-slate-600">User Empathy Index</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-600/50 rounded-lg p-4">
          <h4 className="font-semibold text-slate-100 mb-2">Suggested Improvements</h4>
          <div className="space-y-2 text-sm text-slate-300">
            <div>• Add error boundaries for graceful failure handling</div>
            <div>• Include loading animations for better perceived performance</div>
            <div>• Consider dark mode support for user comfort</div>
          </div>
        </div>
      </div>
    ),
  },
}

export function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState("mindvault") // Changed initial active demo

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Experience the Magic
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Interactive previews of our products in action</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <Tabs value={activeDemo} onValueChange={setActiveDemo} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-900/80 backdrop-blur-sm">
              {" "}
              {/* Changed grid-cols-3 to grid-cols-2 */}
              <TabsTrigger
                value="mindvault"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-800 data-[state=active]:text-white" // Updated gradient
              >
                <Brain className="w-4 h-4 mr-2" />
                MindVault
              </TabsTrigger>
              <TabsTrigger
                value="devcore"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-slate-600 data-[state=active]:to-slate-800 data-[state=active]:text-white" // Updated gradient
              >
                <Code className="w-4 h-4 mr-2" />
                DevCore
              </TabsTrigger>
            </TabsList>

            <AnimatePresence mode="wait">
              {Object.entries(demoContent).map(([key, demo]) => (
                <TabsContent key={key} value={key} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="bg-slate-900/90 backdrop-blur-sm border-slate-700/50">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center mr-4`}
                          >
                            <demo.icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-slate-100">{demo.title}</h3>
                        </div>

                        {demo.content}

                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-slate-600/30">
                          <p className="text-sm text-slate-400">
                            This is a live preview - try interacting with the elements above
                          </p>
                          <Button
                            className={`bg-gradient-to-r from-slate-600 to-slate-800 hover:opacity-90 text-white border-0`}
                          >
                            Try Full Demo
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
