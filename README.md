# ecommerceFenixing
Desarrollo de una plataforma ecommerce para la venta de repuestos y componentes de puentes grúa de la empresa Fénix Ingeniería  

📌 1. Introducción.

La presente plataforma E-Commerce fue desarrollada como parte del Proyecto Integrador de Grado (PIG) de la carrera de Desarrollo de Software, con el objetivo de optimizar la comercialización de repuestos y componentes para puentes grúa de la empresa Fénix Ingeniería.

El sistema permite:

* Gestionar productos y categorías desde un panel administrativo.

* Visualizar productos en una tienda virtual moderna.

* Facilitar la interacción con clientes mediante una plataforma web accesible.

🔹 2. Objetivo del Sistema.

Objetivo General: Desarrollar una plataforma web E-Commerce que permita la gestión y visualización de productos industriales, mejorando los procesos de venta y difusión de repuestos para puentes grúa.

Objetivos Específicos

* Administrar productos, categorías e información institucional.

* Proveer una interfaz amigable para clientes.

* Implementar un sistema escalable usando tecnologías modernas.

* Separar frontend y backend bajo una arquitectura desacoplada.

🧩 3. Arquitectura General del Sistema.

La plataforma está dividida en dos partes principales:

Backend (API y Gestión de Contenidos)

Tecnología: Strapi (Node.js)

Función:

* Gestión de productos

* Gestión de categorías

* Administración de contenido

* API REST para consumo del frontend

Frontend (Tienda Virtual)

Tecnología: Next.js + TypeScript

Función:

* Visualización de productos

* Navegación por categorías

* Detalle de productos

* Interfaz moderna y responsiva

🗂️ 4. Estructura del repositorio.

   <img width="528" height="245" alt="image" src="https://github.com/user-attachments/assets/09feec27-c186-4dad-bd82-4f9d107d01c1" />

⚙️ 5. Requisitos del Sistema
Software necesario

* Node.js (v18 o superior)

* npm o yarn

* Git

* Navegador web moderno

* Editor de código (VS Code recomendado)

📍 6. Instalación y Configuración.

* Paso 1. Clonar el repositorio.

<img width="567" height="102" alt="image" src="https://github.com/user-attachments/assets/b2e71a37-4b57-4532-921d-18172bdce2d4" />

* Paso 2. Configuración del Backend (STRAPI).
  
<img width="253" height="95" alt="image" src="https://github.com/user-attachments/assets/69796dde-f109-4b9d-ba6d-6d7ce0e2fcfd" />

* Paso 3. Crear el archivo .env
  
<img width="270" height="71" alt="image" src="https://github.com/user-attachments/assets/bbeda75f-873e-4bf3-8b34-b3b44a7eb489" />

* Paso 4. Ejecutar el servidor.
  
<img width="197" height="69" alt="image" src="https://github.com/user-attachments/assets/6abb4b0e-a945-4721-864e-56c53f6853ba" />

* Paso 5. Accedemos al LocalHost.

<img width="975" height="692" alt="image" src="https://github.com/user-attachments/assets/28f51637-151f-4cf3-9abc-b1754e609fc9" />

* Paso 6. Configuración del Frontend.

<img width="258" height="120" alt="image" src="https://github.com/user-attachments/assets/fcc0a09b-4c31-4e72-ba86-43185109d1ea" />

* Paso 7. Accedemos al sistema E-commerce Fenixing.

<img width="1894" height="1023" alt="image" src="https://github.com/user-attachments/assets/fd170123-dfc9-44ab-83b0-ed97b1d4c748" />



7. Manual del Administrador.

Desde el panel administrativo (Strapi), el administrador puede:

Crear, editar y eliminar productos como por ejemplo:

<img width="1319" height="455" alt="image" src="https://github.com/user-attachments/assets/d3cd470f-e25b-461c-a674-0639a4c60485" />

* Gestionar categorías

* Administrar contenido institucional

* Cargar imágenes de productos

* Controlar la información mostrada en la tienda virtual

<img width="283" height="299" alt="image" src="https://github.com/user-attachments/assets/0f3952b5-27e7-40f7-9bf7-069df0f67453" />

Nota: El acceso se realiza mediante credenciales creadas en el primer inicio del backend.

🛒 8. Manual del Usuario Final

El usuario puede:

* Visualizar el catálogo de productos.

<img width="1076" height="558" alt="image" src="https://github.com/user-attachments/assets/cd9791cf-0592-4cd4-8307-6d82ce678227" />


* Filtrar productos por categoría.

<img width="1054" height="508" alt="image" src="https://github.com/user-attachments/assets/7bec1bc6-6831-4403-a036-5a10a2bc4a1a" />


* Acceder al detalle de cada producto

<img width="1094" height="547" alt="image" src="https://github.com/user-attachments/assets/7d653234-cecc-4b99-a18e-4d48db66dfc0" />

* Visualizar información institucional

<img width="883" height="709" alt="image" src="https://github.com/user-attachments/assets/053cbea0-f2e8-4981-acf7-bc851b4d5ae2" />

* Navegar desde dispositivos móviles o escritorio

<img width="925" height="672" alt="image" src="https://github.com/user-attachments/assets/8ea295f7-7535-44ee-b62a-e9ca79eb22f5" />

Nota: La plataforma no requiere autenticación para la visualización de productos.

🔐 9. Seguridad y Buenas Prácticas.

* Variables sensibles almacenadas en .env

* Separación entre frontend y backend.

* Uso de .gitignore para evitar subir información sensible.

* Arquitectura escalable para futuras mejoras.

📈 10. Futuras Mejoras.

* Implementación de carrito de compras con pago en línea.

* Gestión de usuarios y clientes.

* Generación de reportes.

* Integración con sistemas de inventario.

* Autenticación y roles avanzados.
