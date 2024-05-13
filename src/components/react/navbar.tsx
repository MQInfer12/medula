interface Props {
  setPage: (callback: number | ((prev: number) => number)) => void;
}

const Navbar = ({ setPage }: Props) => {
  return (
    <header className="h-24 flex items-center justify-between px-20">
      <div className="h-full flex items-center gap-4">
        <img
          className="h-[70%] w-auto"
          src="./images/medula-logo.png"
          alt="logo"
        />
        <b className="text-second">Medula</b>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <button
              onClick={() => setPage(0)}
              className="bg-first text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 text-sm"
            >
              Inicio
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage(2)}
              className="bg-second text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 text-sm"
            >
              Colaboradores
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage(4)}
              className="bg-third text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 text-sm"
            >
              ¿Qué somos?
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage(6)}
              className="bg-fourth text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 text-sm"
            >
              Gráficas
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
