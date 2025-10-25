import { Target, Eye, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';


export default function AboutPage() {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1e2847] to-[#2a3555] text-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center gap-2 mb-4 justify-center">
            </div>

            <h1 className="mb-4 text-4xl md:text-5xl font-bold">About UNIC Ltd</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building a better future through innovation, quality, and community engagement
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Content */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border border-orange-100"
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                UNIC Ltd is an integrity company which does a vibrant, multifaceted business 
                dedicated to providing high-quality goods and services in a range of sectors. 
                Since our founding, we have developed into a reputable company that is renowned 
                for its creativity, dependability, quality and integrity.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our activities include Transportation & Car Rental services, Food & Beverage 
                Supply/Delivery Services, Cleaning Services and supply of cleaning materials, 
                Manufacturing of soaps & detergents, Supply of construction materials, waste 
                management, insurance & mobile money agency and Brokers, production of consumer 
                food and beverages, IT & Electronics materials, Printing Services, etc.
              </p>
            </motion.div>

            {/* Mission, Vision, Values, Team Leader */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Target className="w-12 h-12 mb-4 text-orange-100" />
                <h3 className="text-xl mb-3 font-semibold">Mission</h3>
                <p className="text-sm text-orange-50 leading-relaxed">
                  To deliver superior goods and services that improve people's lives, uplift communities, 
                  and spur economic expansion via ethical and creative business methods.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#1e2847] to-[#2a3555] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Eye className="w-12 h-12 mb-4 text-orange-400" />
                <h3 className="text-xl mb-3 font-semibold">Vision</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  To become a leading multi-sector enterprise recognized for integrity, quality, 
                  sustainability, and innovation in every industry we serve.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Award className="w-12 h-12 mb-4 text-orange-100" />
                <h3 className="text-xl mb-3 font-semibold">Core Values</h3>
                <p className="text-sm text-orange-50 leading-relaxed mb-4">
                  Our values guide every decision we make and define who we are as a company:
                </p>
                <ul className="text-sm space-y-2 text-orange-50">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-100 rounded-full mt-1.5"></div>
                    <span><strong>Integrity:</strong> Honesty and transparency in all dealings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-100 rounded-full mt-1.5"></div>
                    <span><strong>Excellence:</strong> Commitment to superior quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-100 rounded-full mt-1.5"></div>
                    <span><strong>Innovation:</strong> Embracing new ideas and solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-100 rounded-full mt-1.5"></div>
                    <span><strong>Community:</strong> Building lasting relationships</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-[#1e2847] to-[#2a3555] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <TrendingUp className="w-12 h-12 mb-4 text-orange-400" />
                <h3 className="text-xl mb-3 font-semibold">Team Leader</h3>
                <p className="text-sm text-gray-300 leading-relaxed italic mb-3">
                  "We work with dedication, collaboration, and enthusiasm to foster business expansion 
                  and guarantee client pleasure."
                </p>
                <p className="text-xs text-orange-400">- CEO, UNIC Ltd</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}