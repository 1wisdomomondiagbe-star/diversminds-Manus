import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Award, Brain, MessageCircle, Hand, BookOpen, Users2, GraduationCap, LanguagesIcon, CheckCircle, MessageSquare } from "lucide-react";
import { useState } from "react";

/**
 * DiverseMinds One-Page Website
 * Design Philosophy: Warm, welcoming, and professional
 * Color Palette: Soft pastels with purple accents
 * Typography: Poppins for all text with bold headings
 */

export default function Home() {
  const [whatsappHovered, setWhatsappHovered] = useState(false);

  const services = [
    {
      icon: Brain,
      title: "ABA Therapy",
      description: "Evidence-based behavioral intervention for skill development",
      bgColor: "icon-bg-purple",
      iconColor: "text-purple-600",
    },
    {
      icon: MessageCircle,
      title: "Speech Therapy",
      description: "Communication and language development support",
      bgColor: "icon-bg-blue",
      iconColor: "text-blue-600",
    },
    {
      icon: Hand,
      title: "Occupational Therapy",
      description: "Fine motor skills and daily living activities",
      bgColor: "icon-bg-green",
      iconColor: "text-green-600",
    },
    {
      icon: BookOpen,
      title: "Homeschooling Support",
      description: "Personalized educational programs at home",
      bgColor: "icon-bg-yellow",
      iconColor: "text-yellow-600",
    },
    {
      icon: Users2,
      title: "Shadow Teacher",
      description: "One-on-one school support services",
      bgColor: "icon-bg-orange",
      iconColor: "text-orange-600",
    },
    {
      icon: Users,
      title: "Parent Training",
      description: "Coaching and guidance for caregivers",
      bgColor: "icon-bg-pink",
      iconColor: "text-pink-600",
    },
    {
      icon: GraduationCap,
      title: "Staff Training",
      description: "Professional capacity building programs",
      bgColor: "icon-bg-blue",
      iconColor: "text-blue-600",
    },
    {
      icon: LanguagesIcon,
      title: "Sign Language",
      description: "Sign language tutoring and communication",
      bgColor: "icon-bg-green",
      iconColor: "text-green-600",
    },
    {
      icon: CheckCircle,
      title: "Assessments",
      description: "Online and physical developmental evaluations",
      bgColor: "icon-bg-pink",
      iconColor: "text-pink-600",
    },
  ];

  const challenges = [
    "Struggling to find quality special education services in your area",
    "Overwhelmed by your child's developmental or behavioral challenges",
    "Unsure which therapy or support service your child needs most",
    "Looking for professional help that understands diverse needs",
    "Needing flexible options — online, at home, or both",
  ];

  const features = [
    { icon: Globe, title: "Global Reach", color: "text-purple-600" },
    { icon: Users2, title: "Multi-Service", color: "text-purple-600" },
    { icon: Heart, title: "Compassionate", color: "text-purple-600" },
    { icon: Award, title: "Expert Team", color: "text-purple-600" },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.avif" alt="DiverseMinds" className="w-8 h-8" />
            <span className="font-bold text-xl text-purple-600">DiverseMinds</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition">Services</a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 transition">FAQ</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contact us</a>
            <Button className="bg-purple-400 hover:bg-purple-500 text-white">Get Started</Button>
          </nav>
          <div className="md:hidden">
            <Button className="bg-purple-400 hover:bg-purple-500 text-white text-sm">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <img src="/logo.avif" alt="DiverseMinds Logo" className="w-24 h-24 mx-auto mb-4" />
          <h2 className="text-sm font-bold text-gray-800 tracking-wider">DIVERSEMINDS</h2>
          <p className="text-xs text-gray-600">SPECIAL NEEDS CONSULT LTD.</p>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight">
          Empowering Children with Special Needs —{" "}
          <span className="text-purple-500">Worldwide</span>
        </h1>

        <p className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          From ABA therapy to speech, occupational therapy, homeschooling support, and more — DiverseMinds offers expert, compassionate services both online and at home. Location is not a barrier 🌍
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6">
          <Button className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-6 text-lg rounded-full">
            Find the Right Support for Your Child
          </Button>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="text-gray-700">✓ Free Consultation</span>
            <span className="text-purple-600">● Global Services</span>
            <span className="text-purple-600">● Expert Team</span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
              <feature.icon className={`w-8 h-8 mx-auto mb-3 ${feature.color}`} />
              <p className="font-semibold text-gray-800 text-sm">{feature.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Services</h2>
            <p className="text-gray-700 text-lg">Comprehensive support tailored to your child's unique needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${service.bgColor}`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="container py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          We Understand the Challenges You Face
        </h2>

        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-gray-700 text-lg mb-8">If you're here, you may be:</p>
          <ul className="space-y-4">
            {challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-purple-500 text-2xl flex-shrink-0">●</span>
                <span className="text-gray-700 text-lg">{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reassurance Box */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center mt-16 border border-purple-100">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">You're not alone.</h3>
          <p className="text-gray-700 text-lg">We're here to help — wherever you are in the world.</p>
        </div>
      </section>

      {/* Flexible Delivery Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Flexible Service Delivery Options
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Choose online, home-based, school-based, or a combination — whatever works best for your family.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-b from-gray-50 to-white border-t border-purple-100 py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">DiverseMinds</h3>
            <p className="text-gray-700 mb-4">Special Education Needs & Consult Ltd.</p>
            <p className="text-sm text-gray-600 mb-6">
              RC. 7325824 • Location is not a barrier — we proudly serve clients worldwide 🌍
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Phone</p>
              <a href="tel:+2348168349969" className="text-purple-600 hover:text-purple-700">+234 816 834 9969</a>
              <br />
              <a href="tel:+2348120094884" className="text-purple-600 hover:text-purple-700">+234 812 009 4884</a>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Email</p>
              <a href="mailto:diversemindsfoundation@gmail.com" className="text-purple-600 hover:text-purple-700">
                diversemindsfoundation@gmail.com
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">Follow Us</p>
              <p className="text-gray-700">Coming soon</p>
            </div>
          </div>

          <div className="border-t border-purple-100 pt-8 text-center">
            <p className="text-gray-700 text-sm">
              © 2026 DiverseMinds. Empowering children with special needs — with compassion and expertise.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <button
        onMouseEnter={() => setWhatsappHovered(true)}
        onMouseLeave={() => setWhatsappHovered(false)}
        className="fixed bottom-8 right-8 bg-green-400 hover:bg-green-500 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
