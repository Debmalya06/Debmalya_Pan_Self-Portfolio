import { Link, useLocation } from "react-router-dom"
import { Bell, Briefcase, Building2, FileText, Home, LogOut, MessageSquare, Search, Settings, User } from "lucide-react"

function Sidebar({ userType }) {
  const location = useLocation()
  const pathname = location.pathname

  const candidateMenuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard/candidate",
    },
    {
      title: "Find Jobs",
      icon: Search,
      href: "/dashboard/candidate/jobs",
    },
    {
      title: "Applications",
      icon: FileText,
      href: "/dashboard/candidate/applications",
    },
    {
      title: "Messages",
      icon: MessageSquare,
      href: "/dashboard/candidate/messages",
    },
    {
      title: "Notifications",
      icon: Bell,
      href: "/dashboard/candidate/notifications",
    },
    {
      title: "Profile",
      icon: User,
      href: "/dashboard/candidate/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/candidate/settings",
    },
  ]

  const companyMenuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard/company",
    },
    {
      title: "Post a Job",
      icon: Briefcase,
      href: "/dashboard/company/post-job",
    },
    {
      title: "Manage Jobs",
      icon: FileText,
      href: "/dashboard/company/jobs",
    },
    {
      title: "Candidates",
      icon: User,
      href: "/dashboard/company/candidates",
    },
    {
      title: "Messages",
      icon: MessageSquare,
      href: "/dashboard/company/messages",
    },
    {
      title: "Company Profile",
      icon: Building2,
      href: "/dashboard/company/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/company/settings",
    },
  ]

  const menuItems = userType === "candidate" ? candidateMenuItems : companyMenuItems

  return (
    <div className="hidden md:flex h-screen w-64 flex-col bg-white border-r">
      <div className="border-b p-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-purple-600">
          <Briefcase className="h-6 w-6" />
          <span>JobConnect</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? "bg-purple-100 text-purple-600" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="border-t p-4">
        <Link
          to="/auth/login"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

