"use client"
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "./card";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

export const dataCarouselTop = [

    
    {
        id: 1,
        title: "Bienvenidos a nuestra tienda en línea de Fenix Ingeniería",
        description: "Disfruta de una experiencia diferente.",
        link: "#",
    },
    {
        id: 2,
        title: "El envío de tus compras en 24 o 48 horas",
        description: "Los envíos se la realizan a toda parte del Ecuador y latinoamerica",
        link: "#",
    },
    {
        id: 3,
        title: "Servicios de alta calidad",
        description: "Mantenimientos preventivos y correctivos de polipastos y puentes grúa",
        link: "#",
    },
]
const CarouselTextBanner = () => {
    const router = useRouter()
  return (
    <div className="bg-gray-200 dark:bg-primary">
        <Carousel className="w-full max-w-4xl mx-auto"
        plugins={[
            Autoplay({
                delay: 3000
            })
        ]}
        >
            <CarouselContent>
            {dataCarouselTop.map(({ id, title, description,link}) => (
                <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                    
                <div>
                    <Card className="shadow-none border-none bg-transparent">
                       <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                        <p className="sm:text-lg text wrap dark:text-secondary">{title}</p>
                        <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>

                        </CardContent> 
                    </Card>
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>
        </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
