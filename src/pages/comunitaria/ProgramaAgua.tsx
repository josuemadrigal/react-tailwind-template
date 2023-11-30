import { Container, Grid, SimpleGrid } from "@mantine/core";
import { PageHeader } from "../../components/PageHeader";

const ProgramaAgua = () => {
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
                Programa de Agua Potable
              </h2>
              <p className="text-base leading-8 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-500 first-letter:mr-3 first-letter:float-left mb-8">
                Con el que llevamos agua gratuita a todos los sectores de la
                provincia, llevando el preciado liquido a los hogares y
                comunidades que no tienen agua potable, y muchos que no tienen
                los recursos económicos para su adquisición constante, causando
                un impacto en la salud pública, pues el acceso a agua limpia y
                segura es fundamental para prevenir y reducir los riesgos de
                enfermedades mejorando así la salud general de la población, y
                que tengamos una mejor condición de salubridad.
              </p>
            </Grid.Col>
          </Grid>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ProgramaAgua;
