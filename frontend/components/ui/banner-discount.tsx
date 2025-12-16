import Link from "next/link";
import { buttonVariants } from "./button";

const BannerDiscount = () => {
    return (
        <div className="p-5 sm:p-20 text-center">
            <h2 className="uppercase font-black text-3xl text-primary">Levantar tu negocio, es nuestro negocio</h2>
            <h3 className="font semibold text-2xl"> Soluciones de Ingeniería para el Manejo de Carga Pesada. </h3>
            <h4> Planificación, diseño, fabricación y ejecución. </h4>


            <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
                <Link href="contact" className={buttonVariants()}>Contactanos</Link> 
            </div>
        </div>
    )
}

export default BannerDiscount;
//Aquí vamos a poner el la linea 13 en los parentesis despues de buttonsV el enlace para los numeros de contactos.