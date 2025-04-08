import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

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
import FindJobsPage from "./pages/dashboard/candidate/FindJobsPage";
import ApplicationPage from "./pages/dashboard/candidate/ApplicationPage";
import NotificationPage from "./pages/dashboard/candidate/NotificationPage";
import ManageJobsPage from "./pages/dashboard/company/ManageJobsPage";

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
          <Route
          path="/dashboard/candidate/jobs"
          element={
            <CandidateDashboardLayout>
              <FindJobsPage/>
            </CandidateDashboardLayout>
          }
        />

<Route
          path="/dashboard/candidate/applications"
          element={
            <CandidateDashboardLayout>
              <ApplicationPage/>
            </CandidateDashboardLayout>
          }
        />

<Route
          path="/dashboard/candidate/notifications"
          element={
            <CandidateDashboardLayout>
              <NotificationPage/>
            </CandidateDashboardLayout>
          }
        />

  <Route

  path="/dashboard"
  element={<Navigate to="/dashboard/candidate" replace />}
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
          path="/dashboard/company/jobs"
          element={
            <CompanyDashboardLayout>
              <ManageJobsPage />
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

      {/* Toastify Container (global notification handler) */}
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
    </Router>
  )
}

export default App
