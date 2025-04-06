"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Briefcase, Building2, Lock, Mail, User } from "lucide-react"

import Button from "../../components/ui/Button"
import Checkbox from "../../components/ui/Checkbox"
import Progress from "../../components/ui/Progress"
import RadioGroup from "../../components/ui/RadioGroup"

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "../../components/ui/Select" // ✅ FIXED named imports

import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from "../../components/ui/Popover"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../components/ui/Card"

import Input from "../../components/ui/Input"
import Label from "../../components/ui/Label"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "../../components/ui/Tabs"

function LoginPage() {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (userType) => {
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

        <Tabs defaultValue="candidate" className="w-full">
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

          {/* Candidate Login */}
          <TabsContent value="candidate">
            <Card>
              <CardHeader>
                <CardTitle>Candidate Login</CardTitle>
                <CardDescription>Enter your credentials to access your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="candidate-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="candidate-email" type="email" placeholder="you@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="candidate-password">Password</Label>
                    <Link to="/auth/forgot-password" className="text-xs text-purple-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="candidate-password" type="password" className="pl-10" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleLogin("candidate")}
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/auth/register?type=candidate" className="text-purple-600 hover:underline">
                    Register
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Company Login */}
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle>Company Login</CardTitle>
                <CardDescription>Enter your credentials to access your company account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="company-email" type="email" placeholder="company@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="company-password">Password</Label>
                    <Link to="/auth/forgot-password" className="text-xs text-purple-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="company-password" type="password" className="pl-10" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleLogin("company")}
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
                <div className="text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/auth/register?type=company" className="text-purple-600 hover:underline">
                    Register
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

export default LoginPage
