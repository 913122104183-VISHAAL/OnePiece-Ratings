const Contact = () => {
  return (
    <div className="bg-orange-500 text-black min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">We'd love to hear from you! Fill out the form below to get in touch.</p>

      {/* Form Section */}
      <form className="bg-orange-500 border border-black p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full p-2 rounded-md bg-black text-white"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded-md bg-black text-white"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold mb-2">Message:</label>
          <textarea
            id="message"
            className="w-full p-2 rounded-md bg-black text-white"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-black hover:bg-orange-700 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-10 text-center">
        <p className="text-lg">Or reach us at:</p>
        <p>Email: <a href="mailto:contact@onepiece.com" className="text-black underline">contact@onepiece.com</a></p>
        <p>Phone: <span className="text-black">(123) 456-7890</span></p>
      </div>
    </div>
  );
};

export default Contact;
