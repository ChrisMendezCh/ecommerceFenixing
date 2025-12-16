import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const products = [
    {
      id: 'danfoss',
      name: 'Danfoss',
      description: 'Líder mundial en soluciones de transmisión de potencia hidráulica y electrónica industrial.',
      logo: '/images2/products/danfoss.jpeg',
      products: ['Motores hidráulicos', 'Bombas', 'Válvulas', 'Sistemas de control']
    },
    {
      id: 'gh-dipreleva',
      name: 'GH-Dipreleva',
      description: 'Especialistas en grúas y equipos de elevación de alta precisión para entornos industriales exigentes.',
      logo: '/images2/products/gh.jpg',
      products: ['Grúas puente', 'Polipastos eléctricos', 'Sistemas de monorriel']
    },
    {
      id: 'liftket',
      name: 'Liftket',
      description: 'Especializados en soluciones de elevación para aplicaciones pesadas y críticas.',
      logo: '/images2/products/lifket.jpeg',
      products: ['Ganchos giratorios', 'Equipos para minería', 'Sistemas para petróleo y gas']
    },
    {
      id: 'pewag',
      name: 'Pewag',
      description: 'Fabricante austriaco de cadenas de alta resistencia para aplicaciones industriales.',
      logo: '/images2/products/pewag.jpeg',
      products: ['Cadenas de carga', 'Eslingas', 'Accesorios para izaje']
    },
    {
      id: 'iga',
      name: 'IGA',
      description: 'Tecnología alemana en sistemas de fijación y sujeción para cargas industriales.',
      logo: '/images2/products/iga.jpeg',
      products: ['Ganchos de seguridad', 'Grillos', 'Sistemas de amarre']
    },
    {
      id: 'repuestos-varios',
      name: 'Otras Marcas',
      description: 'Fenix Ingenieria dispone de un amplio portafolio de marcas reconocidas en el mercado.',
      logo: '/images2/products/fenix.jpeg',
      products: ['cadenas', 'pestillos', 'Sistemas de elevación']
    }
  ];

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Encabezado */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Nuestras Productos</h1>
        <h2 className="text-2xl font-bold text-primary mb-2">Elige tu producto de acuerdo a nuestras marcas</h2>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Representamos a los líderes mundiales en equipos de elevación y componentes industriales
        </p>
      </div>

      {/* Grid de marcas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((products) => (
          <div 
            key={products.id}
            className="group bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:border-primary/50"
          >
            {/* Logo de la marca */}
            <div className="bg-gray-50 p-6 flex justify-center items-center h-40">
              <div className="relative w-full h-full">
                <Image
                  src={products.logo}
                  alt={products.name}
                  fill
                  className="object-contain transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {products.name}
              </h2>
              <p className="text-foreground/80 mb-4">{products.description}</p>
              
              <h3 className="font-medium text-primary mb-2">Productos destacados:</h3>
              <ul className="grid grid-cols-2 gap-1 mb-4">
                {products.products.slice(0, 4).map((product, index) => (
                  <li key={index} className="text-sm text-foreground/80 flex items-start">
                    <span className="text-primary mr-1">•</span>
                    {product}
                  </li>
                ))}
              </ul>

              <Link 
                href={`/category/${products.id}`}
                className="mt-4 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Ver productos {products.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sección informativa */}
      <div className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">¿Por qué trabajar con las mejores marcas?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-background p-4 rounded-lg">
            <h3 className="font-medium text-primary mb-2">Garantía de calidad</h3>
            <p className="text-foreground/80">Todos nuestros equipos cumplen con los más altos estándares internacionales</p>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h3 className="font-medium text-primary mb-2">Soporte técnico</h3>
            <p className="text-foreground/80">Asesoría especializada de fabricantes y personal certificado</p>
          </div>
          <div className="bg-background p-4 rounded-lg">
            <h3 className="font-medium text-primary mb-2">Disponibilidad</h3>
            <p className="text-foreground/80">Stock local de repuestos y componentes para mantenimiento</p>
          </div>
        </div>
      </div>
    </section>
  );
}