//import React from "react";
import { useParams } from "react-router-dom";
import { LegislativaItem } from "../components/LegislativaItem";
import { PageHeader } from "../components/PageHeader";
//import { link } from "fs";

const dataLey = [
  {
    id: 1,
    link: "centro_nacional_de_toxicologia",
    image: "/legislativa/ley/cenatox.jpeg",
    title:
      "PROYECTO DE LEY QUE CREA EL CENTRO NACIONAL DE TOXICOLOGÍA DE LA REPÚBLICA DOMINICANA (CENATOX).",
    initiative: "08585-2020-2024-CD",
    status: "Enviado a comisión",
    body: "Araíz del incremento de intoxicaciones y fallecidos en los últimos años por consumo de bebidas adulteradas, se hace sumamente necesario que el país cuente con un centro toxicológico que haga los análisis e investigaciones técnicas y científicamente que puedan arrojar el motivo de las intoxicaciones, y que colabore a la persecución de los crímenes y delitos derivados de la adulteración de productos.",
    body2:
      "Además, esta institución puede servir como Centro de Información y Capacitación, que alerte y mantenga al tanto a la población, los profesionales médicos, centros de atención de salud públicos y privados, con material informativo, boletines y audiovisuales, con un servicio permanente y sostenido a la población sobre la toxicidad de productos, especies, sustancias químicas, venenos, animales ponzoñosos, medicamentos, plantas, sus efectos dañinos a la salud humana y sus antídotos.",
  },
  {
    id: 2,
    link: "casa_de_acogida",
    image: "/legislativa/ley/casas-acogida.jpeg",
    title:
      "PROYECTO DE LEY QUE CREA EN TODO EL TERRITORIO NACIONAL LAS CASAS DE ACOGIDAS PARA PACIENTES DE CÁNCER.",
    initiative: "08159-2020-2024-CD",
    status: "Enviado a Comisión",
    body: "Es necesario para el país contar con casas de acogidas para personas que padezcan de cáncer y que requieren de estar en un lugar donde reciban atenciones sumamente especializadas por lo delicado de su estado de salud. Actualmente, los hospitales oncológicos del país no disponen del número de camas suficientes para atender a los pacientes de cáncer terminal y a los detectados que se encuentran en tratamiento, por lo que en muchas ocasiones tienen que suspender las operaciones médicas agendadas, poniendo en riesgo la salud de la gente.",
    body2:
      "En La Romana se hace necesario la instalación de un centro como el CAID, capaz de brindar un servicio integral de calidad en cuanto a la evaluación, diagnóstico y proceso terapéutico de los niños con discapacidades, con el fin de alcanzar el mayor desarrollo posible de sus potencialidades, para lograr una efectiva inclusión social.",
  },
  {
    id: 2,
    link: "proyectos-y-resoluciones-como-cooproponente",
    image: "/legislativa/ley/eduard-proyectos.jpeg",
    title:
      "PROYECTOS DE LEYES Y RESOLUCIONES EN EL CUAL EL DIPUTADO EDUARD ESPÍRITUSANTO, PARTICIPA COMO COOPROPONENTE.",
    initiative: "",
    status: "",
    body: "1- Proyecto de ley que crea el museo artístico, cultural y político, Juan de Dios Ventura Soriano (Johnny Ventura).",
    body2: "",
  },
];

const LegislativaLeyOne = () => {
  const { link } = useParams<{ link: string }>();
  //const linkBuscado = "/reconoce-artistico";
  const datosFiltrados = dataLey.filter((item) => item.link === link);

  return (
    <div>
      <PageHeader title="Proyecto de Ley" image="" />
      {datosFiltrados.map((item) => (
        <LegislativaItem
          key={item.id}
          link={item.link}
          image={item.image}
          title={item.title}
          initiative={item.initiative}
          status={item.status}
          body={item.body}
          body2={item.body2}
        />
      ))}
    </div>
  );
};

export default LegislativaLeyOne;
