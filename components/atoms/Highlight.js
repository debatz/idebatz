export default function Highlight({ children }) {
  return (
    <span
      className="bg-gradient-to-r from-[#36f9f6] to-[#36f9f6]
    bg-no-repeat [background-position:0_88%]
    [background-size:100%_0.2em]
    motion-safe:transition-all motion-safe:duration-200"
    >
      {children}
    </span>
  );
}
