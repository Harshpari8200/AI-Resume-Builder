import React from "react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-base-200 animate-fadeIn relative overflow-hidden">
        <div className="hero-content text-center relative z-10">
          <div className="max-w-2xl backdrop-blur-sm bg-base-200/50 p-8 rounded-lg">
            <h1 className="text-6xl font-bold animate-slideDown bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Create Your Perfect Resume with AI
            </h1>
            <p className="py-6 text-xl animate-slideUp">
              Build a professional resume in minutes. Just describe yourself,
              and our AI will do the rest!
            </p>
            <Link to={"/generate-resume"} className="btn btn-primary btn-lg hover:scale-110 transition-transform duration-300 animate-pulse">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 hover:text-primary transition-colors duration-300 transform hover:scale-105">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature cards with enhanced hover effects */}
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary/10">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 animate-bounce">🚀</div>
                <h3 className="card-title text-primary">AI-Powered</h3>
                <p className="text-base-content/80">
                  Our AI analyzes your input and generates a tailored resume for
                  you.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary/10">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 animate-pulse">📄</div>
                <h3 className="card-title text-primary">Multiple Templates</h3>
                <p className="text-base-content/80">
                  Choose from a variety of professionally designed resume
                  templates.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary/10">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4 animate-bounce">💼</div>
                <h3 className="card-title text-primary">Job-Specific Resumes</h3>
                <p className="text-base-content/80">
                  Optimize your resume for specific job roles and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 hover:text-primary transition-colors duration-300 transform hover:scale-105">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonials with enhanced hover effects */}
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-primary/5">
              <div className="card-body">
                <div className="text-5xl mb-4 text-primary">❝</div>
                <p className="text-base-content/80 text-lg">
                  "This AI resume maker saved me so much time! My resume looks
                  professional and got me multiple interviews."
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-2">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="User"
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-primary text-lg">John Doe</h4>
                    <p className="text-base-content/70">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-primary/5">
              <div className="card-body">
                <div className="text-5xl mb-4 text-primary">❝</div>
                <p className="text-base-content/80 text-lg">
                  "I love the templates and the ease of use. Highly recommend
                  this tool to anyone looking for a job."
                </p>
                <div className="flex items-center mt-4">
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-2">
                      <img
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                        alt="User"
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-primary text-lg">Jane Smith</h4>
                    <p className="text-base-content/70">Marketing Specialist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 hover:text-primary transition-colors duration-300 transform hover:scale-105">
            Ready to Create Your Resume?
          </h2>
          <p className="mb-8 text-xl text-base-content/80">
            Join thousands of users who have landed their dream jobs with our AI
            resume maker.
          </p>
          <Link to={"/generate-resume"}>
            <button className="btn btn-primary btn-lg hover:scale-110 transition-transform duration-300 animate-pulse">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="footer p-10 bg-base-200 text-base-content">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Brand Section */}
      <div>
        <h4 className="footer-title text-primary text-2xl font-semibold mb-2">AI Resume Maker</h4>
        <p className="text-base-content/70 text-sm leading-relaxed">
          Your go-to tool for creating professional resumes with AI.
        </p>
      </div>

      {/* Spacer or Centered Logo (optional design fix for 3-column layout) */}
      <div className="hidden md:block"></div>

      {/* Quick Links */}
      <div>
        <h4 className="footer-title text-primary text-2xl font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/about" className="link link-hover hover:text-primary transition-colors duration-300">About Us</a>
          </li>
          <li>
            <a href="/features" className="link link-hover hover:text-primary transition-colors duration-300">Features</a>
          </li>
          <li>
            <a href="/contact" className="link link-hover hover:text-primary transition-colors duration-300">Contact</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</footer>
    </div>
  );
};

export default LandingPage;