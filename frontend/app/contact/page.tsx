'use client';
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contáctenos</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Estamos listos para atender sus consultas y brindarle el mejor servicio
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulario de contacto */}
        <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Envíenos un mensaje</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded-md focus:ring-primary focus:border-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Enviar mensaje
            </button>
          </form>
        </div>

        {/* Información de contacto */}
        <div className="space-y-8">
          {/* Mapa */}
          <div className="h-64 bg-gray-100 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.805123559743!2d-78.450382!3d-0.1806538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a400a0d2c9f%3A0x123456789abcde!2sFénix%20Ingeniería!5e0!3m2!1ses!2sec!4v1234567890123!5m2!1ses!2sec"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Información de contacto */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Información de contacto</h2>
            
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Dirección</h3>
                  <p className="text-foreground/80">Oficina Administrativa y Planta Industrial: Vía Sangolquí Amaguaña KM 4.5, Sangolquí - Ecuador</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Teléfonos</h3>
                  <p className="text-foreground/80">+593-99-426-3503 / +593-99 457 7987</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-foreground">Email</h3>
                  <p className="text-foreground/80">info@fenixing.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="pt-4">
            <h3 className="text-lg font-medium text-foreground mb-3">Síganos en redes sociales</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/FenixingEc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>

                    <a 
                href="https://www.linkedin.com/company/fenixing/posts/?feedView=all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                aria-label="LinkendIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a 
                href="https://www.instagram.com/fenix_ingenieria?igsh=MWhrM2h3MTZra2hpMw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              
              <a 
                href="https://wa.me/593994577987" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}