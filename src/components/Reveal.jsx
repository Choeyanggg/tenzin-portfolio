import { useReveal } from "../hooks/useReveal";

/** Wraps children and fades/slides them up the first time they enter the viewport. */
const Reveal = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const { ref, visible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
