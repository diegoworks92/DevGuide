import { useToc } from "./useToc";
import { useState, useEffect, useRef } from "react";

export function TableOfContents() {
  // 1. Hooks: siempre invocados en el mismo orden
  const { entries } = useToc();
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // 2. Efecto: se ejecuta siempre, pero internamente se sale si no hay entradas
  useEffect(() => {
    if (entries.length === 0) {
      // si no hay nada que observar, no arrancamos el observer
      setActiveId("");
      return;
    }

    // marcamos primero
    setActiveId(entries[0].id);
    const navHeight = 64;
    observerRef.current = new IntersectionObserver(
      (obsEntries) => {
        obsEntries.forEach((ent) => {
          if (ent.isIntersecting) {
            setActiveId(ent.target.id);
          }
        });
      },
      {
        rootMargin: `-${navHeight}px 0px -50% 0px`,
        threshold: 0,
      }
    );

    // comenzamos a observar
    entries.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current!.observe(el);
    });

    // listener de scroll-end
    const onScrollEnd = () => {
      const bottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 2;
      if (bottom) {
        setActiveId(entries[entries.length - 1].id);
      }
    };
    window.addEventListener("scroll", onScrollEnd);

    // cleanup
    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", onScrollEnd);
    };
  }, [entries]);

  // 3. Render: si no hay entradas, no renderizamos nada
  if (entries.length === 0) return null;

  return (
    <nav className="fixed pt-10 space-y-1 h-max pl-6 border-l ">
      <h1 className="mb-4 text-xl text-white font-bold">En esta página</h1>
      <div className="flex flex-col -ml-0">
        {entries.map(({ id, heading }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-sm hover:text-secondary transition mb-8 pl-[24px] -ml-[26.5px] border-l-4 ${
              activeId === id
                ? "text-primary font-semibold border-l-primary"
                : "text-zinc-400 border-l-transparent"
            }`}
          >
            {heading}
          </a>
        ))}
      </div>
    </nav>
  );
}
