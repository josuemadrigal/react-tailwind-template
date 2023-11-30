import { ProyectsItem } from "./ProyectsItem";
import { Container, Grid, SimpleGrid } from "@mantine/core";

const data = [
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
];

const Proyectos = () => {
  const proyectosItem = data.map((item) => (
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
          <Grid>{proyectosItem} </Grid>
        </SimpleGrid>
        <SimpleGrid
          cols={1}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <a
            href="/gestion-legislativa/#ley"
            className="flex justify-center  mt-4 rounded-3xl px-5 py-2.5 text-sm font-bold text-gray-100 border-2  border-gray-100/50 shadow-md hover:bg-gray-100/80 hover:text-green-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
          >
            Ver más
          </a>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Proyectos;
