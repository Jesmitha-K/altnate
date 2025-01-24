import React, { useState, useEffect } from 'react';
import { Heart, Shield, Stethoscope, Clock, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "David Wilson",
    text: "The care and attention I received was exceptional. The entire team went above and beyond.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Maria Garcia",
    text: "State-of-the-art facilities and compassionate staff. Couldn't ask for better care.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "James Thompson",
    text: "The doctors here are not just skilled, they truly care about their patients' well-being.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
  }
];

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQGoxz9E3MlsIw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728915891970?e=1743033600&v=beta&t=FBAHEvOBg-XevgtSmFYV-C3YJZ2ymaRdyyC8me8gTfs",
    description: "Board-certified with 15+ years of experience in internal medicine"
  },
  {
    name: "Dr. Michael Chen",
    role: "Head of Cardiology",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&q=80",
    description: "Pioneering researcher in cardiovascular health"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Lead Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=500&q=80",
    description: "Specializing in pediatric care with a gentle approach"
  }
];

 export default function About() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2000&q=80" 
            alt="Modern medical facility" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Caring for Your Health</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Providing exceptional healthcare with compassion and expertise
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="group p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors duration-300">
              <Heart className="w-6 h-6 text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
            <p className="text-gray-600">Treating every patient with empathy</p>
          </div>
          
          <div className="group p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors duration-300">
              <Shield className="w-6 h-6 text-green-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Care</h3>
            <p className="text-gray-600">Leading medical expertise</p>
          </div>
          
          <div className="group p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors duration-300">
              <Stethoscope className="w-6 h-6 text-purple-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
            <p className="text-gray-600">State-of-the-art technology</p>
          </div>

          <div className="group p-6 bg-white rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300">
              <Clock className="w-6 h-6 text-orange-600 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Care</h3>
            <p className="text-gray-600">Always here when you need us</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Medical Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                    <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Patient Testimonials</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex items-center justify-center">
                <button 
                  onClick={prevTestimonial}
                  className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
                >
                  <ChevronLeft className="w-6 h-6 text-blue-600" />
                </button>
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-12">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonials[currentTestimonial].name}</h3>
                      <div className="flex text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">{testimonials[currentTestimonial].text}</p>
                </div>
                <button 
                  onClick={nextTestimonial}
                  className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
                >
                  <ChevronRight className="w-6 h-6 text-blue-600" />
                </button>
              </div>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Disclaimer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">123 Medical Center Drive</p>
              <p className="text-gray-400">Healthcare City, HC 12345</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
              <p className="text-gray-400">Email: info@medicare.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Patient Portal</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Emergency</h3>
              <p className="text-gray-400">For medical emergencies, please dial 911 immediately.</p>
              <p className="text-gray-400 mt-2">24/7 Nurse Hotline: (555) 999-8888</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="text-sm text-gray-400">
              <p className="font-semibold mb-2">Medical Disclaimer:</p>
              <p className="mb-4">
                The information provided on this website is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
              <p className="mb-4">
                If you think you may have a medical emergency, call your doctor or 911 immediately. MediCare does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this website.
              </p>
              <p>
                © {new Date().getFullYear()} MediCare. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

