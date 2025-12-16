"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { href: "/about", label: "Sobre Nosotros" },
  { href: "/clients", label: "Clientes" },
  { href: "/products", label: "Productos" },
  { href: "/services", label: "Servicios" },
  { href: "/contact", label: "Contacto" },
];

const categoryItems = [
  { href: "/category/danfoss", label: "Danfoss" },
  { href: "/category/pewag", label: "Pewag" },
  { href: "/category/iga", label: "IGA" },
  { href: "/category/repuestos-varios", label: "Repuestos Varios" },
  { href: "/category/gh-dipreleva", label: "GH-Dipreleva" },
];

const ItemsMenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón hamburguesa */}
      <button
        className="p-2 rounded-md focus:outline-none"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
      >
        <Menu size={28} />
      </button>
      {/* Menú lateral */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Fondo oscuro */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
          />
          {/* Panel lateral */}
          <div className="relative bg-black w-72 h-full shadow-lg p-6 flex flex-col animate-slide-in-left z-10">
            <button
              className="self-end mb-6"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={28} />
            </button>
            {/* Menú principal */}
            <nav className="flex flex-col gap-2 mb-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-lg border-b border-gray-100 hover:text-primary transition"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {/* Categorías */}
            <div className="mt-4">
              <div className="font-bold text-primary mb-2">Categorías</div>
              <nav className="flex flex-col gap-2">
                {categoryItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 text-base border-b border-gray-50 hover:text-primary transition"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
      {/* Animación simple para el menú lateral */}
      <style jsx global>{`
        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </>
  );
};

export default ItemsMenuMobile;