
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast, Toaster } from "sonner";


type FormData = {
  name: string;
  email: string;
  phone: string;
  queryType: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    queryType: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message);

    toast.success("Form submitted successfully!");
    setFormData({ name: "", email: "", phone: "", queryType: "", message: "" });
  } catch (error) {
    console.error(error);
    toast.error("Submission failed. Try again."); 
  }
};


  return (<>
   <Toaster position="top-right" />
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl relative z-999 mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8" id="applynow"
    >
      {/* Left: Image */}
         <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 "
      >

<img src="/sociova.jpeg" className="p-5 rounded-md bg-white"  alt="" />
      </motion.div>

      {/* Right: Form */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 p-5 rounded-md  w-full " id="contact"
      >
        <h2 className="text-3xl text-white mb-6">Let's Connect!</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full ">
            <div className="flex gap-2 md:flex-row text-white flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border w-full border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <select
            name="queryType"
            value={formData.queryType}
            onChange={handleChange}
            required
            className="border border-gray-700 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">Select Query Type</option>
            <option value="General">General</option>
            <option value="Support">Support</option>
            <option value="Collaboration">Collaboration</option>
            <option value="Others">Others</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Comment or Message"
            required
            rows={3}
            className="border text-white border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition transform hover:shadow-2xl"
          >
            Submit
          </button>
        </form>
        {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
      </motion.div>
   
    </motion.section>
    </>
  );
}
