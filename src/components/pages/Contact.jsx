import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Details */}
        <div className="space-y-8">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Have questions? Reach out to us anytime — we'd love to hear from you.
          </p>

          {/* Box 1 */}
          <div className="flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow">
            <Mail className="text-red-600 w-8 h-8" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
              <p className="text-gray-500 dark:text-gray-400">support@example.com</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow">
            <Phone className="text-red-600 w-8 h-8" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
              <p className="text-gray-500 dark:text-gray-400">+92 300 1234567</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex items-center space-x-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow">
            <MapPin className="text-red-600 w-8 h-8" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Address</h4>
              <p className="text-gray-500 dark:text-gray-400">Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Send us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
