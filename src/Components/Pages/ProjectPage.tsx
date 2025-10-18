import { useRef } from 'react';
import { motion} from 'framer-motion';




interface Project {
  number: string;
  title: string;
  items: string[];
}

interface WhyChooseUsItem {
  title: string;
  icon: string;
}

export default function ProjectsPage() {
  const ref = useRef(null);
  

  const caseStudy = {
    title: 'LIQUID SOAP',
    sections: [
      {
        number: '01',
        title: 'Project Overview',
        content:
          'A clean, modern factory scene showing workers producing and packaging liquid soap, symbolizing hygiene, innovation, sustainability, and community impact.',
      },
      {
        number: '02',
        title: 'Challenge',
        content:
          'Workers facing equipment breakdowns, raw material shortages, and quality control issues in a small soap production facility, symbolizing operational challenges.',
      },
      {
        number: '03',
        title: 'Solution',
        content:
          'We optimize operations through innovation, skilled teams, quality management, and customer-focused strategies to efficiently deliver diverse products and services across all sectors.',
      },
    ],
  };

  const ourProjects: Project[] = [
    {
      number: '01',
      title: 'Manufacturing',
      items: [
        'Production of Soap, mineral water, handbags, and luggage with high-quality standards.',
        'Implementation of modern production techniques to enhance efficiency and sustainability.',
      ],
    },
    {
      number: '02',
      title: 'Commerce',
      items: [
        'Wholesale and retail distribution of food, beverages, Cleaning Materials, IT & Electronic Materials, clothing, medical goods, etc.',
        'Expansion of retail outlets to serve communities efficiently.',
      ],
    },
  ];

  const whyChooseUs: WhyChooseUsItem[] = [
    { title: 'Integrity', icon: '🤝' },
    { title: 'Community Impact', icon: '🌍' },
    { title: 'Diverse Services Under One Roof', icon: '🏢' },
    { title: 'Quality & Reliability', icon: '⭐' },
    { title: 'Customer-Centered Approach', icon: '💼' },
    { title: 'Skilled & Dedicated Team', icon: '👥' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div ref={ref} className="pt-20">
      <div className="bg-gradient-to-br from-[#1e2847] to-[#2a3555] text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-4 text-4xl md:text-5xl font-bold">Our Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing our diverse portfolio of successful projects and case studies 
              demonstrating our commitment to excellence and innovation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="mb-2 text-3xl md:text-4xl font-bold">
              <span className="text-[#1e2847]">Project</span>
            </h2>
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              <span className="text-orange-500">Case study</span>
            </h2>
            <h2 className="text-orange-500 text-3xl md:text-4xl font-bold">{caseStudy.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Left Side - Case Study Details */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {caseStudy.sections.map((section, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-orange-500 text-xl font-semibold">{section.number}</span>
                    <h3 className="bg-orange-500 text-white px-4 py-1 rounded inline-block text-lg font-semibold">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side - Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative w-full h-96 rounded-2xl shadow-2xl overflow-hidden bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  loop
                  playsInline
                  preload="auto"
                  onError={(e) => console.error('Video error:', e)}
                  onLoadedData={() => console.log('Video loaded successfully')}
                >
                  <source src="/soap.mp4" type="video/mp4" />
                  <source src="/soap.mp4" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                {/* Fallback message */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-sm pointer-events-none">
                  <p className="bg-black/50 px-4 py-2 rounded">Loading video...</p>
                </div>
              </div>

              {/* Quote Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-[#1e2847] to-[#2a3555] text-white p-8 rounded-2xl"
              >
                <div className="text-6xl text-orange-500 mb-4">"</div>
                <p className="text-2xl italic">
                  Innovation, Excellence, Community – That's Our Promise.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Our Projects & Why Choose Us Section */}
          <div className="grid md:grid-cols-2 gap-12">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl md:text-4xl font-bold">
                <span className="text-[#1e2847]">Our</span>
                <br />
                <span className="text-orange-500">Projects</span>
              </h2>

              <div className="space-y-8">
                {ourProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-orange-500 text-xl font-semibold">{project.number}</span>
                      <h3 className="text-[#1e2847] text-xl font-semibold">{project.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {project.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-700 text-sm leading-relaxed pl-4 border-l-2 border-orange-500"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-2 text-3xl md:text-4xl font-bold">
                <span className="text-[#1e2847]">Why</span>
              </h2>
              <h2 className="mb-8 text-3xl md:text-4xl font-bold">
                <span className="text-orange-500">Choose Us?</span>
              </h2>

              <div className="space-y-4 mb-8">
                {whyChooseUs.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-orange-100"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-[#1e2847] font-medium">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Thank You Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <h1 className="text-[#1e2847] text-4xl md:text-5xl font-bold">Thank You.</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}