
import { Separator } from '@radix-ui/react-separator';
import Link from 'next/link';

const dataFooter = [
  {
    id: 1,
    name: "Sobre nosotros",
    link: "about"
    },
    {
    id: 2,
    name: "Productos",
    link: "products"
    },
    {
    id: 3,
    name: "Servicios",
    link: "services"
    },
    { id: 4,
    name: "Contacto",
    link: "contact"
    },
]

const Footer = () => {
  return (
    <footer className="mt-4">
        <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <p>
                    <span className="font-bold">
                        Fenix Ingeniería
                    </span>
                         E-commerce
                </p>

                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-500">

                    {dataFooter.map((data) => (
                        <li key={data.id}>
                            <Link href={data.link} className="hover:underline me-4 md:me-6">{data.name}</Link>
                            </li>
                    ))}
                </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy; 2025 
                    <Link href="#">Fenix Ingeniería & ChrisMzDev</Link> Todos los derechos reservados.
                </span>
        </div>
    </footer>
    );
}
export default Footer;