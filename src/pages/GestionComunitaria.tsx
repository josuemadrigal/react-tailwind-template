import { Container, Grid, SimpleGrid } from "@mantine/core";
import fotoEduard from "/obelisco.avif";
import { PageHeader } from "../components/PageHeader";

const GestionComunitaria = () => {
  return (
    <>
      <PageHeader title="Gestión Comunitaria" image="" />
      <div className=" py-10  w-full max-w-full">
        <Container my="md">
          <SimpleGrid
            cols={2}
            spacing="xl"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Grid className="flex">
              <h1 className="flex mb-0 text-xl font-extrabold text-green-950">
                -
              </h1>
              <p className="mt-5">
                Realizamos una labor social constante con las comunidades y
                ciudadanos que lo necesitan, impulsando a que tengan salud,
                educación, e inclusión, y es precisamente lo que hacemos a
                través de nuestros programas sociales que beneficial a La
                Romana, mejorando así la calidad de vida de su gente, con el
                objetivo de provocar cambios y mejoras realmente efectivas en
                sus vidas, proporcionarles aquellas herramientas y conocimientos
                adecuados que les permitan tener un mejor bienestar.
              </p>
            </Grid>
            <Grid>
              <img src={fotoEduard} className="rounded-lg" />
            </Grid>
          </SimpleGrid>
        </Container>
      </div>
    </>
  );
};

export default GestionComunitaria;
