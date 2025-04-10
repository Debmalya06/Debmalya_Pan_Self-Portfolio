"use client"

import { useState, useEffect } from "react"
import { Bell, Briefcase, Check, Clock, FileText, Mail, MessageSquare, Search, Trash2, User } from "lucide-react"
import  Button  from "../../../components/ui/Button"
import  Input  from "../../../components/ui/Input"
import { Card } from "../../../components/ui/Card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/Tabs"

function NotificationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState("all")

  // Mock data for notifications
  const mockNotifications = [
    {
      id: 1,
      type: "application",
      title: "Application Viewed",
      message:
        "Your application for Senior Frontend Developer at Tech Solutions Inc. has been viewed by the hiring manager.",
      date: "2023-05-22T10:30:00",
      read: false,
      actionUrl: "/dashboard/candidate/applications/1",
      icon: FileText,
      relatedEntity: {
        type: "job",
        title: "Senior Frontend Developer",
        company: "Tech Solutions Inc.",
      },
    },
    {
      id: 2,
      type: "message",
      title: "New Message",
      message:
        "You have received a new message from Sarah Thompson, Recruiter at Creative Minds regarding your UX Designer application.",
      date: "2023-05-21T15:45:00",
      read: true,
      actionUrl: "/dashboard/candidate/messages/5",
      icon: MessageSquare,
      relatedEntity: {
        type: "conversation",
        title: "UX Designer Application",
        company: "Creative Minds",
      },
    },
    {
      id: 3,
      type: "job",
      title: "New Job Match",
      message: "We found a new job that matches your profile: Product Manager at Innovate Labs.",
      date: "2023-05-21T09:15:00",
      read: false,
      actionUrl: "/dashboard/candidate/jobs/15",
      icon: Briefcase,
      relatedEntity: {
        type: "job",
        title: "Product Manager",
        company: "Innovate Labs",
      },
    },
    {
      id: 4,
      type: "application",
      title: "Interview Invitation",
      message:
        "You've been invited to an interview for the Backend Developer position at DataTech Systems. Please respond within 3 days.",
      date: "2023-05-20T14:20:00",
      read: false,
      actionUrl: "/dashboard/candidate/applications/4",
      icon: Calendar,
      relatedEntity: {
        type: "job",
        title: "Backend Developer",
        company: "DataTech Systems",
      },
    },
    {
      id: 5,
      type: "system",
      title: "Profile Completion Reminder",
      message: "Your profile is 75% complete. Add your skills and work experience to improve your job matches.",
      date: "2023-05-19T11:00:00",
      read: true,
      actionUrl: "/dashboard/candidate/profile",
      icon: User,
      relatedEntity: null,
    },
    {
      id: 6,
      type: "application",
      title: "Application Status Update",
      message: "Your application for Marketing Specialist at Growth Hackers has moved to the Assessment stage.",
      date: "2023-05-18T16:30:00",
      read: true,
      actionUrl: "/dashboard/candidate/applications/5",
      icon: FileText,
      relatedEntity: {
        type: "job",
        title: "Marketing Specialist",
        company: "Growth Hackers",
      },
    },
    {
      id: 7,
      type: "job",
      title: "Saved Job Reminder",
      message: "The application deadline for DevOps Engineer at Cloud Solutions is approaching. Apply before May 25.",
      date: "2023-05-17T10:45:00",
      read: true,
      actionUrl: "/dashboard/candidate/jobs/22",
      icon: Clock,
      relatedEntity: {
        type: "job",
        title: "DevOps Engineer",
        company: "Cloud Solutions",
      },
    },
    {
      id: 8,
      type: "system",
      title: "Email Verification",
      message: "Please verify your email address to receive job alerts and application updates.",
      date: "2023-05-16T09:00:00",
      read: true,
      actionUrl: "#",
      icon: Mail,
      relatedEntity: null,
    },
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setNotifications(mockNotifications)
      setLoading(false)
    }, 1000)
  }, [])

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id))
  }

  const clearAllNotifications = () => {
    if (window.confirm("Are you sure you want to clear all notifications?")) {
      setNotifications([])
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) {
      const hours = date.getHours()
      const minutes = date.getMinutes()
      return `Today at ${hours}:${minutes < 10 ? "0" + minutes : minutes}`
    }

    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`

    const options = { month: "short", day: "numeric" }
    return date.toLocaleDateString(undefined, options)
  }

  const getNotificationTypeColor = (type) => {
    switch (type) {
      case "application":
        return "bg-purple-100 text-purple-800"
      case "message":
        return "bg-blue-100 text-blue-800"
      case "job":
        return "bg-green-100 text-green-800"
      case "system":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Filter notifications based on search query and selected tab
  const filteredNotifications = notifications.filter((notification) => {
    const matchesSearch =
      notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notification.message.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTab =
      selectedTab === "all" || (selectedTab === "unread" && !notification.read) || selectedTab === notification.type

    return matchesSearch && matchesTab
  })

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Notifications</h1>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <Check className="w-4 h-4 mr-2" />
              Mark All as Read
            </Button>
          )}
          <Button
            variant="outline"
            className="text-red-500 border-red-200 hover:bg-red-50"
            onClick={clearAllNotifications}
            disabled={notifications.length === 0}
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search notifications"
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="mb-6 border-b border-gray-200">
          <TabsTrigger value="all" className="px-4 py-2 text-sm font-medium">
            All
            {notifications.length > 0 && (
              <span className="ml-2 text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-0.5">
                {notifications.length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger value="unread" className="px-4 py-2 text-sm font-medium">
            Unread
            {unreadCount > 0 && (
              <span className="ml-2 text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5">{unreadCount}</span>
            )}
          </TabsTrigger>
          <TabsTrigger value="application" className="px-4 py-2 text-sm font-medium">
            Applications
          </TabsTrigger>
          <TabsTrigger value="message" className="px-4 py-2 text-sm font-medium">
            Messages
          </TabsTrigger>
          <TabsTrigger value="job" className="px-4 py-2 text-sm font-medium">
            Jobs
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="space-y-4">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-4 border border-gray-200 rounded-lg animate-pulse">
                  <div className="flex">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => {
              const NotificationIcon = notification.icon || Bell
              return (
                <Card
                  key={notification.id}
                  className={`p-4 border rounded-lg hover:shadow-sm transition-shadow ${!notification.read ? "bg-purple-50 border-purple-200" : "bg-white border-gray-200"}`}
                >
                  <div className="flex">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${getNotificationTypeColor(notification.type)}`}
                    >
                      <NotificationIcon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                        <h3 className={`font-medium ${!notification.read ? "text-purple-900" : "text-gray-900"}`}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-gray-500 mt-1 sm:mt-0">{formatDate(notification.date)}</span>
                      </div>
                      <p className={`text-sm ${!notification.read ? "text-purple-800" : "text-gray-700"}`}>
                        {notification.message}
                      </p>
                      {notification.relatedEntity && (
                        <div className="mt-2 flex items-center text-xs text-gray-500">
                          {notification.relatedEntity.type === "job" ? (
                            <Briefcase className="w-3 h-3 mr-1" />
                          ) : (
                            <MessageSquare className="w-3 h-3 mr-1" />
                          )}
                          <span>
                            {notification.relatedEntity.title} • {notification.relatedEntity.company}
                          </span>
                        </div>
                      )}
                      <div className="mt-3 flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white"
                          onClick={() => markAsRead(notification.id)}
                        >
                          View Details
                        </Button>
                        {!notification.read && (
                          <Button size="sm" variant="outline" onClick={() => markAsRead(notification.id)}>
                            Mark as Read
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-500 border-red-200 hover:bg-red-50"
                          onClick={() => deleteNotification(notification.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Bell className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
              <p className="text-gray-500 mb-4">
                {searchQuery
                  ? "No notifications match your search criteria"
                  : selectedTab === "unread"
                    ? "You have no unread notifications"
                    : "You don't have any notifications yet"}
              </p>
              {searchQuery && (
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Fix for missing Calendar icon
const Calendar = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  )
}

export default NotificationsPage

