import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="dark:text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Contact Me</h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-700 text-lg md:text-xl dark:text-gray-400 mb-4">
            For general inquiries, please contact me directly at:
          </p>
          <a
            href="mailto:gausoddinpirjade@gmail.com"
            className="text-green-400 text-lg md:text-xl font-semibold block"
            target="_blank"
            rel="noreferrer"
          >
            gausoddinpirjade@gmail.com
          </a>
          <p className="text-gray-700 text-lg md:text-xl dark:text-gray-400 mt-4">
            or through this form:
          </p>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full lg:w-1/2 bg-gray-300 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg">
          <form className="flex flex-col gap-4">
            {/* Name & Email Fields */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="flex-1 p-3 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className="flex-1 p-3 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                required
              />
            </div>

            {/* Subject Field */}
            <input
              type="text"
              placeholder="Subject *"
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              required
            />

            {/* Message Field */}
            <textarea
              placeholder="Message"
              rows={5}
              className="p-3 bg-gray-200 dark:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center w-full sm:w-auto"
            >
              LET'S TALK ✈️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
