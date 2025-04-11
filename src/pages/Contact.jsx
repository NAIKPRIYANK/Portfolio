import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      emailjs.send(
        "service_3c7plx5",
        "template_1d3k9on",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "b7bdKA4S_2SXmR2VM"
      ).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          setSubmitted(false);
        });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-20 lg:px-32 bg-white min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
        Get in Touch
      </h1>

      <div className="lg:flex flex-col lg:flex-row justify-center lg:gap-12 items-start w-full">
        {/* Left Card */}
        <motion.div
          whileHover={{ y: -5, rotate: -1.5 }}
          transition={{ duration: 0.3 }}
          className=" lg:flex lg:flex-col bg-gradient-to-br from-indigo-500 to-violet-500 text-white p-6 rounded-2xl shadow-2xl transform transition-all duration-300 lg:w-[60%] lg:h-[470px] lg:items-center lg:justify-center mb-12"
        >
          <h2 className="lg:text-[42px] text-3xl font-bold mb-6">Let’s Connect 💬</h2>
          <div className="flex items-center mb-4 space-x-3">
            <FaEnvelope className="text-xl" />
            <span className="text-lg"> manishchavan639@gmail.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-xl" />
            <span className="text-lg">+91 9763376596</span>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileTap={{ scale: 0.98 }}
          className="bg-gray-50 p-8 rounded-2xl shadow-xl border border-gray-200 space-y-2 lg:w-[60%] h-[60%]"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500 animate-shake" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500 animate-shake" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Your email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.message ? "border-red-500 animate-shake" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Write your message here..."
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`flex items-center gap-2 ${
              submitted ? "bg-green-600" : "bg-gradient-to-r from-indigo-500 to-violet-500 hover:opacity-90"
            } text-white px-6 py-3 rounded-xl font-semibold transition duration-300`}
          >
            {submitted ? "Sent!" : "Send"} <FaPaperPlane />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
