import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xblzqglj"); // ← apna form ID yahan lagao

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-[#f5eee6] flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-xl px-10 py-12 text-center">
          <p className="text-2xl font-semibold text-green-600 mb-3">
            ✅ Thank you!
          </p>
          <p className="text-gray-700">Your message has been sent successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5eee6] flex items-center justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white px-8 py-10 shadow-lg rounded-xl w-full max-w-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h1>

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            required
            className="px-4 py-2 border border-gray-300 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            required
            className="px-4 py-2 border border-gray-300 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
            placeholder="Enter your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label className="block mb-2 font-medium text-gray-700">Phone</label>
          <input
            name="phone"
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            required
            className="px-4 py-2 border border-gray-300 rounded-md w-full h-32 resize-none outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-400"
            placeholder="Enter your message"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={state.submitting}
          className={`mt-2 px-6 py-2 rounded-full text-white font-medium transition-all w-40 mx-auto ${
            state.submitting
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 active:scale-95"
          }`}
        >
          {state.submitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
