import { twClass } from "@utils/twClass";

export default function Border({ className }) {
  return (
    <div
      className={twClass("border-black border-b", className && `${className}`)}
    ></div>
  );
}
