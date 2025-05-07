'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
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
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden border-2 border-black">
      {/* Info de contacto */}
      <div className="bg-red-900 text-white p-8 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
        <p className="mb-6">Déjanos tu mensaje y te responderemos lo antes posible.</p>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Icon icon="mdi:map-marker" className="text-2xl" />
            <span>Huachi Chico, José Villamil S/N y Av. Los Atis, Ambato, Ecuador</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="mdi:phone" className="text-2xl" />
            <span>+593 99 380 3064</span>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="mdi:email" className="text-2xl" />
            <span>facturacion1importadorachambs@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Formulario */}
      <form
        className="p-8 md:w-1/2 bg-white flex flex-col justify-center"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="name">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500 focus:ring-red-200' : 'focus:ring-red-200'
            }`}
            {...register('name', { required: 'El nombre es obligatorio' })}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.email ? 'border-red-500 focus:ring-red-200' : 'focus:ring-red-200'
            }`}
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: {
                value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                message: 'Email inválido',
              },
            })}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium" htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.message ? 'border-red-500 focus:ring-red-200' : 'focus:ring-red-200'
            }`}
            {...register('message', { required: 'El mensaje es obligatorio' })}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-red-700 border border-red-900 text-white py-2 px-6 rounded hover:bg-red-800 transition-colors font-semibold disabled:opacity-60"
          disabled={isSubmitting}
        >
          Enviar mensaje
        </button>
        {isSubmitSuccessful && <p className="text-green-600 mt-4">¡Mensaje enviado!</p>}
      </form>
    </div>
  );
};
export default ContactForm;
