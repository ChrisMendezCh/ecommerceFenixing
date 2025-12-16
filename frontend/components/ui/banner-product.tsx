import Link from "next/link";
import { buttonVariants } from "./button";

const  BannerProduct = () => {
    return (
        <>
        <div className="mt-4 text-center">
            <p>La mejor experiencia en elevación para tus materiales </p>
            <h4 className="mt-2 text-5xl font-extrabold uppercase text-yellow-500">Puentes grúa y polipastos Ecuador</h4>
            <p className="my-2 text-lg">Fenix Ingenieria</p>
            <Link href="#" className={buttonVariants()}>Comprar</Link>
        </div>
        <div className="h-[500px] bg-cover lg:h-[600px] bg-[url('/fenixing.jpg')] bg-center mt-5" />
</>
    )
}

export default BannerProduct;
//Aquí usamos el banner de la imagen del puente grúa esperar validación de fotos