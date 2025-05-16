"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
interface FormData {
  name: string;
  email: string;
  message: string;
}
interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}
const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>();
  const handleFormSubmit = (data: FormData) => {
    if (onSubmit) {
      onSubmit(data);
    }
    reset();
  };
  return (
    <div className="min-h-screen grid place-items-center">
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Contact Form */}
          <div className="p-8 rounded-lg w-3/4">
            <h2 className="text-2xl font-bold mb-8 text-red-900">
              Envíanos un Mensaje
            </h2>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              noValidate
              className="space-y-6"
            >
              <div>
                <label
                  className="block mb-2 font-medium"
                  htmlFor="name"
                >
                  Nombre Completo
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-red-200"
                  }`}
                  {...register("name", {
                    required: "El nombre es obligatorio",
                  })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  className="block mb-2 font-medium"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-red-200"
                  }`}
                  {...register("email", {
                    required: "El email es obligatorio",
                    pattern: {
                      value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                      message: "Email inválido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <label
                  className="block mb-2 font-medium"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-red-200"
                  }`}
                  {...register("message", {
                    required: "El mensaje es obligatorio",
                  })}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.message.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-red-900 text-white py-3 px-6 rounded-lg hover:bg-red-800 transition-colors font-semibold disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Enviando..."
                  : "Enviar mensaje"}
              </button>
              {isSubmitSuccessful && (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg mt-4">
                  ¡Mensaje enviado con éxito! Nos pondremos en
                  contacto contigo pronto.
                </div>
              )}
            </form>
          </div>
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-8 text-red-900">
              Información de Contacto
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon
                  icon="mdi:map-marker"
                  className="text-3xl text-red-900 mt-1"
                />
                <div>
                  <h3 className="font-semibold mb-1">
                    Dirección
                  </h3>
                  <p className="text-gray-600">
                    Huachi Chico, José Villamil S/N y Av.
                    Los Atis, Ambato, Ecuador
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon
                  icon="mdi:phone"
                  className="text-3xl text-red-900 mt-1"
                />
                <div>
                  <h3 className="font-semibold mb-1">
                    Teléfono
                  </h3>
                  <p className="text-gray-600">
                    +593 99 380 3064
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon
                  icon="mdi:email"
                  className="text-3xl text-red-900 mt-1"
                />
                <div>
                  <h3 className="font-semibold mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@importadorachambs.com
                  </p>
                </div>
              </div>
            </div>
            {/* Horario o información adicional */}
            <div className="mt-8 p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">
                Horario de Atención
              </h3>
              <p className="text-gray-600">
                Lunes a Viernes: 9:00 AM - 6:00 PM
                <br />
                Sábados: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;