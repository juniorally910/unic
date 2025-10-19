import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import logo from "../../assets/images/logonav.png"
import integrity from "../../assets/images/values.png"


export default function HomePage() {
  const containerRef = useRef(null);
  

  

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    });
  };

  return (
    <div ref={containerRef} className="pt-20 mt-5 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#1e2847] via-[#2a3555] to-[#1e2847] overflow-hidden">
       
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-orange-400 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                y: [null, Math.random() * window.innerHeight],
                x: [null, Math.random() * window.innerWidth],
                scale: [null, Math.random() * 0.5 + 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ opacity: 0.3 }}
            />
          ))}
        </div>

        {/* Floating Rings */}
        <motion.div
          className="absolute top-20 right-10"
          animate={{ rotateZ: 360, rotateY: 180 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-64 h-64 border-4 border-orange-400/20 rounded-full"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-10"
          animate={{ rotateZ: -360, rotateX: 180 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-96 h-96 border-4 border-orange-400/10 rounded-full"></div>
        </motion.div>

        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            
            <motion.div
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring" }}
              whileHover={{ scale: 1.1, rotateY: 20, rotateX: 10 }}
              className="mb-12"
              onMouseMove={handleMouseMove}
            >
              <div
                className="relative"
                style={{
                  transform: `rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s ease-out",
                }}
              >
                <div className="flex items-center gap-3 relative">
                  <div className="relative">
                    <img src={logo} alt="company logo" className="w-40" />
                  </div>
                  
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center mb-8"
            >
              <h1 className="text-white mb-4 text-4xl md:text-5xl font-bold">UNIC Ltd</h1>
              <motion.h2
                className="text-orange-400 text-2xl md:text-3xl font-semibold"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF9500, #FFB84D, #FF9500)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                COMPANY PROFILE
              </motion.h2>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-10 mb-16 relative"
            >
             
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 120 }} 
              >
                <img
                  src={integrity}
                  alt="Company Vision"
                  className="w-full h-full object-cover"
                />
              </motion.div>
             <div className="flex items-center space-x-4">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 200 }}
                transition={{ duration: 1 }}
                className="w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full shadow-lg"
              />

              <motion.ul
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-4 text-left text-white text-lg md:text-xl font-medium"
              >
                {["Innovation", "Excellence", "Community", "That's our promise"].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 bg-orange-400 rounded-full shadow-md" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, z: -100 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
              className="max-w-3xl mx-auto mb-12"
            > 
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.1, rotateZ: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-500 text-white px-10 py-4 rounded-2xl shadow-2xl flex items-center gap-3 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10">Explore More</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.1, rotateZ: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#1e2847] px-10 py-4 rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-shadow"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= VALUES SECTION ================= */}
      <div className="bg-gradient-to-b from-white via-gray-50 to-white py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4 text-3xl font-semibold">
              <span className="text-[#1e2847]">Our Core </span>
              <span className="text-orange-500">Values</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { title: "ETHICS", description: "Upholding the highest ethical standards", color: "from-orange-500 to-orange-600", icon: "🎯" },
              { title: "RESPECT", description: "Treating everyone with dignity", color: "from-[#8B4513] to-[#A0522D]", icon: "🤝" },
              { title: "HONESTY", description: "Transparent in all communications", color: "from-[#D2691E] to-[#CD853F]", icon: "💡" },
              { title: "INTEGRITY", description: "Consistency in values and actions", color: "from-[#1e2847] to-[#2a3555]", icon: "⭐" },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5, rotateX: 5, scale: 1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />
                <div className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100">
                  <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-5xl mb-4">
                    {value.icon}
                  </motion.div>
                  <div className={`inline-flex px-6 py-3 rounded-xl bg-gradient-to-br ${value.color} text-white mb-4 text-xl shadow-lg`}>
                    {value.title}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#1e2847] via-[#2a3555] to-[#1e2847] text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,149,0,0.3), transparent)',
                backgroundSize: '200% 100%',
              }}
            />
            
            <div className="relative z-10">
              <h2 className="mb-6 text-white">
                <span style={{ 
                  background: 'linear-gradient(to right, #fb923c, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: '#fb923c' // Fallback
                }}>
                  Our Promise
                </span>
              </h2>
              
              <p className="text-white italic mb-8" style={{ fontSize: '1.875rem', lineHeight: '2.25rem' }}>
                "Innovation, Excellence, Community – That's Our Promise."
              </p>

              <div className="grid md:grid-cols-4 gap-12 max-w-4xl mx-auto">
                {[
                  { number: "10+", label: "Years Experience", icon: "🏆" },
                  { number: "12", label: "Service Areas", icon: "🎯" },
                  { number: "500+", label: "Happy Clients", icon: "😊" },
                  { number: "24/7", label: "Support Available", icon: "🔧" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotateY: 15 }}
                    className="relative group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-center shadow-2xl border border-white/20">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-4xl mb-4">
                        {stat.icon}
                      </motion.div>
                      <div className="text-orange-400 text-5xl mb-2">{stat.number}</div>
                      <p className="text-white text-sm">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-3xl md:text-4xl font-bold">
            <span className="text-[#1e2847]">What We </span>
            <span className="text-orange-500">Offer</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore a diverse range of services that drive innovation and excellence for every client we serve.
          </p>
        </motion.div>

        {/* Service Items */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {[
            "Transportation & Car Rental",
            "Food & Beverage Supply",
            "Cleaning Services",
            "Manufacturing",
            "Logistics & Delivery",
            "Electronics Supply",
            "IT & Printing",
            "Events Management",
            "Agricultural Solutions",
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 0,
                rotateX: 0,
              }}
              className="group will-change-transform md:[transform-style:preserve-3d] md:[perspective:1000px]"
            >
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-orange-100 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1,
                      repeat: Infinity,
                    }}
                    className="w-3 h-3 bg-orange-500 rounded-full"
                  />

                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 + index * 0.1,
                      type: "spring",
                    }}
                    className="text-gray-800 font-semibold text-base md:text-lg"
                  >
                    {service}
                  </motion.span>
                </div>
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
          <Link to="/services">
            <motion.button
              whileHover={{
                scale: 1.1,
                rotateZ: [0, -2, 2, 0],
                boxShadow: "0 20px 60px rgba(255, 149, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-2xl shadow-2xl relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10 text-xl flex items-center gap-3">
                View All Services
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
      
    </div>
  );
}

