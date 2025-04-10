"use client"

import { useState } from "react"
import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header"

function CandidateDashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen">
      {/* Mobile sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}>
          <div className="absolute h-full w-64 bg-white" onClick={(e) => e.stopPropagation()}>
            <Sidebar userType="candidate" />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <Sidebar userType="candidate" />

      <div className="flex-1">
        <Header userType="candidate" userName="John Doe" toggleSidebar={toggleSidebar} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

export default CandidateDashboardLayout

