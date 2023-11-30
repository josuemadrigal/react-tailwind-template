export const Bienvenida = () => {
  return (
    <section className="text-gray-200 body-font bg-[#021a0b]">
      <div className="container px-5 py-24 mx-auto">
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-100 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <h1 className="text-2xl font-extrabold uppercase mb-6">
            {" "}
            Bienvenidos/as
          </h1>
          <p className="leading-relaxed text-lg">
            Bienvenidos y bienvenidas a este portal web oficial de Eduard
            Espiritusanto, Diputado por la provincia de La Romana, el cual
            representa un paso importante hacia la transparencia, la
            participación ciudadana y la modernización de nuestra labor
            legislativa, y que ha sido creado para dar un mayor acceso a los
            munícipes a nuestra labor, a conocer sobre el Congreso Nacional y
            sus funciones.
          </p>

          <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
            HOLDEN CAULFIELD
          </h2>
          <div className="flex justify-center">
            <a
              href="/bienvendia"
              className="flex justify-center w-72 mt-4 rounded-3xl px-5 py-2.5 text-sm font-bold bg-greenEduard text-gray-100 border-2 border-lime-100/50 shadow-md hover:bg-green-900 hover:text-gray-100 "
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
