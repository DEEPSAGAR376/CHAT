"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, Search, Plus, Trash2, Edit3, Clock, Heart, X, PanelLeft } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChatMessage {
  id: string
  type: "user" | "assistant"
  content: string
  timestamp: Date
}

interface Chat {
  id: string
  title: string
  lastMessage: string
  timestamp: Date
  messages: ChatMessage[]
  isActive?: boolean
}

const mockChats: Chat[] = [
  // Removed "Getting Started with SoulMateAI" chat
  {
    id: "2",
    title: "MindVault Security Features",
    lastMessage: "What encryption methods does MindVault use?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    messages: [
      {
        id: "2-1",
        type: "user",
        content: "What encryption methods does MindVault use?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      },
    ],
  },
  {
    id: "3",
    title: "DevCore API Documentation",
    lastMessage: "Can you explain the authentication flow?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    messages: [
      {
        id: "3-1",
        type: "user",
        content: "Can you explain the authentication flow?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      },
    ],
  },
  {
    id: "4",
    title: "Pricing and Plans Discussion",
    lastMessage: "What's included in the enterprise plan?",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
    messages: [
      {
        id: "4-1",
        type: "user",
        content: "What's included in the enterprise plan?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
      },
    ],
  },
  {
    id: "5",
    title: "Technical Support",
    lastMessage: "I'm having trouble with the API integration",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
    messages: [
      {
        id: "5-1",
        type: "user",
        content: "I'm having trouble with the API integration",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
      },
    ],
  },
]

interface ChatSidebarProps {
  isOpen: boolean
  onToggle: () => void
  onChatSelect: (chat: Chat) => void
  selectedChatId?: string
}

export function ChatSidebar({ isOpen, onToggle, onChatSelect, selectedChatId }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [chats, setChats] = useState<Chat[]>(mockChats)

  const formatTimestamp = (timestamp: Date) => {
    const now = new Date()
    const diff = now.getTime() - timestamp.getTime()
    const minutes = Math.floor(diff / (1000 * 60))
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))

    if (minutes < 60) {
      return `${minutes}m ago`
    } else if (hours < 24) {
      return `${hours}h ago`
    } else {
      return `${days}d ago`
    }
  }

  const filteredChats = chats.filter(
    (chat) =>
      chat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New Conversation",
      lastMessage: "Start a new conversation...",
      timestamp: new Date(),
      messages: [],
    }
    setChats([newChat, ...chats])
    onChatSelect(newChat)
  }

  const handleDeleteChat = (chatId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setChats(chats.filter((chat) => chat.id !== chatId))
  }

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onToggle}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-slate-700/50 z-50 flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-slate-100">Chat History</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="text-slate-400 hover:text-slate-200 lg:hidden"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Search and New Chat */}
        <div className="p-4 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-800/60 border-slate-600 text-slate-100 placeholder-slate-500 focus:border-slate-400"
            />
          </div>

          <Button
            onClick={handleNewChat}
            className="w-full bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 text-white border-0 group"
          >
            <Plus className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            New Conversation
          </Button>
        </div>

        <Separator className="bg-slate-700/50" />

        {/* Chat List */}
        <ScrollArea className="flex-1 px-2">
          <div className="space-y-1 p-2">
            {filteredChats.length === 0 ? (
              <div className="text-center py-8">
                <MessageCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                <p className="text-slate-400 text-sm">No conversations found</p>
              </div>
            ) : (
              filteredChats.map((chat) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <Card
                    className={cn(
                      "cursor-pointer transition-all duration-200 border-0",
                      selectedChatId === chat.id
                        ? "bg-slate-700/60 shadow-lg"
                        : "bg-slate-800/40 hover:bg-slate-700/40",
                    )}
                    onClick={() => onChatSelect(chat)}
                  >
                    <CardContent className="p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-sm font-medium text-slate-200 truncate">{chat.title}</h3>
                            {selectedChatId === chat.id && (
                              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            )}
                          </div>
                          <p className="text-xs text-slate-400 truncate mb-2">{chat.lastMessage}</p>
                          <div className="flex items-center space-x-1 text-xs text-slate-500">
                            <Clock className="w-3 h-3" />
                            <span>{formatTimestamp(chat.timestamp)}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 text-slate-500 hover:text-slate-300"
                            onClick={(e) => {
                              e.stopPropagation()
                              // Handle edit
                            }}
                          >
                            <Edit3 className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-6 w-6 p-0 text-slate-500 hover:text-red-400"
                            onClick={(e) => handleDeleteChat(chat.id, e)}
                          >
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Heart className="w-3 h-3 text-slate-400" /> {/* Changed icon color from purple to slate */}
            <span>Powered by SoulTech AI</span>
          </div>
        </div>
      </motion.div>

      {/* Toggle Button */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="fixed left-4 top-20 z-40"
        >
          <Button
            onClick={onToggle}
            className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 text-slate-300 hover:text-slate-100 hover:bg-slate-800/90"
            size="sm"
          >
            <PanelLeft className="w-4 h-4" />
          </Button>
        </motion.div>
      )}
    </>
  )
}
