"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Briefcase, Check, ChevronDown, Clock, DollarSign, MapPin } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import Button from "../../../components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card"
import Checkbox from "../../../components/ui/Checkbox"
import Input from "../../../components/ui/Input"
import Label from "../../../components/ui/Label"
import { RadioGroup, RadioGroupItem } from "../../../components/ui/RadioGroup"
import Textarea from "../../../components/ui/Textarea"
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/Popover"

function PostJobPage() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedSkills, setSelectedSkills] = useState(["React", "JavaScript", "HTML/CSS"])
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobCategory: "",
    employmentType: "",
    jobDescription: "",
    workLocation: "onsite",
    location: "",
    minSalary: "",
    maxSalary: "",
    salaryPeriod: "yearly",
    deadline: "",
    applicationMethod: "internal",
    aiMatching: false,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target
    setFormData((prev) => ({ ...prev, [name]: checked }))
  }

  const handleRadioChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSkillSelect = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    )
  }

  const removeSkill = (skill) => {
    setSelectedSkills((prev) => prev.filter((s) => s !== skill))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const jobPayload = {
      title: formData.jobTitle,
      category: formData.jobCategory,
      employmentType: formData.employmentType,
      description: formData.jobDescription,
      location: formData.location,
      salaryRange: {
        min: parseInt(formData.minSalary),
        max: parseInt(formData.maxSalary),
      },
      salaryPeriod: formData.salaryPeriod,
      requiredSkills: selectedSkills,
      applicationDeadline: formData.deadline,
      applicationMethod: formData.applicationMethod,
      aiMatchingEnabled: formData.aiMatching,
    }

    try {
      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:5001/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobPayload),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("✅ Job posted successfully!")
        setTimeout(() => navigate("/dashboard/company/jobs"), 2000)
      } else {
        toast.error(data.error || "❌ Failed to post job")
      }
    } catch (error) {
      toast.error("❌ Something went wrong while posting the job")
      console.error("Post job error:", error)
    } finally {
      setIsSubmitting(false)
    }
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

  return (<div className="space-y-6 p-6">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar theme="colored" />

    <div className="space-y-6 p-6">
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
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="e.g. Senior Frontend Developer"
                  required
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="jobCategory">Job Category</Label>
                  <select
                    id="jobCategory"
                    name="jobCategory"
                    value={formData.jobCategory}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select category</option>
                    {jobCategories.map((category) => (
                      <option key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employmentType">Employment Type</Label>
                  <select
                    id="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                    <option value="freelance">Freelance</option>
                    <option value="internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobDescription">Job Description</Label>
                <Textarea
                  id="jobDescription"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  placeholder="Describe the responsibilities, requirements, and benefits of the position"
                  className="min-h-[200px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Required Skills</Label>
                <Popover>
                  <PopoverTrigger>
                    <Button variant="outline" className="w-full justify-between">
                      Select skills
                      <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[400px] p-0">
                    <div className="p-1">
                      <input
                        type="text"
                        placeholder="Search skills..."
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          onClick={() => handleSkillSelect(skill)}
                          className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                        >
                          <Check
                            className={`mr-2 h-4 w-4 ${
                              selectedSkills.includes(skill) ? "opacity-100" : "opacity-0"
                            }`}
                          />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedSkills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600"
                    >
                      {skill}
                      <button
                        type="button"
                        className="ml-1 text-purple-400 hover:text-purple-600"
                        onClick={() => removeSkill(skill)}
                      >
                        ×
                      </button>
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
                  <RadioGroup
                    value={formData.workLocation}
                    onValueChange={(value) => handleRadioChange("workLocation", value)}
                  >
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
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. San Francisco, CA"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Salary Range</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        name="minSalary"
                        value={formData.minSalary}
                        onChange={handleInputChange}
                        placeholder="Min"
                        className="pl-10"
                      />
                    </div>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        type="number"
                        name="maxSalary"
                        value={formData.maxSalary}
                        onChange={handleInputChange}
                        placeholder="Max"
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salaryPeriod">Salary Period</Label>
                  <select
                    id="salaryPeriod"
                    name="salaryPeriod"
                    value={formData.salaryPeriod}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="hourly">Per Hour</option>
                    <option value="monthly">Per Month</option>
                    <option value="yearly">Per Year</option>
                  </select>
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
                    <Input
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      type="date"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Application Method</Label>
                  <RadioGroup
                    value={formData.applicationMethod}
                    onValueChange={(value) => handleRadioChange("applicationMethod", value)}
                  >
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
                  <Checkbox
                    id="aiMatching"
                    name="aiMatching"
                    checked={formData.aiMatching}
                    onChange={handleCheckboxChange}
                  />
                  <Label htmlFor="aiMatching">Enable AI-powered candidate matching</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Button variant="outline" type="button" onClick={() => navigate("/dashboard/company/jobs")}>
            Cancel
          </Button>
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white" disabled={isSubmitting}>
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
    </div>
  )
}

export default PostJobPage