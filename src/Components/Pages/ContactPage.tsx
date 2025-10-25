import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Your EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_amlljzg';
  const EMAILJS_TEMPLATE_ID = 'template_sldrfx5';
  const EMAILJS_PUBLIC_KEY = '5m6WED89sbol9LKlO';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        service: formData.service,
        message: formData.message,
        submission_date: new Date().toLocaleString('en-US', {
          dateStyle: 'full',
          timeStyle: 'short',
        }),
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      alert('✅ Message sent successfully! We will get back to you soon.');
      
      // Reset form
      setFormData({ 
        name: '', 
        email: '', 
        phone: '', 
        service: '', 
        message: '' 
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('❌ Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} className="pt-20">
      <section className="bg-gradient-to-br from-[#1e2847] to-[#2a3555] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with us for inquiries, partnerships, or services — we'll get back to
              you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-6 h-6 text-white" />,
                  title: "Phone Numbers",
                  lines: ["+250 788 477 057", "+250 788 500 204", "+250 785 817 599"],
                  link: null,
                },
                {
                  icon: <Mail className="w-6 h-6 text-white" />,
                  title: "Email",
                  lines: ["theunicltd@gmail.com"],
                  link: "https://mail.google.com/mail/?view=cm&fs=1&to=theunicltd@gmail.com",
                },
                {
                  icon: <Globe className="w-6 h-6 text-white" />,
                  title: "Whatsapp",
                  lines: ["Contact us on whatsapp"],
                  link: "https://wa.me/250785817599",
                },
                {
                  icon: <MapPin className="w-6 h-6 text-white" />,
                  title: "Location",
                  lines: [
                    "Magnificat House, 3rd Floor, no. 4",
                    "Kimironko, Gasabo District",
                    "Kigali City, Rwanda",
                  ],
                  link: "https://maps.app.goo.gl/zfWbYjb9kiRLyudRA"
                },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
                  className="flex flex-col gap-4 bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 p-3 rounded-lg shadow-md">{info.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-[#1e2847] mb-1">{info.title}</h3>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-gray-700 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                  {info.link && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(info.link, '_blank')}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 font-medium"
                    >
                      {info.title === 'Email' && 'Send Email'}
                      {info.title === 'Whatsapp' && 'Open WhatsApp'}
                      {info.title === 'Location' && 'View on Map'}
                    </motion.button>
                  )}
                </motion.div>
              ))}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white p-6 rounded-2xl shadow-lg"
              >
                <p className="text-sm mb-2">TIN/VAT Number:</p>
                <p className="text-2xl font-bold">131805258</p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#1e2847]">Request a Service</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Full Name *", name: "name", type: "text", placeholder: "Your name" },
                  {
                    label: "Email Address *",
                    name: "email",
                    type: "email",
                    placeholder: "your@email.com",
                  },
                  {
                    label: "Phone Number",
                    name: "phone",
                    type: "tel",
                    placeholder: "+250 xxx xxx xxx",
                  },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block text-sm mb-2 text-gray-700">{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.name !== "phone"}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}

                {/* Service Selection */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Service Interest *</label>
                  <select
                    aria-label="Select the service you are interested in"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all"
                  >
                    <option value="">Select a service</option>
                    {[
                      "Transportation & Car Rental",
                      "Food & Beverage Supply",
                      "Cleaning Services",
                      "Manufacturing",
                      "Logistics & Delivery",
                      "Electronics Equipments",
                      "Events Management",
                      "IT and Printing",
                      "Outside Catering",
                      "Supply of Construction Materials",
                      "Agriculture Solutions",
                      "E-commerce",
                    ].map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm mb-2 text-gray-700">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 transition-all resize-none"
                    placeholder="Tell us in details about the service you would like us to help you with..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-orange-500 text-white py-4 rounded-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}