import Wing from "./wing";

const Page1 = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-8">
      <div className="flex items-center justify-center gap-8">
        <Wing />
        <p className="text-center text-3xl w-96 font-extrabold text-first">
          Nos encargamos de traerte Medula para mantenerte informado
        </p>
        <Wing rotate />
      </div>
      <div className="flex gap-10">
        <div className="w-60 h-32 flex items-center justify-center">
          <img
            alt="unifranz-logo"
            src="./images/unifranz-logo.png"
            className="w-full h-auto"
          />
        </div>
        <div className="w-32 h-32 flex items-center justify-center">
          <img
            alt="praxis-logo"
            src="./images/praxis-logo.png"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="w-60 h-32 flex items-center justify-center">
          <img
            alt="cbn-logo"
            src="./images/cbn-logo.png"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Page1;
