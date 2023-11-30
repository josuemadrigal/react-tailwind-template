import { Container, Grid, SimpleGrid } from "@mantine/core";
import { PageHeader } from "../components/PageHeader";

const BienvenidaCompleta = () => {
  return (
    <>
      <PageHeader title="Bienvenida" image="" />
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
                BIENVENIDOS/AS
              </h2>
              <p className="text-base leading-8 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-500 first-letter:mr-3 first-letter:float-left mb-8">
                Bienvenidos y bienvenidas a este portal web oficial de Eduard
                Espiritusanto, Diputado por la provincia de La Romana, el cual
                representa un paso importante hacia la transparencia, la
                participación ciudadana y la modernización de nuestra labor
                legislativa, y que ha sido creado para dar un mayor acceso a los
                munícipes a nuestra labor, a conocer sobre el Congreso Nacional
                y sus funciones.
              </p>
              <p className="text-base leading-8 mb-8">
                Hoy, más que nunca, vivimos en una era digital donde la
                información fluye de manera rápida y accesible; la creación de
                esta página es un reflejo de nuestro compromiso con la
                transparencia, y también un medio para fortalecer la conexión
                entre nosotros como legislador, y a quienes servimos: los
                ciudadanos.
              </p>
              <p className="text-base leading-8 mb-8">
                Esta plataforma online es una herramienta fundamental para
                informar sobre nuestras actividades legislativas; los proyectos
                de ley, las resoluciones, los debates, nuestras participaciones
                en el hemiciclo, nuestra labor social, y los acontecimientos que
                debe de conocer nuestro pueblo que representamos.
              </p>
              <p className="text-base leading-8 mb-8">
                Queremos que cada ciudadano tenga acceso fácil y rápido a la
                información de todo lo que hacemos, y que puedan seguir de cerca
                el proceso de toma de decisiones.
              </p>
              <p className="text-base leading-8 mb-8">
                Por muchos años ha realizado una gran labor social a favor de su
                provincia, realizando grandes aportes a las más importantes
                causas e instituciones, y a través de la fundación Eduard
                Espiritusanto, mediante la cual ha brindado su mano amiga los
                más necesitados y a las mejores obras.
              </p>
              <p className="text-base leading-8 mb-8">
                A través de esta página web, también buscaremos fomentar la
                participación ciudadana. Queremos que ustedes, los ciudadanos,
                puedan expresar sus opiniones, hacer preguntas y participar
                activamente en el proceso legislativo. Creemos en la importancia
                de escuchar sus voces y considerar sus perspectivas en la toma
                de decisiones que impactan en sus vidas diarias.
              </p>
              <p className="text-base font-bold italic leading-8 mb-8">
                ¡Que esta página web sea un instrumento poderoso para el
                bienestar de todos!
              </p>
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
    </>
  );
};

export default BienvenidaCompleta;
