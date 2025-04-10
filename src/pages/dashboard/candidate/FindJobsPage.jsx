"use client"

import { useState, useEffect } from "react"
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  Filter,
  ChevronDown,
  BookmarkPlus,
  Clock,
  Building2,
} from "lucide-react"
import Button from "../../../components/ui/Button"
import Input from "../../../components/ui/Input"
import { Card } from "../../../components/ui/Card"
import Checkbox from "../../../components/ui/Checkbox"
import ApplyJobForm from "./ApplyJobForm"; // Adjust path as needed

function FindJobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [location, setLocation] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [jobType, setJobType] = useState([])
  const [experienceLevel, setExperienceLevel] = useState([])
  const [salaryRange, setSalaryRange] = useState("")
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState("relevance")
  const [selectedJob, setSelectedJob] = useState(null);//new added


  
useEffect(() => {
  const fetchJobs = async () => {
    try {
      setLoading(true)
      const response = await fetch("http://localhost:5001/api/jobs")
      const data = await response.json()
      setJobs(data.jobs || []) // assuming your API returns { jobs: [...] }
    } catch (error) {
      console.error("Failed to fetch jobs:", error)
    } finally {
      setLoading(false)
    }
  }

  fetchJobs()
}, [])

////
  const handleJobTypeChange = (type) => {
    if (jobType.includes(type)) {
      setJobType(jobType.filter((t) => t !== type))
    } else {
      setJobType([...jobType, type])
    }
  }

  const handleExperienceLevelChange = (level) => {
    if (experienceLevel.includes(level)) {
      setExperienceLevel(experienceLevel.filter((l) => l !== level))
    } else {
      setExperienceLevel([...experienceLevel, level])
    }
  }

  const sortJobs = (jobs) => {
    if (sortBy === "date") {
      return [...jobs].sort((a, b) => new Date(b.posted) - new Date(a.posted))
    }
    return jobs
  }

  const filteredJobs = sortJobs(jobs).filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesLocation = location === "" || job.location.toLowerCase().includes(location.toLowerCase())

    const matchesJobType = jobType.length === 0 || jobType.includes(job.type)

    const matchesExperience = experienceLevel.length === 0 || true

    return matchesSearch && matchesLocation && matchesJobType && matchesExperience
  })

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Find Jobs</h1>

      {/* Search Bar */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Job title, keywords, or company"
              className="pl-10 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Location or remote"
              className="pl-10 w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white flex-grow">Search Jobs</Button>
            <Button variant="outline" className="flex items-center gap-2" onClick={() => setFilterOpen(!filterOpen)}>
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {filterOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3">Job Type</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox
                      id="full-time"
                      checked={jobType.includes("Full-time")}
                      onChange={() => handleJobTypeChange("Full-time")}
                    />
                    <label htmlFor="full-time" className="ml-2 text-sm">
                      Full-time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="part-time"
                      checked={jobType.includes("Part-time")}
                      onChange={() => handleJobTypeChange("Part-time")}
                    />
                    <label htmlFor="part-time" className="ml-2 text-sm">
                      Part-time
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="contract"
                      checked={jobType.includes("Contract")}
                      onChange={() => handleJobTypeChange("Contract")}
                    />
                    <label htmlFor="contract" className="ml-2 text-sm">
                      Contract
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="internship"
                      checked={jobType.includes("Internship")}
                      onChange={() => handleJobTypeChange("Internship")}
                    />
                    <label htmlFor="internship" className="ml-2 text-sm">
                      Internship
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Experience Level</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox
                      id="entry-level"
                      checked={experienceLevel.includes("Entry Level")}
                      onChange={() => handleExperienceLevelChange("Entry Level")}
                    />
                    <label htmlFor="entry-level" className="ml-2 text-sm">
                      Entry Level
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="mid-level"
                      checked={experienceLevel.includes("Mid Level")}
                      onChange={() => handleExperienceLevelChange("Mid Level")}
                    />
                    <label htmlFor="mid-level" className="ml-2 text-sm">
                      Mid Level
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="senior-level"
                      checked={experienceLevel.includes("Senior Level")}
                      onChange={() => handleExperienceLevelChange("Senior Level")}
                    />
                    <label htmlFor="senior-level" className="ml-2 text-sm">
                      Senior Level
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="executive"
                      checked={experienceLevel.includes("Executive")}
                      onChange={() => handleExperienceLevelChange("Executive")}
                    />
                    <label htmlFor="executive" className="ml-2 text-sm">
                      Executive
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3">Salary Range</h3>
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={salaryRange}
                  onChange={(e) => setSalaryRange(e.target.value)}
                >
                  <option value="">Any Salary</option>
                  <option value="0-50000">$0 - $50,000</option>
                  <option value="50000-80000">$50,000 - $80,000</option>
                  <option value="80000-100000">$80,000 - $100,000</option>
                  <option value="100000-150000">$100,000 - $150,000</option>
                  <option value="150000+">$150,000+</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button variant="outline" className="mr-2">
                Reset Filters
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Apply Filters</Button>
            </div>
          </div>
        )}
      </div>
{/* ////// */}
       <div className="flex items-center">
        <span className="text-sm text-gray-500 mr-2">Sort by:</span>
        <select
          className="border border-gray-300 rounded-md px-3 py-1 text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="relevance">Relevance</option>
          <option value="date">Date Posted</option>
          <option value="salary">Salary</option>
        </select>
      </div>
      {/* /////// //////////////////////*/}
      {/* Job Results */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">{loading ? "Loading jobs..." : `${filteredJobs.length} jobs found`}</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">Sort by:</span>
          <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
            <option value="relevance">Relevance</option>
            <option value="date">Date Posted</option>
            <option value="salary">Salary</option>
          </select>
        </div>
      </div> 
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 border border-gray-200 rounded-lg animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </Card>
          ))}
        </div>
      ) : filteredJobs.length > 0 ? (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    {job.logo ? (
                      <img src={job.logo || "/placeholder.svg"} alt={job.company} className="w-12 h-12" />
                    ) : (
                      <Building2 className="w-8 h-8" />
                    )}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <Button variant="outline" className="mt-2 md:mt-0 flex items-center gap-1">
                      <BookmarkPlus className="w-4 h-4" />
                      <span>Save</span>
                    </Button>
                  </div>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Posted {job.posted}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <span key={index} className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full">
                        {req}
                      </span>
                    ))}
                    {job.requirements.length > 3 && (
                      <span className="bg-gray-50 text-gray-700 text-xs px-2 py-1 rounded-full">
                        +{job.requirements.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-end">
                    {/* //////////////////// */}
                  <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => setSelectedJob(job)}
>                     
  Apply Now
</Button>
{/* // Add this near the end of your FindJobsPage return statement: */}
{selectedJob && (
  <ApplyJobForm 
    job={selectedJob} 
    onClose={() => setSelectedJob(null)} 
  />
)}
{/* //////////////////////////////////////////////////////// */}

                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
          <Search className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">Clear Filters</Button>
        </div>
      )}

      {filteredJobs.length > 0 && (
        <div className="mt-6 flex justify-center">
          <nav className="flex items-center gap-1">
            <Button variant="outline" className="w-9 h-9 p-0" disabled>
              &lt;
            </Button>
            <Button variant="outline" className="w-9 h-9 p-0 bg-purple-50 text-purple-600 border-purple-200">
              1
            </Button>
            <Button variant="outline" className="w-9 h-9 p-0">
              2
            </Button>
            <Button variant="outline" className="w-9 h-9 p-0">
              3
            </Button>
            <span className="px-2">...</span>
            <Button variant="outline" className="w-9 h-9 p-0">
              10
            </Button>
            <Button variant="outline" className="w-9 h-9 p-0">
              &gt;
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

export default FindJobsPage

