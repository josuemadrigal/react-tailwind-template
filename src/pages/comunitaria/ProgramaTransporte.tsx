import { Container, Grid, SimpleGrid } from "@mantine/core";
import { PageHeader } from "../../components/PageHeader";

const ProgramaTransporte = () => {
  return (
    <>
      <PageHeader title="Gestión Comunitaria" image="" />
      <Container my="md" className="mt-20">
        <SimpleGrid
          cols={2}
          spacing="md"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          <img className="rounded-lg" src="/pp.png" />

          <Grid gutter="md">
            <Grid.Col>
              {/* <h2 className="text-lg font-medium">Biografia</h2> */}
              <h2 className="text-2xl font-black pb-2 uppercase text-green-950">
                Programa de Transporte
              </h2>
              <p className="text-base leading-8 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-500 first-letter:mr-3 first-letter:float-left mb-8">
                Mediante nuestro programa de trasporte gratuito, en el cual
                tenemos al servicio de la comunidad autobús y camión,
                facilitamos el desplazamiento de ciudadanos y organizaciones a
                sus actividades y momentos importantes.
              </p>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ProgramaTransporte;
