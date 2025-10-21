import { motion } from 'framer-motion';
import {Link} from "react-router-dom"
import { ArrowRight } from 'lucide-react';
import event from "../../assets/images/event.jpg"
import cleaning from "../../assets/images/cleaning.png"
import printing from "../../assets/images/printing.jpeg"
import catering from "../../assets/images/outdoor-catering.jpg"
import supply from "../../assets/images/supply.png"
import agriculture from "../../assets/images/agriculture.png"
import construction from "../../assets/images/construction-materials.jpg"
import electronic from "../../assets/images/electronic.jpg"
import delivery from "../../assets/images/logistics and delivery.jpg"
import manufacturing from "../../assets/images/manufacturing.jpeg"
import transport from "../../assets/images/transportation.png"
import ecommerce from "../../assets/images/ecommerce.png"

export default function ServicesPage() {
  const services = [
    {
      title: 'Events Management',
      description: 'Professional event planning and execution for conferences, weddings, corporate gatherings, and special occasions.',
      image: event,
    },
    {
      title: 'Cleaning Services',
      description: 'Comprehensive cleaning solutions and supply of professional cleaning materials for commercial and residential needs.',
      image: cleaning,
    },
    {
      title: 'IT and Printing Activities',
      description: 'Complete IT services, digital solutions, and professional printing services for all your business needs.',
      image: printing,
    },
    {
      title: 'Electronics Equipments',
      description: 'Wide range of electronic devices, IT equipment, home appliances, and technology solutions.',
      image: electronic,
    },
    {
      title: 'Transportation & Car Rental Services',
      description: 'Professional vehicle rental and transportation solutions with modern fleet including vans, SUVs, sedans, and buses.',
      image: transport,
    },
    {
      title: 'Food & Beverage Supply',
      description: 'Quality food products and beverage distribution with reliable supply chain and delivery services.',
      image: supply,
    },
    {
      title: 'Manufacturing',
      description: 'Production of soaps, detergents, soft beverages, mineral water, luggage, and construction materials.',
      image: manufacturing,
    },
    {
      title: 'Logistics & Delivery',
      description: 'Efficient delivery and logistics management services ensuring timely distribution across all sectors.',
      image:delivery,
    },
    {
      title: 'Outside Catering',
      description: 'Professional outdoor catering services for events and gatherings with diverse menu options.',
      image: catering,
    },
    {
      title: 'Supply of Construction Materials',
      description: 'Quality construction materials and building supplies for residential and commercial projects.',
      image: construction,
    },
    {
      title: 'Agricultural Solutions',
      description: 'Agricultural raw materials, farming supplies, and livestock trading for sustainable agriculture.',
      image: agriculture,
    },
    {
      title: 'E-commerce',
      description: 'Online retail platform for clothing, medical goods, electronics, and various consumer products.',
      image: ecommerce,
    },
  ];

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-br from-[#1e2847] to-[#2a3555] text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            

            <h1 className="mb-4 text-4xl md:text-5xl font-bold text-white">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions across multiple sectors, delivered with commitment to 
              innovation, excellence, and community development
            </p>
          </motion.div>
        </div>
      </div>

      
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-4"
              >
                {/* Service Title Header */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-[#1e2847] to-[#2a3555] px-8 py-4 rounded-2xl shadow-lg"
                >
                  <h3 
                    className="text-center"
                    style={{ 
                      background: 'linear-gradient(to right, #fb923c, #fbbf24)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      color: '#fb923c' 
                    }}
                  >
                    {service.title}
                  </h3>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ duration: 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  
                  <div className="relative border-4 border-[#FF9500] rounded-2xl overflow-hidden shadow-xl bg-white">
                    <div className="relative h-80 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1e2847]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Service Description */}
                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100 shadow-md">
                  <p className="text-gray-700" style={{ lineHeight: '1.75' }}>
                    {service.description}
                  </p>
                </div>
                
              </motion.div>
            ))}
          </div>
          {/* Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{
                scale: 1.1,
                rotateZ: [0, -2, 2, 0],
                boxShadow: "0 20px 60px rgba(255, 149, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r mt-6 from-orange-500 to-orange-600 text-white px-12 py-6 rounded-2xl shadow-2xl relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 text-xl flex items-center gap-3">
                Request a Service
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
          </Link>
          </motion.div>

         

          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h2 className="text-center mb-12">
              <span className="text-[#1e2847]">Our </span>
              <span className="text-[#FF9500]">Strengths</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Modern Facilities',
                  description: 'Advanced technology and production facilities',
                  icon: '🏭'
                },
                {
                  title: 'Expert Team',
                  description: 'Skilled and experienced professionals',
                  icon: '👥'
                },
                {
                  title: 'Quality Standards',
                  description: 'International quality and safety commitment',
                  icon: '⭐'
                },
                {
                  title: 'Sustainability',
                  description: 'Corporate social responsibility focus',
                  icon: '🌱'
                },
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="mb-4" style={{ fontSize: '3rem', lineHeight: '1' }}>{strength.icon}</div>
                  <h4 className="text-[#1e2847] mb-2">{strength.title}</h4>
                  <p className="text-gray-600" style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}>{strength.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}