"use client"

import { useState } from "react"
import { Save, Lock, Bell, Users, Shield, CreditCard, AlertTriangle } from "lucide-react"
import { Button } from "../../../components/ui/Button"
import { Input } from "../../../components/ui/Input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/Tabs"
import { Card } from "../../../components/ui/Card"
import { Checkbox } from "../../../components/ui/Checkbox"

function SettingsPage() {
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    newApplicant: true,
    applicationStatus: true,
    messages: true,
    jobExpiry: true,
    marketing: false,
    newsletter: true,
  })

  const [billingInfo, setBillingInfo] = useState({
    plan: "premium",
    cardName: "Acme Inc.",
    cardNumber: "•••• •••• •••• 4242",
    expiryDate: "12/2025",
    billingAddress: "123 Business St, San Francisco, CA 94103",
  })

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData({
      ...passwordData,
      [name]: value,
    })
  }

  const handleNotificationChange = (setting) => {
    setNotificationSettings({
      ...notificationSettings,
      [setting]: !notificationSettings[setting],
    })
  }

  const handleBillingChange = (e) => {
    const { name, value } = e.target
    setBillingInfo({
      ...billingInfo,
      [name]: value,
    })
  }

  const updatePassword = (e) => {
    e.preventDefault()
    // Validate passwords
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!")
      return
    }

    // Here you would typically send the data to your backend
    console.log("Updating password:", passwordData)

    // Reset form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })

    alert("Password updated successfully!")
  }

  const saveNotificationSettings = () => {
    // Here you would typically send the data to your backend
    console.log("Saving notification settings:", notificationSettings)
    alert("Notification settings saved!")
  }

  const saveBillingInfo = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Saving billing info:", billingInfo)
    alert("Billing information updated!")
  }

  const cancelSubscription = () => {
    if (window.confirm("Are you sure you want to cancel your subscription? This will limit your account features.")) {
      // Here you would typically send the request to your backend
      console.log("Cancelling subscription")
      alert("Subscription cancelled. Your account will remain active until the end of the billing period.")
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <Tabs defaultValue="password" className="w-full">
        <TabsList className="mb-6 border-b border-gray-200">
          <TabsTrigger value="password" className="px-4 py-2 text-sm font-medium">
            <Lock className="w-4 h-4 mr-2" /> Password
          </TabsTrigger>
          <TabsTrigger value="notifications" className="px-4 py-2 text-sm font-medium">
            <Bell className="w-4 h-4 mr-2" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="billing" className="px-4 py-2 text-sm font-medium">
            <CreditCard className="w-4 h-4 mr-2" /> Billing
          </TabsTrigger>
          <TabsTrigger value="team" className="px-4 py-2 text-sm font-medium">
            <Users className="w-4 h-4 mr-2" /> Team Members
          </TabsTrigger>
          <TabsTrigger value="privacy" className="px-4 py-2 text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" /> Privacy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="password">
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <p className="text-gray-600 mb-6">
              Ensure your account is using a strong password to protect your company information.
            </p>

            <form onSubmit={updatePassword} className="space-y-4 max-w-md">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 8 characters and include a number and a special character.
                </p>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Save className="w-4 h-4 mr-2" /> Update Password
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            <p className="text-gray-600 mb-6">Manage how and when you receive notifications from JobConnect.</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        id="newApplicant"
                        checked={notificationSettings.newApplicant}
                        onChange={() => handleNotificationChange("newApplicant")}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="newApplicant" className="font-medium text-gray-700">
                        New applicants
                      </label>
                      <p className="text-gray-500">Receive an email when someone applies to your job posting.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        id="applicationStatus"
                        checked={notificationSettings.applicationStatus}
                        onChange={() => handleNotificationChange("applicationStatus")}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="applicationStatus" className="font-medium text-gray-700">
                        Application status updates
                      </label>
                      <p className="text-gray-500">Receive updates when application statuses change.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        id="messages"
                        checked={notificationSettings.messages}
                        onChange={() => handleNotificationChange("messages")}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="messages" className="font-medium text-gray-700">
                        Messages
                      </label>
                      <p className="text-gray-500">Receive an email when you get a new message from a candidate.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        id="jobExpiry"
                        checked={notificationSettings.jobExpiry}
                        onChange={() => handleNotificationChange("jobExpiry")}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="jobExpiry" className="font-medium text-gray-700">
                        Job expiry reminders
                      </label>
                      <p className="text-gray-500">Get notified when your job postings are about to expire.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Marketing Communications</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        id="marketing"
                        checked={notificationSettings.marketing}
                        onChange={() => handleNotificationChange("marketing")}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="marketing" className="font-medium text-gray-700">
                        Marketing emails
                      </label>
                      <p className="text-gray-500">
                        Receive emails about new features, promotions, and special offers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox
                        id="newsletter"
                        checked={notificationSettings.newsletter}
                        onChange={() => handleNotificationChange("newsletter")}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="newsletter" className="font-medium text-gray-700">
                        Newsletter
                      </label>
                      <p className="text-gray-500">
                        Receive our monthly newsletter with recruitment tips and industry insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button onClick={saveNotificationSettings} className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Save className="w-4 h-4 mr-2" /> Save Preferences
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Current Plan</h2>
                <p className="text-gray-600">Manage your subscription and billing information</p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  {billingInfo.plan === "premium" ? "Premium Plan" : "Basic Plan"}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Plan Features</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Unlimited job postings
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Advanced candidate filtering
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      AI-powered candidate matching
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Premium company profile
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Priority support
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Billing Information</h3>
                  <div className="text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Next billing date:</span> June 15, 2023
                    </p>
                    <p>
                      <span className="font-medium">Amount:</span> $99.00 / month
                    </p>
                    <p>
                      <span className="font-medium">Payment method:</span> {billingInfo.cardNumber}
                    </p>
                  </div>

                  <div className="mt-4 flex space-x-3">
                    <Button variant="outline">Update Payment Method</Button>
                    <Button
                      variant="outline"
                      className="text-red-500 border-red-200 hover:bg-red-50"
                      onClick={cancelSubscription}
                    >
                      Cancel Subscription
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Billing Address</h2>

            <form onSubmit={saveBillingInfo} className="space-y-4 max-w-md">
              <div>
                <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <Input id="cardName" name="cardName" value={billingInfo.cardName} onChange={handleBillingChange} />
              </div>

              <div>
                <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700 mb-1">
                  Billing Address
                </label>
                <Input
                  id="billingAddress"
                  name="billingAddress"
                  value={billingInfo.billingAddress}
                  onChange={handleBillingChange}
                />
              </div>

              <div className="pt-2">
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Save className="w-4 h-4 mr-2" /> Save Billing Information
                </Button>
              </div>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold">Team Members</h2>
                <p className="text-gray-600">Manage who has access to your company account</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Users className="w-4 h-4 mr-2" /> Invite Team Member
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                          <span className="text-purple-600 font-medium">JD</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">John Doe</div>
                          <div className="text-sm text-gray-500">Admin</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">john@acmeinc.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Admin
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-purple-600 hover:text-purple-900 mr-3">
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Remove
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-blue-600 font-medium">JS</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                          <div className="text-sm text-gray-500">HR Manager</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">jane@acmeinc.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Member
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-purple-600 hover:text-purple-900 mr-3">
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Remove
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-600 font-medium">RJ</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">Robert Johnson</div>
                          <div className="text-sm text-gray-500">Recruiter</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">robert@acmeinc.com</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Member
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-purple-600 hover:text-purple-900 mr-3">
                        Edit
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-900">
                        Remove
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Privacy Settings</h2>
            <p className="text-gray-600 mb-6">
              Control how your company information is used and displayed on JobConnect.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Company Profile Visibility</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox id="publicProfile" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="publicProfile" className="font-medium text-gray-700">
                        Public company profile
                      </label>
                      <p className="text-gray-500">
                        Allow your company profile to be visible to all users on JobConnect.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox id="searchable" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="searchable" className="font-medium text-gray-700">
                        Searchable in company directory
                      </label>
                      <p className="text-gray-500">
                        Allow your company to appear in search results and the company directory.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox id="contactInfo" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="contactInfo" className="font-medium text-gray-700">
                        Display contact information
                      </label>
                      <p className="text-gray-500">Show your company's contact information on your public profile.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Data Usage</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox id="analytics" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="analytics" className="font-medium text-gray-700">
                        Usage analytics
                      </label>
                      <p className="text-gray-500">
                        Allow JobConnect to collect anonymous usage data to improve our services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Checkbox id="cookies" defaultChecked />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="cookies" className="font-medium text-gray-700">
                        Cookie preferences
                      </label>
                      <p className="text-gray-500">
                        Allow JobConnect to use cookies to enhance your browsing experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  <Save className="w-4 h-4 mr-2" /> Save Privacy Settings
                </Button>
              </div>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-medium text-red-600 flex items-center mb-3">
                  <AlertTriangle className="w-5 h-5 mr-2" /> Danger Zone
                </h3>
                <p className="text-gray-600 mb-4">These actions are permanent and cannot be undone.</p>
                <div className="space-y-4">
                  <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                    Delete All Job Postings
                  </Button>
                  <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50">
                    Delete Company Account
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SettingsPage