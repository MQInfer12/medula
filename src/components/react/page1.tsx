import Wing from "./wing";

const Page1 = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <div className="flex items-center justify-center gap-8">
        <Wing />
        <p className="text-center text-3xl w-80 font-extrabold text-first">
          Infórmate y cuida de tu salud en un solo clíck con MEDULA.
        </p>
        <Wing rotate />
      </div>
      <div className="flex gap-10">
        <div className="w-60 h-32 flex items-center justify-center">
          <img src="./images/unifranz-logo.png" className="w-full h-auto" />
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
          <img
            src="./images/praxis-logo.png"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="w-60 h-32 flex items-center justify-center">
          <img src="./images/cbn-logo.png" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Page1;
