"use client";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { cn } from "@/lib/utils"; // Asumo que tienes esta utilidad
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ItemsMenuMobile from "./items-menu-mobile";
import ToggleTheme from "./toggle-theme";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const cart = useCart();
    const {lovedItems} = useLovedProducts(); 

    const menuItems = [
        { name: "Sobre Nosotros", path: "/about" },
        { name: "Clientes", path: "/clients" },
        { name: "Productos", path: "/products" },
        { name: "Servicios", path: "/services" },
        { name: "Contacto", path: "/contact" }
    ];

    return (
        <div className="flex items-center justify-between p-4 mx-auto sm:max-w-6xl md:max-w-6xl border-b border-border">
            {/* Logo */}
            <h1 
                className="flex items-center gap-1 text-2xl cursor-pointer text-foreground"
                onClick={() => router.push("/")}
            >
                <Image
                    src="/icon.png" 
                    alt="Logo Fenix Ingeniería"
                    width={30}
                    height={30}
                    className="object-contain"
                    priority
                />
                Fenix
                <span className="font-bold text-primary"> Ingeniería</span>
            </h1>
            
            {/* Menú Desktop */}
            <div className="items-center justify-between hidden sm:flex">
                <nav className="flex gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "text-sm font-extrabold transition-colors hover:text-primary",
                                pathname === item.path ? "text-primary font-semibold" : "text-foreground/100"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>
            
            {/* Menú Mobile solo visible en pantallas pequeñas */}
            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>
            
                 {/* Iconos */}
            <div className="flex items-center gap-2 sm:gap-4">
                {cart.items.length === 0 ?(
                    <ShoppingCart
                        strokeWidth="1.5"
                        className="w-6 h-6 cursor-pointer text-foreground hover:text-primary"
                        onClick={() => router.push("/cart")}
                    />
                ) : (
                    <div className="flex gap-1" onClick={() => router.push("/cart")}>
                        <BaggageClaim strokeWidth={1} className="w-6 h-6 cursor-pointer" />
                        <span className="text-xs">{cart.items.length}</span>
                    </div>
                )}
                <Heart 
                    strokeWidth="1.5"
                    className={`w-6 h-6 cursor-pointer ${lovedItems.length > 0 && 'fill-black dark:fill-white'}`}
                    onClick={() => router.push("/loved-products")} />
                <User 
                    strokeWidth="1.5"
                    className="w-6 h-6 cursor-pointer text-foreground hover:text-primary"
                />
                <ToggleTheme />
            </div>
        </div>
    );
};

export default Navbar;