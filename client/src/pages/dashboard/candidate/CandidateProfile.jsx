"use client"

import { useState } from "react"
import { Briefcase, Building2, Calendar, Edit, GraduationCap, MapPin, Save, User } from "lucide-react"
import  Button  from "../../../components/ui/Button" // Updated casing here
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/Card"
// import { Input } from "../../../components/ui/input"
// import { Label } from "../../../components/ui/label"
// import { Separator } from "../../../components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/Tabs"
// import { Textarea } from "../../../components/ui/textarea"


// import {Card} from "../../../components/ui/Card";
import Checkbox from "../../../components/ui/Checkbox";
import Input from "../../../components/ui/Input";
import Label from "../../../components/ui/Label";
import Progress from "../../../components/ui/Progress";
// import {Tabs} from "../../../components/ui/Tabs";
import Textarea from "../../../components/ui/Textarea";
import {Select} from "../../../components/ui/Select";
import { Popover, PopoverTrigger, PopoverContent } from "../../../components/ui/Popover";

import RadioGroup from "../../../components/ui/RadioGroup";
import Separator from "../../../components/ui/Separator";

function CandidateProfile() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          className={isEditing ? "bg-green-600 hover:bg-green-700" : "bg-purple-600 hover:bg-purple-700"}
        >
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                <User className="h-12 w-12" />
              </div>
            </div>
            <CardTitle className="text-center">John Doe</CardTitle>
            <CardDescription className="text-center">Frontend Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Briefcase className="h-4 w-4 text-muted-foreground" />
                <span>5 years experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                <span>Currently at TechCorp</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
                <span>B.S. Computer Science</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Joined April 2023</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Download Resume
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>About Me</CardTitle>
                  <CardDescription>Tell employers about yourself and your professional background</CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      className="min-h-[200px]"
                      defaultValue="I'm a passionate frontend developer with 5 years of experience building responsive and user-friendly web applications. I specialize in React, JavaScript, and modern CSS frameworks. I'm dedicated to creating clean, efficient code and delivering exceptional user experiences."
                    />
                  ) : (
                    <div className="space-y-4">
                      <p>
                        I'm a passionate frontend developer with 5 years of experience building responsive and
                        user-friendly web applications. I specialize in React, JavaScript, and modern CSS frameworks.
                      </p>
                      <p>
                        I'm dedicated to creating clean, efficient code and delivering exceptional user experiences.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Work Experience</CardTitle>
                  <CardDescription>Your professional work history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="job-title">Job Title</Label>
                            <Input id="job-title" defaultValue="Senior Frontend Developer" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" defaultValue="TechCorp" />
                          </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="start-date">Start Date</Label>
                            <Input id="start-date" type="date" defaultValue="2021-06-01" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end-date">End Date</Label>
                            <Input id="end-date" type="date" defaultValue="" placeholder="Present" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="job-description">Description</Label>
                          <Textarea
                            id="job-description"
                            defaultValue="Led frontend development for multiple web applications. Implemented responsive designs and improved performance by 40%. Collaborated with UX designers and backend developers to deliver high-quality products."
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          + Add Another Position
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">Senior Frontend Developer</h3>
                              <p className="text-sm text-muted-foreground">TechCorp</p>
                            </div>
                            <div className="text-sm text-muted-foreground">Jun 2021 - Present</div>
                          </div>
                          <div className="mt-2 text-sm">
                            <p>
                              Led frontend development for multiple web applications. Implemented responsive designs and
                              improved performance by 40%. Collaborated with UX designers and backend developers to
                              deliver high-quality products.
                            </p>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">Frontend Developer</h3>
                              <p className="text-sm text-muted-foreground">WebSolutions Inc.</p>
                            </div>
                            <div className="text-sm text-muted-foreground">Jan 2019 - May 2021</div>
                          </div>
                          <div className="mt-2 text-sm">
                            <p>
                              Developed and maintained client websites using React and JavaScript. Created reusable
                              component libraries and implemented state management with Redux.
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                  <CardDescription>Your academic background</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {isEditing ? (
                      <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="degree">Degree</Label>
                            <Input id="degree" defaultValue="B.S. Computer Science" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="school">School</Label>
                            <Input id="school" defaultValue="University of California, Berkeley" />
                          </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="start-year">Start Year</Label>
                            <Input id="start-year" type="number" defaultValue="2014" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="end-year">End Year</Label>
                            <Input id="end-year" type="number" defaultValue="2018" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="education-description">Description</Label>
                          <Textarea
                            id="education-description"
                            defaultValue="Graduated with honors. Specialized in web development and user interface design. Participated in hackathons and coding competitions."
                          />
                        </div>
                        <Button variant="outline" size="sm">
                          + Add Another Education
                        </Button>
                      </div>
                    ) : (
                      <>
                        <div>
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold">B.S. Computer Science</h3>
                              <p className="text-sm text-muted-foreground">University of California, Berkeley</p>
                            </div>
                            <div className="text-sm text-muted-foreground">2014 - 2018</div>
                          </div>
                          <div className="mt-2 text-sm">
                            <p>
                              Graduated with honors. Specialized in web development and user interface design.
                              Participated in hackathons and coding competitions.
                            </p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Skills</CardTitle>
                  <CardDescription>Highlight your technical and professional skills</CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="technical-skills">Technical Skills</Label>
                        <Textarea
                          id="technical-skills"
                          defaultValue="React, JavaScript, HTML, CSS, Tailwind CSS, Redux, React Router, Node.js, Git, REST APIs, GraphQL"
                          placeholder="Separate skills with commas"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="soft-skills">Soft Skills</Label>
                        <Textarea
                          id="soft-skills"
                          defaultValue="Team Collaboration, Project Management, Communication, Problem Solving, Time Management, Adaptability"
                          placeholder="Separate skills with commas"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="languages">Languages</Label>
                        <Textarea
                          id="languages"
                          defaultValue="English (Native), Spanish (Intermediate)"
                          placeholder="Separate languages with commas"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div>
                        <h3 className="mb-2 font-semibold">Technical Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "React",
                            "JavaScript",
                            "HTML",
                            "CSS",
                            "Tailwind CSS",
                            "Redux",
                            "React Router",
                            "Node.js",
                            "Git",
                            "REST APIs",
                            "GraphQL",
                          ].map((skill) => (
                            <div key={skill} className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-600">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-2 font-semibold">Soft Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Team Collaboration",
                            "Project Management",
                            "Communication",
                            "Problem Solving",
                            "Time Management",
                            "Adaptability",
                          ].map((skill) => (
                            <div key={skill} className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="mb-2 font-semibold">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          <div className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                            English (Native)
                          </div>
                          <div className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
                            Spanish (Intermediate)
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default CandidateProfile
