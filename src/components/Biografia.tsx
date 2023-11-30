import {
  Container,
  Grid,
  SimpleGrid,
  //   Skeleton,
  //   useMantineTheme,
  //   rem,
} from "@mantine/core";

//const PRIMARY_COL_HEIGHT = rem(300);

export function Biografia() {
  //const theme = useMantineTheme();
  //const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container id="biografia" my="md" className="mt-20 mb-20">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <img className="rounded-lg" src="/pp.png" />

        <Grid gutter="md">
          <Grid.Col>
            <h2 className="text-lg font-medium">Biografía</h2>
            <h2 className="text-2xl font-black pb-2 uppercase text-green-950">
              Eduard Espiritusanto
            </h2>
            <p className="text-base leading-8 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-500 first-letter:mr-3 first-letter:float-left mb-8">
              Empresario y político romanense, electo Diputado en las elecciones
              congresuales y presidenciales del 2020, convirtiéndose en el
              primer legislador electo de su provincia por el Partido Fuerza del
              Pueblo, organización de la cual es miembro de la Dirección
              Central, y Secretario General en La Romana.{" "}
            </p>
            <p className="text-base leading-8 mb-8">
              Nacido el 22 de julio de 1974, y está casado con la señora Wendy
              Almonte de Espiritusanto, y padre de Edgar Alexis, Ediana Belency,
              Endy Eduardo, y Wendalys.
            </p>
            <a
              href="/biografia"
              className="rounded-3xl px-5 py-2.5 text-sm font-bold text-green-900  border-2  border-lime-600/50 shadow-md hover:bg-lime-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
            >
              Seguir leyendo
            </a>
          </Grid.Col>
          {/* <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton
              height={SECONDARY_COL_HEIGHT}
              radius="md"
              animate={false}
            />
          </Grid.Col> */}
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
