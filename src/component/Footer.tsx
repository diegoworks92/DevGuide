const Footer = () => {
  return (
    <>
      <hr className="border-slate mb-4" />
      <div className="flex flex-col justify-center items-center text-sm sm:text-base">
        <p className="mb-4 text-gray-300 leading-relaxed flex items-center gap-2">
          Visita mi portafolio en{" "}
          <a
            href="https://www.diegoworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary font-bold"
          >
            www.diegoworks.com
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
