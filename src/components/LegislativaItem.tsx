import { Container, Grid, SimpleGrid } from "@mantine/core";

interface Legislativa {
  link: string;
  image: string;
  title: string;
  initiative: string;
  status: string;
  body: string;
  body2: string;
}
export function LegislativaItem({
  image,
  title,
  initiative,
  status,
  body,
  body2,
}: Legislativa) {
  return (
    <Container id="biografia" my="md" className="mt-20 mb-20">
      <SimpleGrid
        cols={2}
        spacing="md"
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <img className="rounded-lg" src={image} />

        <Grid gutter="md">
          <Grid.Col>
            <h2 className="text-2xl font-black pb-2 uppercase text-green-950">
              {title}
            </h2>
            <h2 className="text-md font-medium mt-6">
              Iniciativa:<span> {initiative}</span>
            </h2>
            <h2 className="text-md font-medium mb-6">
              Estado: <span> {status}</span>
            </h2>
            <p className="text-base leading-8 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-500 first-letter:mr-3 first-letter:float-left mb-8">
              {body}{" "}
            </p>
            <p className="text-base leading-8 mb-8">{body2}</p>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}
