import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const center = {
  lat: 6.958993,  
  lng: 125.088748,
};

const containerStyle = {
  width: "100%",
  height: "300px",
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, 
  });

  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6 font-times">
      <h1 className="text-[5.625rem] font-bold text-center mb-2">Get in Touch</h1>
      <p className="text-center text-[1.813rem] text-[#5d4102] font-bold mb-12">
        Reach out to Hon. Rudy Caoagdan's office<br />
        for inquiries, feedback, or requests.
      </p>

      <div className="flex flex-col lg:flex-row gap-10 max-w-5xl w-full p-8">
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
          <label className="font-semibold text-[#5d4102] text-[2rem]">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 p-2 focus:outline-none"
            required
          />

          <label className="font-semibold text-[#5d4102] text-[2rem]">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 p-2 focus:outline-none"
            required
          />

          <label className="font-semibold text-[#5d4102] text-[2rem]">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="border border-gray-400 p-2 resize-none focus:outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-[#5c3c0b] text-white font-semibold px-6 py-2 mt-2 w-32 hover:bg-[#3d2706]"
          >
            Submit
          </button>
        </form>
        <div className="hidden lg:block w-[1px] bg-gray-400"></div>
        <div className="flex-1 flex flex-col text-[#5d4102]">
          <h2 className="text-[2rem] font-semibold mb-2">Office</h2>
          <p className="mb-1 font-medium">Rudy S. Caoagdan, DPA</p>
          <p className="mb-1">2<sup>nd</sup> District Representative</p>
          <p className="mb-1">RC Farm, San Vicente, Makilala,</p>
          <p className="mb-4">Cotabato, Philippines</p>

          <p className="font-medium">Monday-Friday</p>
          <p className="mb-4">9:00 AM - 5:00 PM</p>

          {isLoaded ? (
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
              <Marker position={center} />
            </GoogleMap>
          ) : (
            <p>Loading Map...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
