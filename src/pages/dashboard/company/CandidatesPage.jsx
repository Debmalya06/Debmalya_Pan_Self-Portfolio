"use client"

import { useState } from "react"
import { ChevronDown, Download, Filter, Search, SlidersHorizontal, User } from "lucide-react"
import  Button  from "../../../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card"
// import { Checkbox } from "../../../components/ui/checkbox"
// import { Input } from "../../../components/ui/input"
// import { Progress } from "../../../components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/Tabs"


// import {Card} from "../../../components/ui/Card";
import Checkbox from "../../../components/ui/Checkbox";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import Progress from "../../../components/ui/Progress";
// import {Tabs} from "../../../components/ui/Tabs";
import Textarea from "../../../components/ui/Textarea";
import {Select} from "../../../components/ui/Select";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/Popover";import RadioGroup from "../../../components/ui/RadioGroup";
import Separator from "../../../components/ui/Separator";

function CandidatesPage() {
  const [selectedCandidates, setSelectedCandidates] = useState([])
  const [isActionsMenuOpen, setIsActionsMenuOpen] = useState(false)

  // Mock data
  const candidates = [
    {
      id: "1",
      name: "Sarah Johnson",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      experience: "5 years",
      education: "B.S. Computer Science",
      matchScore: 92,
      status: "New",
      appliedDate: "2 days ago",
    },
    {
      id: "2",
      name: "Michael Chen",
      position: "UX/UI Designer",
      location: "Remote",
      experience: "4 years",
      education: "M.A. Design",
      matchScore: 88,
      status: "Reviewed",
      appliedDate: "3 days ago",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      position: "Product Manager",
      location: "New York, NY",
      experience: "7 years",
      education: "MBA",
      matchScore: 85,
      status: "Shortlisted",
      appliedDate: "1 week ago",
    },
    {
      id: "4",
      name: "David Kim",
      position: "Frontend Developer",
      location: "Chicago, IL",
      experience: "3 years",
      education: "B.S. Computer Science",
      matchScore: 80,
      status: "New",
      appliedDate: "1 day ago",
    },
    {
      id: "5",
      name: "Jessica Taylor",
      position: "UX/UI Designer",
      location: "Remote",
      experience: "6 years",
      education: "B.F.A. Graphic Design",
      matchScore: 78,
      status: "Reviewed",
      appliedDate: "5 days ago",
    },
  ]

  const toggleCandidateSelection = (candidateId) => {
    setSelectedCandidates((prev) =>
      prev.includes(candidateId) ? prev.filter((id) => id !== candidateId) : [...prev, candidateId],
    )
  }

  const isAllSelected = selectedCandidates.length === candidates.length

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedCandidates([])
    } else {
      setSelectedCandidates(candidates.map((c) => c.id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Candidates</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="hidden sm:flex">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Filter className="mr-2 h-4 w-4" />
            AI Shortlist
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <TabsList>
            <TabsTrigger value="all">All Candidates</TabsTrigger>
            <TabsTrigger value="shortlisted">Shortlisted</TabsTrigger>
            <TabsTrigger value="interviewed">Interviewed</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>

          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input placeholder="Search candidates..." className="w-full pl-10 sm:w-[300px]" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>

            <select className="h-9 rounded-md border border-gray-300 px-3 py-1">
              <option value="all">All Positions</option>
              <option value="frontend">Frontend Developer</option>
              <option value="ux">UX/UI Designer</option>
              <option value="product">Product Manager</option>
            </select>

            <select className="h-9 rounded-md border border-gray-300 px-3 py-1">
              <option value="all">All Scores</option>
              <option value="90">90% and above</option>
              <option value="80">80% and above</option>
              <option value="70">70% and above</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{selectedCandidates.length} selected</span>

            {selectedCandidates.length > 0 && (
              <div className="relative">
                <Button variant="outline" size="sm" onClick={() => setIsActionsMenuOpen(!isActionsMenuOpen)}>
                  Actions <ChevronDown className="ml-2 h-4 w-4" />
                </Button>

                {isActionsMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white py-1 shadow-lg z-10">
                    <div className="border-b px-4 py-2 font-medium">Bulk Actions</div>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Shortlist Selected
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Schedule Interviews
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Send Message
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                      Reject Selected
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>All Candidates</CardTitle>
                <CardDescription>{candidates.length} candidates found</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-2 border-b bg-muted/50 p-4 text-sm font-medium">
                  <div className="col-span-1 flex items-center">
                    <Checkbox checked={isAllSelected} onChange={toggleSelectAll} aria-label="Select all candidates" />
                  </div>
                  <div className="col-span-3">Candidate</div>
                  <div className="col-span-2">Position</div>
                  <div className="col-span-2 hidden md:block">Location</div>
                  <div className="col-span-1 hidden lg:block">Experience</div>
                  <div className="col-span-2">Match Score</div>
                  <div className="col-span-1">Status</div>
                </div>

                {candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="grid grid-cols-12 gap-2 border-b p-4 text-sm last:border-0 hover:bg-muted/50"
                  >
                    <div className="col-span-1 flex items-center">
                      <Checkbox
                        checked={selectedCandidates.includes(candidate.id)}
                        onChange={() => toggleCandidateSelection(candidate.id)}
                        aria-label={`Select ${candidate.name}`}
                      />
                    </div>
                    <div className="col-span-3 flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-xs text-muted-foreground">Applied {candidate.appliedDate}</div>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center">{candidate.position}</div>
                    <div className="col-span-2 hidden items-center md:flex">{candidate.location}</div>
                    <div className="col-span-1 hidden items-center lg:flex">{candidate.experience}</div>
                    <div className="col-span-2 flex flex-col justify-center">
                      <div className="flex items-center justify-between text-xs">
                        <span>Match</span>
                        <span className="font-medium">{candidate.matchScore}%</span>
                      </div>
                      <Progress value={candidate.matchScore} className="h-2" />
                    </div>
                    <div className="col-span-1 flex items-center">
                      <div
                        className={`rounded-full px-2 py-1 text-xs font-medium ${
                          candidate.status === "New"
                            ? "bg-blue-100 text-blue-600"
                            : candidate.status === "Reviewed"
                              ? "bg-yellow-100 text-yellow-600"
                              : "bg-green-100 text-green-600"
                        }`}
                      >
                        {candidate.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shortlisted" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Shortlisted Candidates</CardTitle>
              <CardDescription>Candidates you've shortlisted for further consideration</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">No shortlisted candidates yet</p>
                  <Button variant="outline" className="mt-4">
                    Shortlist Candidates
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interviewed" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Interviewed Candidates</CardTitle>
              <CardDescription>Candidates who have completed interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">No interviewed candidates yet</p>
                  <Button variant="outline" className="mt-4">
                    Schedule Interviews
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Candidates</CardTitle>
              <CardDescription>Candidates who were not selected for the position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">No rejected candidates yet</p>
                  <Button variant="outline" className="mt-4">
                    View All Candidates
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CandidatesPage

