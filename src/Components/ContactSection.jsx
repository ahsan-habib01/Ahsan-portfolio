import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import toast from 'react-hot-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        err => {
          console.error(err);
          toast.error('Oops! Something went wrong, please try again.');
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'ahsanhabiib00@gmail.com',
      link: 'mailto:ahsanhabiib00@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+880 1742-981732',
      link: 'tel:+880 1742-981732',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Joypurhat, Bangladesh',
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="section-container bg-gradient-to-br 
  from-[#fffafa] to-[#f3eded] 
   dark:from-[#1e293b] dark:to-[#334155] py-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-2">Get In Touch</h2>
          <p className="text-base-content/70">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="p-8 bg-base-100 rounded-xl shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-primary">Let's Talk</h3>
              <p className="text-base-content/70">
                I'm always open to discussing new projects, ideas, or
                collaboration opportunities. Reach out to me directly!
              </p>

              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-lg text-xl">
                    {info.icon}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-base-content/70 hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base-content/70">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <div className="p-8 bg-base-100 rounded-xl shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Send a Message
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-base-200 border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-base-200 border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-base-200 border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Your Message..."
                  className="w-full px-4 py-3 rounded-lg bg-base-200 border-2 border-transparent focus:border-primary focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
