"use client"

import { useState } from "react"
import { Briefcase, Check, ChevronDown, Clock, DollarSign, MapPin } from "lucide-react"
import  Button  from "../../../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card"
import  Checkbox  from "../../../components/ui/Checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../../components/ui/command"
import  Input  from "../../../components/ui/Input"
import  Label  from "../../../components/ui/Label"
import  {Popover, PopoverContent, PopoverTrigger } from "../../../components/ui/Popover"
import  {RadioGroup, RadioGroupItem } from "../../../components/ui/RadioGroup"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/Select"
import  Textarea  from "../../../components/ui/Textarea"

function PostJobPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect or show success message
      alert("Job posted successfully!")
    }, 1500)
  }

  const jobCategories = [
    "Software Development",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Product Management",
    "Data Science",
    "Machine Learning",
    "DevOps",
    "Quality Assurance",
    "Project Management",
  ]

  const skills = [
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Ruby",
    "Swift",
    "Kotlin",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "Git",
    "Figma",
    "Adobe XD",
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Post a New Job</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
              <CardDescription>Provide information about the position you're hiring for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="e.g. Senior Frontend Developer" required />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="job-category">Job Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobCategories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employment-type">Employment Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="job-description">Job Description</Label>
                <Textarea
                  id="job-description"
                  placeholder="Describe the responsibilities, requirements, and benefits of the position"
                  className="min-h-[200px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Required Skills</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Select skills
                      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px] p-0" align="start">
                    <Command>
                      <CommandInput placeholder="Search skills..." />
                      <CommandList>
                        <CommandEmpty>No skills found.</CommandEmpty>
                        <CommandGroup className="max-h-[300px] overflow-auto">
                          {skills.map((skill) => (
                            <CommandItem
                              key={skill}
                              value={skill}
                              onSelect={() => {
                                // Handle selection
                              }}
                            >
                              <Check className="mr-2 h-4 w-4 opacity-0" />
                              {skill}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["React", "JavaScript", "HTML/CSS"].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600"
                    >
                      {skill}
                      <button className="ml-1 text-purple-400 hover:text-purple-600">×</button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Location & Salary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Work Location</Label>
                  <RadioGroup defaultValue="onsite">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="onsite" id="onsite" />
                      <Label htmlFor="onsite">On-site</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="remote" id="remote" />
                      <Label htmlFor="remote">Remote</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hybrid" id="hybrid" />
                      <Label htmlFor="hybrid">Hybrid</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="location" placeholder="e.g. San Francisco, CA" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Salary Range</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input type="number" placeholder="Min" className="pl-10" />
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input type="number" placeholder="Max" className="pl-10" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salary-period">Salary Period</Label>
                  <Select defaultValue="yearly">
                    <SelectTrigger>
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Per Hour</SelectItem>
                      <SelectItem value="monthly">Per Month</SelectItem>
                      <SelectItem value="yearly">Per Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Application Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="deadline">Application Deadline</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="deadline" type="date" className="pl-10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Application Method</Label>
                  <RadioGroup defaultValue="internal">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="internal" id="internal" />
                      <Label htmlFor="internal">Apply through JobConnect</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email">Apply via Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="external" id="external" />
                      <Label htmlFor="external">External Website</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="ai-matching" />
                  <Label htmlFor="ai-matching">Enable AI-powered candidate matching</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Button variant="outline" type="button">
            Save as Draft
          </Button>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <>Posting Job...</>
            ) : (
              <>
                <Briefcase className="mr-2 h-4 w-4" />
                Post Job
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PostJobPage

