import { EventsItems } from "./EventsItems";
import { Container, Grid, SimpleGrid } from "@mantine/core";

const data = [
  {
    key: 1,
    link: "/#",
    image: "/madres.jpeg",
    title: "Celebración Dia de las Madres",
    author: "Autor",
    views: 35,
    comments: 5,
  },
  {
    key: 1,
    link: "/#",
    image: "/mujer.jpeg",
    title: "Celebración Dia de la Mujer",
    author: "Autor",
    views: 23,
    comments: 5,
  },
  {
    key: 1,
    link: "/#",
    image: "/padres.jpeg",
    title: "Celebración Dia de los Padres",
    author: "Autor",
    views: 14,
    comments: 5,
  },
];

const EventsRecent = () => {
  const proyectosItem = data.map((item) => (
    <Grid.Col xs={12} sm={6} md={4} lg={3}>
      <EventsItems
        key={item.key}
        link={item.link}
        image={item.image}
        title={item.title}
        author={item.author}
        views={item.views}
        comments={item.comments}
      />
    </Grid.Col>
  ));

  return (
    <div className="mt-0 py-10 bg-[#63b839] w-full max-w-full">
      <Container my="md">
        <SimpleGrid
          cols={1}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <h1 className="flex text-xl font-extrabold uppercase justify-center text-white">
            Actividades Recientes
          </h1>
          <Grid gutter="md">{proyectosItem} </Grid>
        </SimpleGrid>
        <SimpleGrid
          cols={1}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <a
            href="/#"
            className="flex justify-center  mt-4 rounded-3xl px-5 py-2.5 text-sm font-bold text-gray-100 border-2  border-gray-100/50 shadow-md hover:bg-gray-100/80 hover:text-green-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
          >
            Ver más
          </a>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default EventsRecent;
