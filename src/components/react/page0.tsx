interface Props {
  setPage: (callback: number | ((prev: number) => number)) => void;
}

const Page0 = ({ setPage }: Props) => {
  return (
    <section className="h-full flex md:flex-row flex-col relative pb-32 md:pb-0">
      <div className="flex-1 h-full sm:p-10 p-4">
        <div
          className="h-full flex flex-col justify-center p-10 items-center md:items-start"
          style={{
            backgroundImage: `url('./images/dots.png')`,
          }}
        >
          <h2
            className="bg-bg font-extrabold inline p-4 py-2 xl:py-4 text-3xl xl:text-5xl text-second leading-normal xl:leading-normal text-center md:text-start"
            style={{
              textWrap: "balance",
            }}
          >
            Análisis profundos de la salud de los trabajadores
          </h2>
          <p className="bg-bg w-full sm:w-3/4 px-4 py-2 text-sm text-center md:text-start text-black/65 font-bold leading-loose xl:text-base xl:leading-loose">
            ¡Bienvenido al Estudio Clínico Praxis, una ventana informativa a la
            salud de los empleados de CBN en toda Bolivia! <br /> Sumérgete en
            nuestros análisis detallados y gráficas destacadas que revelan
            aspectos cruciales de la salud de nuestros colaboradores.
          </p>
          <div
            className="bg-bg w-full flex flex-col sm:w-3/4 p-4 py-8"
            style={{
              textWrap: "balance",
            }}
          >
            <button
              onClick={() => setPage(6)}
              className="bg-second text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300"
            >
              Ver gráficas
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 md:h-full flex items-center justify-center md:static absolute bottom-0 h-fit w-[80%] left-1/2 -translate-x-1/2 md:translate-x-0 pointer-events-none">
        <img src="./images/img_0.png" alt="medula-draw-1" />
      </div>
    </section>
  );
};

export default Page0;
