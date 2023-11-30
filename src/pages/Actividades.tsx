import { PageHeader } from "../components/PageHeader";

const Actividades = () => {
  return (
    <>
      <PageHeader title="Actividades" image="" />
      <div className="container px-5 py-2 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center ">
          <img src="/web-dev.png" />
        </div>
      </div>
      <div className="flex justify-center">
        <a
          href="/"
          className="flex justify-center w-72 mb-6 rounded-3xl px-5 py-2.5 text-sm font-bold bg-greenEduard text-gray-100 border-2 border-lime-100/50 shadow-md hover:bg-green-900 hover:text-gray-100 "
        >
          Ir a la página de inicio
        </a>
      </div>
    </>
  );
};

export default Actividades;
