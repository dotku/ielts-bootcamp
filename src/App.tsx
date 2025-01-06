import React from 'react';
import { GraduationCap, Globe2, BookOpen, CheckCircle, Users, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
            alt="Teaching background" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Teach English Abroad</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join our global community of educators and make a difference in students' lives while exploring new cultures</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            Apply Now
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: "International Opportunities", desc: "Teach in top schools across Asia, Europe, and beyond" },
              { icon: Users, title: "Supportive Community", desc: "Join a network of passionate educators worldwide" },
              { icon: GraduationCap, title: "Professional Development", desc: "Continuous training and career growth opportunities" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Requirements</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Bachelor's degree from an accredited university",
              "Native English speaker or C2 level proficiency",
              "TEFL/TESOL certification (or willing to obtain)",
              "Clean background check",
              "Excellent communication skills",
              "Passion for teaching and cultural exchange"
            ].map((req, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Submit Application", desc: "Fill out our online application form and upload your resume" },
              { step: 2, title: "Interview", desc: "Complete a video interview and teaching demo" },
              { step: 3, title: "Placement", desc: "Get matched with schools that fit your preferences" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Teaching Adventure?</h2>
          <p className="text-xl mb-8">Join thousands of teachers who have found their dream teaching positions abroad</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Start Application
            <Send className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="w-6 h-6" />
                <span className="text-xl font-bold text-white">TeachGlobal</span>
              </div>
              <p>Connecting passionate teachers with opportunities worldwide</p>
            </div>
            {[
              { title: "Company", links: ["About", "Careers", "Contact"] },
              { title: "Resources", links: ["Blog", "Teaching Tips", "FAQ"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] }
            ].map((col, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} TeachGlobal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;