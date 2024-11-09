'use client';
import React, { useState } from "react";
import { z } from "zod";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reservationDate: "",
    totalPeople: "",
    message: "",
  });

 
  type ErrorMessages = {
    name?: string;
    email?: string;
    reservationDate?: string;
    totalPeople?: string;
    message?: string;
  };
  
  const [errors, setErrors] = useState<ErrorMessages>({});
  const schema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    reservationDate: z.string().nonempty("Date is required"),
    totalPeople: z
      .number({ invalid_type_error: "Must be a number" })
      .min(1, "Must be at least 1 person")
      .max(20, "Cannot exceed 20 people"),
    message: z.string().optional(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ 
      ...formData, 
      [id]: id === "totalPeople" ? parseInt(value) || "" : value 
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(formData);

    if (!result.success) {
      const zodErrors: ErrorMessages = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ErrorMessages;
        zodErrors[field] = error.message;
      });
      setErrors(zodErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        reservationDate: "",
        totalPeople: "",
        message: "",
      });
    }
  };

  return (
    <div className="bg-[url('/form.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6  text-red-600">Book Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-red-500"
                placeholder="Your Name*"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-red-500"
                placeholder="Your Email*"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <input
                type="date"
                id="reservationDate"
                value={formData.reservationDate}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-red-500"
              />
              {errors.reservationDate && <p className="text-red-500 text-sm">{errors.reservationDate}</p>}
            </div>
            <div className="w-1/2">
              <input
                type="number"
                id="totalPeople"
                value={formData.totalPeople}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-red-500"
                placeholder="Number of People*"
              />
              {errors.totalPeople && <p className="text-red-500 text-sm">{errors.totalPeople}</p>}
            </div>
          </div>

          <div className="mb-4">
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-red-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="p-2 bg-yellow-500 text-white py-2 rounded font-semibold hover:bg-red-700 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
