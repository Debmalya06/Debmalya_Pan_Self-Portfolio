import { Link } from "react-router-dom"
import { ArrowRight, Briefcase, Building2, Search, Users } from "lucide-react"
import  Button  from "../components/ui/Button"
// import {Card} from "../components/ui/Card";
// import {Checkbox} from "../components/ui/Checkbox";
// import {Input }from "../components/ui/Input";
// import {Label} from "../components/ui/Label";
// import {Progress} from "../components/ui/Progress";
// import {Tabs} from "../components/ui/Tabs";
// import {Textarea} from "../components/ui/Textarea";
// import {Select} from "../components/ui/Select";
// import {Popover} from "../components/ui/Popover";
// import {RadioGroup} from "../components/ui/RadioGroup";
// import {Separator} from "../components/ui/Separator";

function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xl font-bold">
              <Briefcase className="h-6 w-6" />
              <span>JobConnect</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/auth/login">
                <Button variant="ghost" className="text-white hover:bg-white/20">
                  Login
                </Button>
              </Link>
              <Link to="/auth/register">
                <Button className="bg-white text-purple-600 hover:bg-white/90">Register</Button>
              </Link>
            </div>
          </nav>

          <div className="mt-20 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">Find Your Dream Job Today</h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              Connect with top companies and discover opportunities that match your skills and aspirations.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/auth/register?type=candidate">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90">
                  Join as Candidate
                </Button>
              </Link>
              <Link to="/auth/register?type=company">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Join as Company
                </Button>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-white p-4 shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">Search Jobs</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose JobConnect?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3 text-purple-600">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Smart Job Matching</h3>
              <p className="text-gray-600">
                Our AI-powered system matches your skills and experience with the perfect job opportunities.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3 text-purple-600">
                <Building2 className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Top Companies</h3>
              <p className="text-gray-600">
                Connect with thousands of reputable companies looking for talent like yours.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 shadow-sm transition-all hover:shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3 text-purple-600">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Career Growth</h3>
              <p className="text-gray-600">
                Access resources, tips, and tools to help you advance in your career journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to Take the Next Step?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Join thousands of professionals who have found their dream jobs through JobConnect.
          </p>
          <Link to="/auth/register">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between gap-8 md:flex-row">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <Briefcase className="h-6 w-6" />
                <span>JobConnect</span>
              </div>
              <p className="mt-4 max-w-md text-gray-400">
                Connecting talented individuals with their dream careers and helping companies find the perfect
                candidates.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="mb-4 text-lg font-semibold">For Candidates</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Browse Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Career Advice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Resume Tips
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">For Companies</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      Post a Job
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Talent Search
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} JobConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

