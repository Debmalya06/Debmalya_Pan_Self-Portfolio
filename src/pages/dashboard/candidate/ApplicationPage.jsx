"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Filter,
  ChevronDown,
  Clock,
  Building2,
  MapPin,
  Briefcase,
  ExternalLink,
  Eye,
  FileText,
} from "lucide-react"
import  Button  from "../../../components/ui/Button"
import  Input  from "../../../components/ui/Input"
import { Card } from "../../../components/ui/Card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/Tabs"
import Progress  from "../../../components/ui/Progress"

function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedSort, setSelectedSort] = useState("newest")

  // Mock data for applications
  const mockApplications = [
    {
      id: 1,
      jobTitle: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      appliedDate: "2023-05-15",
      status: "interview",
      progress: 75,
      logo: null,
      stages: [
        { name: "Application Submitted", completed: true, date: "May 15, 2023" },
        { name: "Resume Screened", completed: true, date: "May 17, 2023" },
        { name: "Technical Assessment", completed: true, date: "May 20, 2023" },
        { name: "Interview", completed: false, date: "May 25, 2023" },
        { name: "Final Decision", completed: false, date: null },
      ],
    },
    {
      id: 2,
      jobTitle: "UX/UI Designer",
      company: "Creative Minds",
      location: "Remote",
      type: "Contract",
      appliedDate: "2023-05-10",
      status: "assessment",
      progress: 50,
      logo: null,
      stages: [
        { name: "Application Submitted", completed: true, date: "May 10, 2023" },
        { name: "Portfolio Review", completed: true, date: "May 12, 2023" },
        { name: "Design Challenge", completed: false, date: "May 22, 2023" },
        { name: "Interview", completed: false, date: null },
        { name: "Final Decision", completed: false, date: null },
      ],
    },
    {
      id: 3,
      jobTitle: "Product Manager",
      company: "Innovate Labs",
      location: "New York, NY",
      type: "Full-time",
      appliedDate: "2023-05-05",
      status: "rejected",
      progress: 100,
      logo: null,
      stages: [
        { name: "Application Submitted", completed: true, date: "May 5, 2023" },
        { name: "Resume Screened", completed: true, date: "May 7, 2023" },
        { name: "Initial Interview", completed: true, date: "May 10, 2023" },
        { name: "Case Study", completed: true, date: "May 15, 2023" },
        { name: "Final Interview", completed: true, date: "May 18, 2023" },
        { name: "Rejected", completed: true, date: "May 20, 2023" },
      ],
    },
    {
      id: 4,
      jobTitle: "Backend Developer",
      company: "DataTech Systems",
      location: "Chicago, IL",
      type: "Full-time",
      appliedDate: "2023-05-18",
      status: "applied",
      progress: 20,
      logo: null,
      stages: [
        { name: "Application Submitted", completed: true, date: "May 18, 2023" },
        { name: "Resume Screening", completed: false, date: null },
        { name: "Technical Assessment", completed: false, date: null },
        { name: "Interview", completed: false, date: null },
        { name: "Final Decision", completed: false, date: null },
      ],
    },
    {
      id: 5,
      jobTitle: "Marketing Specialist",
      company: "Growth Hackers",
      location: "Remote",
      type: "Part-time",
      appliedDate: "2023-05-12",
      status: "offered",
      progress: 100,
      logo: null,
      stages: [
        { name: "Application Submitted", completed: true, date: "May 12, 2023" },
        { name: "Resume Screened", completed: true, date: "May 14, 2023" },
        { name: "Marketing Challenge", completed: true, date: "May 16, 2023" },
        { name: "Interview", completed: true, date: "May 19, 2023" },
        { name: "Offer Extended", completed: true, date: "May 22, 2023" },
      ],
    },
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setApplications(mockApplications)
      setLoading(false)
    }, 1000)
  }, [])

  const getStatusLabel = (status) => {
    switch (status) {
      case "applied":
        return "Applied"
      case "screening":
        return "Resume Screening"
      case "assessment":
        return "Assessment"
      case "interview":
        return "Interview"
      case "offered":
        return "Offer"
      case "rejected":
        return "Rejected"
      case "accepted":
        return "Accepted"
      default:
        return "Unknown"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "applied":
        return "bg-blue-100 text-blue-800"
      case "screening":
        return "bg-yellow-100 text-yellow-800"
      case "assessment":
        return "bg-orange-100 text-orange-800"
      case "interview":
        return "bg-purple-100 text-purple-800"
      case "offered":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "accepted":
        return "bg-emerald-100 text-emerald-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getTimeSince = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 day ago"
    if (diffDays < 30) return `${diffDays} days ago`

    const diffMonths = Math.floor(diffDays / 30)
    if (diffMonths === 1) return "1 month ago"
    return `${diffMonths} months ago`
  }

  // Filter applications based on search query and status
  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.company.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = selectedStatus === "all" || app.status === selectedStatus

    return matchesSearch && matchesStatus
  })

  // Sort applications based on selected sort option
  const sortedApplications = [...filteredApplications].sort((a, b) => {
    if (selectedSort === "newest") {
      return new Date(b.appliedDate) - new Date(a.appliedDate)
    } else if (selectedSort === "oldest") {
      return new Date(a.appliedDate) - new Date(b.appliedDate)
    } else if (selectedSort === "company") {
      return a.company.localeCompare(b.company)
    } else if (selectedSort === "status") {
      return a.status.localeCompare(b.status)
    }
    return 0
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Applications</h1>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search applications by job title or company"
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter className="w-4 h-4" />
            Filters
            <ChevronDown className="w-4 h-4" />
          </Button>
          <select
            className="border border-gray-300 rounded-md px-3 py-2 bg-white"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="company">Company</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>

      {filterOpen && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Application Status</label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="applied">Applied</option>
                <option value="screening">Resume Screening</option>
                <option value="assessment">Assessment</option>
                <option value="interview">Interview</option>
                <option value="offered">Offer</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                <option value="all">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Applied</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                <option value="all">All Time</option>
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="3months">Last 3 Months</option>
              </select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" className="mr-2">
              Reset
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Apply Filters</Button>
          </div>
        </div>
      )}

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 border-b border-gray-200">
          <TabsTrigger value="all" className="px-4 py-2 text-sm font-medium">
            All Applications
          </TabsTrigger>
          <TabsTrigger value="active" className="px-4 py-2 text-sm font-medium">
            Active
          </TabsTrigger>
          <TabsTrigger value="offered" className="px-4 py-2 text-sm font-medium">
            Offered
          </TabsTrigger>
          <TabsTrigger value="rejected" className="px-4 py-2 text-sm font-medium">
            Rejected
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="p-6 border border-gray-200 rounded-lg animate-pulse">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                </Card>
              ))}
            </div>
          ) : sortedApplications.length > 0 ? (
            sortedApplications.map((application) => (
              <Card
                key={application.id}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                      {application.logo ? (
                        <img
                          src={application.logo || "/placeholder.svg"}
                          alt={application.company}
                          className="w-12 h-12"
                        />
                      ) : (
                        <Building2 className="w-8 h-8" />
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getStatusColor(application.status)} inline-block mt-2 md:mt-0`}
                      >
                        {getStatusLabel(application.status)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{application.company}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {application.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {application.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Applied {getTimeSince(application.appliedDate)}
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Application Progress</span>
                        <span>{application.progress}%</span>
                      </div>
                      <Progress value={application.progress} className="h-2" />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {application.stages.map((stage, index) => (
                        <div
                          key={index}
                          className={`text-xs px-2 py-1 rounded-full flex items-center gap-1 ${
                            stage.completed
                              ? "bg-green-100 text-green-800"
                              : index === application.stages.findIndex((s) => !s.completed)
                                ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                                : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {stage.name}
                          {stage.date && stage.completed && <span className="text-xs">({stage.date})</span>}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>View Details</span>
                      </Button>
                      <Button variant="outline" className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>View Job</span>
                      </Button>
                      <Button variant="outline" className="flex items-center gap-1">
                        <ExternalLink className="w-4 h-4" />
                        <span>Company Website</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No applications found</h3>
              <p className="text-gray-500 mb-4">You haven't applied to any jobs yet</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Find Jobs to Apply</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {/* Similar content as "all" tab but filtered for active applications */}
          {sortedApplications.filter((app) => !["rejected", "offered", "accepted"].includes(app.status)).length > 0 ? (
            sortedApplications
              .filter((app) => !["rejected", "offered", "accepted"].includes(app.status))
              .map((application) => (
                <Card
                  key={application.id}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Same application card content as above */}
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        <Building2 className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${getStatusColor(application.status)} inline-block mt-2 md:mt-0`}
                        >
                          {getStatusLabel(application.status)}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{application.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {application.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {application.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Applied {getTimeSince(application.appliedDate)}
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Application Progress</span>
                          <span>{application.progress}%</span>
                        </div>
                        <Progress value={application.progress} className="h-2" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </Button>
                        <Button variant="outline" className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>View Job</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No active applications</h3>
              <p className="text-gray-500 mb-4">You don't have any active job applications</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Find Jobs to Apply</Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="offered" className="space-y-4">
          {/* Content for offered applications */}
          {sortedApplications.filter((app) => app.status === "offered").length > 0 ? (
            sortedApplications
              .filter((app) => app.status === "offered")
              .map((application) => (
                <Card
                  key={application.id}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Same application card content */}
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        <Building2 className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800 inline-block mt-2 md:mt-0">
                          Offer Received
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{application.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {application.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {application.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Applied {getTimeSince(application.appliedDate)}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button className="bg-green-600 hover:bg-green-700 text-white">Accept Offer</Button>
                        <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                          Decline Offer
                        </Button>
                        <Button variant="outline">Negotiate</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No offers received</h3>
              <p className="text-gray-500 mb-4">You haven't received any job offers yet</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="rejected" className="space-y-4">
          {/* Content for rejected applications */}
          {sortedApplications.filter((app) => app.status === "rejected").length > 0 ? (
            sortedApplications
              .filter((app) => app.status === "rejected")
              .map((application) => (
                <Card
                  key={application.id}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  {/* Same application card content */}
                  <div className="flex flex-col md:flex-row md:items-start">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                        <Building2 className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800 inline-block mt-2 md:mt-0">
                          Rejected
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{application.company}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {application.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {application.type}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Applied {getTimeSince(application.appliedDate)}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button variant="outline" className="flex items-center gap-1">
                          <FileText className="w-4 h-4" />
                          <span>View Similar Jobs</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <FileText className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No rejected applications</h3>
              <p className="text-gray-500 mb-4">You don't have any rejected job applications</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ApplicationsPage

