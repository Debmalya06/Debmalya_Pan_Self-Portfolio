"use client"

import { useState } from "react"
import { Search, Send, Paperclip, MoreVertical, Phone, Video, Info, ChevronDown, Mail } from "lucide-react"
import { Button } from "../../../components/ui/Button"
import { Input } from "../../../components/ui/Input"
import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/Tabs"

function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [currentChat, setCurrentChat] = useState(1)
  const [message, setMessage] = useState("")
  const [conversations, setConversations] = useState([
    {
      id: 1,
      person: {
        id: 101,
        name: "Sarah Johnson",
        avatar: null,
        position: "Senior Frontend Developer",
        status: "online",
        lastSeen: null,
      },
      unread: 2,
      lastMessage: {
        text: "Thank you for considering my application. I'm very interested in the position.",
        time: "10:42 AM",
        isMe: false,
      },
      messages: [
        {
          id: 1,
          text: "Hello Sarah, I've reviewed your application for the Senior Frontend Developer position.",
          time: "Yesterday, 4:30 PM",
          isMe: true,
        },
        {
          id: 2,
          text: "Your experience with React and TypeScript is impressive. Would you be available for an interview next week?",
          time: "Yesterday, 4:32 PM",
          isMe: true,
        },
        {
          id: 3,
          text: "Hi! Thank you for reaching out. Yes, I would be available for an interview next week. I'm particularly free on Tuesday and Thursday.",
          time: "Yesterday, 5:15 PM",
          isMe: false,
        },
        {
          id: 4,
          text: "Great! Let's schedule for Tuesday at 2:00 PM. I'll send you a calendar invite with the meeting details.",
          time: "Yesterday, 5:45 PM",
          isMe: true,
        },
        {
          id: 5,
          text: "That works perfectly for me. I'm looking forward to discussing the position in more detail.",
          time: "Yesterday, 6:00 PM",
          isMe: false,
        },
        {
          id: 6,
          text: "Thank you for considering my application. I'm very interested in the position.",
          time: "10:42 AM",
          isMe: false,
        },
      ],
    },
    {
      id: 2,
      person: {
        id: 102,
        name: "Michael Chen",
        avatar: null,
        position: "UX/UI Designer",
        status: "offline",
        lastSeen: "2 hours ago",
      },
      unread: 0,
      lastMessage: {
        text: "I've attached my portfolio for your review.",
        time: "Yesterday",
        isMe: false,
      },
      messages: [
        {
          id: 1,
          text: "Hello Michael, I'm reaching out regarding your application for the UX/UI Designer position.",
          time: "2 days ago, 11:30 AM",
          isMe: true,
        },
        {
          id: 2,
          text: "Hi! Thanks for considering my application. I'm very excited about the opportunity.",
          time: "2 days ago, 12:15 PM",
          isMe: false,
        },
        {
          id: 3,
          text: "Could you share some examples of your recent design work?",
          time: "2 days ago, 12:30 PM",
          isMe: true,
        },
        {
          id: 4,
          text: "Of course! I've attached my portfolio for your review.",
          time: "Yesterday, 9:45 AM",
          isMe: false,
        },
      ],
    },
    {
      id: 3,
      person: {
        id: 103,
        name: "Emily Rodriguez",
        avatar: null,
        position: "Product Manager",
        status: "online",
        lastSeen: null,
      },
      unread: 0,
      lastMessage: {
        text: "Looking forward to our interview tomorrow!",
        time: "Monday",
        isMe: true,
      },
      messages: [
        {
          id: 1,
          text: "Hi Emily, I'm impressed with your application for the Product Manager role.",
          time: "Monday, 10:00 AM",
          isMe: true,
        },
        {
          id: 2,
          text: "Thank you! I'm very interested in joining your team.",
          time: "Monday, 10:30 AM",
          isMe: false,
        },
        {
          id: 3,
          text: "Would you be available for an interview this week?",
          time: "Monday, 10:35 AM",
          isMe: true,
        },
        {
          id: 4,
          text: "Yes, I'm available on Wednesday afternoon or Thursday morning.",
          time: "Monday, 11:00 AM",
          isMe: false,
        },
        {
          id: 5,
          text: "Let's schedule for Thursday at 10:00 AM. I'll send you the details.",
          time: "Monday, 11:15 AM",
          isMe: true,
        },
        {
          id: 6,
          text: "Perfect, thank you!",
          time: "Monday, 11:20 AM",
          isMe: false,
        },
        {
          id: 7,
          text: "Looking forward to our interview tomorrow!",
          time: "Monday, 4:00 PM",
          isMe: true,
        },
      ],
    },
  ])

  const filteredConversations = conversations.filter(
    (convo) =>
      convo.person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      convo.person.position.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const currentConversation = conversations.find((convo) => convo.id === currentChat)

  const sendMessage = () => {
    if (!message.trim()) return

    const newMessage = {
      id: currentConversation.messages.length + 1,
      text: message,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMe: true,
    }

    const updatedConversations = conversations.map((convo) => {
      if (convo.id === currentChat) {
        return {
          ...convo,
          messages: [...convo.messages, newMessage],
          lastMessage: {
            text: message,
            time: "Just now",
            isMe: true,
          },
        }
      }
      return convo
    })

    setConversations(updatedConversations)
    setMessage("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-80 border-r border-gray-200 flex flex-col bg-white">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-xl font-bold mb-4">Messages</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search conversations"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full px-4 pt-4">
          <TabsList className="mb-4">
            <TabsTrigger value="all" className="px-4 py-2 text-sm font-medium">
              All
            </TabsTrigger>
            <TabsTrigger value="unread" className="px-4 py-2 text-sm font-medium">
              Unread
            </TabsTrigger>
            <TabsTrigger value="archived" className="px-4 py-2 text-sm font-medium">
              Archived
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex-1 overflow-y-auto">
          {filteredConversations.length > 0 ? (
            filteredConversations.map((convo) => (
              <div
                key={convo.id}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${currentChat === convo.id ? "bg-purple-50" : ""}`}
                onClick={() => setCurrentChat(convo.id)}
              >
                <div className="flex items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
                      {convo.person.avatar ? (
                        <img
                          src={convo.person.avatar || "/placeholder.svg"}
                          alt={convo.person.name}
                          className="w-full h-full rounded-full"
                        />
                      ) : (
                        convo.person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                      )}
                    </div>
                    {convo.person.status === "online" && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  <div className="ml-3 flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium text-gray-900 truncate">{convo.person.name}</h3>
                      <span className="text-xs text-gray-500">{convo.lastMessage.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{convo.person.position}</p>
                    <p className="mt-1 text-sm text-gray-600 truncate">
                      {convo.lastMessage.isMe && "You: "}
                      {convo.lastMessage.text}
                    </p>
                  </div>
                  {convo.unread > 0 && (
                    <span className="ml-2 flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-purple-600 text-white">
                      {convo.unread}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-gray-500">No conversations found</div>
          )}
        </div>
      </div>

      {/* Chat Area */}
      {currentConversation ? (
        <div className="hidden md:flex flex-1 flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <div className="flex items-center">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
                  {currentConversation.person.avatar ? (
                    <img
                      src={currentConversation.person.avatar || "/placeholder.svg"}
                      alt={currentConversation.person.name}
                      className="w-full h-full rounded-full"
                    />
                  ) : (
                    currentConversation.person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                  )}
                </div>
                {currentConversation.person.status === "online" && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <div className="ml-3">
                <h2 className="text-sm font-medium text-gray-900">{currentConversation.person.name}</h2>
                <p className="text-xs text-gray-500">
                  {currentConversation.person.status === "online"
                    ? "Online"
                    : `Last seen ${currentConversation.person.lastSeen}`}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
                <Info className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {/* Date Separator */}
              <div className="flex justify-center">
                <span className="px-3 py-1 text-xs font-medium bg-gray-200 rounded-full text-gray-600">Today</span>
              </div>

              {currentConversation.messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                  {!msg.isMe && (
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-medium">
                        {currentConversation.person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                  )}
                  <div
                    className={`max-w-xs md:max-w-md ${msg.isMe ? "bg-purple-600 text-white" : "bg-white text-gray-800"} rounded-lg px-4 py-2 shadow-sm`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className={`text-xs ${msg.isMe ? "text-purple-200" : "text-gray-500"} block mt-1`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-end">
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0 mb-2 mr-2">
                <Paperclip className="w-4 h-4 text-gray-500" />
              </Button>
              <div className="flex-1 relative">
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Type a message..."
                  rows={1}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{ minHeight: "44px", maxHeight: "120px" }}
                ></textarea>
              </div>
              <Button
                className="ml-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center"
                onClick={sendMessage}
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Your Messages</h3>
            <p className="text-gray-500 max-w-sm">
              Select a conversation to start messaging or start a new conversation.
            </p>
          </div>
        </div>
      )}

      {/* Mobile view - when a chat is selected */}
      {currentConversation && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          {/* Mobile Chat Header */}
          <div className="flex items-center p-4 border-b border-gray-200 bg-white">
            <Button variant="ghost" size="sm" className="mr-2 p-0 h-8 w-8" onClick={() => setCurrentChat(null)}>
              <ChevronDown className="w-5 h-5" />
            </Button>
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium">
                {currentConversation.person.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              {currentConversation.person.status === "online" && (
                <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
              )}
            </div>
            <div className="ml-3 flex-1">
              <h2 className="text-sm font-medium text-gray-900">{currentConversation.person.name}</h2>
              <p className="text-xs text-gray-500">
                {currentConversation.person.status === "online"
                  ? "Online"
                  : `Last seen ${currentConversation.person.lastSeen}`}
              </p>
            </div>
            <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50" style={{ height: "calc(100vh - 128px)" }}>
            <div className="space-y-4">
              {/* Date Separator */}
              <div className="flex justify-center">
                <span className="px-3 py-1 text-xs font-medium bg-gray-200 rounded-full text-gray-600">Today</span>
              </div>

              {currentConversation.messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}>
                  {!msg.isMe && (
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-medium">
                        {currentConversation.person.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div>
                  )}
                  <div
                    className={`max-w-xs ${msg.isMe ? "bg-purple-600 text-white" : "bg-white text-gray-800"} rounded-lg px-4 py-2 shadow-sm`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className={`text-xs ${msg.isMe ? "text-purple-200" : "text-gray-500"} block mt-1`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white absolute bottom-0 left-0 right-0">
            <div className="flex items-end">
              <Button variant="ghost" size="sm" className="rounded-full w-8 h-8 p-0 mb-2 mr-2">
                <Paperclip className="w-4 h-4 text-gray-500" />
              </Button>
              <div className="flex-1 relative">
                <textarea
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Type a message..."
                  rows={1}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{ minHeight: "44px", maxHeight: "120px" }}
                ></textarea>
              </div>
              <Button
                className="ml-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center"
                onClick={sendMessage}
                disabled={!message.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MessagesPage

