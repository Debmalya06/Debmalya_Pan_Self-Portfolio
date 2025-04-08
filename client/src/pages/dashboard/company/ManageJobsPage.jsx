"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Briefcase,
  Search,
  Filter,
  Plus,
  Edit2,
  Trash2,
  Eye,
  Clock,
  MapPin,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import  Button  from "../../../components/ui/Button"
import  Input  from "../../../components/ui/Input"
import  {Card } from "../../../components/ui/Card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/Tabs"

function ManageJobsPage() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedSort, setSelectedSort] = useState("newest")

  // Mock data for jobs
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "Remote",
      type: "Full-time",
      applicants: 12,
      posted: "5 days ago",
      status: "active",
      description: "We are looking for an experienced Frontend Developer with React expertise...",
      salary: "$90,000 - $120,000",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      location: "New York, NY",
      type: "Full-time",
      applicants: 8,
      posted: "3 days ago",
      status: "active",
      description: "Join our creative team to design beautiful and intuitive user interfaces...",
      salary: "$80,000 - $110,000",
    },
    {
      id: 3,
      title: "Product Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      applicants: 5,
      posted: "1 day ago",
      status: "active",
      description: "Lead product development and strategy for our SaaS platform...",
      salary: "$110,000 - $140,000",
    },
    {
      id: 4,
      title: "Backend Developer",
      location: "Remote",
      type: "Contract",
      applicants: 3,
      posted: "2 weeks ago",
      status: "paused",
      description: "Develop and maintain our backend services using Node.js...",
      salary: "$70 - $90 per hour",
    },
    {
      id: 5,
      title: "Marketing Specialist",
      location: "Chicago, IL",
      type: "Part-time",
      applicants: 7,
      posted: "1 week ago",
      status: "closed",
      description: "Help us grow our brand presence and lead generation...",
      salary: "$50,000 - $65,000",
    },
  ]

  // Filter jobs based on search query and status
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === "all" || job.status === selectedStatus
    return matchesSearch && matchesStatus
  })

  // Sort jobs based on selected sort option
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (selectedSort === "newest") {
      return a.id < b.id ? 1 : -1 // Using id as a proxy for date in this mock
    } else if (selectedSort === "oldest") {
      return a.id > b.id ? 1 : -1
    } else if (selectedSort === "applicants-high") {
      return a.applicants < b.applicants ? 1 : -1
    } else if (selectedSort === "applicants-low") {
      return a.applicants > b.applicants ? 1 : -1
    }
    return 0
  })

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  const handleEditJob = (jobId) => {
    // In a real app, you would navigate to an edit page with the job ID
    navigate(`/dashboard/company/post-job?edit=${jobId}`)
  }

  const handleViewCandidates = (jobId) => {
    navigate(`/dashboard/company/candidates?job=${jobId}`)
  }

  const handleDeleteJob = (jobId) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      // In a real app, you would call an API to delete the job
      alert(`Job ${jobId} deleted successfully`)
      // Then refresh the job list
    }
  }

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Manage Jobs</h1>
        <Link to="/dashboard/company/post-job">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Plus className="w-4 h-4 mr-2" /> Post New Job
          </Button>
        </Link>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search jobs by title or location"
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter className="w-4 h-4" />
            Filters
            {filterOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
          <select
            className="border border-gray-300 rounded-md px-3 py-2 bg-white"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="applicants-high">Most Applicants</option>
            <option value="applicants-low">Fewest Applicants</option>
          </select>
        </div>
      </div>

      {filterOpen && (
        <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Status</label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="closed">Closed</option>
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                <option value="all">All Locations</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
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
            All Jobs ({jobs.length})
          </TabsTrigger>
          <TabsTrigger value="active" className="px-4 py-2 text-sm font-medium">
            Active ({jobs.filter((job) => job.status === "active").length})
          </TabsTrigger>
          <TabsTrigger value="paused" className="px-4 py-2 text-sm font-medium">
            Paused ({jobs.filter((job) => job.status === "paused").length})
          </TabsTrigger>
          <TabsTrigger value="closed" className="px-4 py-2 text-sm font-medium">
            Closed ({jobs.filter((job) => job.status === "closed").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {sortedJobs.length > 0 ? (
            sortedJobs.map((job) => (
              <Card
                key={job.id}
                className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold mr-3">{job.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClass(job.status)}`}>
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.applicants} Applicants
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Posted {job.posted}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2 min-w-[120px]">
                    <Button
                      variant="outline"
                      className="flex items-center justify-center"
                      onClick={() => handleEditJob(job.id)}
                    >
                      <Edit2 className="w-4 h-4 mr-2" /> Edit
                    </Button>
                    <Button
                      className="bg-purple-600 hover:bg-purple-700 text-white w-full flex items-center justify-center"
                      onClick={() => handleViewCandidates(job.id)}
                    >
                      <Eye className="w-4 h-4 mr-2" /> View
                    </Button>
                    <Button
                      variant="outline"
                      className="text-red-500 border-red-200 hover:bg-red-50 flex items-center justify-center"
                      onClick={() => handleDeleteJob(job.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-2" /> Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Briefcase className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <Link to="/dashboard/company/post-job">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Plus className="w-4 h-4 mr-2" /> Post New Job
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {/* Similar content as "all" tab but filtered for active jobs */}
          {sortedJobs.filter((job) => job.status === "active").length > 0 ? (
            sortedJobs
              .filter((job) => job.status === "active")
              .map((job) => (
                <Card
                  key={job.id}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Same job card content as above */}
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold mr-3">{job.title}</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Active</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.applicants} Applicants
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Posted {job.posted}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col gap-2 min-w-[120px]">
                      <Button
                        variant="outline"
                        className="flex items-center justify-center"
                        onClick={() => handleEditJob(job.id)}
                      >
                        <Edit2 className="w-4 h-4 mr-2" /> Edit
                      </Button>
                      <Button
                        className="bg-purple-600 hover:bg-purple-700 text-white w-full flex items-center justify-center"
                        onClick={() => handleViewCandidates(job.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" /> View
                      </Button>
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50 flex items-center justify-center"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Briefcase className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No active jobs found</h3>
              <p className="text-gray-500 mb-4">Post a new job or activate a paused job</p>
              <Link to="/dashboard/company/post-job">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Plus className="w-4 h-4 mr-2" /> Post New Job
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>

        {/* Similar content for "paused" and "closed" tabs */}
        <TabsContent value="paused" className="space-y-4">
          {/* Content for paused jobs */}
          {sortedJobs.filter((job) => job.status === "paused").length > 0 ? (
            sortedJobs
              .filter((job) => job.status === "paused")
              .map((job) => (
                <Card
                  key={job.id}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Job card content */}
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold mr-3">{job.title}</h3>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Paused</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.applicants} Applicants
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Posted {job.posted}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col gap-2 min-w-[120px]">
                      <Button
                        variant="outline"
                        className="flex items-center justify-center"
                        onClick={() => handleEditJob(job.id)}
                      >
                        <Edit2 className="w-4 h-4 mr-2" /> Edit
                      </Button>
                      <Button
                        className="bg-purple-600 hover:bg-purple-700 text-white w-full flex items-center justify-center"
                        onClick={() => handleViewCandidates(job.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" /> View
                      </Button>
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50 flex items-center justify-center"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Briefcase className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No paused jobs found</h3>
              <p className="text-gray-500 mb-4">You don't have any paused job listings</p>
              <Link to="/dashboard/company/post-job">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Plus className="w-4 h-4 mr-2" /> Post New Job
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="closed" className="space-y-4">
          {/* Content for closed jobs */}
          {sortedJobs.filter((job) => job.status === "closed").length > 0 ? (
            sortedJobs
              .filter((job) => job.status === "closed")
              .map((job) => (
                <Card
                  key={job.id}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Job card content */}
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <h3 className="text-lg font-semibold mr-3">{job.title}</h3>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">Closed</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.applicants} Applicants
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Posted {job.posted}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row md:flex-col gap-2 min-w-[120px]">
                      <Button
                        variant="outline"
                        className="flex items-center justify-center"
                        onClick={() => handleEditJob(job.id)}
                      >
                        <Edit2 className="w-4 h-4 mr-2" /> Edit
                      </Button>
                      <Button
                        className="bg-purple-600 hover:bg-purple-700 text-white w-full flex items-center justify-center"
                        onClick={() => handleViewCandidates(job.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" /> View
                      </Button>
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50 flex items-center justify-center"
                        onClick={() => handleDeleteJob(job.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" /> Delete
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <Briefcase className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No closed jobs found</h3>
              <p className="text-gray-500 mb-4">You don't have any closed job listings</p>
              <Link to="/dashboard/company/post-job">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Plus className="w-4 h-4 mr-2" /> Post New Job
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ManageJobsPage
