import React, { useState } from 'react';
import { GraduationCap, Globe2, BookOpen, CheckCircle, Users, Send } from 'lucide-react';
import { translations } from './translations';

function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('zh'); // Changed default to 'zh'
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <select 
          value={lang} 
          onChange={(e) => setLang(e.target.value as 'en' | 'zh')}
          className="bg-white border border-gray-300 rounded-md px-3 py-1 shadow-sm"
        >
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80"
            alt="IELTS Study" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t.hero.subtitle}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
            {t.hero.cta}
          </button>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.benefits.items.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                {[Globe2, Users, GraduationCap][index] && 
                  React.createElement([Globe2, Users, GraduationCap][index], {
                    className: "w-12 h-12 mx-auto mb-4 text-blue-600"
                  })}
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
          <h2 className="text-3xl font-bold text-center mb-12">{t.requirements.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.requirements.items.map((req, index) => (
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
          <h2 className="text-3xl font-bold text-center mb-12">{t.apply.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.apply.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {index + 1}
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
          <h2 className="text-3xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-8">{t.cta.subtitle}</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            {t.cta.button}
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
                <span className="text-xl font-bold text-white">IELTS培训</span>
              </div>
              <p>{t.hero.subtitle}</p>
            </div>
            {[
              { title: t.footer.company, links: ["关于我们", "招贤纳士", "联系我们"] },
              { title: t.footer.resources, links: ["学习资料", "备考技巧", "常见问题"] },
              { title: t.footer.legal, links: ["隐私政策", "服务条款", "Cookie政策"] }
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
            <p>&copy; {new Date().getFullYear()} IELTS培训. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;