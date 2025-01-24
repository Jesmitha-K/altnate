import React, { useState } from 'react';
import { 
  Pill, 
  ShieldCheck, 
  Clock, 
  UserRound, 
  CreditCard, 
  Truck,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string;
  image?: string;
}

export default function Policy() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  const policies: PolicySection[] = [
    {
      id: 'privacy',
      title: 'Privacy Policy',
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      content: 'We take your privacy seriously. All personal and medical information is protected under HIPAA guidelines and stored securely. We never share your information with third parties without your explicit consent.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
    },
    {
      id: 'prescription',
      title: 'Prescription Policy',
      icon: <Pill className="w-6 h-6 text-teal-600" />,
      content: 'Valid prescriptions are required for all prescription medications. We verify all prescriptions with the issuing healthcare provider. Prescriptions expire one year from the date issued unless otherwise specified.',
      image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80'
    },
    {
      id: 'hours',
      title: 'Operating Hours',
      icon: <Clock className="w-6 h-6 text-teal-600" />,
      content: 'Monday-Friday: 8:00 AM - 9:00 PM\nSaturday: 9:00 AM - 6:00 PM\nSunday: 10:00 AM - 4:00 PM\nHoliday hours may vary. Emergency after-hours service is available.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80'
    },
    {
      id: 'insurance',
      title: 'Insurance & Payment',
      icon: <CreditCard className="w-6 h-6 text-teal-600" />,
      content: 'We accept most major insurance plans. Co-payments are due at the time of service. We also accept cash, credit cards, and HSA/FSA cards. Please bring your insurance card with each visit.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80'
    },
    {
      id: 'delivery',
      title: 'Delivery Service',
      icon: <Truck className="w-6 h-6 text-teal-600" />,
      content: 'Free delivery is available for prescriptions within a 5-mile radius. Same-day delivery for orders placed before 2 PM. Additional fees may apply for rush delivery or extended distances.',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80'
    },
    {
      id: 'consultation',
      title: 'Consultation Services',
      icon: <UserRound className="w-6 h-6 text-teal-600" />,
      content: 'Our pharmacists are available for private consultations regarding your medications. Medication therapy management services are available by appointment. We offer vaccine administration and basic health screenings.',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-24"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Pharmacy Policies
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mb-8">
            Committed to providing quality healthcare services with transparency and care.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('policies')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-teal-600 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors"
            >
              View Policies
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white py-12 shadow-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Sections */}
      <div id="policies" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          {policies.map((policy) => (
            <div 
              key={policy.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 ${
                hoveredSection === policy.id ? 'scale-[1.02]' : ''
              }`}
              onMouseEnter={() => setHoveredSection(policy.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              <button
                onClick={() => setExpandedSection(expandedSection === policy.id ? null : policy.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {policy.icon}
                  <h2 className="text-xl font-semibold text-gray-800">
                    {policy.title}
                  </h2>
                </div>
                {expandedSection === policy.id ? (
                  <ChevronUp className={`w-5 h-5 text-gray-500 transition-transform duration-300 transform ${
                    expandedSection === policy.id ? 'rotate-180' : ''
                  }`} />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              
              {expandedSection === policy.id && (
                <div className="px-6 pb-6 pt-2">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 whitespace-pre-line">
                        {policy.content}
                      </p>
                    </div>
                    {policy.image && (
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <img 
                          src={policy.image} 
                          alt={policy.title}
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-teal-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <Phone className="w-8 h-8 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <Mail className="w-8 h-8 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@pharmacy.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Health Street</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Your trusted neighborhood pharmacy, providing quality healthcare services since 2009.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Locations</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
              <p className="text-gray-400">
                24/7 Helpline: (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p>© 2024 Your Pharmacy Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

