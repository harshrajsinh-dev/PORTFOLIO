import { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // 🔒 Validation
    if (!name || !email || !message) {
      setError("All fields are required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSuccess("Message sent successfully 🚀");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 flex justify-center items-center bg-[#f8fafc00]"
    >
      {/* Gradient Card */}
      <div className="w-full max-w-md rounded-2xl p-[2px] bg-gradient-to-br from-sky-400 to-indigo-500 shadow-lg">
        <div className="bg-white rounded-2xl p-8">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Get in Touch
          </h2>
          <p className="text-center text-slate-500 mt-2 mb-6">
            Let’s work together 🚀
          </p>



          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300
                         focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
            />
            {/* Messages */}
            {error && (
              <p className="text-red-500 text-sm text-center mb-3">{error}</p>
            )}
            {success && (
              <p className="text-green-600 text-sm text-center mb-3">{success}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg font-semibold text-white
                         bg-gradient-to-r from-indigo-500 to-sky-500
                         hover:opacity-90 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6 text-xl text-slate-600">
            <a href="#" className="hover:text-black transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
