import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logonav.png"

interface SocialLink {
  icon: React.ReactNode;
  url: string;
  label: string;
}

interface QuickLink {
  label: string;
  path: string;
}

export default function Footer() {
  const socialLinks: SocialLink[] = [
    { icon: <Facebook size={20} />, url: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, url: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: '#', label: 'Instagram' },
  ];

  const quickLinks: QuickLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const services: string[] = [
    'Transportation & Car Rental',
    'Food & Beverage Supply',
    'Cleaning Services',
    'Manufacturing',
    'Logistics & Delivery',
    'Electronics Supply',
  ];

  return (
    <footer className="bg-gradient-to-br from-[#1e2847] via-[#2a3555] to-[#1e2847] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="UNIC Ltd Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              A vibrant, multifaceted corporation dedicated to providing high-quality goods 
              and services across multiple sectors with integrity and innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors inline-block hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-400 flex-shrink-0 mt-1" size={18} />
                <a 
                  href="https://maps.app.goo.gl/zfWbYjb9kiRLyudRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-orange-400 transition-colors cursor-pointer"
                >
                  Magnificat House, 3rd Floor, no. 4<br />
                  Kimironko, Gasabo District<br />
                  Kigali City, Rwanda
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange-400 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+250 788 477 057</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange-400 flex-shrink-0" size={18} />
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=theunicltd@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-orange-400 transition-colors cursor-pointer"
                >
                  theunicltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2025 UNIC Ltd. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              TIN/VAT: 131805258
            </p>
            <p className="text-sm text-orange-400 italic">
              Innovation, Excellence, Community – That's Our Promise.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}