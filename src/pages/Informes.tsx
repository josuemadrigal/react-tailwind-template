import { Container, Grid, SimpleGrid } from "@mantine/core";

import { PageHeader } from "../components/PageHeader";
import PDFButton from "../components/PDFButton";

const data = [
  {
    image: "/gestion-2022.jpg",
    pdfUrl: "/Informe-EE-22.pdf",
    title: "2020-21 / 2021-22",
  },
  {
    image: "/gestion-2023.jpg",
    pdfUrl: "/Informe-EE-23.pdf",
    title: "2022 - 2023",
  },
];

const Informes = () => {
  //const pdfUrl = "/Informe-EE-23.pdf";

  const InformeItem = data.map((item) => (
    <Grid.Col xs={12} sm={6} md={4} lg={3}>
      <PDFButton pdfUrl={item.pdfUrl} title={item.title} image={item.image} />
    </Grid.Col>
  ));
  return (
    <>
      <PageHeader title="Informes de Gestión" image="" />

      <div className="container px-5 py-2 mx-auto">
        <div className=" py-10 w-full max-w-full">
          <Container my="md">
            <SimpleGrid
              cols={1}
              spacing="md"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <Grid>{InformeItem} </Grid>
            </SimpleGrid>
            <SimpleGrid
              cols={1}
              spacing="md"
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            ></SimpleGrid>
            {/* <div className="flex justify-center">
              <a
                href="/"
                className="flex justify-center w-72 mb-6 rounded-3xl px-5 py-2.5 text-sm font-bold bg-greenEduard text-gray-100 border-2 border-lime-100/50 shadow-md hover:bg-green-900 hover:text-gray-100 "
              >
                Ir a la página de inicio
              </a>
            </div> */}
          </Container>
        </div>
      </div>
    </>
  );
};

export default Informes;
