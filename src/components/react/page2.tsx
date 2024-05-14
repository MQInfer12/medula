const Page2 = () => {
  return (
    <section className="h-full flex">
      <div className="flex-1 h-full flex items-center justify-center">
        <img src="./images/img_1.png" alt="medula-draw-2" />
      </div>
      <div className="w-1/2 h-full p-10">
        <div
          className="w-full h-full flex flex-col justify-center p-10"
          style={{
            backgroundImage: `url('./images/dots.png')`,
          }}
        >
          <h2 className="bg-bg font-extrabold inline p-4 text-5xl text-second leading-normal">
            Nuestro enfoque en la importancia de la salud
          </h2>
          <p className="bg-bg w-3/4 px-4 py-4 leading-8">
            Reconocemos que la salud es el activo más valioso de cualquier
            individuo y organización, y es por eso que nos dedicamos a
            profundizar en su comprensión y promoción. Desde la prevención hasta
            la intervención.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page2;
