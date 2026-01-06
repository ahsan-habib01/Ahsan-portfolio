import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  User,
  FileText,
  CheckCircle,
  Instagram,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate email sending (replace with your EmailJS code)
    setTimeout(() => {
      // console.log('Form submitted:', formData);
      // alert('Thank you! Your message has been sent.');
      // setFormData({ name: '', email: '', subject: '', message: '' });
      // setIsSubmitting(false);

      // EmailJS code:
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
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ahsanhabiib00@gmail.com',
      link: 'mailto:ahsanhabiib00@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+880 1742-981732',
      link: 'tel:+8801742981732',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Joypurhat, Bangladesh',
      link: null,
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ahsan-habib01',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ahsan-habib01',
      color: 'hover:text-blue-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/ahsan_habib001',
      color: 'hover:text-sky-500',
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-base-100 via-base-200 to-base-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute top-20 left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '1s' }}
        />
      </div>

      <div className="section-container relative z-10 mx-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-accent font-semibold text-primary">
              Let's Connect
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-display font-black mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Info Card */}
            <div
              className="relative p-8 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 
                         border border-base-300 overflow-hidden group hover:border-primary 
                         transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-black text-primary">
                    Let's Talk
                  </h3>
                  <p className="text-base-content/70 leading-relaxed">
                    I'm always open to discussing new projects, ideas, or
                    collaboration opportunities. Reach out to me directly!
                  </p>
                </div>

                {/* Contact Info Items */}
                <div className="space-y-4 pt-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={index}
                        className="group/item flex items-center gap-4 p-4 rounded-xl 
                                 bg-base-200 hover:bg-base-300 transition-all duration-300
                                 hover:scale-105 cursor-pointer"
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} 
                                     flex items-center justify-center text-white shadow-lg
                                     group-hover/item:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs font-accent font-semibold text-base-content/60 uppercase tracking-wider">
                            {info.title}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-base font-semibold text-base-content hover:text-primary 
                                       transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-base font-semibold text-base-content">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-base-300">
                  <p className="text-sm font-accent font-semibold text-base-content/60 mb-4">
                    Follow me on social media
                  </p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className={`w-12 h-12 rounded-xl bg-base-200 border border-base-300
                                   flex items-center justify-center text-base-content
                                   hover:border-primary hover:bg-primary/10 ${social.color}
                                   hover:scale-110 hover:rotate-6 transition-all duration-300`}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl 
                            group-hover:scale-150 transition-transform duration-700"
              />
            </div>

            {/* Quick Response Badge */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 
                         border border-green-500/20"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-accent font-bold text-base-content">
                  Quick Response
                </p>
                <p className="text-sm text-base-content/70">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div
              className="relative p-8 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 
                         border border-base-300 overflow-hidden hover:border-primary 
                         transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-display font-black text-primary">
                    Send a Message
                  </h3>
                  <p className="text-base-content/70">
                    Fill out the form below and I'll get back to you as soon as
                    possible
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Name Field */}
                  <div className="relative">
                    <div
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                        focusedField === 'name'
                          ? 'text-primary'
                          : 'text-base-content/40'
                      }`}
                    >
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Your Name"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-base-200 border-2 border-base-300
                               focus:border-primary focus:bg-base-100 focus:outline-none 
                               transition-all duration-300 font-accent"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <div
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                        focusedField === 'email'
                          ? 'text-primary'
                          : 'text-base-content/40'
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Your Email"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-base-200 border-2 border-base-300
                               focus:border-primary focus:bg-base-100 focus:outline-none 
                               transition-all duration-300 font-accent"
                    />
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <div
                      className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                        focusedField === 'subject'
                          ? 'text-primary'
                          : 'text-base-content/40'
                      }`}
                    >
                      <FileText className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField('')}
                      placeholder="Subject"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-base-200 border-2 border-base-300
                               focus:border-primary focus:bg-base-100 focus:outline-none 
                               transition-all duration-300 font-accent"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <div
                      className={`absolute left-4 top-4 transition-colors duration-300 ${
                        focusedField === 'message'
                          ? 'text-primary'
                          : 'text-base-content/40'
                      }`}
                    >
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField('')}
                      rows={5}
                      placeholder="Your Message..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-base-200 border-2 border-base-300
                               focus:border-primary focus:bg-base-100 focus:outline-none 
                               transition-all duration-300 resize-none font-accent"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary 
                             text-white font-accent font-bold text-lg
                             hover:shadow-xl hover:shadow-primary/50 hover:scale-105
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                             transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
