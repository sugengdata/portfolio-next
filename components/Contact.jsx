import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 bg-white flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Feel free to reach out for collaboration, project inquiries, or IT support.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Quick Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Get in Touch
            </h3>

            <a
              href="https://wa.me/6281312339816"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border hover:bg-emerald-50 transition"
            >
              <FaWhatsapp className="text-emerald-600 text-2xl" />
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-sm text-gray-600">
                  Chat with me directly
                </p>
              </div>
            </a>

            <a
              href="mailto:sugenghernawan22@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border hover:bg-emerald-50 transition"
            >
              <FaEnvelope className="text-emerald-600 text-2xl" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-600">
                  sugenghernawan22@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <form
            action="https://wa.me/6281312339816"
            target="_blank"
            className="bg-gray-50 p-6 rounded-2xl shadow-sm flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="border p-3 rounded focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
