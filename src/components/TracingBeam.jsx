import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam"; // Asegúrate de que esta ruta sea correcta en tu proyecto
import imagen2 from "../assets/Imagen2.png"; // Importa la imagen
import imagen3 from "../assets/Imagen3.png"; // Importa la imagen
import imagen4 from "../assets/Imagen4.png"; // Importa la imagen

import "../styles/About.css"

const dummyContent = [
  {
    title: "Sobre Mí",
    description: (
      <>
        <p>
          Soy Luis Alberto Chavero Chávez, un apasionado y proactivo estudiante de Ingeniería
          en Software en la Universidad Autónoma del Estado de Hidalgo, especializado en el
          desarrollo de soluciones web. Además, tengo una sólida base en el desarrollo
          de aplicaciones móviles y conocimientos en una amplia gama de tecnologías. Mis fortalezas incluyen una capacidad innata para aprender rápidamente
          nuevas tecnologías, una fuerte ética de trabajo y un compromiso con la excelencia en
          el desarrollo de software. Estoy buscando oportunidades para aplicar mis habilidades
          en un entorno desafiante que promueva el crecimiento personal y profesional.
        </p>
      </>
    ),
    badge: "Mi Perfil ",
    image: imagen2, // Reemplaza con la ruta de tu imagen
  },
  {
    title: "Educación",
    description: (
      <>
        <p>
          Actualmente me encuentro cursando la carrera de Ingeniería en Software en la
          Universidad Autónoma del Estado de Hidalgo, donde he mantenido un promedio
          académico destacado de 9.33. Este logro es reflejo de mi dedicación, capacidad
          de aprendizaje y compromiso con la excelencia académica en un campo que
          es tanto mi pasión como mi vocación.
        </p>
      </>
    ),
    badge: "",
    image: imagen3, // Reemplaza con la ruta de tu imagen
  },
  {
    title: "Habilidades y Tecnologías",
    description: (
      <>
        <p>
          A través de mi formación, he adquirido
          conocimientos sólidos en desarrollo de software, incluyendo programación, diseño de
          sistemas, y gestión de bases de datos, complementados con habilidades prácticas en
          tecnologías modernas de desarrollo web y móvil como React, Firebase, entre otras.
          Mi rendimiento académico me ha permitido no solo destacar en mis estudios, sino
          también aplicar lo aprendido en proyectos reales y competencias, preparándome
          efectivamente para una carrera exitosa en el ámbito tecnológico.
        </p>
      </>
    ),
    badge: "",
    image: imagen4, // Reemplaza con la ruta de tu imagen
  },
  // Puedes seguir agregando más elementos aquí según sea necesario
];

const TracingBeamDemo = () =>{
  return (
    <TracingBeam className="fuu">
      <div className="max-w-2xl  antialiased pt-7 relative ">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10" >
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 ">
              {item.badge}
            </h2>

            <h3 className={twMerge( "text-xl mb-4")}>
              {item.title}
            </h3>

            <div className="text-sm prose prose-sm dark:prose-invert images">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className="rounded-lg mb-10 object-cover"
                  style={{ width: "40%", height: "auto"}} // Estilos para asegurar que la imagen se muestre correctamente
                />
              )}
              {item.description}
              <br />
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

export default TracingBeamDemo;