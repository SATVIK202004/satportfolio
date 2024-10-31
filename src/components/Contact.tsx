import React from 'react';
import { Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin />,
      url: 'https://www.linkedin.com/in/peddisetty-venkat-satvik-363903284'
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://www.instagram.com/iamsatvik20/'
    },
    {
      name: 'Facebook',
      icon: <Facebook />,
      url: 'https://www.facebook.com/profile.php?id=100094118957923'
    },
    {
      name: 'Email',
      icon: <Mail />,
      url: 'mailto:satvikpeddisetty20@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;