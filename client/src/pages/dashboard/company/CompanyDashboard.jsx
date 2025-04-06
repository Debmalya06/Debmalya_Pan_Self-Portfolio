import { Link } from "react-router-dom"
import { ArrowRight, Briefcase, FileText, Users } from "lucide-react"
import  Button  from "../../../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/Card"
// import { Progress } from "../../../components/ui/progress"


// import {Card} from "../../../components/ui/Card";
import Checkbox from "../../../components/ui/Checkbox";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import Progress from "../../../components/ui/Progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/Tabs"
import Textarea from "../../../components/ui/Textarea";
import {Select} from "../../../components/ui/Select";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/Popover";
import RadioGroup from "../../../components/ui/RadioGroup";
import Separator from "../../../components/ui/Separator";

function CompanyDashboard() {
  // Mock data
  const activeJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "Remote",
      applicants: 12,
      posted: "5 days ago",
      status: "Active",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      location: "New York, NY",
      applicants: 8,
      posted: "3 days ago",
      status: "Active",
    },
    {
      id: 3,
      title: "Product Manager",
      location: "San Francisco, CA",
      applicants: 5,
      posted: "1 day ago",
      status: "Active",
    },
  ]

  const recentCandidates = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Frontend Developer",
      matchScore: 92,
      status: "New",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "UX/UI Designer",
      matchScore: 88,
      status: "Reviewed",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      matchScore: 85,
      status: "Shortlisted",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold">Welcome, Acme Inc.!</h1>
        <div className="flex gap-2">
          <Link to="/dashboard/company/post-job">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Briefcase className="mr-2 h-4 w-4" />
              Post a Job
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="mt-2 text-xs text-muted-foreground">You have 3 active job postings</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/dashboard/company/jobs">
                Manage Jobs
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Applicants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="mt-2 text-xs text-muted-foreground">Across all your job postings</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/dashboard/company/candidates">
                View Candidates
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profile Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <Progress value={80} className="mt-2" />
            <p className="mt-2 text-xs text-muted-foreground">
              Complete your company profile to attract more candidates
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/dashboard/company/profile">
                Complete Profile
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Active Job Postings</CardTitle>
            <CardDescription>Manage your current job listings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeJobs.map((job) => (
                <div key={job.id} className="flex flex-col gap-2 rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.location}</p>
                    </div>
                    <div className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600">
                      {job.status}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {job.applicants} Applicants
                    </div>
                    <div className="flex items-center">
                      <FileText className="mr-1 h-4 w-4" />
                      Posted {job.posted}
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      View Applicants
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/dashboard/company/jobs">Manage All Jobs</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Candidates</CardTitle>
            <CardDescription>Review and manage recent applicants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCandidates.map((candidate) => (
                <div key={candidate.id} className="flex flex-col gap-2 rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{candidate.name}</h3>
                      <p className="text-sm text-muted-foreground">{candidate.position}</p>
                    </div>
                    <div className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-600">
                      {candidate.status}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Match Score</span>
                      <span>{candidate.matchScore}%</span>
                    </div>
                    <Progress value={candidate.matchScore} className="h-2" />
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Reject
                    </Button>
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      Shortlist
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/dashboard/company/candidates">View All Candidates</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default CompanyDashboard

