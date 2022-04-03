export default function LinkComponent({ children, href }) {
  return (
    <a
      className="cursor-ff1 bg-gradient-to-r from-[#36f9f6] to-[#36f9f6]
    bg-no-repeat [background-position:0_88%]
    [background-size:100%_0.05em]
    motion-safe:transition-all motion-safe:duration-200
    hover:[background-size:100%_100%]
    focus:[background-size:100%_100%]"
      href={href}
    >
      {children}↗
    </a>
  );
}
