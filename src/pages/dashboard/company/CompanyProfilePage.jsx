"use client"

import { useState } from "react"
import {
  Building2,
  MapPin,
  Globe,
  Phone,
  Mail,
  Calendar,
  Users,
  Edit2,
  Save,
  Upload,
  Briefcase,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react"
import { Button } from "../../../components/ui/Button"
import { Input } from "../../../components/ui/Input"
import { Textarea } from "../../../components/ui/Textarea"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/Tabs"

function CompanyProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [companyData, setCompanyData] = useState({
    name: "Acme Inc.",
    logo: null,
    coverImage: null,
    industry: "Technology",
    size: "50-100 employees",
    founded: "2010",
    website: "https://acmeinc.com",
    location: "San Francisco, CA",
    phone: "+1 (555) 123-4567",
    email: "info@acmeinc.com",
    about:
      "Acme Inc. is a leading technology company specializing in innovative software solutions for businesses of all sizes. We are dedicated to creating products that help our clients streamline their operations and achieve their goals.",
    mission:
      "Our mission is to empower businesses with cutting-edge technology solutions that drive growth and efficiency.",
    culture:
      "We foster a collaborative and inclusive work environment where creativity and innovation thrive. Our team is passionate about solving complex problems and delivering exceptional results.",
    benefits: [
      "Competitive salary and equity packages",
      "Health, dental, and vision insurance",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Generous paid time off",
    ],
    socialMedia: {
      facebook: "https://facebook.com/acmeinc",
      twitter: "https://twitter.com/acmeinc",
      linkedin: "https://linkedin.com/company/acmeinc",
      instagram: "https://instagram.com/acmeinc",
    },
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCompanyData({
      ...companyData,
      [name]: value,
    })
  }

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target
    setCompanyData({
      ...companyData,
      socialMedia: {
        ...companyData.socialMedia,
        [name]: value,
      },
    })
  }

  const handleBenefitChange = (index, value) => {
    const updatedBenefits = [...companyData.benefits]
    updatedBenefits[index] = value
    setCompanyData({
      ...companyData,
      benefits: updatedBenefits,
    })
  }

  const addBenefit = () => {
    setCompanyData({
      ...companyData,
      benefits: [...companyData.benefits, ""],
    })
  }

  const removeBenefit = (index) => {
    const updatedBenefits = companyData.benefits.filter((_, i) => i !== index)
    setCompanyData({
      ...companyData,
      benefits: updatedBenefits,
    })
  }

  const handleSave = () => {
    // Here you would typically send the data to your backend
    console.log("Saving company profile:", companyData)
    setIsEditing(false)
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Company Profile</h1>
        <Button
          className={
            isEditing ? "bg-green-600 hover:bg-green-700 text-white" : "bg-purple-600 hover:bg-purple-700 text-white"
          }
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" /> Save Changes
            </>
          ) : (
            <>
              <Edit2 className="w-4 h-4 mr-2" /> Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="mb-8 relative">
        <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-500 rounded-t-lg overflow-hidden">
          {companyData.coverImage ? (
            <img
              src={companyData.coverImage || "/placeholder.svg"}
              alt="Company cover"
              className="w-full h-full object-cover"
            />
          ) : null}
          {isEditing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <Button variant="outline" className="bg-white">
                <Upload className="w-4 h-4 mr-2" /> Upload Cover Image
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col md:flex-row p-6 bg-white rounded-b-lg shadow-sm border border-gray-200">
          <div className="flex-shrink-0 -mt-16 md:-mt-12 mb-4 md:mb-0 md:mr-6">
            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center overflow-hidden">
              {companyData.logo ? (
                <img
                  src={companyData.logo || "/placeholder.svg"}
                  alt={companyData.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <Building2 className="w-12 h-12 text-gray-400" />
              )}
              {isEditing && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <Upload className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
          </div>
          <div className="flex-grow">
            {isEditing ? (
              <Input
                name="name"
                value={companyData.name}
                onChange={handleInputChange}
                className="text-2xl font-bold mb-2"
              />
            ) : (
              <h2 className="text-2xl font-bold mb-2">{companyData.name}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-gray-400" />
                {isEditing ? (
                  <Input name="industry" value={companyData.industry} onChange={handleInputChange} className="h-8" />
                ) : (
                  <span>{companyData.industry}</span>
                )}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-gray-400" />
                {isEditing ? (
                  <Input name="size" value={companyData.size} onChange={handleInputChange} className="h-8" />
                ) : (
                  <span>{companyData.size}</span>
                )}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                {isEditing ? (
                  <Input name="location" value={companyData.location} onChange={handleInputChange} className="h-8" />
                ) : (
                  <span>{companyData.location}</span>
                )}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                {isEditing ? (
                  <Input name="founded" value={companyData.founded} onChange={handleInputChange} className="h-8" />
                ) : (
                  <span>Founded in {companyData.founded}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="mb-6 border-b border-gray-200">
          <TabsTrigger value="about" className="px-4 py-2 text-sm font-medium">
            About
          </TabsTrigger>
          <TabsTrigger value="contact" className="px-4 py-2 text-sm font-medium">
            Contact Information
          </TabsTrigger>
          <TabsTrigger value="culture" className="px-4 py-2 text-sm font-medium">
            Culture & Benefits
          </TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">About Company</h3>
            {isEditing ? (
              <Textarea
                name="about"
                value={companyData.about}
                onChange={handleInputChange}
                className="min-h-[150px] mb-4"
              />
            ) : (
              <p className="text-gray-700 mb-6">{companyData.about}</p>
            )}

            <h3 className="text-lg font-semibold mb-4">Mission</h3>
            {isEditing ? (
              <Textarea
                name="mission"
                value={companyData.mission}
                onChange={handleInputChange}
                className="min-h-[100px]"
              />
            ) : (
              <p className="text-gray-700">{companyData.mission}</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-gray-400" />
                  {isEditing ? (
                    <Input name="website" value={companyData.website} onChange={handleInputChange} />
                  ) : (
                    <a
                      href={companyData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      {companyData.website}
                    </a>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-gray-400" />
                  {isEditing ? (
                    <Input name="email" value={companyData.email} onChange={handleInputChange} />
                  ) : (
                    <a href={`mailto:${companyData.email}`} className="text-purple-600 hover:underline">
                      {companyData.email}
                    </a>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-gray-400" />
                  {isEditing ? (
                    <Input name="phone" value={companyData.phone} onChange={handleInputChange} />
                  ) : (
                    <a href={`tel:${companyData.phone}`} className="text-purple-600 hover:underline">
                      {companyData.phone}
                    </a>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                  {isEditing ? (
                    <Input name="location" value={companyData.location} onChange={handleInputChange} />
                  ) : (
                    <span>{companyData.location}</span>
                  )}
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Social Media</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-2 text-gray-400" />
                  {isEditing ? (
                    <Input
                      name="linkedin"
                      value={companyData.socialMedia.linkedin}
                      onChange={handleSocialMediaChange}
                    />
                  ) : (
                    <a
                      href={companyData.socialMedia.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      {companyData.socialMedia.linkedin}
                    </a>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                <div className="flex items-center">
                  <Twitter className="w-5 h-5 mr-2 text-gray-400" />
                  {isEditing ? (
                    <Input name="twitter" value={companyData.socialMedia.twitter} onChange={handleSocialMediaChange} />
                  ) : (
                    <a
                      href={companyData.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      {companyData.socialMedia.twitter}
                    </a>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                <div className="flex items-center">
                  <Facebook className="w-5 h-5 mr-2 text-gray-400" />
                  {isEditing ? (
                    <Input
                      name="facebook"
                      value={companyData.socialMedia.facebook}
                      onChange={handleSocialMediaChange}
                    />
                  ) : (
                    <a
                      href={companyData.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      {companyData.socialMedia.facebook}
                    </a>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 mr-2 text-gray-400" />
                  {isEditing ? (
                    <Input
                      name="instagram"
                      value={companyData.socialMedia.instagram}
                      onChange={handleSocialMediaChange}
                    />
                  ) : (
                    <a
                      href={companyData.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:underline"
                    >
                      {companyData.socialMedia.instagram}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="culture" className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Company Culture</h3>
            {isEditing ? (
              <Textarea
                name="culture"
                value={companyData.culture}
                onChange={handleInputChange}
                className="min-h-[150px] mb-6"
              />
            ) : (
              <p className="text-gray-700 mb-6">{companyData.culture}</p>
            )}

            <h3 className="text-lg font-semibold mb-4">Benefits & Perks</h3>
            <div className="space-y-4">
              {isEditing ? (
                <>
                  {companyData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Input
                        value={benefit}
                        onChange={(e) => handleBenefitChange(index, e.target.value)}
                        className="flex-grow"
                      />
                      <Button
                        variant="outline"
                        className="text-red-500 border-red-200 hover:bg-red-50"
                        onClick={() => removeBenefit(index)}
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                  <Button variant="outline" className="mt-2" onClick={addBenefit}>
                    + Add Benefit
                  </Button>
                </>
              ) : (
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {companyData.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default CompanyProfilePage

