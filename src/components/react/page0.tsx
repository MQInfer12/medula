const Page0 = () => {
  return (
    <section className="h-full flex">
      <div className="w-1/2 h-full p-10">
        <div
          className="w-full h-full flex flex-col justify-center p-10"
          style={{
            backgroundImage: `url('./images/dots.png')`,
          }}
        >
          <h2 className="bg-bg font-extrabold inline p-4 text-5xl text-second leading-normal">
            Monitoreamos tu salud todo el tiempo
          </h2>
          <p className="bg-bg w-3/4 px-4 py-4 leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            labore architecto enim quo repellat tenetur impedit saepe! Vel,
            velit obcaecati.
          </p>
          <div className="bg-bg w-fit p-4 py-8">
            <a className="bg-second text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300">
              Get started
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1 h-full flex items-center justify-center">
        <img src="./images/img_0.png" alt="" />
      </div>
    </section>
  );
};

export default Page0;
