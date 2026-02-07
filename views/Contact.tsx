'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AOS from 'aos';
import { toast } from 'react-toastify';
import axios from '../api/axios';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';
// @ts-ignore - no type declarations for CSS side-effect import
import 'aos/dist/aos.css';


export function Contact() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('/portfolio/contact', data);

      if (response.status === 200) {
        toast.success('Message sent successfully! I will get back to you soon.');
        reset();
      } else {
        toast.error('Something went wrong!');
      }
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data?.message || 'Server error');
      } else if (error.request) {
        toast.error('No response from server. Check your connection.');
      } else {
        toast.error('Error: ' + error.message);
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'sanjaykumarbhupathi01@gmail.com',
      link: 'mailto:sanjaykumarbhupathi01@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+917995622416',
      link: 'tel:+917995622416'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Bengaluru, Karnataka 560068',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-slate-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Let's Get In Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-2">
            Have a project in mind or want to collaborate? I'm always open to discussing new ideas and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {info.label}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form */}
        <div
          className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          data-aos="fade-up"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.name
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'
                    } dark:bg-gray-900 dark:text-white bg-white outline-none`}
                  placeholder="John Doe"
                />
                {typeof errors.name?.message === 'string' && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.email
                      ? 'border-red-500 focus:border-red-600'
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'
                    } dark:bg-gray-900 dark:text-white bg-white outline-none`}
                  placeholder="john@example.com"
                />
                {typeof errors.email?.message === 'string' && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                Subject
              </label>
              <input
                type="text"
                {...register('subject', { required: 'Subject is required' })}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${errors.subject
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'
                  } dark:bg-gray-900 dark:text-white bg-white outline-none`}
                placeholder="Project Collaboration"
              />
              {typeof errors.subject?.message === 'string' && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                {...register('message', {
                  required: 'Message is required',
                  minLength: { value: 10, message: 'Message must be at least 10 characters' },
                })}
                rows={6}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${errors.message
                    ? 'border-red-500 focus:border-red-600'
                    : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'
                  } dark:bg-gray-900 dark:text-white bg-white outline-none`}
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
              {typeof errors.message?.message === 'string' && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
              I typically respond to messages within 24 hours. Looking forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
