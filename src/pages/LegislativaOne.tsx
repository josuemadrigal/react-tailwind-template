//import React from "react";
import { useParams } from "react-router-dom";
import { LegislativaItem } from "../components/LegislativaItem";
import { PageHeader } from "../components/PageHeader";
//import { link } from "fs";

const data = [
  {
    id: 1,
    link: "reconoce_artistico",
    image: "/legislativa/artistico.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL RECONOCE PÓSTUMAMENTE AL ESCULTOR Y PRODUCTOR DE OBJETOS DE ARTES UTILITARIOS EN METALES, JOSÉ IGNACIO MORALES EL ARTÍSTICO, POR SUS EXITOSOS APORTES AL ARTE Y CULTURA NACIONAL.",
    initiative: "04741-2020-2024-CD",
    status: "Aprobado.",
    body: "Esta importante resolución, la cual reconoce de manera póstuma, fue sometida con la finalidad de resaltar los aportes realizados por el señor José Ignacio Morales (EL ARTÍSTICO), ya que este gran artista puso en alto el nombre de la República Dominicana por todo el mundo con sus obras de artes en hierro forjado y reciclado, y sus trabajos por diversos lugares de Europa, Latinoamérica y Estados Unidos, los que le hicieron ganar fama mundial.",
    body2:
      "El Legislador estableció que 'El Artístico' contribuyo de manera muy importante en la formación de cientos de jóvenes y ciudadanos de escasos recursos, con progra- mas de formación personal, disciplina, teoría y práctica, creando así un espacio en el que estos pudieran aprender a realizar creatividades artísticas y soldaduras, además de estudiar una carrera técnica y trabajar a la vez, permitiéndoles así, tener una vía de desarrollo y aprendizaje, y de integrarse al sistema productivo nacional.",
  },
  {
    id: 2,
    link: "carcel_preventiva",
    image: "/legislativa/preventiva-la-romana.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN EL CUAL SOLICITA LA CONSTRUCCIÓN DE UNA NUEVA CÁRCEL PREVENTIVA PARA LA PROVINCIA DE LA ROMANA.",
    initiative: "05557-2020-2024-CD",
    status: "Aprobado.",
    body: "Nos motivamos a introducir esta iniciativa por la sobrepoblación existente en la misma, excediendo exorbitantemente la cantidad para la cual fue diseñada, por lo cual tiene alto nivel de hacinamiento que la convierten en inhumana, y a raíz de los hechos lamentables que han ocurrido en la cárcel preventiva de La Romana. El estado de esta cárcel pone en riesgo la integridad física y psicológica de los reclusos, que no cuentan con la garantía de los derechos fundamentales que le son inherentes.",
    body2:
      "Es por esto que entendemos que se hace necesaria la construcción de una nueva cárcel preventiva con capacidad para albergar una mayor cantidad de reclusos, en la cual se garanticen los derechos fundamentales de estos, su integridad física, psíquica y moral; y así, evitar el hacinamiento, los tratos inhumanos, indignos y que sucedan siniestros lamentables.",
  },
  {
    id: 3,
    link: "remodelacion_entrada_la_romana",
    image: "/legislativa/entrada-la-romana.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN EL CUAL SOLICITA INSTRUIR AL MINISTRO DE OBRAS PÚBLICAS Y COMUNICACIONES PARA REALIZAR LA REMODELACIÓN DE LA ENTRADA DE LA PROVINCIA LA ROMANA, UBICADA EN LA CARRETERA LA ROMANA - SAN PEDRO DE MACORÍS.",
    initiative: "05350-2020-2024-CD",
    status: "Aprobado",
    body: "Con esta resolución buscamos que La Romana tenga una entrada adecuada y moderna, digna de una ciudad turística; actualmente la entrada a la provincia se encuentra deteriorada, falta de mantenimiento, reparación, iluminación y señaliza- ción, lo que la ha convertido en una vía insegura, arrabalizada y no apta para una ciudad turística de las más importantes del país y la región.",
    body2:
      "La vía en la que se encuentra la entrada es de un alto transito, y de vital importancia para el desarrollo de las actividades la provincia y la región, por tanto, la reconstrucción de esta entrada contribuye a la circulación de los habitantes y facilita la logística de trasportación de turistas y los diferentes productos de consumo y comercialización. Para La Romana la reconstrucción de esta entrada es de prioridad, y contribuiría al desarrollo económico y turístico, y por igual a un tránsito seguro en el traslado de turistas, de mercancías y personas desde las diferentes comunidades.",
  },
  {
    id: 4,
    link: "bomberos_caleta",
    image: "/legislativa/bomberos-caleta.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SOLICITA AL PRESIDENTE DE LA REPÚBLICA, LA INSTALACIÓN DE UN CUERPO DE BOMBEROS EN EL DISTRITO MUNICIPAL CALETA, MUNICIPIO LA ROMANA.",
    initiative: "05406-2020-2024-CD",
    status: "Aprobado",
    body: "El Distrito Municipal de Caleta no cuenta con un cuerpo de Bomberos adecuado para responder sus emergencias, por lo que el Cuerpo de Bomberos del Municipio de La Romana es el que tiene que atenderlas, y este no cuenta con la capacidad para dar respuesta a todo el amplio territorio de la provincia en la que debe de atender las emergencias suscitadas.",
    body2:
      "Con la instalación de un Cuerpo de Bomberos en Caleta se podrían responder de manera más rápida y efectiva la emergencia que se pudieran presentar allí, y aumen- tar la capacidad de respuesta, que a la vez reduce los hechos lamentables. Además, es importante destacar que debido al desarrollo social del Distrito Munici- pal Caleta del Municipio La Romana, y a su carácter de vulnerabilidad, requiere con urgencia la instalación de un Cuerpo de Bomberos, por su importante crecimiento de habitantes y el desarrollo turístico que viene surgiendo en este Distrito Municipal, garantizando así la seguridad de las personas que habitan este Distrito.",
  },
  {
    id: 5,
    link: "pasaporte_romana",
    image: "/legislativa/pasaportes.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SOLICITA AL PRESIDENTE DE LA REPÚBLICA INSTRUIR AL DIRECTOR GENERAL DE PASAPORTES PONER EN FUNCIONAMIENTO UNA OFICINA DE PASAPORTES EN LA PROVINCIA LA ROMANA.",
    initiative: "05832-2020-2024-CD",
    status: "Aprobado",
    body: "Actualmente existe la necesidad de crear una oficina de Pasaportes para la provincia La Romana, ya que beneficiara y brindaría diversos servicios a los ciudadanos romanenses y de otras provincias de la región este, permitiendo así que se pueda obtener pasaportes de forma ágil, y sin tener que trasladarse a otra provincia o largas distancias, facilitando así la obtención de pasaportes y otros servicios.",
    body2: "",
  },
  {
    id: 6,
    link: "mercado_villa_hermosa",
    image: "/legislativa/mercado-villa-hermosa.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SOLICITA AL MINISTERIO DE OBRAS PÚBLICAS Y COMUNICACIONES LA CONSTRUCCIÓN DE UN MERCADO PÚBLICO EN EL MUNICIPIO VILLA HERMOSA, PROVINCIA LA ROMANA.",
    initiative: "05489-2020-2024-CD",
    status: "Aprobado",
    body: "El Municipio Villa Hermosa en los últimos años ha tenido un significativo y gran crecimiento demográfico, y es por esto por lo que solicitamos la construcción de un mercado público adecuado, con lo que se mejoraría el acceso a los productos alimenticios, y con ello la calidad de vida de los munícipes.",
    body2:
      "Con un mercado en Villa Hermosa se evita que sus ciudadanos tengan la obligación de trasladarse al mercado público ubicado en el municipio La Romana, ahorrando gastos adicionales de recursos y tiempo, además evitar el congestionamiento de este mercado municipal y de las vías públicas trasladándose de un Municipio a otro, y serviría para crear empleos, espacios de emprendimiento y comercialización en el municipio.",
  },
  {
    id: 7,
    link: "edificio_gubernamental",
    image: "/legislativa/edifico-gubernamental.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SOLICITA AL PRESIDENTE DE LA REPÚBLICA INSTRUIR AL MINISTRO DE OBRAS PÚBLICAS Y COMUNICACIONES (MOPC) REALIZAR LA CONSTRUCCIÓN DE UN EDIFICIO GUBERNAMENTAL PARA ALOJAR LAS OFICINAS Y ENTIDADES PÚBLICAS DE LA PROVINCIA LA ROMANA.",
    initiative: "05820-2020-2024-CD",
    status: "Aprobado",
    body: "El incremento demográfico de la provincia La Romana ha provocado que cada día aumente las demandas en las necesidades de los bienes y servicios que ofrecen las diferentes oficinas públicas, que entre ellas están: La Gobernación Provincial, Corporación del Acueducto y Alcantarillado de La Romana (COAAROM), Ministerio de la Mujer, Ministerio de la Juventud, Ministerio de Trabajo, Ministerio de Turismo, Medio de Ambiente, El Consejo Nacional para la Niñez y la Adolescencia (CONANI), Dirección General de Impuestos Internos (DGII), es por esto que favorable la construcción de este Edifico Gubernamental solicitado que beneficiaría a toda la población de la Romana.",
    body2: "",
  },
  {
    id: 8,
    link: "acueducto_villa_hermosa",
    image: "/legislativa/inapa-villa-hermosa.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN QUE SOLICITA INSTRUIR AL DIRECTOR DEL INSTITUTO NACIONAL DE AGUAS POTABLES Y ALCANTARILLADOS (INAPA) A LOS FINES DE REALIZAR UNA AMPLIACIÓN DEL ACUEDUCTO DEL MUNICIPIO VILLA HERMOSA, PROVINCIA LA ROMANA.",
    initiative: "05819-2020-2024-CD",
    status: "En Comisión",
    body: "Hoy en día el Municipio Villa Hermosa cuenta con una red de distribución que no llega una gran cantidad de sectores del municipio, y que sus dos tanques de almacenamiento de agua resultan insuficiente, debido a que el acueducto fue construido para suministrar agua potable a aproximadamente unos 40 mil habitantes; pero debido al alto crecimiento demográfico de este municipio que cuenta actualmente con una cantidad aproximada de 125 mil habitantes, estos tienen cada vez más una alta demanda de agua.",
    body2:
      "El crecimiento constante de Villa Hermosa ha hecho insuficiente el acueducto actual, impactando negativamente en el desarrollo de la vida y de todas las actividades económicas, sociales y culturales que realizan sus habitantes, por lo cual es importante realizar la ampliación del acueducto para mejorar el sistema de abastecimiento de agua potable para los habitantes de este municipio.",
  },
  {
    id: 9,
    link: "reconocimiento_central_romana",
    image: "/legislativa/cr-reconocimiento.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SE RECONOCE A LA COMPAÑÍA CENTRAL ROMANA CORPORATION, LTD., POR SUS 110 AÑOS DE FUNDACIÓN Y SUS GRANDES APORTES A LA REGIÓN ESTE Y AL PAÍS.",
    initiative: "06578-2020-2024-CD",
    status: "Enviado a comisión",
    body: "El Central Romana Corporation es una compañía que nos llena de orgullo, con 110 años de existencia, siendo durante mucho tiempo el mayor empleador del país, y con grandes y cuantiosas inversiones que a su vez permiten el desarrollo de nuestra gente, quienes encuentran espacios de empleos y desarrollo en el CR.",
    body2:
      "El Central es una de las compañías más grandes del país, y para La Romana ha desarrollado a través de sus años importantes programas para el desarrollo comunitario, con una responsabilidad social corporativa inmensa, abarcando los aspectos más esenciales en la vida y el bienestar de sus trabajadores y la sociedad; además, durante décadas ha ejecutado importantes acciones en materia de salud, educación, alimentación, vivienda y actividades deportivas; también ejecuta planes de sostenibilidad con el medioambiente a través de sus procesos agroindustriales. Es una empresa pionera en el área del turismo, producción de azúcar y zonas francas, además de su diversificación en las áreas de la química, ganado, procesadores de productos cárnicos y lácteos; producción de materiales de construcción y hierro, operación de puerto, aeropuerto, bienes raíces y la industria hotelera en el país.",
  },
  {
    id: 10,
    link: "liceo_caleta",
    image: "/legislativa/liceo-caleta.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN MEDIANTE EL CUAL SE SOLICITA AL PRESIDENTE DE LA REPÚBLICA DOMINICANA, LIC. LUIS RODOLFO ABINADER CORONA, CONSTRUIR UN LICEO TÉCNICO PROFESIONAL EN EL DISTRITO MUNICIPAL DE CALETA, PROVINCIA LA ROMANA.",
    initiative: "08646-2020-2024-CD",
    status: "Depositado",
    body: "La construcción y puesta en funcionamiento de un Liceo Técnico Profesional en Caleta, permitiría desarrollar jóvenes con formación académica especializados en el nivel técnico, brindando la oportunidad de que exista una generación de conocimiento técnico que facilite insertarse al campo laboral de forma temprana, como también brinda la oportunidad de desarrollar medianas y pequeñas empresas.",
    body2:
      "Teniendo en cuenta que la formación académica y técnica de nuestros ciudadanos son elementos determinantes para potenciar su desarrollo, y garantizar una mejor calidad de vida para las presentes y futuras generaciones, queremos que Caleta cuente con un centro educativo que permita la generación de jóvenes competentes y poseedores de los conocimientos necesarios y pertinentes para la transformación social y productiva.",
  },
  {
    id: 11,
    link: "UASD_romana",
    image: "/legislativa/uasd-romana.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SOLICITA AL PRESIDENTE DE LA REPÚBLICA LA CONSTRUCCIÓN DE UN RECINTO DE LA UNIVERSIDAD AUTÓNOMA DE SANTO DOMINGO (UASD) LA ROMANA.",
    initiative: "07190-2020-2024-CD",
    status: "Depositado",
    body: "Actualmente, la extensión de la UASD en La Romana se encuentra funcionando en un alojamiento para atletas, instalación que fue cedida provisionalmente por el Ministerio de Deportes, que su infraestructura no fue concebida para alojar un centro universitario, y que sus dimensiones y condiciones no son las adecuadas para que los estudiantes puedan recibir de forma eficaz el pan de enseñanza, ya que no poseen las condiciones que amerita un Centro de Formación Universitaria.",
    body2:
      "Para La Romana es de suma importancia tener un centro universitario que cuente con el espacio físico, número de aulas, y las condiciones correctas para ser un centro universitario, que permita la asistencia masiva de los jóvenes romanense, y a la vez un mayor plan curricular de carreras y materias disponibles.",
  },

  {
    id: 12,
    link: "proyecto_habitacional_guaymate",
    image: "/legislativa/vivienda-guaymate.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL RECOMIENDA AL PRESIDENTE DE LA REPÚBLICA INSTRUIR AL MINISTERIO DE LA VIVIENDA, HÁBITAT Y EDIFICACIONES (MIVHED) A LOS FINES DE QUE SE CONSTRUYA UN PROYECTO HABITACIONAL EN EL MUNICIPIO DE GUAYMATE, PROVINCIA LA ROMANA.",
    initiative: "07520-2020-2024-CD",
    status: "Depositado",
    body: "Guaymate es un pueblo con un constante crecimiento poblacional, y que tiene muchas familias de escasos recursos en su comunidad, que no cuentan con un techo propio, y que viven con condiciones precarias, lo que genera la necesidad de que pueda ser construido un complejo de habitantes que brinde la oportunidad a sus mu- nícipes de tener un techo propio, y dejar atrás las condiciones de hacinamiento, riesgo e insalubridad en la que viven hoy.",
    body2: "",
  },
  {
    id: 13,
    link: "puente-peatonal-km20",
    image: "/legislativa/puente-peatonal-20km.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SOLICITA AL PRESIDENTE DE LA REPÚBLICA INSTRUIR AL MINISTRO DE OBRAS PÚBLICAS Y COMUNICACIONES, PARA REALIZAR LA CONSTRUCCIÓN DE UN PUENTE PEATONAL EN EL KILÓMETRO 20 DE LA CARRETERA MELLA, DEL MUNICIPIO DE GUAYMATE, PROVINCIA LA ROMANA.",
    initiative: "07521-2020-2024-CD",
    status: "Depositado",
    body: "Los puentes peatonales son parte de la infraestructura vial que permite el cruce seguro de las personas a través de vías donde las velocidades vehiculares no permiten un cruce seguro, con esta obra los peatones no se pondrían en riesgo al cruzar la carretera mella ubicada en el municipio Guaymate, la cual presenta un flujo vehicular muy intenso y de alto riesgo, dificultando el paso de personas.",
    body2:
      "La ocurrencia frecuente de accidentes de estudiantes, envejecientes y niños por la falta de un puente peatonal para un cruce seguro de los ciudadanos, hace que sea necesaria la construcción de este puente peatonal, que permitiría que las personas puedan circular de manera segura, y así evitar accidentes o situaciones que pongan en peligro sus vidas.",
  },
  {
    id: 14,
    link: "liceo_guaymate",
    image: "/legislativa/liceo-guaymate.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SOLICITA AL PRESIDENTE DE LA REPÚBLICA INSTRUIR A LOS MINISTERIOS DE EDUCACIÓN (MINERD) Y DE LA VIVIENDA, HÁBITAT Y EDIFICACIONES (MIVHED) PARA REALIZAR LA CONSTRUCCIÓN DE UN LICEO POLITÉCNICO EN EL MUNICIPIO GUAYMATE, PROVINCIA LA ROMANA.",
    initiative: "07522-2020-2024-CD",
    status: "Depositado",
    body: "Ejecutar y priorizar políticas y programas de inversión pública en obras sociales y de infraestructura para el bienestar de la población es un deber fundamental del gobierno, y en esa vertiente, los habitantes del municipio Guaymate, necesitan que las autoridades gubernamentales realicen la construcción de un Politécnico en el que los jóvenes reciban la capacitación, y que les permita integrarse de manera más eficiente en el mercado laboral en la provincia La Romana.",
    body2:
      "El crecimiento vertiginoso de la comunidad estudiantil del municipio Guaymate necesita un politécnico para su formación, ya que actualmente no cuenta con los mecanismos necesarios para garantizar la educación media, lo que hace importante la construcción de un liceo politécnico.",
  },
  {
    id: 15,
    link: "caid",
    image: "/legislativa/caid-guaymate.jpeg",
    title:
      "PROYECTO DE RESOLUCIÓN DE LA CÁMARA DE DIPUTADOS MEDIANTE EL CUAL SOLICITA AL PRESIDENTE DE LA REPÚBLICA CONSIGNAR UNA PARTIDA EN LA LEY DE PRESUPUESTO GENERAL DEL ESTADO PARA EL AÑO 2023, PARA QUE SE CONSTRUYA E INSTALE UN CENTRO DE ATENCIÓN INTEGRAL PARA LA DISCAPACIDAD (CAID) EN LA PROVINCIA LA ROMANA.",
    initiative: "08326-2020-2024-CD",
    status: "Depositado",
    body: "Los centros de atención integral para la discapacidad brindan servicios de salud que garantizan los derechos de las personas a tener un desarrollo óptimo y de mejor eficacia, promoviendo educación de calidad y estimulación oportuna, con el propósito de favorecer el desarrollo físico, afectivo y social, trabajando de la mano con las familias, a quienes se les apoya a mejorar sus capacidades para el cuidado integral de sus hijos e hijas con condiciones especiales.",
    body2:
      "En La Romana se hace necesario la instalación de un centro como el CAID, capaz de brindar un servicio integral de calidad en cuanto a la evaluación, diagnóstico y proceso terapéutico de los niños con discapacidades, con el fin de alcanzar el mayor desarrollo posible de sus potencialidades, para lograr una efectiva inclusión social.",
  },
];

const LegislativaOne = () => {
  const { link } = useParams<{ link: string }>();
  //const linkBuscado = "/reconoce-artistico";
  const datosFiltrados = data.filter((item) => item.link === link);

  return (
    <div>
      <PageHeader title="Proyecto de Resolución" image="" />
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

export default LegislativaOne;
