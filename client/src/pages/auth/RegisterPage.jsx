"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Briefcase, Building2, Lock, Mail, Phone, User } from "lucide-react"

// UI components (default exports)
import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"
import Input from "../../components/ui/Input"
import Label from "../../components/ui/Label"
import Progress from "../../components/ui/Progress"
import Textarea from "../../components/ui/Textarea"
import { Select } from "../../components/ui/Select"
import { Popover, PopoverTrigger, PopoverContent } from "../../components/ui/Popover"
import RadioGroup from "../../components/ui/RadioGroup"
import Separator from "../../components/ui/Separator"

// UI components (named exports)
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../components/ui/Card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../../components/ui/Tabs"

function RegisterPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const defaultTab = searchParams.get("type") || "candidate"
  const [isLoading, setIsLoading] = useState(false)

  const handleRegister = (userType) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      if (userType === "candidate") {
        navigate("/dashboard/candidate")
      } else {
        navigate("/dashboard/company")
      }
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-purple-600">
            <Briefcase className="h-6 w-6" />
            <span>JobConnect</span>
          </Link>
        </div>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="candidate" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Candidate</span>
            </TabsTrigger>
            <TabsTrigger value="company" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span>Company</span>
            </TabsTrigger>
          </TabsList>

          {/* Candidate Form */}
          <TabsContent value="candidate">
            <Card>
              <CardHeader>
                <CardTitle>Create Candidate Account</CardTitle>
                <CardDescription>Enter your details to create your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="first-name" placeholder="John" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="candidate-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="candidate-email" type="email" placeholder="you@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="candidate-phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="candidate-phone" type="tel" placeholder="+1 (555) 000-0000" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="candidate-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="candidate-password" type="password" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="candidate-confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="candidate-confirm-password" type="password" className="pl-10" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleRegister("candidate")}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="text-purple-600 hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Company Form */}
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle>Create Company Account</CardTitle>
                <CardDescription>Enter your company details to create your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="company-name" placeholder="Acme Inc." className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-email">Business Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="company-email" type="email" placeholder="company@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-phone">Business Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="company-phone" type="tel" placeholder="+1 (555) 000-0000" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-website">Company Website</Label>
                  <Input id="company-website" type="url" placeholder="https://example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="company-password" type="password" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company-confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="company-confirm-password" type="password" className="pl-10" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleRegister("company")}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/auth/login" className="text-purple-600 hover:underline">
                    Login
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default RegisterPage
