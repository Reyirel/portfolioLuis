import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const Home = () => {
    const disciplinas = ["la tecnología.", "la música.", "el aprendizaje.", "la innovación.", "la programacion."];
    const [apasionadoPor, setApasionadoPor] = useState("");
    const [indiceDisciplina, setIndiceDisciplina] = useState(0);
    const [indiceLetra, setIndiceLetra] = useState(0);

    useEffect(() => {
        const intervaloCambioDisciplina = setInterval(() => {
            setIndiceDisciplina(indiceActual => {
                const nuevoIndice = (indiceActual + 1) % disciplinas.length;
                setIndiceLetra(0);
                setApasionadoPor('');
                return nuevoIndice;
            });
        }, 5000 + disciplinas[indiceDisciplina].length * 100);

        const intervaloEscritura = setInterval(() => {
            setApasionadoPor(textoActual => {
                const textoDisciplina = disciplinas[indiceDisciplina];
                if (textoActual.length < textoDisciplina.length) {
                    return textoDisciplina.substring(0, textoActual.length + 1);
                }
                return textoActual;
            });
        }, 100);

        return () => {
            clearInterval(intervaloCambioDisciplina);
            clearInterval(intervaloEscritura);
        };
    }, [indiceDisciplina]);

    return (
        <>
            <section className='principal'>
                <div className="sobremi">
                    <h1>¡Hola! Soy <span>Luis Alberto,</span></h1>
                    <p>Desarrollador de software y apasionado por <span>{apasionadoPor}</span></p>
                    <div className="botones">
                        <a href="https://github.com/Reyirel?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithub className="icono" /></a>
                        <a href="https://www.linkedin.com/in/luis-alberto-chavero-chavez-8618a22ba/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icono" /></a>
                        <a href="ENLACE_A_TU_CV.pdf" target="_blank" rel="noopener noreferrer"><FaFilePdf className="icono" /></a>
                    </div>
                </div>
                <div className="imagen">
                    <div className="blob">
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
