import { Container, Grid, SimpleGrid } from "@mantine/core";
import { PageHeader } from "../components/PageHeader";

const Biografia = () => {
  return (
    <>
      <PageHeader title="Biografía" image="" />
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
                Eduard Espiritusanto
              </h2>
              <p className="text-base leading-8 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-500 first-letter:mr-3 first-letter:float-left mb-8">
                Empresario y político romanense, electo Diputado en las
                elecciones congresuales y presidenciales del 2020,
                convirtiéndose en el primer legislador electo de su provincia
                por el Partido Fuerza del Pueblo, organización de la cual es
                miembro de la Dirección Central, y Secretario General en La
                Romana.{" "}
              </p>
              <p className="text-base leading-8 mb-8">
                Nacido el 22 de julio de 1974, y está casado con la señora Wendy
                Almonte de Espiritusanto, y padre de Edgar Alexis, Ediana
                Belency, Endy Eduardo, y Wendalys.
              </p>
              <p className="text-base leading-8 mb-8">
                Ha realizado diversos estudios técnicos en Formación
                Inmobiliaria de Ejecutivo de Ventas, Administración de Empresas,
                Administración Pública, Derecho Parlamentario y Técnica
                Legislativa, Gerencia de Proyectos, Gerencia Política y Gestión
                de Gobierno.
              </p>
              <p className="text-base leading-8 mb-8">
                Decide iniciar en la política al conocer las necesidades de su
                provincia, tomando la iniciativa de postularse como legislador,
                para representar, legislar y fiscalizar a favor del país y de La
                Romana, alcanzando la Diputación en las elecciones del 2020 con
                un amplio respaldo de sus electores.
              </p>
              <p className="text-base leading-8 mb-8">
                Por muchos años ha realizado una gran labor social a favor de su
                provincia, realizando grandes aportes a las más importantes
                causas e instituciones, y a través de la fundación Eduard
                Espiritusanto, mediante la cual ha brindado su mano amiga los
                más necesitados y a las mejores obras.
              </p>
              <p className="text-base leading-8 mb-8">
                Espiritusanto es presidente de la Comisión Permanente de Deuda
                Pública y Activos Financiero en la Cámara de Diputados, y ha
                sometido relevantes proyectos de leyes, resoluciones, y una
                preponderante acción de representación, para el bienestar y
                desarrollo de su provincia y el país.
              </p>
              <p className="text-base leading-8 mb-8">
                Como empresario ha tenido una formidable y exitosa trayectoria,
                iniciando a muy temprana edad en el mundo de los negocios,
                iniciando como microempresario en el negocio de comida rápida,
                la ganadería y de juegos lotéricos, hasta desarrollarse y
                convertirse en un éxitoso empresario de estas áreas, e
                incursionando en otras como bienes raíces.
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

export default Biografia;
