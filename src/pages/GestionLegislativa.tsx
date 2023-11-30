import { PageHeader } from "../components/PageHeader";
import { ProyectsItem } from "../components/ProyectsItem";
import { Container, Grid, SimpleGrid } from "@mantine/core";
import fotoEduard from "/obelisco.avif";

const dataResolucion = [
  {
    className: "",
    image: "/legislativa/artistico.jpeg",
    link: "/proyecto-de-resolucion/reconoce_artistico",
    title:
      "RECONOCE PÓSTUMAMENTE AL ESCULTOR Y PRODUCTOR DE OBJETOS DE ARTES UTILITARIOS EN METALES, JOSÉ IGNACIO MORALES ",
    description:
      "Esta importante resolución, la cual reconoce de manera póstuma, fue sometida con la finalidad de resaltar los aportes realizados por el señor José Ignacio Morales (EL ARTÍSTICO)",
    rating: "Aprobado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/preventiva-la-romana.jpeg",
    link: "/proyecto-de-resolucion/carcel_preventiva",
    title:
      "CONSTRUCCIÓN DE UNA NUEVA CÁRCEL PREVENTIVA PARA LA PROVINCIA DE LA ROMANA",
    description:
      "Nos motivamos a introducir esta iniciativa por la sobrepoblación existente en la misma, excediendo exorbitantemente la cantidad para la cual fue diseñada, por lo cual tiene alto nivel de hacinamiento que la convierten en inhumana, ",
    rating: "Aprobado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/entrada-la-romana.jpeg",
    link: "/proyecto-de-resolucion/remodelacion_entrada_la_romana",
    title: "REALIZAR LA REMODELACIÓN DE LA ENTRADA DE LA PROVINCIA LA ROMANA",
    description:
      "Con esta resolución buscamos que La Romana tenga una entrada adecuada y moderna, digna de una ciudad turística; actualmente la entrada a la provincia se encuentra deteriorada, falta de mantenimiento, reparación, iluminación y señalización, lo que la ha convertido en una vía insegura, arrabalizada y no apta para una ciudad turística de las más importantes del país y la región.",
    rating: "Aprobado",
    author: { name: "Autor", image: "/foto-banner.jpeg" },
  },

  {
    className: "",
    image: "/legislativa/bomberos-caleta.jpeg",
    link: "/proyecto-de-resolucion/bomberos_caleta",
    title:
      "INSTALACIÓN DE UN CUERPO DE BOMBEROS EN EL DISTRITO MUNICIPAL CALETA, MUNICIPIO LA ROMANA",
    description:
      "El Distrito Municipal de Caleta no cuenta con un cuerpo de Bomberos adecuado para responder sus emergencias, por lo que el Cuerpo de Bomberos del Municipio de La Romana es el que tiene que atenderlas, y este no cuenta con la capacidad para dar respuesta a todo el amplio territorio de la provincia en la que debe de atender las emergencias suscitadas.",
    rating: "Aprobado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/pasaportes.jpeg",
    link: "/proyecto-de-resolucion/pasaportes",
    title:
      "INSTRUIR AL DIRECTOR GENERAL DE PASAPORTES PONER EN FUNCIONAMIENTO UNA OFICINA DE PASAPORTES EN LA PROVINCIA LA ROMANA.",
    description:
      "Actualmente existe la necesidad de crear una oficina de Pasaportes para la provincia La Romana, ya que beneficiara y brindaría diversos servicios a los ciudadanos romanenses y de otras provincias de la región este, permitiendo así que se pueda obtener pasaportes de forma ágil, y sin tener que trasladarse a otra provincia o largas distan- cias, facilitando así la obtención de pasaportes y otros servicios.",
    rating: "Aprobado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/mercado-villa-hermosa.jpeg",
    link: "/proyecto-de-resolucion/mercado_villa_hermosa",
    title:
      "CONSTRUCCIÓN DE UN MERCADO PÚBLICO EN EL MUNICIPIO VILLA HERMOSA, PROVINCIA LA ROMANA",
    description:
      "El Municipio Villa Hermosa en los últimos años ha tenido un significativo y gran crecimiento demográfico, y es por esto por lo que solicitamos la construcción de un mercado público adecuado, con lo que se mejoraría el acceso a los productos alimenticios, y con ello la calidad de vida de los munícipes.",
    rating: "En comisión",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/edifico-gubernamental.jpeg",
    link: "/proyecto-de-resolucion/edificio_gubernamental",
    title:
      "REALIZAR LA CONSTRUCCIÓN DE UN EDIFICIO GUBERNAMENTAL PARA ALOJAR LAS OFICINAS Y ENTIDADES PÚBLICAS DE LA PROVINCIA LA ROMANA",
    description:
      "El incremento demográfico de la provincia La Romana ha provocado que cada día aumente las demandas en las necesidades de los bienes y servicios que ofrecen las diferentes oficinas públicas, que entre ellas están: La Gobernación Provincial, Corporación del Acueducto",
    rating: "En comisión",
    author: { name: "Autor", image: "/foto-banner.jpeg" },
  },

  {
    className: "",
    image: "/legislativa/inapa-villa-hermosa.jpeg",
    link: "/proyecto-de-resolucion/acueducto_villa_hermosa",
    title:
      "REALIZAR UNA AMPLIACIÓN DEL ACUEDUCTO DEL MUNICIPIO VILLA HERMOSA, PROVINCIA LA ROMANA",
    description:
      "Hoy en día el Municipio Villa Hermosa cuenta con una red de distribución que no llega una gran cantidad de sectores del municipio, y que sus dos tanques de almacenamiento de agua resultan insuficiente, debido a que el acueducto fue construido para suministrar agua potable a aproximadamente unos 40 mil habitantes",
    rating: "En comisión",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/cr-reconocimiento.jpeg",
    link: "/proyecto-de-resolucion/reconocimiento_central_romana",
    title:
      "RECONOCIMIENTO A LA COMPAÑÍA CENTRAL ROMANA CORPORATION, LTD., POR SUS 110 AÑOS DE FUNDACIÓN",
    description:
      "El Central Romana Corporation es una compañía que nos llena de orgullo, con 110 años de existencia, siendo durante mucho tiempo el mayor empleador del país, y con grandes y cuantiosas inversiones que a su vez permiten el desarrollo de nuestra gente, quienes encuentran espacios de empleos y desarrollo en el CR.",
    rating: "En comisión",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/liceo-caleta.jpeg",
    link: "/proyecto-de-resolucion/liceo_caleta",
    title:
      "CONSTRUIR UN LICEO TÉCNICO PROFESIONAL EN EL DISTRITO MUNICIPAL DE CALETA, PROVINCIA LA ROMANA",
    description:
      "La construcción y puesta en funcionamiento de un Liceo Técnico Profesional en Caleta, permitiría desarrollar jóvenes con formación académica especializados en el nivel técnico, brindando la oportunidad de que exista una generación de conocimiento técnico que facilite insertarse al campo laboral de forma temprana, como también brinda la oportunidad de desarrollar medianas y pequeñas empresas.",
    rating: "Depositado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/uasd-romana.jpeg",
    link: "/proyecto-de-resolucion/UASD_romana",
    title:
      "CONSTRUCCIÓN DE UN RECINTO DE LA UNIVERSIDAD AUTÓNOMA DE SANTO DOMINGO (UASD)-LA ROMANA.",
    description:
      "Actualmente, la extensión de la UASD en La Romana se encuentra funcionando en un alojamiento para atletas, instalación que fue cedida provisionalmente por el Ministerio de Deportes, que su infraestructura no fue concebida para alojar un centro universitario, ",
    rating: "Depositado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/vivienda-guaymate.jpeg",
    link: "/proyecto-de-resolucion/proyecto_habitacional_guaymate",
    title:
      "PROYECTO HABITACIONAL EN EL MUNICIPIO DE GUAYMATE, PROVINCIA LA ROMANA",
    description:
      "Guaymate es un pueblo con un constante crecimiento poblacional, y que tiene muchas familias de escasos recursos en su comunidad, que no cuentan con un techo propio, y que viven con condiciones precarias, lo que genera la necesidad de que pueda ser construido un complejo de habitantes que brinde la oportunidad a sus mu- nícipes de tener un techo propio,",
    rating: "Depositado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/puente-peatonal-20km.jpeg",
    link: "/proyecto-de-resolucion/puente-peatonal-km20",
    title:
      "REALIZAR LA CONSTRUCCIÓN DE UN PUENTE PEATONAL EN EL KILÓMETRO 20 DE LA CARRETERA MELLA, DEL MUNICIPIO DE GUAYMATE, PROVINCIA LA ROMANA.",
    description:
      "Los puentes peatonales son parte de la infraestructura vial que permite el cruce seguro de las personas a través de vías donde las velocidades vehiculares no permiten un cruce seguro, con esta obra los peatones no se pondrían en riesgo al cruzar la carretera mella ubicada en el municipio Guaymate,",
    rating: "Depositado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/liceo-guaymate.jpeg",
    link: "/proyecto-de-resolucion/liceo_guaymate",
    title:
      "CONSTRUCCIÓN DE UN LICEO POLITÉCNICO EN EL MUNICIPIO GUAYMATE, PROVINCIA LA ROMANA.",
    description:
      "Ejecutar y priorizar políticas y programas de inversión pública en obras sociales y de infraestructura para el bienestar de la población es un deber fundamental del gobierno, y en esa vertiente, los habitantes del municipio Guaymate, ",
    rating: "Depositado",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/caid-guaymate.jpeg",
    link: "/proyecto-de-resolucion/caid",
    title:
      "CONSIGNAR UNA PARTIDA EN LA LEY DE PRESUPUESTO GENERAL DEL ESTADO PARA EL AÑO 2023, PARA QUE SE CONSTRUYA E INSTALE UN CENTRO DE ATENCIÓN INTEGRAL PARA LA DISCAPACIDAD (CAID) EN LA PROVINCIA LA ROMANA.",
    description:
      "Los centros de atención integral para la discapacidad brindan servicios de salud que garantizan los derechos de las personas a tener un desarrollo óptimo y de mejor eficacia, promoviendo educación de calidad y estimulación oportuna, con el",
    rating: "Depositado",
    author: { name: "Autor", image: "/pp.png" },
  },
];

const dataLey = [
  {
    className: "",
    image: "/legislativa/ley/cenatox.jpeg",
    link: "/proyecto-de-ley/centro_nacional_de_toxicologia",
    title:
      "PROYECTO DE LEY QUE CREA EL CENTRO NACIONAL DE TOXICOLOGÍA DE LA REPÚBLICA DOMINICANA (CENATOX).",
    description:
      "A raíz del incremento de intoxicaciones y fallecidos en los últimos años por consumo de bebidas adulteradas, se hace sumamente necesario que el país cuente con un centro toxicológico que haga los análisis e investigaciones técnicas y científicamente que puedan arrojar el motivo de las intoxicaciones, ",
    rating: "En comisión",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/ley/casas-acogida.jpeg",
    link: "/proyecto-de-ley/casa_de_acogida",
    title:
      "PROYECTO DE LEY QUE CREA EN TODO EL TERRITORIO NACIONAL LAS CASAS DE ACOGIDAS PARA PACIENTES DE CÁNCER.",
    description:
      "Es necesario para el país contar con casas de acogidas para personas que padezcan de cáncer y que requieren de estar en un lugar donde reciban atenciones sumamen- te especializadas por lo delicado de su estado de salud.",
    rating: "En comisión",
    author: { name: "Autor", image: "/pp.png" },
  },
  {
    className: "",
    image: "/legislativa/ley/eduard-proyectos.jpeg",
    link: "/proyecto-de-ley/proyectos-y-resoluciones-como-cooproponente",
    title:
      "PROYECTOS DE LEYES Y RESOLUCIONES EN EL CUAL EL DIPUTADO EDUARD ESPÍRITUSANTO, PARTICIPA COMO COOPROPONENTE.",
    description:
      "(10) 1- Proyecto de ley que crea el museo artístico, cultural y político, Juan de Dios Ventura Soriano (Johnny Ventura).      ",
    rating: "En comisión",
    author: { name: "Autor", image: "/pp.png" },
  },
];

const GestionLegislativa = () => {
  const proyectosItem = dataResolucion.map((item) => (
    <Grid.Col xs={12} sm={6} md={4} lg={3}>
      <ProyectsItem
        className=""
        image={item.image}
        link={item.link}
        title={item.title}
        description={item.description}
        rating={item.rating}
        author={{ name: item.author.name, image: item.author.image }}
      />
    </Grid.Col>
  ));

  const proyectoLeyItem = dataLey.map((item) => (
    <Grid.Col xs={12} sm={6} md={4} lg={3}>
      <ProyectsItem
        className=""
        image={item.image}
        link={item.link}
        title={item.title}
        description={item.description}
        rating={item.rating}
        author={{ name: item.author.name, image: item.author.image }}
      />
    </Grid.Col>
  ));

  return (
    <>
      <PageHeader title="Gestión Legislativa" image="" />
      <div className=" py-10  w-full max-w-full">
        <Container my="md">
          <SimpleGrid
            cols={2}
            spacing="xl"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Grid className="flex">
              <h1 className="flex mb-0 text-xl font-extrabold text-green-950">
                PROYECTOS DE RESOLUCIÓN
              </h1>
              <p className="mt-5">
                Los proyectos de resolución son documentos formales que se
                utilizan en entornos gubernamentales, legislativos o de toma de
                decisiones para proponer, discutir y aprobar acciones, leyes o
                regulaciones. Estos proyectos pueden variar en naturaleza y
                alcance, dependiendo de la organización y el contexto.
              </p>
            </Grid>
            <Grid>
              <img src={fotoEduard} className="rounded-lg" />
            </Grid>
          </SimpleGrid>
        </Container>
      </div>
      <div className=" py-10 bg-green-950 w-full max-w-full">
        <Container my="md">
          <SimpleGrid
            cols={1}
            spacing="md"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <h1 className="flex text-xl font-extrabold justify-center text-white">
              PROYECTOS DE RESOLUCIÓN
            </h1>
            <Grid id="ley">{proyectosItem} </Grid>
          </SimpleGrid>
        </Container>
      </div>
      <div className=" py-10 bg-green-100 w-full max-w-full">
        <Container my="md">
          <SimpleGrid
            cols={1}
            spacing="md"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <h1 className="flex text-xl font-extrabold justify-center text-green-950">
              PROYECTOS DE LEY
            </h1>
            <Grid>{proyectoLeyItem} </Grid>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};

export default GestionLegislativa;
