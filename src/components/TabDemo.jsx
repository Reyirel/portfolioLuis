import React from 'react';
import { Tabs } from './ui/tabs'; // Asegúrate de que este componente exista y esté correctamente importado
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaDatabase, FaPython, FaJava } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiBootstrap, SiMysql, SiMongodb, SiFlutter, SiTypescript, SiKotlin } from 'react-icons/si';
// Nota: FaNodeJs se puede usar para representar Node.js, y no encontraremos íconos directos para Express o Django en react-icons
import '../styles/Skills.css'; // Asegúrate de que esta hoja de estilo exista y esté correctamente referenciada

const TabsDemo = () => {
  const tabs = [
    {
      title: 'Front-end',
      value: 'front-end',
      content: (
        <div className="tab-content">
          <h2>Front-end Development</h2>
          <ul>
            <li><FaReact /></li>
            <li><SiJavascript /></li>
            <li><SiTypescript /></li> {/* TypeScript */}
            <li><FaHtml5 /><FaCss3Alt /></li>
            <li><SiTailwindcss /><SiBootstrap /></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Back-end',
      value: 'back-end',
      content: (
        <div className="tab-content">
          <h2>Back-end Development</h2>
          <ul>
            <li><FaNodeJs /></li> {/* Usando FaNodeJs para representar tanto Node.js como un proxy para Express */}
            {/* Django no tiene un ícono directo en react-icons, considera usar un ícono genérico o describirlo con texto */}
            <li><FaPhp /></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Bases de Datos',
      value: 'databases',
      content: (
        <div className="tab-content">
          <h2>Database Management</h2>
          <ul>
            <li><FaDatabase /><SiMysql /></li>
            <li><SiMongodb /></li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Otras Habilidades',
      value: 'other-skills',
      content: (
        <div className="tab-content">
          <h2>Other Skills</h2>
          <ul>
            <li><SiFlutter /></li>
            <li><FaPython /></li>
            <li><FaJava /></li> {/* Java */}
            <li><SiKotlin /></li> {/* Kotlin */}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="tabs-demo">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsDemo;
