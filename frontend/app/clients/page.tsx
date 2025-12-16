import { Construction, Factory, Fuel, Package, Ship, Truck } from 'lucide-react';
import Image from 'next/image';

export default function ClientsPage() {
  // Datos de sectores industriales
  const sectores = [
    {
      id: 'petrolero',
      nombre: 'Sector Petrolero',
      icono: <Fuel className="text-primary w-8 h-8" />,
      clientes: ['Petroecuador', 'Schlumberger', 'Sertecpet'],
      soluciones: [
        'Grúas para plataformas',
        'Equipos resistentes a explosión',
        'Sistemas para manejo de tubería'
      ]
    },
    {
      id: 'construccion',
      nombre: 'Construcción',
      icono: <Construction className="text-primary w-8 h-8" />,
      clientes: ['Sedemi', 'Hidalgo e Hidalgo', 'Holcim'],
      soluciones: [
        'Grúas torre para edificios altos',
        'Polipastos para prefabricados',
        'Sistemas de izaje seguro'
      ]
    },
    {
      id: 'industrial',
      nombre: 'Industrial',
      icono: <Factory className="text-primary w-8 h-8" />,
      clientes: ['Ecuatran', 'Heineken', 'Acesco','Adelca'],
      soluciones: [
        'Puentes grúa personalizados',
        'Sistemas de transporte interno',
        'Soluciones automatizadas'
      ]
    },
    {
      id: 'transporte',
      nombre: 'Transporte',
      icono: <Truck className="text-primary w-8 h-8" />,
      clientes: ['MetroQuito', 'AeropuertoQuito', 'Transicopet'],
      soluciones: [
        'Equipos para carga/descarga',
        'Sistemas de almacenamiento',
        'Soluciones para puertos'
      ]
    },
    {
      id: 'camaronero',
      nombre: 'Camaronero',
      icono: <Ship className="text-primary w-8 h-8" />,
      clientes: ['Cofimar', 'Guayatuna', 'Songa'],
      soluciones: [
        'Equipos resistentes a corrosión',
        'Sistemas para procesamiento',
        'Soluciones para plantas de empaque'
      ]
    },
    {
      id: 'papelero',
      nombre: 'Sector Papelero',
      icono: <Package className="text-primary w-8 h-8" />,
      clientes: ['Smurtfit Kappa', 'Papelera Nacional', 'Ecuapack'],
      soluciones: [
        'Manipulación de rollos',
        'Sistemas para bobinas',
        'Equipos para manejo de materiales'
      ]
    }
  ];

  // Logos de clientes
  const clientLogos = [
    { id: 1, src: '/images/clients/petroecuador.png', alt: 'Petroecuador' },
    { id: 2, src: '/images/clients/metro.png', alt: 'MetroQ' },
    { id: 3, src: '/images/clients/sedemi.png', alt: 'Sedemi' },
    { id: 4, src: '/images/clients/pilsener.png', alt: 'Cervecería Nacional' },
    { id: 5, src: '/images/clients/SONGA.png', alt: 'Songa' },
    { id: 6, src: '/images/clients/smurtfit.png', alt: 'Smurtfit' },
    // Agrega más logos aquí
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Nuestros Clientes</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Más de 20 años brindando soluciones de elevación a los principales sectores industriales del Ecuador
        </p>
      </div>

      {/* Logotipos de clientes con efectos */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
          Algunas de las empresas que confían en nosotros
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientLogos.map((logo) => (
            <div 
              key={logo.id}
              className="relative group bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 h-32"
            >
              {/* Efecto de overlay al hacer hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              {/* Imagen con efecto de movimiento */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="object-contain max-h-16 transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                />
              </div>
              
              {/* Efecto de brillo al hacer hover (opcional) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sectores industriales */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
          Sectores Industriales que Atendemos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectores.map((sector) => (
            <div 
              key={sector.id} 
              className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:border-primary/50"
            >
              <div className="bg-primary/10 p-4 flex items-center gap-4 group-hover:bg-primary/20 transition-colors">
                {sector.icono}
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {sector.nombre}
                </h3>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-primary mb-2">Clientes destacados:</h4>
                <ul className="mb-4 space-y-1">
                  {sector.clientes.map((cliente, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground/80 hover:text-foreground transition-colors">
                      <span className="text-primary">•</span>
                      <span>{cliente}</span>
                    </li>
                  ))}
                </ul>
                <h4 className="font-medium text-primary mb-2">Soluciones que ofrecemos:</h4>
                <ul className="space-y-1">
                  {sector.soluciones.map((solucion, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground/80 hover:text-foreground transition-colors">
                      <span className="text-primary">✓</span>
                      <span>{solucion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonios */}
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg hover:bg-primary/10 transition-colors">
            <blockquote className="text-foreground/90 italic mb-4 group-hover:text-foreground transition-colors">
              "Fénix ING nos ha proporcionado equipos de elevación que han soportado las duras condiciones de nuestras plataformas petroleras sin fallas por más de 5 años."
            </blockquote>
            <p className="font-medium text-foreground">Ing. Roberto Pazmiño</p>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
              Gerente de Operaciones, Petroecuador
            </p>
          </div>
          
          <div className="group border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg hover:bg-primary/10 transition-colors">
            <blockquote className="text-foreground/90 italic mb-4 group-hover:text-foreground transition-colors">
              "El servicio técnico y la disponibilidad de repuestos han sido clave para mantener nuestra operación sin interrupciones."
            </blockquote>
            <p className="font-medium text-foreground">Dra. María Fernanda López</p>
            <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
              Directora de Planta, Nestlé Ecuador
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}