import reactLogo from "../../assets/react.svg";

type ReactIconProps = { classLogo: string };

const ReactIcon = ({ classLogo }: ReactIconProps) => {
  return (
    <>
      <a
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 relative z-0"
        title="Ir a la documentación de React"
      >
        <img
          src={reactLogo}
          className={` align-middle transition-[filter] duration-300 drop-shadow-[0_0_2em_#61dafbaa] hover:drop-shadow-[0_0_3em_#61dafbaa] will-change-[filter] animate-[logo-spin_200s_linear_infinite] motion-reduce:animate-none pointer-events-none z-0 ${classLogo}`}
          alt="React logo"
        />
      </a>
    </>
  );
};

export default ReactIcon;
