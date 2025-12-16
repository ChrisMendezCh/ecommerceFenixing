"use client";

import { motion } from 'framer-motion';
import { Award, DraftingCompass, Globe, PackageCheck, ShieldCheck, Users, Wrench } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ServiciosPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const servicios = [
    {
      id: 'tecnico',
      titulo: 'Servicio Técnico',
      icono: <Wrench className="text-primary w-8 h-8" />,
      descripcion: 'Soluciones técnicas especializadas para mantener tus equipos en óptimo estado',
      imagen: '/images3/services/tecnico.png',
      caracteristicas: [
        'Técnicos especializados y con amplia experiencia',
        'Técnicos certificados para trabajo en altura',
        'Servicio técnico multimarca',
        'Cobertura a nivel nacional',
        'Contrato de mantenimiento periódico'
      ]
    },
    {
      id: 'postventa',
      titulo: 'Postventa y Repuestos',
      icono: <PackageCheck className="text-primary w-8 h-8" />,
      descripcion: 'Soporte continuo y disponibilidad de repuestos para tus equipos',
      imagen: '/images3/services/repuesto.png',
      caracteristicas: [
        'Servicio posventa especializado',
        'Amplio stock de repuestos y accesorios',
        'Entrega inmediata de componentes críticos',
        'Repuestos a precios competitivos'
      ]
    },
    {
      id: 'garantia',
      titulo: 'Garantía',
      icono: <ShieldCheck className="text-primary w-8 h-8" />,
      descripcion: 'Protección y respaldo para todas nuestras soluciones',
      imagen: '/images3/services/garantia.png',
      caracteristicas: [
        'Garantía original de fábrica en todas nuestras marcas',
        'Cobertura extendida disponible',
        'Procesos ágiles de reclamación',
        'Soporte técnico durante periodo de garantía'
      ]
    },
    {
      id: 'ingenieria',
      titulo: 'Diseño e Ingeniería de Elevación',
      icono: <DraftingCompass className="text-primary w-8 h-8" />,
      descripcion: 'Soluciones personalizadas para necesidades específicas de elevación',
      imagen: '/images3/services/ingenieria.png',
      caracteristicas: [
        'Planificación y diseño integral',
        'Fabricación bajo estándares internacionales',
        'Ejecución de proyectos llave en mano',
        'Ingenieros certificados'
      ]
    },
    {
      id: 'certificaciones',
      titulo: 'Certificaciones',
      icono: <Award className="text-primary w-8 h-8" />,
      descripcion: 'Avalamos la calidad y seguridad de tus equipos',
      imagen: '/images3/services/certificaciones.png',
      caracteristicas: [
        'Certificaciones avaladas por Crane Institute of America',
        'Certificación ISO9001',
        'Certificación de puentes grúa bajo normas ASME B30',
        'Equipos de izaje certificados'
      ]
    },
    {
      id: 'capacitacion',
      titulo: 'Capacitaciones',
      icono: <Users className="text-primary w-8 h-8" />,
      descripcion: 'Formación especializada para tu personal',
      imagen: '/images3/services/capacitaciones.png',
      caracteristicas: [
        'Programas de capacitación técnica',
        'Certificación de operadores',
        'Talleres de seguridad industrial',
        'Entrenamiento en mantenimiento preventivo'
      ]
    }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Encabezado animado */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-primary mb-6 relative">
          Nuestros Servicios
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></span>
        </h1>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Soluciones integrales para todas tus necesidades de elevación industrial
        </p>
      </motion.div>

      {/* Grid interactivo de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <motion.div 
            key={servicio.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              group bg-background border-2 rounded-xl overflow-hidden
              hover:shadow-2xl transition-all duration-300 cursor-pointer
              ${selectedService === servicio.id ? 'border-primary scale-105' : 'border-border hover:border-primary/50'}
            `}
            onClick={() => setSelectedService(servicio.id)}
          >
            {/* Imagen del servicio */}
            {servicio.imagen && (
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            )}

            <div className="p-6">
              {/* Encabezado del servicio */}
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary/10 p-3 rounded-full"
                >
                  {servicio.icono}
                </motion.div>
                <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {servicio.titulo}
                </h2>
              </div>
              
              {/* Descripción */}
              <p className="text-foreground/80 mb-6 text-lg">{servicio.descripcion}</p>
              
              {/* Lista de características */}
              <ul className="space-y-3">
                {servicio.caracteristicas.map((caracteristica, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-foreground/80 hover:text-foreground transition-colors"
                  >
                    <span className="text-primary mt-1">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        ✓
                      </motion.div>
                    </span>
                    <span>{caracteristica}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sección de cobertura */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-20 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-10"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
            className="bg-primary/20 p-6 rounded-full"
          >
            <Globe className="text-primary w-16 h-16" />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Cobertura Nacional</h2>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Ofrecemos nuestros servicios en todo el territorio ecuatoriano, con técnicos disponibles 
              en las principales ciudades y capacidad de desplazamiento a cualquier ubicación industrial.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}