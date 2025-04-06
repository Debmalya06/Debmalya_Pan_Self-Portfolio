"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Bell, Menu, MessageSquare, User } from "lucide-react"
import Button from "../../components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/Card";
import Checkbox from "../../components/ui/Checkbox";
import Input from "../ui/Input";
import Label from "../ui/Label";
import Progress from "../ui/Progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/Tabs"
import Textarea from "../ui/Textarea";
import {Select} from "../ui/Select";
import { Popover, PopoverTrigger, PopoverContent } from "../../components/ui/Popover";
import RadioGroup from "../ui/RadioGroup";
import Separator from "../ui/Separator";

function Header({ userType, userName, toggleSidebar }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-2 md:hidden" onClick={toggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">
          {userType === "candidate" ? "Candidate Dashboard" : "Company Dashboard"}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
        </Button>

        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>

        <div className="relative">
          <Button
            variant="ghost"
            className="flex items-center gap-2"
            onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600">
              <User className="h-4 w-4" />
            </div>
            <span className="hidden md:inline-block">{userName}</span>
          </Button>

          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white py-1 shadow-lg">
              <div className="border-b px-4 py-2 font-medium">My Account</div>
              <Link
                to={`/dashboard/${userType}/profile`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsProfileMenuOpen(false)}
              >
                Profile
              </Link>
              <Link
                to={`/dashboard/${userType}/settings`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsProfileMenuOpen(false)}
              >
                Settings
              </Link>
              <div className="border-t"></div>
              <Link
                to="/auth/login"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsProfileMenuOpen(false)}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
