import React from 'react';
import { Video, Star, Tv, CloudLightning } from 'lucide-react';

const Services = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Experience the best movie and TV show streaming with our exclusive services.
          </p>
        </div>

        {/* Streaming Plans */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-red-600 mb-8">Streaming Plans</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-red-600 mb-4">
                <Tv size={40} />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Basic Plan</h4>
              <p className="text-gray-600 dark:text-gray-400">Access thousands of movies and TV shows in HD quality.</p>
            </div>

            {/* Premium */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-red-600 mb-4">
                <Video size={40} />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Premium Plan</h4>
              <p className="text-gray-600 dark:text-gray-400">Unlimited streaming in Full HD & 4K with no ads.</p>
            </div>

            {/* VIP */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <div className="text-red-600 mb-4">
                <Star size={40} />
              </div>
              <h4 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">VIP Membership</h4>
              <p className="text-gray-600 dark:text-gray-400">Early access to latest movies and exclusive content.</p>
            </div>
          </div>
        </div>

        {/* Exclusive Features */}
        <div>
          <h3 className="text-3xl font-bold text-red-600 mb-8">Exclusive Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <CloudLightning size={36} className="text-red-600" />
              <div>
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Fast Streaming</h5>
                <p className="text-gray-600 dark:text-gray-400">Stream your favorite movies and shows without buffering.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Star size={36} className="text-red-600" />
              <div>
                <h5 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Exclusive Content</h5>
                <p className="text-gray-600 dark:text-gray-400">Access movies and TV shows only available on our platform.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
