"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Briefcase, Building2, Lock, Mail, Phone, User } from "lucide-react"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import Label from "../../components/ui/Label"
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

  // ✅ Candidate states
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [candidateEmail, setCandidateEmail] = useState("")
  const [candidatePhone, setCandidatePhone] = useState("")
  const [candidatePassword, setCandidatePassword] = useState("")
  const [candidateConfirmPassword, setCandidateConfirmPassword] = useState("")

  // ✅ Company states
  const [companyName, setCompanyName] = useState("")
  const [companyEmail, setCompanyEmail] = useState("")
  const [companyPhone, setCompanyPhone] = useState("")
  const [companyWebsite, setCompanyWebsite] = useState("")
  const [companyPassword, setCompanyPassword] = useState("")
  const [companyConfirmPassword, setCompanyConfirmPassword] = useState("")

  const handleRegister = async (userType) => {
    setIsLoading(true)

    try {
      let endpoint = ""
      let payload = {}

      if (userType === "company") {
        if (companyPassword !== companyConfirmPassword) {
          toast.error("Passwords do not match!")
          setIsLoading(false)
          return
        }

        endpoint = "http://localhost:5001/api/auth/register/company"
        payload = {
          companyName,
          businessEmail: companyEmail,
          businessPhone: companyPhone,
          companyWebsite,
          password: companyPassword
        }
      } else {
        if (candidatePassword !== candidateConfirmPassword) {
          toast.error("Passwords do not match!")
          setIsLoading(false)
          return
        }

        endpoint = "http://localhost:5001/api/auth/register/candidate"
        payload = {
          firstName,
          lastName,
          email: candidateEmail,
          phone: candidatePhone,
          password: candidatePassword
        }
      }

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Registration failed")
      }

      toast.success(`${userType === "company" ? "Company" : "Candidate"} registered successfully!`)
      navigate("/auth/login")
    } catch (err) {
      toast.error(err.message)
    } finally {
      setIsLoading(false)
    }
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

          {/* ✅ Candidate Form */}
          <TabsContent value="candidate">
            <Card>
              <CardHeader>
                <CardTitle>Create Candidate Account</CardTitle>
                <CardDescription>Enter your details to create your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>First Name</Label>
                    <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label>Last Name</Label>
                    <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" value={candidateEmail} onChange={(e) => setCandidateEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <Input value={candidatePhone} onChange={(e) => setCandidatePhone(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" value={candidatePassword} onChange={(e) => setCandidatePassword(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Confirm Password</Label>
                  <Input type="password" value={candidateConfirmPassword} onChange={(e) => setCandidateConfirmPassword(e.target.value)} />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => handleRegister("candidate")} disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
                <div className="text-center text-sm">
                  Already have an account? <Link to="/auth/login" className="text-purple-600 hover:underline">Login</Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* ✅ Company Form */}
          <TabsContent value="company">
            <Card>
              <CardHeader>
                <CardTitle>Create Company Account</CardTitle>
                <CardDescription>Enter your company details to create your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Business Email</Label>
                  <Input type="email" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Business Phone</Label>
                  <Input value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Company Website</Label>
                  <Input type="url" value={companyWebsite} onChange={(e) => setCompanyWebsite(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Password</Label>
                  <Input type="password" value={companyPassword} onChange={(e) => setCompanyPassword(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label>Confirm Password</Label>
                  <Input type="password" value={companyConfirmPassword} onChange={(e) => setCompanyConfirmPassword(e.target.value)} />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" onClick={() => handleRegister("company")} disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
                <div className="text-center text-sm">
                  Already have an account? <Link to="/auth/login" className="text-purple-600 hover:underline">Login</Link>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <ToastContainer /> {/* ← Add this */}
    </div>
  )
}

export default RegisterPage
