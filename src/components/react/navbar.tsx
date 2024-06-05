import IconMenu from "../icons/iconMenu";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: (callback: number | ((prev: number) => number)) => void;
}

const Navbar = ({ open, setOpen, setPage }: Props) => {
  const changePage = (num: number) => {
    setPage(num);
    setOpen(false);
  };

  return (
    <header className="h-24 flex items-center justify-between relative z-20 isolate">
      <div className="h-full flex items-center gap-4 pl-10">
        <img
          className="h-[70%] w-auto"
          src="./images/medula-logo.png"
          alt="medula-logo"
        />
        <h1 className="text-second text-xl font-extrabold">Medula</h1>
      </div>
      <div className="pr-10 flex items-center">
        <button onClick={() => setOpen(!open)} className="md:hidden">
          <div className="text-second w-8 aspect-square">
            <IconMenu open={open} />
          </div>
        </button>
        <input
          checked={open}
          onChange={() => {}}
          id="hamburger"
          type="checkbox"
          className="peer hidden"
        />
        <nav className="max-md:hidden max-md:absolute max-md:top-full max-md:left-0 max-md:h-10 bg-bg peer-checked:block max-md:w-full overflow-x-auto">
          <ul className="flex gap-4 max-md:px-4">
            <li>
              <button
                onClick={() => changePage(0)}
                className="bg-first text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 text-sm text-nowrap"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => changePage(2)}
                className="bg-second text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 text-sm text-nowrap"
              >
                Colaboradores
              </button>
            </li>
            <li>
              <button
                onClick={() => changePage(4)}
                className="bg-third text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 text-sm text-nowrap"
              >
                ¿Qué somos?
              </button>
            </li>
            <li>
              <button
                onClick={() => changePage(6)}
                className="bg-fourth text-white px-6 py-[2px] rounded-full cursor-pointer hover:opacity-80 transition-all duration-300 text-sm text-nowrap"
              >
                Gráficas
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
