"use client"

import { useState } from "react"
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("http://localhost:5000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Email send error:", error)
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions, opportunities, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Contact Information</h3>
            <p className="text-gray-300 mb-8">
              I'm interested in freelance opportunities, especially ambitious or large projects. However, if you have
              other requests or questions, don't hesitate to contact me.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-300">Amtala, 24 PGS (S), West Bengal, 743503</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <a
                    href="mailto:debmalyapan4@gmail.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    debmalyapan4@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <FaPhone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                  <a href="tel:+917439033371" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +91 7439033371
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29494.660069532867!2d88.24999999999999!3d22.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a2eeb4ef63b%3A0x586225a78606389f!2sAmtala%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1649926546569!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Amtala, West Bengal"
                className="shadow-lg"
              ></iframe>
            </div>
          </div>

          {/* Right Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Job Opportunity"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-900/30 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-900/30 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                  Oops! Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
