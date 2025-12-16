'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const images = [
  { src: "/fenix1.jpg", alt: "FenixIng 1" },
  { src: "/fenix2.jpg", alt: "FenixIng 2" },
  { src: "/fenix3.jpg", alt: "FenixIng 3" },
  // Agregar si lo amerita
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);

  // Cambio automático cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Funciones para controles manuales
  const prevImage = () => setCurrent((current - 1 + images.length) % images.length);
  const nextImage = () => setCurrent((current + 1) % images.length);

  return (
    <section id="sobre-nosotros" className={`${styles.seccion} px-4 py-12`}>
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Sobre Nosotros</h1>
      
      <div className={`${styles.contenido} gap-8 flex flex-col md:flex-row items-center`}>
        {/* Sección de texto */}
        <div className={`${styles.texto} space-y-6 flex-1`}>
          {/* Quiénes Somos */}
          <div className="group border-l-4 border-primary/20 pl-4 hover:border-primary/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              ¿Quiénes Somos?
            </h2>
            <p className="mt-2 text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
              Con más de 20 años en Ecuador atendiendo el mercado industrial del país. 
              Atendemos comercialmente a toda Latinoamérica y Centroamérica. 
              Somos representantes directos de nuestras marcas.
            </p>
          </div>
          {/* Cómo llegamos aquí */}
          <div className="group border-l-4 border-primary/20 pl-4 hover:border-primary/50 transition-colors duration-300">
            <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              ¿Cómo llegamos aquí?
            </h2>
            <p className="mt-2 text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
              La innovación es nuestra bandera, participando activamente en el desarrollo de nuestra industria
              y con permanente transferencia de tecnología de elevación.
            </p>
          </div>
          {/* Visión */}
          <div className="group border-l-4 border-primary/20 pl-4 hover:border-primary/50 transition-colors duration-300">
            <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              Nuestra Visión
            </h3>
            <p className="mt-2 text-foreground/85 leading-relaxed group-hover:text-foreground transition-colors duration-300">
              Brindar soluciones de tecnificación en las tareas de elevación y manejo seguro de carga 
              para aportar al mejoramiento de los procesos industriales en Ecuador.
            </p>
          </div>
          {/* Misión */}
          <div className="group border-l-4 border-primary/20 pl-4 hover:border-primary/50 transition-colors duration-300">
            <h4 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              Nuestra Misión
            </h4>
            <p className="mt-2 text-foreground/85 leading-relaxed group-hover:text-foreground transition-colors duration-300">
              Afianzar el posicionamiento actual de la empresa dentro del sector industrial ecuatoriano 
              mediante el mejoramiento de nuestra organización interna, fortalecimiento de la sinergia 
              de grupo empresarial y optimización de nuestros recursos.
            </p>
          </div>
        </div>
        
        {/* Carrusel de imágenes */}
        <div className={`${styles.imagen} relative flex-1`}>
          <div className="relative w-full h-[400px]">
            {images.map((img, idx) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className={`
                  absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-lg transition-opacity duration-700
                  ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                  ${styles.imgResponsive}
                `}
                style={{ pointerEvents: idx === current ? 'auto' : 'none' }}
                priority={idx === 0}
              />
            ))}
            {/* Controles */}
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/80 text-white rounded-full p-2 shadow hover:bg-primary transition z-20"
              aria-label="Anterior"
              type="button"
            >
              &#8592;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/80 text-white rounded-full p-2 shadow hover:bg-primary transition z-20"
              aria-label="Siguiente"
              type="button"
            >
              &#8594;
            </button>
            {/* Indicadores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full ${idx === current ? 'bg-primary' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}