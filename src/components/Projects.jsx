import React from 'react';
import ThreeDCardDemo from './ThreeDCardDemo'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos
import '../styles/Card.css'
import mezcalito from '../assets/mezcalito.jpg';
import aprendiendojuntos from '../assets/aprendiendojuntos.jpg';
import recetario from '../assets/recetario.jpg';


const Projects = () => {
    return (
        <>
            <div className='general'>
            <h1>Proyectos</h1>
                {/* Tarjeta para el Proyecto 1 */}
                <ThreeDCardDemo
                    title="El Mezcalito"
                    description="Desarrollé una página web interactiva y visualmente atractiva para El Mezcalito,
                    un bar local, mejorando su presencia en línea y la experiencia del cliente. Utilicé
                    tecnologías modernas como HTML, CSS, y JavaScript, enfocándome en la usabilidad y
                    el diseño responsivo."
                    imageSrc={mezcalito}
                    demoUrl="https://mezcalito.vercel.app/"
                    codeUrl="https://github.com/Reyirel/Mezcalito.git"
                />
                {/* Tarjeta para el Proyecto 2 */}
                <ThreeDCardDemo
                    title="Aprendiendo Juntos"
                    description="Diseñé y desarrollé una plataforma web educativa dirigida a usuarios de la tercera
                    edad, facilitando su acceso a tecnologías y conocimientos básicos de internet. Este
                    proyecto destacó por su interfaz intuitiva y accesible, implementando funcionalidades
                    adaptadas a las necesidades y capacidades de este grupo etario. Utilicé React con
                    HTML, CSS, JavaScript y principios de diseño web accesible, contribuyendo a una
                    mejora significativa en la alfabetización digital de los usuarios finales."
                    imageSrc={aprendiendojuntos}
                    demoUrl="https://aprendiendojuntos-omega.vercel.app/"
                    codeUrl="https://github.com/Reyirel/aprendiendojuntos.git"
                />
                {/* Tarjeta para el Proyecto 3 */}
                <ThreeDCardDemo
                    title="Recetario de Cocina"
                    description="Demostré habilidades excepcionales en diseño y desarrollo web al ganar este
                    hackathon, donde desarrollé una aplicación innovadora bajo presión de tiempo. Esto
                    no solo mostró mi competencia técnica, sino también mi capacidad para trabajar
                    efectivamente y bajo presión."
                    imageSrc={recetario}
                    demoUrl="https://cocina-code-hackathon-ieee.vercel.app/"
                    codeUrl="https://github.com/Reyirel/CocinaCode-Hackathon-IEEE.git"
                />
            </div>
        </>
    );
};

export default Projects;
