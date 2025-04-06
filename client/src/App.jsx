import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import CandidateDashboard from "./pages/dashboard/candidate/CandidateDashboard"
import CandidateProfile from "./pages/dashboard/candidate/CandidateProfile"
import CompanyDashboard from "./pages/dashboard/company/CompanyDashboard"
import PostJobPage from "./pages/dashboard/company/PostJobPage"
import CandidatesPage from "./pages/dashboard/company/CandidatesPage"
import CandidateDashboardLayout from "./layouts/CandidateDashboardLayout"
import CompanyDashboardLayout from "./layouts/CompanyDashboardLayout"

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />

        {/* Candidate Dashboard Routes */}
        <Route
          path="/dashboard/candidate"
          element={
            <CandidateDashboardLayout>
              <CandidateDashboard />
            </CandidateDashboardLayout>
          }
        />
        <Route
          path="/dashboard/candidate/profile"
          element={
            <CandidateDashboardLayout>
              <CandidateProfile />
            </CandidateDashboardLayout>
          }
        />

        {/* Company Dashboard Routes */}
        <Route
          path="/dashboard/company"
          element={
            <CompanyDashboardLayout>
              <CompanyDashboard />
            </CompanyDashboardLayout>
          }
        />
        <Route
          path="/dashboard/company/post-job"
          element={
            <CompanyDashboardLayout>
              <PostJobPage />
            </CompanyDashboardLayout>
          }
        />
        <Route
          path="/dashboard/company/candidates"
          element={
            <CompanyDashboardLayout>
              <CandidatesPage />
            </CompanyDashboardLayout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App