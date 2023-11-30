import { motion } from "framer-motion";

const BannerSenador = () => {
  return (
    <div className="relative bg-green-100 mx-4">
      <div className="relative lg:px-52  md:pt-2 ">
        <div className="px-4 bg-[#0c9d44ed] rounded-2xl pt-5 h- mx-auto sm:px-0 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="flex  flex-col items-center justify-between w-full lg:flex-row">
            <div className="mb-16 sm:p-8 lg:ml-10 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl justify-center text-center">
                <motion.div
                // animate={{
                //   scale: [0.5, 1, 2, 0.5],
                //   rotate: [10, 20, 0],
                // }}
                // transition={{
                //   duration: 5,

                //   times: [0.2, 0.8, 1, 0.8, 0.4],
                //   repeat: Infinity,
                //   repeatDelay: 0,
                // }}
                >
                  <img className="w-92 mb-3" src="logo-eduard.png" alt="" />
                </motion.div>
                <div>
                  <motion.div
                    className="font-extrabold text-center text-white text-5xl sx sx:text-5xl md:text-6xl xl:text-6xl "
                    initial="visible"
                    whileInView="visible"
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: 1 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    El{" "}
                    <span className="inline-block text-7xl font-black lg:text-6xl bg-clip-text text-transparent  bg-gradient-to-br from-green-950 from-30% via-lime-950 via-50% to-green-950 to-100%">
                      SENADOR
                    </span>{" "}
                    que La Romana necesita
                  </motion.div>
                  <p className="inline-block py-px p-4 text-xs font-semibold tracking-wider uppercase bg-green-900 text-green-100 rounded-full">
                    VOTA POR EDUARD SENADOR 2024 - 2028
                  </p>
                </div>

                {/* <p className="text-white  md:text-base">"J"</p> */}
              </div>
            </div>
            <div className="flex items-center justify-center lg:w-1/4">
              <div className=" -ml-16 lg:-ml-32">
                <img
                  className="object-cover   inset-0 "
                  src="/foto-eduard.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSenador;
