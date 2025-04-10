import { Link } from "react-router-dom"
import { ArrowRight, Briefcase, Building2, Clock, Search } from "lucide-react"
import  Button from "../../../components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/Card"
// import { Progress } from "../../../components/ui/progress"

// import {Card} from "../../../components/ui/Card";
import Checkbox from "../../../components/ui/Checkbox";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import Progress from "../../../components/ui/Progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/Tabs";
import Textarea from "../../../components/ui/Textarea";
import { Select } from "../../../components/ui/Select";
import {Popover} from "../../../components/ui/Popover";
import RadioGroup from "../../../components/ui/RadioGroup";
import Separator from "../../../components/ui/Separator";

function CandidateDashboard() {
  // Mock data
  const recentJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Creative Minds",
      location: "Remote",
      type: "Contract",
      salary: "$70 - $90 per hour",
      posted: "1 day ago",
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Innovate Labs",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110,000 - $140,000",
      posted: "3 days ago",
    },
  ]

  const applications = [
    {
      id: 1,
      jobTitle: "Senior React Developer",
      company: "WebTech Solutions",
      status: "Interview",
      progress: 75,
    },
    {
      id: 2,
      jobTitle: "UI/UX Designer",
      company: "Design Masters",
      status: "Application Review",
      progress: 40,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="text-2xl font-bold">Welcome, John!</h1>
        <div className="flex gap-2">
          <Link to="/dashboard/candidate/Jobs">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Search className="mr-2 h-4 w-4" />
              Find Jobs
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profile Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="mt-2" />
            <p className="mt-2 text-xs text-muted-foreground">
              Complete your profile to increase visibility to employers
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/dashboard/candidate/profile">
                Complete Profile
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="mt-2 text-xs text-muted-foreground">You have 2 active job applications</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/dashboard/candidate/applications">
                View Applications
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Saved Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="mt-2 text-xs text-muted-foreground">You have 5 saved jobs for later</p>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link to="/dashboard/candidate/saved-jobs">
                View Saved Jobs
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Job Applications</CardTitle>
            <CardDescription>Track the status of your recent job applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applications.map((application) => (
                <div key={application.id} className="flex flex-col gap-2 rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{application.jobTitle}</h3>
                      <p className="text-sm text-muted-foreground">{application.company}</p>
                    </div>
                    <div className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-600">
                      {application.status}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span>Application Progress</span>
                      <span>{application.progress}%</span>
                    </div>
                    <Progress value={application.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/dashboard/candidate/applications">View All Applications</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommended Jobs</CardTitle>
            <CardDescription>Jobs that match your skills and preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentJobs.map((job) => (
                <div key={job.id} className="flex flex-col gap-2 rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-600">
                      {job.type}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Building2 className="mr-1 h-4 w-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="mr-1 h-4 w-4" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {job.posted}
                    </div>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Save
                    </Button>
                    <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700">
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/dashboard/candidate/jobs">Browse All Jobs</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}


export default CandidateDashboard

